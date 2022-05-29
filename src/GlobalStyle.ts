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
  background: linear-gradient(rgba(255, 255, 255, 0.4),
              rgba(255, 255, 255, 0.4),
              rgba(255, 255, 255, 0.4),
              rgba(255, 255, 255, 0.4)),
              url("https://images.unsplash.com/photo-1638613067237-b1127ef06c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80") top left / cover no-repeat;
              
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
