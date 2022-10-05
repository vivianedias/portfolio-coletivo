import '../styles/globals.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../shared/theme";

const extendedTheme = extendTheme(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
