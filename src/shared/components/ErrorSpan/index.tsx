import styled from "styled-components";

const ErrorSpan = styled.span`
  color: ${({theme}) => theme.colors.danger};
  font-size:  ${({theme}) => theme.fontSizes.small};
  position: absolute;
  bottom: -20px;
  left: 5px;
`;

export default ErrorSpan