import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  div {
    display: flex;
  }
`;

export default GlobalStyle;
