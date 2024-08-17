import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: white;
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
    background-color: rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    cursor: not-allowed;
  }
`;

type ButtonProps = {
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
