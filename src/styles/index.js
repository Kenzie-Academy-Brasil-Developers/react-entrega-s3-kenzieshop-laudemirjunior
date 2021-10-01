import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
  }
  .App {
    width: 100vw;
    min-height: 100vh;
    background-color: #e3e3e3;
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
      margin-left: 10px;
      color: blue;
  
}
`;

export default GlobalStyle;
