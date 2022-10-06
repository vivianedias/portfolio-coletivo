import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Hero, About, Articles } from "../shared/sections";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "hero",
        "about",
        "home",
        "articles",
      ])),
    },
  };
}
export default function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <Head>
        <title>Medusa Lab</title>
        <meta name="description" content={t("meta.description")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Articles />
    </>
  );
}
