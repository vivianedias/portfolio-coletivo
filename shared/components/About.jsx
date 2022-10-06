import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Button,
  Icon,
  VStack,
  Container,
  Stack,
  Divider,
  Link,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { SectionLayout, Image } from ".";
import vivianeImg from "../../public/img/viviane.jpg";
import camilaImg from "../../public/img/camila.jpg";

function AboutSection({
  name,
  position,
  image,
  imageAlt,
  githubProfile,
  linkedinProfile,
  curriculumLink,
}) {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={{ base: 4, md: 10 }}
      maxHeight={{ base: "100%", md: "350px" }}
      width="100%"
    >
      <VStack
        alignItems={"flex-start"}
        width={{ base: "100%", md: "70%" }}
        justifyContent={"space-between"}
      >
        <Box
          order={1}
          py={2}
          borderTop={"1px solid"}
          borderBottom={"1px solid"}
          borderColor={useColorModeValue("gray.900", "white")}
          width={"100%"}
        >
          <Heading as={"h3"} fontSize={"4xl"} fontWeight={500} pt={2}>
            {name}
          </Heading>
          <Text fontWeight={400} fontSize={"xl"} pb={2}>
            {position}
          </Text>
        </Box>

        <VStack
          order={{ base: 3, md: 2 }}
          spacing={1}
          alignItems={"flex-start"}
        >
          <Link
            _hover={{
              color: useColorModeValue("pink.500", "white"),
            }}
            color={useColorModeValue("gray.900", "gray.200")}
            href={githubProfile}
            textTransform="uppercase"
            textDecoration={"underline"}
            fontWeight={600}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <Link
            _hover={{
              color: useColorModeValue("pink.500", "white"),
            }}
            color={useColorModeValue("gray.900", "gray.200")}
            href={linkedinProfile}
            textTransform="uppercase"
            textDecoration={"underline"}
            fontWeight={600}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
          <Link
            _hover={{
              color: useColorModeValue("pink.500", "white"),
            }}
            color={useColorModeValue("gray.900", "gray.200")}
            href={curriculumLink}
            textTransform="uppercase"
            textDecoration={"underline"}
            fontWeight={600}
            target={"_blank"}
            rel="noopener noreferrer"
            download
          >
            CV
          </Link>
        </VStack>
      </VStack>

      <Image
        order={{ base: 2, md: 3 }}
        height={{ base: "550px", md: "350px" }}
        width={{ base: "100%", md: "30%" }}
        src={image}
        alt={imageAlt}
      />
    </Stack>
  );
}

export default function About() {
  const { t } = useTranslation("about");

  return (
    <SectionLayout
      justifyContent={"flex-start"}
      minHeight={"calc(100vh - 100px)"}
    >
      <Heading
        as="h2"
        textTransform={"uppercase"}
        color={useColorModeValue("pink.500", "white")}
        fontSize={"xl"}
      >
        {t("title")}
      </Heading>
      <AboutSection
        name={"Viviane Dias"}
        position={t("viviane.position")}
        image={vivianeImg}
        imageAlt={t("viviane.imageAlt")}
        githubProfile={"https://github.com/vivianedias"}
        linkedinProfile={"https://linkedin.com/in/viviane-p-dias"}
        curriculumLink={"/files/CV_Viviane_Dias_EN.pdf"}
      />
      <AboutSection
        name={"Camila Cardoso"}
        position={t("camila.position")}
        image={camilaImg}
        imageAlt={t("camila.imageAlt")}
        githubProfile={"https://github.com/camilacrdoso"}
        linkedinProfile={"https://www.linkedin.com/in/camilacrdoso/"}
        curriculumLink={"#"}
      />
    </SectionLayout>
  );
}
