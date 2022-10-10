import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  VStack,
  Stack,
  Link,
  Flex,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { SectionLayout, Image } from "../components";
import vivianeImg from "../../public/img/viviane.png";
import camilaImg from "../../public/img/camila.png";

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
      spacing={{ base: 4, md: 10 }}
      maxHeight={{ base: "100%", md: "350px" }}
      width="100%"
    >
      <Flex gap={3}>
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
            <Text
              as={"p"}
              fontSize={{ base: "lg", md: "4xl" }}
              fontWeight={500}
              pt={2}
            >
              {name}
            </Text>
            <Text fontWeight={400} fontSize={{ base: "xs", md: "xl" }} pb={2}>
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
              fontSize={{ base: "sm", md: "md" }}
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
              fontSize={{ base: "sm", md: "md" }}
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
              fontSize={{ base: "sm", md: "md" }}
              target={"_blank"}
              rel="noopener noreferrer"
              download
            >
              CV
            </Link>
          </VStack>
        </VStack>

        <Image
          height={{ base: "200px", md: "350px" }}
          width={{ base: "80%", md: "350px" }}
          src={image}
          alt={imageAlt}
        />
      </Flex>
    </Stack>
  );
}

export default function About() {
  const { t } = useTranslation("about");

  return (
    <SectionLayout justifyContent={"flex-start"} id={"#about"}>
      <Heading
        as="h2"
        textTransform={"uppercase"}
        color={useColorModeValue("pink.500", "brand.secondary")}
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
