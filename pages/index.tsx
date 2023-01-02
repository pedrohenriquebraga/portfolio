import React from "react";
import Header from "@components/Header";
import Body from "@components/Index/Body";
import { GetStaticPropsContext } from "next";

import { Container } from "@styles/pages";
import Footer from "@components/Footer";
import Head from "next/head";
import { useTranslations } from "next-intl";

const Main: React.FC = () => {
  const t = useTranslations("home");

  return (
    <>
      <Head>
        <title>{t("meta_infos.title")}</title>
        <meta property="og:image" content="/banner.webp" />
        <meta property="og:site_name" content={t("meta_infos.name")} />
        <meta property="og:title" content={t("meta_infos.title")} />
        <meta property="og:description" content={t("meta_infos.desc")} />
        <meta name="description" content={t("meta_infos.desc")} />
      </Head>
      <body>
        <Container>
          <Header />
          <Body />
          <Footer />
        </Container>
      </body>
    </>
  );
};

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../src/locales/${locale}.json`),
    },
  };
}

export default Main;
