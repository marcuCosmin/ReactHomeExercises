import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface User {
  image: string;
  firstName: string;
  lastName: string;
}

interface UserState {
  error: string;
  loading: boolean;
  users: User[];
}

const initialState: UserState = {
  error: "",
  loading: false,
  users: [],
};

const baseAPIURL = "https://randomuser.me/api";

interface APIResultUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
  };
}

interface JSONResponse {
  results?: APIResultUser[];
  error?: string;
}

interface ThunkArgs {
  numberOfResults: number;
  searchQuery: string;
}

const filterUsers = (users: User[], searchQuery: string) => {
  const lowerCasedSearchQuery = searchQuery.toLowerCase();

  const filteredUsers = users.filter(({ firstName, lastName }) => {
    const firstNameMatched = firstName
      .toLowerCase()
      .includes(lowerCasedSearchQuery);
    const lastNameMatched = lastName
      .toLowerCase()
      .includes(lowerCasedSearchQuery);

    return firstNameMatched || lastNameMatched;
  });

  return filteredUsers;
};

export const fetchUsers = createAsyncThunk(
  "users/fetch",
  async ({ numberOfResults, searchQuery }: ThunkArgs) => {
    // based on the API's docs we could have used multiple queries to fetch whatever data is needed, but the tasks specifies to use this exact url with the below query
    const response = await fetch(`${baseAPIURL}?results=${numberOfResults}`);

    const jsonResponse: JSONResponse = await response.json();

    if (jsonResponse.error) {
      return {
        users: [],
        error: jsonResponse.error,
      };
    }

    if (!jsonResponse.results?.length) {
      return {
        users: [],
      };
    }

    const users: User[] = jsonResponse.results.map(({ name, picture }) => ({
      firstName: name.first,
      lastName: name.last,
      image: picture.large,
    }));

    const usersMatchingSearchQuery = filterUsers(users, searchQuery);

    console.log(usersMatchingSearchQuery);

    return {
      users: usersMatchingSearchQuery,
    };
  }
);

const usersSlice = createSlice({
  name: "users",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = action.payload?.error || "";
      state.users = action.payload?.users;
    });
  },
});

export default usersSlice.reducer;
