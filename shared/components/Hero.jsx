import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Button,
  Icon,
  VStack,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation("hero");

  return (
    <Container maxWidth={"7xl"} p={10}>
      <VStack
        spacing={10}
        alignItems={"flex-start"}
        justifyContent={"center"}
        minHeight={"calc(100vh - 60px - 80px - 60px)"}
      >
        <VStack spacing={4} alignItems={"flex-start"}>
          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "7xl" }}
            fontWeight={700}
            color={useColorModeValue("gray.900", "gray.200")}
            lineHeight={"3.5rem"}
          >
            {t("title")}{" "}
            <motion.div
              style={{
                display: "inline-block",
              }}
              animate={{ rotate: 20 }}
              transition={{
                yoyo: 5,
                from: 0,
                duration: 0.3,
                ease: "easeInOut",
                type: "tween",
              }}
            >
              👋
            </motion.div>
          </Heading>
          <Text
            fontWeight={300}
            fontSize={{ base: "2xl", md: "4xl" }}
            lineHeight={{ base: "1.5rem", md: "3rem" }}
            color={useColorModeValue("gray.600", "gray.50")}
            width={{ base: "100%", md: "80%" }}
          >
            {t("subtitle")}
          </Text>
        </VStack>
        <Button
          borderRadius={0}
          borderWidth={2}
          borderColor={useColorModeValue("gray.600", "gray.50")}
          variant={"outline"}
          rightIcon={<Icon as={ArrowLongRightIcon} />}
          size={"lg"}
        >
          {t("about")}
        </Button>
      </VStack>
    </Container>
  );
}
