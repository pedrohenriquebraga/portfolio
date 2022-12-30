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

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>Blog Posts | Pedro Henrique</title>
        <meta
          name="description"
          content="Look all posts of blog. Develop and tech content"
        />
        <meta property="og:site_name" content="Pedro Henrique's Blog" />
        <meta property="og:title" content="Blog Posts | Pedro Henrique" />
        <meta
          property="og:description"
          content="Look all posts of blog. Develop and tech content"
        />
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
    fallback: true
  };
}

export default Posts;
