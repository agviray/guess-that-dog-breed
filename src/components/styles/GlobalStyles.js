import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  /* h1, h2 {

  } */

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-indent: 0;
  }

  a {
    color: #333333;
    text-decoration: none;
  }

  p {
    font-size: 16px;
    line-height: 1.55;
  }
`;

export default GlobalStyles;
