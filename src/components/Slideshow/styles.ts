import styled, { keyframes } from "styled-components";

interface SlideshowWrapperProps {
  $verticalCentering?: boolean;
}

export const SlideshowWrapper = styled.div<SlideshowWrapperProps>`
  margin-top: 5rem;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  width: 50%;
  padding: 10px;
  border-radius: 0.35rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $verticalCentering }) =>
    $verticalCentering ? "center" : "space-between"};
  align-items: center;
  height: 300px;
`;

const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 6px solid #ecf0f1;
  border-radius: 50%;
  border-top: ${({ theme }) => `6px solid ${theme.colors.secondary}`};
  width: 30px;
  height: 30px;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
