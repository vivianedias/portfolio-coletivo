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
} from "@chakra-ui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "next-i18next";
import scrollIntoView from "../utils/scrollIntoView";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation("common");
  return (
    <Box mb={10}>
      <Flex
        bg={useColorModeValue("gray.50", "gray.800")}
        color={useColorModeValue("gray.600", "gray.50")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <Icon as={XMarkIcon} /> : <Icon as={Bars3Icon} />}
            variant={"ghost"}
            aria-label={t("navigation")}
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
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            onClick={() => scrollIntoView("#contact")}
            _hover={{
              bg: "pink.300",
            }}
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
  const linkHoverColor = useColorModeValue("pink.500", "white");
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
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS(t).map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, onClick }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Button
        variant={"unstyled"}
        py={2}
        _hover={{
          textDecoration: "none",
          color: useColorModeValue("pink.500", "white"),
        }}
        fontWeight={600}
        color={useColorModeValue("gray.900", "gray.200")}
        onClick={onClick}
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

