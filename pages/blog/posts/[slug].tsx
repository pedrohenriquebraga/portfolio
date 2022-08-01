import Head from "next/head";
import React from "react";
import ReactMarkdown from "react-markdown";
import getPosts from "src/lib/posts";
import { Post } from "types/interfaces";

// import { Container } from './styles';

const PostPage: React.FC<Post> = ({ title, markdown }) => {
  return (
    <>
      <Head>
        <title>{title} | Pedro Henrique</title>
      </Head>
      <body>
        <h1>{title}</h1>
        <ReactMarkdown>{markdown}</ReactMarkdown>
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
