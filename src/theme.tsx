import { createGlobalStyle } from 'styled-components';

export const theme = {
    CardTheme: {
        border: '1px solid #ccc',
        boxShadow: '0 0 40px -10px rgba(0, 0, 0, 0.25)',
        color: 'white',
    },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`;
