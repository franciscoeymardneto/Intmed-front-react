import styled from 'styled-components';

const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  padding: 16px 8px;
  font-size: 16px;

  color: var(--text-color);

  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: transparent;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid var(--primary-color);
  }

  &::placeholder {
    color: #999;
    font-size: 16px;
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: -8px;
    font-size: 12px;
    color: var(--border-color);
    background-color: white;
    padding-left: 2px;
    padding-right: 4px;
  }
`;

const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  color: var(--border-color);
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 8px;
  top: 15px;
  transition: 0.2s ease all;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

type InputComponent = {
    label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const InputComponent: React.FC<InputComponent> = ({label, ...props}): JSX.Element => (
  <InputWrapper>
    <Input {...props} placeholder=''/>
    <Label>{label}</Label>
  </InputWrapper>
);

export default InputComponent;
