import styled from 'styled-components';
import ErrorSpan from './ErrorSpan';
import Label from './Label';
import React from 'react';

type InputComponentProps = {
    $hasError?: boolean;
  } & React.InputHTMLAttributes<HTMLInputElement>;

const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  padding: 10px 8px;
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
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

type InputProps = {
    label: string,
    errorMessage?: string
} & React.InputHTMLAttributes<HTMLInputElement>


const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, errorMessage, ...props }, ref): JSX.Element => (
        <InputWrapper>
            <Label id={props.name}>{label}</Label>
            <InputComponent 
                {...props} 
                ref={ref} 
                aria-labelledby={props.name} 
                $hasError={!!errorMessage} 
            />
            
            <ErrorSpan hidden={!errorMessage}>{errorMessage}</ErrorSpan>
        </InputWrapper>
    )
);

export default Input;
