import { SectionLayout } from "../components";
import {
  Heading,
  useColorModeValue,
  Grid,
  Box,
  Text,
  VStack,
  Highlight,
  GridItem,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export default function Projects() {
  const { t } = useTranslation("projects");
  return (
    <SectionLayout mt={20}>
      <Heading
        as="h4"
        textTransform={"uppercase"}
        color={useColorModeValue("pink.500", "white")}
        fontSize={"xl"}
      >
        {t("title")}
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 0.15fr 1fr" }}
        templateRows={{ base: "1fr 0.05fr 1fr", md: "1fr" }}
      >
        <GridItem>
          <VStack align={"flex-start"} spacing={5}>
            <Box
              maxWidth={"560px"}
              w={"full"}
              height={"600px"}
              bgColor={"purple.500"}
              alignSelf={"center"}
            ></Box>
            <Heading
              color={useColorModeValue("gray.900", "gray.200")}
              size={"2xl"}
              as={"p"}
            >
              {t("meRepresenta.title")}
            </Heading>
            <Text fontWeight={400} fontSize={"xl"}>
              <Highlight
                query={"#MeRepresenta"}
                styles={{ px: "2", py: "1", bg: "pink.100" }}
              >
                {t("meRepresenta.description")}
              </Highlight>
            </Text>
          </VStack>
        </GridItem>
        <GridItem></GridItem>
        <GridItem>
          <VStack align={"flex-start"} mt={{ base: 0, md: 24 }} spacing={5}>
            <Box
              maxWidth={"560px"}
              w={"full"}
              height={"600px"}
              bgColor={"purple.500"}
              alignSelf={"center"}
            ></Box>
            <Heading
              color={useColorModeValue("gray.900", "gray.200")}
              size={"2xl"}
              as={"p"}
            >
              {t("hackingVigilance.title")}
            </Heading>
            <Text fontWeight={400} fontSize={"xl"}>
              <Highlight
                query={["Hacking Vigilance", "Hackeando a vigilância"]}
                styles={{ px: "2", py: "1", bg: "pink.100" }}
              >
                {t("hackingVigilance.description")}
              </Highlight>
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </SectionLayout>
  );
}
