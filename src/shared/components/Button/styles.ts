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
    background-color: ${({theme}) => theme.colors.primary_600};

    &:disabled {
        background-color: ${({theme}) => theme.colors.background};
        opacity: 0.8;
    }
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    cursor: not-allowed;
  }

  ${({ $variant, theme }) =>
    $variant === 'basic' &&
    css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.primary};
        &:active {
            opacity: 0.5;
        }
        &:disabled {
            background-color: rgba(0, 0, 0, 0.12);
            color: rgba(0, 0, 0, 0.26);
            box-shadow: none;
            cursor: not-allowed;
        }
    `}
`;

StyledButton.defaultProps = {
    $variant: 'basic',
};