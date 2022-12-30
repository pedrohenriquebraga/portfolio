import React from "react";
import Header from "@components/Header";
import Body from "@components/Index/Body";
import { GetStaticPropsContext } from "next";

import { Container } from "@styles/pages";
import Footer from "@components/Footer";
import Head from "next/head";
import { useTranslations } from "next-intl";

const Main: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pedro Henrique | Fullstack developer | Frontend | Backend</title>
        <meta property="og:image" content="/banner.webp" />
        <meta property="og:site_name" content="Pedro Henrique's Portfolio" />
        <meta
          property="og:title"
          content="Pedro Henrique | Fullstack developer | Frontend | Backend"
        />
        <meta
          property="og:description"
          content="This is a Pedro Henrique Santos Braga's portfolio. I'm a Fullstack Developer. Here you can find my projects, resume and contact information. Enjoy! :)"
        />
        <meta
          name="description"
          content="This is a Pedro Henrique Santos Braga's portfolio. I'm a Fullstack Developer. Here you can find my projects, resume and contact information. Enjoy! :)"
        />
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
