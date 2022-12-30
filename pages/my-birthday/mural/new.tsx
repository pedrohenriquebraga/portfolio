import Header from "@components/Header";
import Body from "@components/NewMuralPost/Body";
import { Container } from "@styles/pages/new-mural-post";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import React from "react";

const NewMuralPost: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          New message to Mural Birthday | Pedro Henrique | Fullstack developer |
          Frontend | Backend
        </title>
        <meta property="og:image" content="/banner.webp" />
        <meta property="og:site_name" content="Pedro Henrique's Portfolio" />
        <meta
          property="og:title"
          content="New message to Mural Birthday | Pedro Henrique | Fullstack developer | Frontend | Backend"
        />
        <meta property="og:description" content="My birthday incoming!" />
        <meta name="description" content="My birthday incoming!" />
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
    revalidate: 10
  };
};

export default NewMuralPost;
