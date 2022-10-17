module.exports = {
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    heading: `"Fira Mono", monospace`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      primary: "#19062b",
      secondary: "#0bb883",
      secondaryHover: "#53edbe",
    },
  },
  styles: {
    global: (props) => ({
      "html, body": {
        bgColor: props.colorMode === "light" ? "white" : "brand.primary",
      },
    }),
  },
};
