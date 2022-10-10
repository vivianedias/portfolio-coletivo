require("dayjs/locale/en");
require("dayjs/locale/pt-br");

import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Link,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import useSWRImmutable from "swr/immutable";
import { SectionLayout } from "../components";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

function BlogPostWithImage({
  cover_image,
  title,
  description,
  url,
  user: { profile_image, name, username },
  published_timestamp,
  reading_time_minutes,
  t,
  locale,
}) {
  const timezone = dayjs.tz.guess();
  return (
    <Center as="article">
      <Box
        maxW={"360px"}
        w={"full"}
        bg={useColorModeValue("white", "whiteAlpha.200")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Link href={url} isExternal target={"_blank"}>
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image src={cover_image || ""} layout={"fill"} alt="#" />
          </Box>
          <Stack minH={"270px"}>
            <Text
              color={"purple.700"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Blog
            </Text>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {title}
            </Heading>
            <Text color={"gray.500"}>{description}</Text>
          </Stack>
        </Link>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Link
            href={`https://dev.to/${username}`}
            isExternal
            target={"_blank"}
          >
            <Avatar src={profile_image} alt={t("author")} />
          </Link>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Link
              href={`https://dev.to/${username}`}
              isExternal
              target={"_blank"}
            >
              <Text fontWeight={600}>{name}</Text>
            </Link>
            <Link href={url} isExternal target={"_blank"}>
              <Text color={"gray.500"}>
                {dayjs(published_timestamp)
                  .tz(timezone)
                  .locale(locale)
                  .format("ll")}{" "}
                · {reading_time_minutes} {t("read")}
              </Text>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default function Articles({ locale }) {
  const { t } = useTranslation("articles");
  const { data, error, isValidating } = useSWRImmutable("/api/articles", {
    shouldRetryOnError: false,
  });
  const headingColor = useColorModeValue("purple.700", "brand.secondary");

  if (error) {
    return <></>;
  }

  return (
    <SectionLayout id={"#articles"} mt={20} minHeight={"100%"}>
      <Heading
        as="h3"
        textTransform={"uppercase"}
        color={headingColor}
        fontSize={"xl"}
      >
        {t("title")}
      </Heading>
      {isValidating ? (
        <Center boxSize={"100%"}>
          <Spinner />
        </Center>
      ) : (
        <Flex
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          alignItems={"flex-start"}
          gap={10}
        >
          {data.map((article) => (
            <BlogPostWithImage
              key={article.id}
              locale={locale.toLowerCase()}
              t={t}
              {...article}
            />
          ))}
        </Flex>
      )}
    </SectionLayout>
  );
}
