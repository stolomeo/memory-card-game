import GlobalStyle from "./theme/GlobalStyle";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
