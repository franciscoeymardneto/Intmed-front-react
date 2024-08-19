import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#49B4BB',
    secondary: '#FF6F61',
    background: '#F4F4F9',
    text: '#333333',
    border: '#E0E0E0',
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
    primary: '#49B4BB',
    secondary: '#FF6F61',
    background: '#181818',
    text: '#FFFFFF',
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
