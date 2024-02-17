import type { FC, ReactNode } from "react";

import { StyledButton } from "./styles";

import type { ButtonVariants } from "./types";

interface Props {
  children?: ReactNode;
  ariaLabel: string;
  variant?: ButtonVariants;
  onClick?: () => void;
}

export const Button: FC<Props> = ({
  children,
  ariaLabel,
  variant,
  onClick,
}) => (
  <StyledButton $variant={variant} aria-label={ariaLabel} onClick={onClick}>
    {children}
  </StyledButton>
);
