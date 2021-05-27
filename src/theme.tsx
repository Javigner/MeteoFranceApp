import { createGlobalStyle } from 'styled-components';

export const theme = {
    CardTheme: {
        border: '1px solid #ccc',
        boxShadow: '0 0 40px -10px rgba(0, 0, 0, 0.25)',
        color: 'white',
    },
};

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

    * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
      }

      body {
        font-family: 'Poppins', sans-serif;
        background: #fefefe;
      }

      html {
          font-family: 'Noto Sans JP', sans-serif;
      }

      a {
          text-decoration: none;
      }

`;
