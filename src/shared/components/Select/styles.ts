import { StylesConfig } from "react-select";
import styled from "styled-components";
import { DefaultTheme } from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  margin-bottom: 1.2rem;
`;

export const SelectStyles = ($hasError: boolean, theme: DefaultTheme): StylesConfig => ({
    control: (provided, state) => ({
        ...provided,
        width: '100%',
        padding: '10px 8px',
        fontSize: theme.fontSizes.medium,
        cursor: state.isDisabled ? 'not-allowed' : 'pointer',
        border: `1px solid ${$hasError ? theme.colors.danger : theme.colors.border}`,
        borderRadius: '5px',
        backgroundColor: 'transparent',
        boxSizing: 'border-box',
        opacity: state.isDisabled ? 0.5 : 1,
        boxShadow: `0 0 0 1px ${theme.colors.border}`,
        ":hover": {
            borderColor: `${$hasError ? theme.colors.danger : theme.colors.border}`
        },
        borderColor: `${$hasError ? theme.colors.danger : theme.colors.border}`,

    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: theme.colors.background,
    }),
    input: (provided) => ({
        ...provided,
        color: theme.colors.text,
    }),
    singleValue: (provided) => ({
        ...provided,
        color: theme.colors.text,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        cursor: state.isDisabled ? 'not-allowed' : 'pointer',
        ":active": {
            opacity: 0.5
        },
        ":hover": {
            opacity: 0.7
        },
        opacity: state.isDisabled ? 0.5 : 1
    }
    ),
    placeholder: (provided) => ({
        ...provided,
        color: theme.colors.placeholder,
        fontSize: theme.fontSizes.medium,
    }),
})