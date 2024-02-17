import { type InputHTMLAttributes, type FC, type ReactNode } from "react";

import { StyledInput, StyledLabel, StyledError } from "./styles";

// The tasks specify to use the existing Input to do something, but the initial component
// was not accepting any props, so attaching value & onChange props was impossible, also couldn't attach a ref to the component
// so this component's value & onChange weren't managable in React

interface Props
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "disabled" | "type" | "value" | "onChange"
  > {
  label?: ReactNode;
  error?: string;
}

export const Input: FC<Props> = ({ label, error, ...props }) => {
  if (label) {
    return (
      <StyledLabel>
        {label}
        <StyledInput {...props} />
        {error && <StyledError>{error}</StyledError>}
      </StyledLabel>
    );
  }

  return (
    <div>
      <StyledInput />
      {error && <StyledError>{error}</StyledError>}
    </div>
  );
};
