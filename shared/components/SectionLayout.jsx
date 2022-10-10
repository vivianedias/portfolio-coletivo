import { VStack, Container } from "@chakra-ui/react";

export default function SectionLayout({ children, minHeight, id, ...props }) {
  return (
    <Container maxWidth={"7xl"} px={10} as="section" id={id}>
      <VStack
        spacing={10}
        alignItems={"flex-start"}
        justifyContent={"center"}
        minHeight={minHeight}
        {...props}
      >
        {children}
      </VStack>
    </Container>
  );
}

SectionLayout.defaultProps = {
  minHeight: "100vh",
};
