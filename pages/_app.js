import '../styles/globals.css'
import "@fontsource/inter/400.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/700.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import { Flex } from "@chakra-ui/react";
import { Header, Footer } from "../shared/components";
import theme from "../shared/theme";

const extendedTheme = extendTheme(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Header />
      <Flex as="main" flex={1} minHeight={"calc(100vh - 60px - 60px)"}>
        <Component {...pageProps} />
      </Flex>
      <Footer />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
