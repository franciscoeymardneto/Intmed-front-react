import styled from "styled-components";
import { StyledCheckboxProps } from "./types";

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  opacity: 0;
  width: 1px;
`;

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${({$checked, theme}) => ($checked ? theme.colors.primary : theme.colors.secondary)};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid ${({theme}) =>theme.colors.border};
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 5px ${({theme}) =>theme.colors.primary_blush}
  }

  ${HiddenCheckbox}:checked + & {
    background: ${({theme}) =>theme.colors.primary};
    border-color: ${({theme}) =>theme.colors.primary};
  }

`;

export const CheckboxContainer = styled.div`
  display: flex;
  vertical-align: middle;
  margin-right: 10px;
  position: relative;
`;

export const CheckboxIconContainer = styled.div`
  position: absolute;
  left: 1px;
  top: 1px;
  color:  ${({theme}) => theme.colors.secondary};
  
`;

export const CheckBoxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 0.5rem;
    color: ${({theme}) => theme.colors.label_text};
`