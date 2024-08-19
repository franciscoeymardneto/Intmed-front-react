import ErrorSpan from '../ErrorSpan';
import Label from '../Label';
import React from 'react';
import { InputComponent, InputWrapper } from './styles';


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
