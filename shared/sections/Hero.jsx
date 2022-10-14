import {
  useColorModeValue,
  Heading,
  Text,
  Button,
  Icon,
  VStack,
  Box,
} from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import { useTranslation } from "next-i18next";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { SectionLayout } from "../components";
import scrollIntoView from "../utils/scrollIntoView";

export default function Hero() {
  const { t } = useTranslation("hero");

  const typing = keyframes`
    0% {
      width: 0;
    }
    100% {
      border-right: .15em solid #0bb883;
    }
  `;

  const blinkingCaret = keyframes`
    from, to { border-color: transparent; }
    50% { border-color: #0bb883; }
  `;

  return (
    <SectionLayout id={"#hero"}>
      <VStack spacing={4} alignItems={"flex-start"}>
        <Box>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "7xl" }}
            fontWeight={700}
            color={useColorModeValue("gray.900", "gray.200")}
            lineHeight={"3.5rem"}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
            borderRight={".15rem solid #0bb883"}
            width={"100%"}
            css={css`
              animation: ${typing} 3.5s steps(40, end),
                ${blinkingCaret} 0.75s step-end infinite;
              animation-fill-mode: forwards;
            `}
          >
            {"<"}
            <Text as="span" color={"brand.secondary"}>
              {t("medusa")}
            </Text>
            <Text as="span">
              {t("lab")} {"/> "}
            </Text>
          </Heading>
        </Box>
        <Text
          fontWeight={300}
          fontSize={{ base: "xl", md: "4xl" }}
          lineHeight={{ base: "1.5rem", md: "3rem" }}
          color={useColorModeValue("gray.600", "gray.50")}
          width={{ base: "100%", md: "80%" }}
        >
          {t("subtitle")}
        </Text>
      </VStack>
      <Button
        onClick={() => scrollIntoView("#about")}
        borderRadius={0}
        borderWidth={2}
        borderColor="brand.secondary"
        variant={"outline"}
        rightIcon={<Icon as={ArrowLongRightIcon} />}
        size={"lg"}
        color={useColorModeValue("gray.600", "gray.50")}
      >
        {t("about")}
      </Button>
    </SectionLayout>
  );
}
