import App from "next/app";
import reset from "styled-reset";
import { withRouter } from "next/router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme, baseStyles } from "../util/styles";
import { Navigation } from "../components/Navigation";

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${baseStyles}
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation currentRoute={router.route} />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default withRouter(MyApp);
