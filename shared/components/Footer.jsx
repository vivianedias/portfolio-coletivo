import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";

export default function SmallWithNavigation() {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <NextLink href={"/"} passHref>
            <Link>{t("home")}</Link>
          </NextLink>
          <NextLink href={"#about"} passHref>
            <Link>{t("about")}</Link>
          </NextLink>
          <NextLink href={"#articles"} passHref>
            <Link>{t("articles")}</Link>
          </NextLink>
          <NextLink href={"#projects"} passHref>
            <Link>{t("projects")}</Link>
          </NextLink>
          <NextLink href={"#contact"} passHref>
            <Link>{t("contact")}</Link>
          </NextLink>
        </Stack>
        <Text>
          © {year} {t("rights")}
        </Text>
      </Container>
    </Box>
  );
}
