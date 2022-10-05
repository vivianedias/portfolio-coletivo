import '../styles/globals.css'
import "@fontsource/inter";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";

import { Header, Footer } from "../shared/components";
import theme from "../shared/theme";

const extendedTheme = extendTheme(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
