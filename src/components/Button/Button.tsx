import type { FC, ReactNode } from "react";

import { StyledButton } from "./styles";

import type { ButtonVariants } from "./types";

interface Props {
  children?: ReactNode;
  ariaLabel: string;
  variant?: ButtonVariants;
}

export const Button: FC<Props> = ({ children, ariaLabel, variant }) => (
  <StyledButton aria-label={ariaLabel} variant={variant}>
    {children}
  </StyledButton>
);
