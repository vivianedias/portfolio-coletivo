import {
  Box,
  Container,
  Stack,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import scrollIntoView from "../utils/scrollIntoView";

function FooterLinks({ id, children }) {
  return (
    <Button
      variant={"unstyled"}
      _hover={{
        color: useColorModeValue("purple.700", "white"),
        textDecoration: "underline",
      }}
      color={useColorModeValue("gray.900", "gray.200")}
      onClick={() => scrollIntoView(id)}
      textTransform={"lowercase"}
      fontWeight={500}
    >
      {children}
    </Button>
  );
}

export default function SmallWithNavigation() {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();
  return (
    <Box
      bg={useColorModeValue("gray.50", "brand.primary")}
      borderTop={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
      mt={10}
      fontFamily={"heading"}
    >
      <Container
        as={Stack}
        maxWidth={"7xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack
          direction={"row"}
          spacing={{ base: 4, md: 6 }}
          flexWrap={{ base: "wrap", md: "initial" }}
          maxW={{ base: "50%", md: "100%" }}
          justify={{ base: "center", md: "flex-start" }}
        >
          <FooterLinks id="#hero">{t("home")}</FooterLinks>
          <FooterLinks id="#about">{t("about")}</FooterLinks>
          <FooterLinks id="#articles">{t("articles")}</FooterLinks>
          <FooterLinks id="#projects">{t("projects")}</FooterLinks>
          <FooterLinks id="#contact">{t("contact")}</FooterLinks>
        </Stack>
        <Text
          color={useColorModeValue("gray.600", "gray.200")}
          textAlign={{ base: "left", md: "center" }}
        >
          © {year} {t("rights")}
        </Text>
      </Container>
    </Box>
  );
}
