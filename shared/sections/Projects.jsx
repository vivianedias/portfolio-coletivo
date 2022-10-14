import { Image, SectionLayout, Window } from "../components";
import {
  Heading,
  useColorModeValue,
  Box,
  Text,
  VStack,
  Highlight,
  Stack,
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
        transition={{ duration: duration / 4, property: "bottom" }}
        animate={{
          width: "100%",
          height: "auto",
          position: "absolute",
        }}
        whileHover={{
          transition: {
            duration: duration,
            property: "all",
          },
          bottom: 0,
        }}
      />
    </Box>
  );
}

function ImageWithBorder({ src, alt }) {
  return (
    <Box position={"relative"} margin={"0 auto"}>
      <Box
        bgColor={"brand.secondary"}
        position={"relative"}
        minWidth={{ base: "285px", xl: "500px" }}
        minHeight={{ base: "170px", xl: "273px" }}
        right={"20px"}
        mb={4}
      />
      <Window>
        <Image src={src} alt={alt} boxSize={"100%"} position={"absolute"} />
      </Window>
    </Box>
  );
}

export default function Projects({ locale }) {
  const { t } = useTranslation("projects");
  return (
    <SectionLayout id={"#projects"} minHeight={"100%"}>
      <Heading
        as="h4"
        textTransform={"uppercase"}
        color={useColorModeValue("purple.700", "brand.secondary")}
        fontSize={"xl"}
      >
        {t("title")}
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} spacing={10}>
        <VStack align={"flex-start"} spacing={6} flex={"1 1 0"}>
          <ImageWithBorder
            src={`/img/me-representa.png`}
            alt={t("meRepresenta.alt")}
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
                styles={{ px: "2", py: "1", bg: "purple.100" }}
              >
                {t("meRepresenta.description")}
              </Highlight>
            </Text>
          </Box>
        </VStack>
        <VStack align={"flex-start"} spacing={6} flex={"1 1 0"}>
          <ImageWithBorder
            src={`/img/hacking-vigilance-${locale}.png`}
            alt={t("hackingVigilance.alt")}
          />
          <Box>
            <Heading
              color={useColorModeValue("gray.900", "gray.200")}
              size={"2xl"}
              as={"p"}
              whiteSpace={"nowrap"}
            >
              {t("hackingVigilance.title")}
            </Heading>
            <Text fontWeight={400} fontSize={"xl"} mt={5}>
              <Highlight
                query={["Hacking Vigilance", "Hackeando a vigilância"]}
                styles={{ px: "2", py: "1", bg: "purple.100" }}
              >
                {t("hackingVigilance.description")}
              </Highlight>
            </Text>
          </Box>
        </VStack>
      </Stack>
    </SectionLayout>
  );
}
