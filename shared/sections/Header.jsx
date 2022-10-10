import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
  useColorMode,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <Box mb={10}>
      <Flex
        bg={useColorModeValue("gray.50", "brand.primary")}
        color={useColorModeValue("gray.600", "gray.50")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={isOpen ? 0 : 0.5}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.50")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <Icon as={XMarkIcon} boxSize={"1.5em"} />
              ) : (
                <Icon as={Bars3Icon} boxSize={"1.5em"} />
              )
            }
            variant={"ghost"}
            aria-label={t("navigation")}
            _focus={{
              borderWidth: 1,
              borderColor: "brand.secondary",
            }}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          display={{ base: "none", md: "flex" }}
          justify={{ base: "center" }}
        >
          <DesktopNav />
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <IconButton
            onClick={toggleColorMode}
            variant={"ghost"}
            aria-label={t("colorMode")}
            icon={
              colorMode === "light" ? (
                <Icon as={SunIcon} />
              ) : (
                <Icon as={MoonIcon} />
              )
            }
          />
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"md"}
            fontWeight={600}
            color={"white"}
            bg={"brand.secondary"}
            onClick={() => router.push("#contact")}
            _hover={{
              bg: "#53edbe",
            }}
            borderRadius={0}
          >
            <Heading size="sm">{t("touch")}</Heading>
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.900", "gray.200");
  const linkHoverColor = useColorModeValue("pink.500", "white");
  const { t } = useTranslation("common");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS(t).map((navItem) => (
        <Link
          key={navItem.label}
          p={2}
          href={navItem.href ?? "#"}
          fontSize={"md"}
          fontWeight={500}
          color={linkColor}
          _hover={{
            textDecoration: "none",
            color: linkHoverColor,
          }}
        >
          <Heading size="sm">{navItem.label}</Heading>
        </Link>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  const { t } = useTranslation("common");

  return (
    <Stack
      bg={useColorModeValue("white", "brand.primary")}
      p={4}
      display={{ md: "none" }}
      borderBottom={0.5}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.50")}
    >
      {NAV_ITEMS(t).map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Stack align={"center"}>
        <Button
          fontSize={"md"}
          fontWeight={600}
          color={"white"}
          bg={"brand.secondary"}
          onClick={() => router.push("#contact")}
          _hover={{
            bg: "#53edbe",
          }}
          borderRadius={0}
        >
          <Heading size="sm">{t("touch")}</Heading>
        </Button>
      </Stack>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle} align={"center"}>
      <Link
        py={2}
        href={href ?? "#"}
        _hover={{
          textDecoration: "none",
          color: useColorModeValue("pink.500", "white"),
        }}
        fontWeight={600}
        color={useColorModeValue("gray.900", "gray.200")}
      >
        <Heading size="sm">{label}</Heading>
      </Link>
    </Stack>
  );
};

const NAV_ITEMS = (t) => [
  {
    label: t("about"),
    href: "#about",
  },
  {
    label: t("articles"),
    href: "#articles",
  },
  {
    label: t("projects"),
    href: "#projects",
  },
];
