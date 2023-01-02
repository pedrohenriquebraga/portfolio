import BlogHeader from "@components/Blog/BlogHeader";
import Body from "@components/Blog/Body";
import Head from "next/head";
import React from "react";
import getPosts from "src/lib/posts";
import { Post } from "types/interfaces";
import { Container } from "@styles/pages";
import Footer from "@components/Footer";
import { minutesToSeconds } from "date-fns";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

const Posts = ({ posts }: { posts: Post[] }) => {
  const t = useTranslations("blog");

  return (
    <>
      <Head>
        <title>{t("meta_infos.title")}</title>
        <meta name="description" content={t("meta_infos.desc")} />
        <meta property="og:site_name" content={t("meta_infos.name")} />
        <meta property="og:title" content={t("meta_infos.title")} />
        <meta property="og:description" content={t("meta_infos.desc")} />
      </Head>
      <Container>
        <BlogHeader />
        <Body posts={posts} />
        <Footer />
      </Container>
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const posts = await getPosts();

  return {
    props: {
      posts,
      messages: require(`../../../src/locales/${locale}.json`),
    },
    revalidate: minutesToSeconds(60),
  };
}

export default Posts;
