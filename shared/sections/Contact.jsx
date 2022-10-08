import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Button,
  VStack,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Box,
  Grid,
  GridItem,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { SectionLayout } from "../components";
import { UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

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
                href={"https://calendly.com/medusalab-tech"}
                title={t("call")}
              />
              <CallToAction
                link={t("email.link")}
                href={"mailto:medusalab.tech@gmail.com"}
                title={t("email.cta")}
              />
            </VStack>
          </VStack>
        </GridItem>
        <GridItem>
          <Box
            width={"100%"}
            height={"min-content"}
            bg={useColorModeValue("white", "gray.700")}
            borderRadius="lg"
            p={8}
            color={useColorModeValue("gray.700", "whiteAlpha.900")}
            shadow="base"
            as={"form"}
            action={"https://submit-form.com/TA7rFyq0"}
          >
            <VStack spacing={5}>
              <input
                type="hidden"
                name="_redirect"
                value={typeof window !== "undefined" && window.location}
              />
              <FormControl isRequired>
                <FormLabel>{t("name.label")}</FormLabel>

                <Stack direction={{ base: "column", md: "row" }} spacing={5}>
                  <InputGroup>
                    <InputLeftElement>
                      <Icon as={UserIcon} />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="name"
                      placeholder={t("name.placeholder")}
                    />
                  </InputGroup>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder={t("lastName.placeholder")}
                  />
                </Stack>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>{t("email.label")}</FormLabel>

                <InputGroup>
                  <InputLeftElement>
                    <Icon as={EnvelopeIcon} />
                  </InputLeftElement>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t("email.placeholder")}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>{t("message.label")}</FormLabel>

                <Textarea
                  name="message"
                  placeholder={t("message.placeholder")}
                  rows={6}
                  resize="none"
                  required
                />
              </FormControl>

              <Button
                colorScheme="pink"
                bg="pink.500"
                color="white"
                width={"full"}
                type="submit"
              >
                {t("btnSubmit")}
              </Button>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </SectionLayout>
  );
}
