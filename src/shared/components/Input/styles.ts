import styled from "styled-components";
import { InputComponentProps } from "./types";

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  padding: 10px 8px;
  font-size: 16px;

  color: ${({theme}) => theme.colors.text};

  border: 1px solid ${({$hasError, theme}) => $hasError ? theme.colors.danger : theme.colors.border};
  border-radius: 5px;
  background-color: transparent;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid ${({$hasError, theme}) => $hasError ? theme.colors.danger : theme.colors.border};
  }

  &::placeholder {
    color: ${({theme}) => theme.colors.placeholder};
    font-size: 16px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;