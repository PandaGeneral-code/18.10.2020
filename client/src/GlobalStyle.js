import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    min-height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
