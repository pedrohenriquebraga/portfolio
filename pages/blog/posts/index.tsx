import BlogHeader from "@components/Blog/BlogHeader";
import Body from "@components/Blog/Body";
import Head from "next/head";
import React from "react";
import getPosts from "src/lib/posts";
import { Post } from "types/interfaces";
import { Container } from "@styles/pages";
import Footer from "@components/Footer";

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>Postagens do Blog | Pedro Henrique</title>
      </Head>
      <body>
        <Container>
          <BlogHeader />
          <Body posts={posts} />
          <Footer />
        </Container>
      </body>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    },
  };
}

export default Posts;
