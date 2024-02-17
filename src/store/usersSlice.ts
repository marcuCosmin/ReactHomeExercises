import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
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

interface JSONResponse {
  results: User[];
}

export const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (numberOfResults: number) => {
    const response = await fetch(`${baseAPIURL}?results=${numberOfResults}`);

    const jsonResponse: JSONResponse = await response.json();

    return jsonResponse.results;
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
      state.error = "";
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;
