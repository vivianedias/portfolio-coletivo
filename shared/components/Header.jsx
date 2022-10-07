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
} from "@chakra-ui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "next-i18next";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation("common");
  return (
    <Box>
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
          {navItem.label}
        </Link>
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

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
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
        {label}
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
  {
    label: t("contact"),
    href: "#contact",
  },
];
