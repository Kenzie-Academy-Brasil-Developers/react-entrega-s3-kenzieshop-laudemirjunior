import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
  }
  body {
    width: 100vw;
    min-height: 100vh;
}
button {
    height: 30px;
    border-radius: 10px;
    background-color: lightblue;
    font-weight: bold;
    cursor: pointer;
    padding: 0 10px;
    &:hover {
      filter: saturate(3);
    }
}
    h2 {
      color: blue;
  
}
`;

export default GlobalStyle;
