import React from "react";
import Head from "next/head";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Body from "@components/MyBirthday/Body";
import { Container } from "@styles/pages/my-birthday";
import { GetStaticPropsContext } from "next";

const MyBirthday: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Countdown to my birthday 🎉 | Pedro Henrique | Fullstack developer |
          Frontend | Backend
        </title>
        <meta property="og:image" content="/banner.webp" />
        <meta property="og:site_name" content="Pedro Henrique's Portfolio" />
        <meta
          property="og:title"
          content="Countdown to my birthday 🎉 | Pedro Henrique | Fullstack developer | Frontend | Backend"
        />
        <meta property="og:description" content="My birthday countdown and access for my Birthday Mural" />
        <meta name="description" content="My birthday countdown and access for my Birthday Mural" />
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
