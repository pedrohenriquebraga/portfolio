import React from "react";
import Header from "@components/Header";
import Body from "@components/Index/Body";
import { GetStaticPropsContext } from "next";

import { Container } from "@styles/pages";
import Footer from "@components/Footer";
import Head from "next/head";
import { useTranslations } from "next-intl";

export type TSkills = {
  name: string;
  docsUrl: string;
  srcImg: string;
  altImg: string;
}

const Main: React.FC<{ skills: TSkills[] }> = ({ skills }) => {
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
          <Body skills={skills} />
          <Footer />
        </Container>
      </body>
    </>
  );
};

export function getStaticProps({ locale }: GetStaticPropsContext) {
  const skills = [
    {
      name: "Node JS",
      docsUrl: "https://nodejs.org/en/about/",
      srcImg: "/logos/nodejs-logo.webp",
      altImg: "Node JS Logo",
    },
    {
      name: "Typescript",
      docsUrl: "https://www.typescriptlang.org/",
      srcImg: "/logos/typescript-logo.webp",
      altImg: "Typescript Logo",
    },
    {
      name: "Typeorm",
      docsUrl: "https://typeorm.io/",
      srcImg: "/logos/typeorm-logo.webp",
      altImg: "Typeorm Logo",
    },
    {
      name: "Expo",
      docsUrl: "https://docs.expo.dev/",
      srcImg: "/logos/expo-logo.webp",
      altImg: "Expo Logo",
    },
    {
      name: "React JS",
      docsUrl: "https://reactjs.org/",
      srcImg: "/logos/react-logo.webp",
      altImg: "React Logo",
    },
    {
      name: "React Native",
      docsUrl: "https://reactnative.dev/",
      srcImg: "/logos/react-native-logo.webp",
      altImg: "React Native Logo",
    },
    {
      name: "NextJs",
      docsUrl: "https://nextjs.org/docs",
      srcImg: "/logos/nextjs-logo.png",
      altImg: "NextJs Logo",
    },
    {
      name: "Styled Components",
      docsUrl: "https://styled-components.com/docs",
      srcImg: "/logos/styled-components-logo.png",
      altImg: "Styled Components Logo",
    },
    {
      name: "Socket IO",
      docsUrl: "https://socket.io/docs/v4/",
      srcImg: "/logos/socket-io-logo.png",
      altImg: "Socket IO Logo",
    },
    {
      name: "Postgres",
      docsUrl: "https://www.postgresql.org/about/",
      srcImg: "/logos/postgresql-logo.png",
      altImg: "Postgres Logo",
    },
    {
      name: "HTML",
      docsUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      srcImg: "/logos/html-logo.png",
      altImg: "HTML Logo",
    },
    {
      name: "CSS",
      docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      srcImg: "/logos/css-logo.png",
      altImg: "CSS Logo",
    },
  ];


  return {
    props: {
      messages: require(`../src/locales/${locale}.json`),
      skills
    },
  };
}


export default Main;
