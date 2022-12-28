import Footer from "@components/Footer";
import Header from "@components/Header";
import Body from "@components/MuralPosts/Body";
import { PostData } from "@components/MuralPosts/Posts";
import { Container } from "@styles/pages/mural-posts";
import axios from "axios";
import Head from "next/head";
import React from "react";
import api from "src/lib/api";
import BirthdayPost from "src/models/BirthdayPost";

const MuralPosts: React.FC<{ posts: PostData[] }> = ({ posts }) => {
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
        <Container>
          <Header hiddenNav />
          <Body posts={posts} />
          <Footer />
        </Container>
    </>
  );
};


export const getStaticProps = async () => {
  const posts = await BirthdayPost.find({});

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}

export default MuralPosts;
