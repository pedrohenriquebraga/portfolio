import React from "react";
import Head from "next/head";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Body from "@components/MyBirthday/Body";
import { Container } from "@styles/pages/my-birthday";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

const MyBirthday: React.FC = () => {
  const t = useTranslations("my_birthday");

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
          <Header hiddenNav hiddenShadow backColor="#00000000" />
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
      messages: require(`../../src/locales/${locale}.json`),
    },
  };
}

export default MyBirthday;
