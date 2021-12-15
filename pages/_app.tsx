import Footer from "../src/components/Footer";
import Top from "../src/components/Top";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import type { AppProps } from 'next/app'
import { NextPage } from 'next';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`


const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Top />
        <Component {...pageProps} />
        <GlobalStyle />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp