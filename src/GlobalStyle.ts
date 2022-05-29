import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  font-weight: normal;
  font-family: 'Nunito', sans-serif;
  background-color: #eee;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;
export default GlobalStyle;
