import {
  Stack,
  VStack,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { SectionLayout } from "../components";

function CallToAction({ link, href, title }) {
  return (
    <VStack spacing={2} align={"flex-start"}>
      <Text
        fontSize={"sm"}
        textTransform={"uppercase"}
        letterSpacing={-1}
        fontWeight={500}
      >
        {title}
      </Text>
      <Link
        fontWeight={500}
        href={href}
        isExternal
        target={"_blank"}
        color={useColorModeValue("gray.900", "gray.200")}
        _hover={{
          color: useColorModeValue("pink.500", "white"),
        }}
        fontSize={"xl"}
      >
        {link}
      </Link>
    </VStack>
  );
}

export default function Contact() {
  const { t } = useTranslation("contact");
  return (
    <SectionLayout mt={20}>
      <Grid
        templateColumns={{ base: "1f", md: "0.7fr 1fr" }}
        gridColumnGap={20}
        height={"min-content"}
      >
        <GridItem>
          <VStack
            justifyContent={"space-between"}
            align={"flex-start"}
            height={"100%"}
          >
            <Box>
              <Heading
                as="h5"
                textTransform={"uppercase"}
                color={"pink.500"}
                fontSize={"xl"}
                pb={2}
              >
                {t("title")}
              </Heading>
              <Text
                fontSize={"2xl"}
                color={useColorModeValue("gray.600", "gray.50")}
                lineHeight={8}
                fontWeight={500}
              >
                {t("collaborate")}
              </Text>
            </Box>
            <VStack spacing={8} align={"flex-start"}>
              <CallToAction
                link={t("callLink")}
                href={"https://calendly.com/"}
                title={t("call")}
              />
              <CallToAction
                link={t("emailLink")}
                href={"mailto:medusalab.tech@gmail.com"}
                title={t("email")}
              />
            </VStack>
          </VStack>
        </GridItem>
        <GridItem>
          <Box
            width={"100%"}
            height={"450px"}
            border={"1px solid"}
            borderColor={useColorModeValue(
              useColorModeValue("gray.300", "white")
            )}
            borderRadius={"md"}
            boxShadow={"xl"}
          ></Box>
        </GridItem>
      </Grid>
    </SectionLayout>
  );
}
