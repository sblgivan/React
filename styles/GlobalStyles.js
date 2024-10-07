import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #1a237e;
    --secondary-color: #0091ea;
    --accent-color: #00c853;
    --background-dark: #121212;
    --background-light: #f5f5f5;
    --text-primary: #ffffff;
    --text-secondary: #b0bec5;
    --error-color: #ff5252;
    --success-color: #69f0ae;
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Inter', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-primary);
    background: var(--background-dark);
    color: var(--text-primary);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    font-weight: 600;
  }
`;
