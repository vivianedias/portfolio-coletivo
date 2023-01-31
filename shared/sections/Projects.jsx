import { Image, SectionLayout, Window } from "../components";
import {
  Heading,
  useColorModeValue,
  Box,
  Text,
  VStack,
  Highlight,
  Stack,
  Wrap,
  Flex,
  Grid,
  GridItem,
  Link,
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
        bgColor={"brand.secondaryHover"}
        position={"relative"}
        minWidth={{ base: "285px", xl: "500px" }}
        minHeight={{ base: "170px", xl: "273px" }}
        right={"20px"}
        mb={4}
      />
      <Window>
        <Image
          src={src}
          alt={alt}
          w={"100%"}
          maxH={"240px"}
          h={"100%"}
          position={"absolute"}
        />
      </Window>
    </Box>
  );
}

const PROJECTS_ITEMS = (t, locale) => [
  {
    img: {
      alt: t("noor.alt"),
      src: `/img/noor.png`,
    },
    title: t("noor.title"),
    description: t("noor.description"),
    query: ["Noor"],
    link: "https://wearenoor.org/",
  },
  {
    img: {
      alt: t("institutoAurora.alt"),
      src: `/img/instituto-aurora-${locale}.png`,
    },
    title: t("institutoAurora.title"),
    description: t("institutoAurora.description"),
    query: [
      "Panorama da Educação em Direitos Humanos no Brasil",
      "Educational Panel of Human Rights",
    ],
    link: "https://panorama-edh.institutoaurora.org/",
  },
  {
    img: {
      src: `/img/me-representa.png`,
      alt: t("meRepresenta.alt"),
    },
    title: t("meRepresenta.title"),
    description: t("meRepresenta.description"),
    query: "#MeRepresenta",
    link: "https://app.merepresenta.org.br/",
  },
  {
    img: {
      src: `/img/hacking-vigilance-${locale}.png`,
      alt: t("hackingVigilance.alt"),
    },
    title: t("hackingVigilance.title"),
    description: t("hackingVigilance.description"),
    query: ["Hacking Vigilance", "Hackeando a vigilância"],
    link: "https://hacking-vigilance.vercel.app/pt-BR",
  },
];

function ProjectItem({ title, description, query, img, link }) {
  return (
    <GridItem key={title}>
      <VStack
        align={"flex-start"}
        spacing={{ base: 6, md: 12 }}
        flex={"1 1 0"}
      >
        <Link href={link} isExternal>
          <ImageWithBorder src={img.src} alt={img.alt} />
        </Link>
        <Box maxW={"100%"}>
          <Heading
            color={useColorModeValue("gray.900", "gray.200")}
            size={"2xl"}
            as={"p"}
            whiteSpace={{ base: "normal", xl: "nowrap" }}
          >
            <Link href={link} isExternal>
              {title}
            </Link>
          </Heading>

          <Text fontWeight={400} fontSize={"xl"} mt={5}>
            <Highlight
              query={query}
              styles={{
                px: "2",
                py: "1",
                bg: "purple.100",
                whiteSpace: "normal",
              }}
            >
              {description}
            </Highlight>
          </Text>
        </Box>
      </VStack>
    </GridItem>
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
      <Grid
        gap={10}
        templateColumns={{
          base: "calc(100vw - 80px)",
          xl: "repeat(2, 600px)",
        }}
      >
        {PROJECTS_ITEMS(t, locale).map(ProjectItem)}
      </Grid>
    </SectionLayout>
  );
}
