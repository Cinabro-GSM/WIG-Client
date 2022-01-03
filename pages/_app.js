import Footer from "../src/components/Footer";
import Top from "../src/components/Top";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Top />
        <Component {...pageProps} />
        <GlobalStyle />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
