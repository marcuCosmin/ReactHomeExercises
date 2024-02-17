import { useState, useCallback, type ChangeEventHandler } from "react";

import { useDispatch, useSelector } from "../../store/hooks";
import { fetchUsers } from "../../store/usersSlice";

import debounce from "lodash.debounce";

export const useUserLimit = () => {
  const [usersLimit, setUsersLimit] = useState("");
  const [usersLimitError, setUserLimitError] = useState("");

  const validateUserLimit = (value: string) => {
    const limit = parseInt(value);

    if (limit < 1) {
      return "The number of the fetched users can not be lower than 1";
    }
  };

  const onUsersLimitChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const newLimit = target.value;

    setUsersLimit(newLimit);

    const error = validateUserLimit(newLimit);

    if (error) {
      setUserLimitError(error);
      return;
    }

    setUserLimitError("");
  };

  return { usersLimit, usersLimitError, onUsersLimitChange };
};

export const useSearch = (usersLimit: number) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const [searchValue, setSearchValue] = useState("");

  const debouncedFetchUsers = useCallback(
    debounce(
      (searchQuery) =>
        dispatch(fetchUsers({ numberOfResults: usersLimit, searchQuery })),
      300
    ),
    [usersLimit]
  );

  // intentionately avoided validation, as this is not a requirement

  const onSearch: ChangeEventHandler<HTMLInputElement> = async ({ target }) => {
    const newSearchValue = target.value;

    setSearchValue(newSearchValue);

    await debouncedFetchUsers(newSearchValue);
  };

  return { searchValue, searchError: error, onSearch };
};
