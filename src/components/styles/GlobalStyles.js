import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    background-color: #fcf4ec;
    color: #303030;

    @media screen and (min-width: 600px) {
      font-size: 18px;
    }

    @media screen and (min-width: 800px) {
      font-size: 20px;
    }
  }

  h1, h2 {
    font-family: 'Shrikhand', sans-serif;
    letter-spacing: 2px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-indent: 0;
  }

  a {
    color: #303030;
    text-decoration: none;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export default GlobalStyles;
