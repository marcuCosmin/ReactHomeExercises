import { type FC } from "react";

import { Input } from "../Input/Input";

import { useSearch, useUserLimit } from "./hooks";

import { SearchWrapper } from "./styles";

export const Search: FC = () => {
  const { usersLimit, usersLimitError, onUsersLimitChange } = useUserLimit();
  const parsedUsersLimit = parseInt(usersLimit);

  const { searchValue, searchError, onSearch } = useSearch(parsedUsersLimit);

  const searchIsDisabled = Boolean(usersLimitError || !usersLimit);

  return (
    <SearchWrapper>
      <Input
        type="number"
        label="Number of users to fetch"
        value={usersLimit}
        onChange={onUsersLimitChange}
        error={usersLimitError}
      />

      <Input
        error={searchError}
        label="Search users"
        value={searchValue}
        onChange={onSearch}
        disabled={searchIsDisabled}
      />
    </SearchWrapper>
  );
};
