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
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

function ImageWithScrollAnimation({ src, alt, offset, duration }) {
  return (
    <Box
      maxWidth={"560px"}
      w={"full"}
      height={"600px"}
      alignSelf={"center"}
      display={"block"}
      overflow={"hidden"}
      position={"relative"}
      rounded={"sm"}
      boxShadow={"lg"}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{
          bottom: `-${offset}px`,
        }}
        transition={{ duration, property: "bottom" }}
        animate={{
          width: "100%",
          height: "auto",
          position: "absolute",
        }}
        whileHover={{
          transition: {
            duration,
            property: "all",
          },
          bottom: 0,
        }}
      />
    </Box>
  );
}

export default function Projects({ locale }) {
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
          <VStack align={"flex-start"} spacing={6}>
            <ImageWithScrollAnimation
              src={`/img/me-representa.png`}
              alt={t("meRepresenta.alt")}
              offset={8080}
              duration={30}
            />
            <Box>
              <Heading
                color={useColorModeValue("gray.900", "gray.200")}
                size={"2xl"}
                as={"p"}
              >
                {t("meRepresenta.title")}
              </Heading>
              <Text fontWeight={400} fontSize={"xl"} mt={5}>
                <Highlight
                  query={"#MeRepresenta"}
                  styles={{ px: "2", py: "1", bg: "pink.100" }}
                >
                  {t("meRepresenta.description")}
                </Highlight>
              </Text>
            </Box>
          </VStack>
        </GridItem>
        <GridItem></GridItem>
        <GridItem>
          <VStack align={"flex-start"} mt={{ base: 0, md: 24 }} spacing={6}>
            <ImageWithScrollAnimation
              src={`/img/hacking-vigilance-${locale}.png`}
              alt={t("hackingVigilance.alt")}
              offset={locale === "pt-BR" ? 2740 : 2710}
              duration={13}
            />
            <Box>
              <Heading
                color={useColorModeValue("gray.900", "gray.200")}
                size={"2xl"}
                as={"p"}
              >
                {t("hackingVigilance.title")}
              </Heading>
              <Text fontWeight={400} fontSize={"xl"} mt={5}>
                <Highlight
                  query={["Hacking Vigilance", "Hackeando a vigilância"]}
                  styles={{ px: "2", py: "1", bg: "pink.100" }}
                >
                  {t("hackingVigilance.description")}
                </Highlight>
              </Text>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </SectionLayout>
  );
}
