import styled from "styled-components";

const Label = styled.label`
  color: ${({theme}) => theme.colors.label_text};
  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: normal;

`;

export default Label