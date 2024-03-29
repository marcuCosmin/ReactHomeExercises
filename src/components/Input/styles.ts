import styled from "styled-components";

export const StyledInput = styled.input`
  width: 50%;
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledError = styled.div`
  color: red;
  font-size: 12px;
`;
