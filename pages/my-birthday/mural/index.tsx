import Footer from "@components/Footer";
import Header from "@components/Header";
import Body from "@components/MuralPosts/Body";
import { Container } from "@styles/pages/mural-posts";
import Head from "next/head";
import React from "react";

const MuralPosts: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Birthday Mural | Pedro Henrique | Fullstack developer | Frontend |
          Backend
        </title>
        <meta property="og:image" content="/banner.webp" />
        <meta property="og:site_name" content="Pedro Henrique's Portfolio" />
        <meta
          property="og:title"
          content="Birthday Mural | Pedro Henrique | Fullstack developer | Frontend | Backend"
        />
        <meta property="og:description" content="Check my birthday mural" />
        <meta name="description" content="Check my birthday mural" />
      </Head>
      <body>
        <Container>
          <Header hiddenNav />
          <Body />
          <Footer />
        </Container>
      </body>
    </>
  );
};

export default MuralPosts;
