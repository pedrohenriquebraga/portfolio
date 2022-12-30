import BlogHeader from "@components/Blog/BlogHeader";
import Footer from "@components/Footer";
import Body from "@components/Post/Body";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import Head from "next/head";
import React from "react";
import getPosts from "src/lib/posts";
import { Post } from "types/interfaces";

const PostPage: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | Pedro Henrique</title>
        <meta name="description" content={post.description} />
        <meta property="og:description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={post.banner} />
        <meta property="og:site_name" content="Pedro Henrique's Blog" />
      </Head>
      <BlogHeader />
      <Body post={post} />
      <Footer />
    </>
  );
};

export async function getStaticPaths(ctx: GetStaticPathsContext) {
  const posts = await getPosts();
  const locales = ctx.locales;

  return {
    paths: posts.map((post: Post) => {
      return locales?.map((locale) => {
        return { params: { slug: `/blog/posts/${post.slug}` }, locale };
      });
    }).flat(),
    fallback: true,
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const posts = await getPosts();
  const post = posts.find((post: Post) => post.slug === ctx.params?.slug);

  return {
    props: {
      post,
      messages: require(`../../../src/locales/${ctx.locale}.json`),
    },
  };
}

export default PostPage;
