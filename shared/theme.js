module.exports = {
  config: {
    initialColorMode: "system",
  },
  fonts: {
    heading: `"Fira Mono", monospace`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      primary: "#19062b",
      secondary: "#0bb883",
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
