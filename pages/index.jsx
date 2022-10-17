import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useToast } from "@chakra-ui/react";
import { Hero, About, Articles, Contact, Projects } from "../shared/sections";

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, [
        "common",
        "hero",
        "about",
        "home",
        "articles",
        "contact",
        "projects",
      ])),
    },
  };
}
export default function Home({ locale }) {
  const { t } = useTranslation("home");
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (router.asPath.length > 1) {
      toast({
        title: t("thankYou.title"),
        description: t("thankYou.description"),
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>medusa.lab</title>
        <meta name="description" content={t("meta.description")} key="desc" />
        <meta property="og:title" content="medusa.lab" />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="30" />
        <meta name="twitter:title" content="medusa.lab " />
        <meta name="twitter:description" content={t("meta.description")} />
        <meta name="twitter:image" content="/img/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Projects locale={locale} />
      <Articles locale={locale} />
      <Contact />
    </>
  );
}
