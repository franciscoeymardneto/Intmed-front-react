import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#49b4bb',
    primary_200: '#63bcc2',
    primary_300: '#79c5ca',
    primary_400: '#8ecdd1',
    primary_500: '#a2d5d9',
    primary_600: '#b5dee0',
    secondary: '#ffffff',
    background: '#ffffff',
    text: '#444444',
    label_text: '#A8A8A8',
    placeholder: '#999',
    border: '#A8A8A8',
    success: '#4CAF50',
    warning: '#FFC107',
    danger: '#F44336',
    info: '#2196F3',
  },
  fonts: {
    main: "'Roboto', sans-serif",
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  spacing: (factor: number) => `${factor * 8}px`,
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#49b4bb',
    primary_200: '#63bcc2',
    primary_300: '#79c5ca',
    primary_400: '#8ecdd1',
    primary_500: '#a2d5d9',
    primary_600: '#b5dee0',
    secondary: '#ffffff',
    background: '#181818',
    text: '#FFFFFF',
    label_text: '#A8A8A8',
    placeholder: '#999',
    border: '#333333',
    success: '#4CAF50',
    warning: '#FFC107',
    danger: '#F44336',
    info: '#2196F3',
  },
  fonts: {
    main: "'Roboto', sans-serif",
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  spacing: (factor: number) => `${factor * 8}px`,
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
};

export default { lightTheme, darkTheme };
