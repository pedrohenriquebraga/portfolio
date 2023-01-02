import Header from "@components/Header";
import Body from "@components/NewMuralPost/Body";
import { Container } from "@styles/pages/new-mural-post";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import React from "react";

const NewMuralPost: React.FC = () => {
  const t = useTranslations("new_mural_post");

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
          <Header hiddenNav />
          <Body />
        </Container>
      </body>
    </>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      messages: require(`../../../src/locales/${locale}.json`),
    },
    revalidate: 10,
  };
};

export default NewMuralPost;
