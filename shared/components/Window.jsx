import { Box, HStack } from "@chakra-ui/react";

function Circle({ color }) {
  return <Box bgColor={color} rounded={"full"} boxSize={{ base: 2, md: 3 }} />;
}

export default function Window({ children }) {
  return (
    <Box
      border={"2px solid"}
      borderColor={"purple.700"}
      minWidth={{ base: "285px", xl: "500px" }}
      minHeight={{ base: "170px", xl: "273px" }}
      position={"absolute"}
      top={"20px"}
    >
      <HStack
        height={{ base: 4, md: 7 }}
        widht={"100%"}
        spacing={2}
        px={2}
        borderBottom={"2px solid"}
        borderColor={"purple.700"}
        bgColor={"gray.900"}
      >
        <Circle color={"red"} />
        <Circle color={"yellow"} />
        <Circle color={"green"} />
      </HStack>
      {children}
    </Box>
  );
}
