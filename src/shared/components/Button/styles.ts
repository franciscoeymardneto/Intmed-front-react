import styled, { css } from "styled-components";
import { StyledButtonProps } from "./types";

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.secondary};
  margin: 8px 4px;
  padding: 10px 8px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  min-width: 64px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    cursor: not-allowed;
  }

  ${({ $variant, theme }) =>
    $variant === 'basic' &&
    css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.primary};
        &:disabled {
            background-color: rgba(0, 0, 0, 0.12);
        }
    `}
`;

StyledButton.defaultProps = {
    $variant: 'basic',
};