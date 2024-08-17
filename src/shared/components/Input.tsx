import styled from 'styled-components';
import ErrorSpan from './ErrorSpan';
import Label from './Label';
import React from 'react';

type InputProps = {
    $hasError?: boolean; // Optional, used only for styling
  } & React.InputHTMLAttributes<HTMLInputElement>;

const Input = styled.input<InputProps>`
  width: 100%;
  padding: 16px 8px;
  font-size: 16px;

  color: var(--text-color);

  border: 1px solid ${props => props.$hasError ? ' var(--error)' : ' var(--border-color)'};
  border-radius: 5px;
  background-color: transparent;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid ${props => props.$hasError ? ' var(--error)' : ' var(--border-color)'};;
  }

  &::placeholder {
    color: #999;
    font-size: 16px;
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: -8px;
    font-size: 12px;
    color: ${props => props.$hasError ? ' var(--error)' : ' var(--border-color)'};;
    background-color: white;
    padding-left: 2px;
    padding-right: 4px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

type InputComponentProps = {
    label: string,
    errorMessage?: string
} & React.InputHTMLAttributes<HTMLInputElement>


const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>(
    ({ label, errorMessage, ...props }, ref): JSX.Element => (
        <InputWrapper>
            <Input ref={ref} $hasError={!!errorMessage} {...props} placeholder='' />
            <Label>{label}</Label>
            <ErrorSpan hidden={!errorMessage}>{errorMessage}</ErrorSpan>
        </InputWrapper>
    )
);

export default InputComponent;
