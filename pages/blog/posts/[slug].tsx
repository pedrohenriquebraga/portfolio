import BlogHeader from "@components/Blog/BlogHeader";
import Footer from "@components/Footer";
import Body from "@components/Post/Body";
import Head from "next/head";
import React from "react";
import getPosts from "src/lib/posts";
import { Post } from "types/interfaces";

const PostPage: React.FC<Post> = (post) => {
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
      <body>
        <BlogHeader />
        <Body post={post} />
        <Footer />
      </body>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map((post: Post) => `/blog/posts/${post.slug}`),
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const posts = await getPosts();
  const post = posts.find((post: Post) => post.slug === slug);

  return {
    props: post,
  };
}

export default PostPage;