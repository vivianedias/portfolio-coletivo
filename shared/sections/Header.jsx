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
import { Image } from "../components";
import logo from "../../public/img/logo.png";
import scrollIntoView from "../utils/scrollIntoView";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation("common");
  return (
    <Box position={"fixed"} width={"100%"} zIndex={1000} fontFamily={"heading"}>
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
        <Image height={"30px"} width={"200px"} src={logo} alt={t("logoAlt")} />
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
            fontSize={"sm"}
            fontWeight={700}
            color={"white"}
            bg={"brand.secondary"}
            onClick={() => scrollIntoView("#contact")}
            _hover={{
              bg: "brand.secondaryHover",
            }}
            borderRadius={0}
            textTransform={"uppercase"}
          >
            {t("touch")}
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
  const linkHoverColor = useColorModeValue("purple.700", "white");
  const { t } = useTranslation("common");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS(t).map((navItem) => (
        <Button
          key={navItem.label}
          onClick={navItem.onClick}
          variant={"unstyled"}
          p={2}
          fontSize={"md"}
          fontWeight={500}
          color={linkColor}
          _hover={{
            textDecoration: "none",
            color: linkHoverColor,
          }}
          textTransform={"lowercase"}
        >
          {navItem.label}
        </Button>
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
          fontWeight={700}
          color={"white"}
          bg={"brand.secondary"}
          onClick={() => scrollIntoView("#contact")}
          _hover={{
            bg: "brand.secondaryHover",
          }}
          borderRadius={0}
          textTransform={"uppercase"}
          fontSize={"sm"}
        >
          {t("touch")}
        </Button>
      </Stack>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, onClick }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle} align={"center"}>
      <Button
        variant={"unstyled"}
        py={2}
        _hover={{
          textDecoration: "none",
          color: useColorModeValue("purple.700", "white"),
        }}
        fontWeight={500}
        color={useColorModeValue("gray.900", "gray.200")}
        onClick={onClick}
        fontSize={"md"}
        textTransform={"lowercase"}
      >
        {label}
      </Button>
    </Stack>
  );
};

const NAV_ITEMS = (t) => {
  return [
    {
      label: t("about"),
      onClick: () => scrollIntoView("#about"),
    },
    {
      label: t("projects"),
      onClick: () => scrollIntoView("#projects"),
    },
    {
      label: t("articles"),
      onClick: () => scrollIntoView("#articles"),
    },
  ];
};

