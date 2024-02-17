import { type FC } from "react";

import { type User } from "../../store/usersSlice";

import { StyledFullName, StyledImage, UserCardWrapper } from "./styles";

export const UserCard: FC<User> = ({ lastName, firstName, image }) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <UserCardWrapper>
      <StyledImage alt={fullName} src={image} />
      <StyledFullName>{fullName}</StyledFullName>
    </UserCardWrapper>
  );
};
