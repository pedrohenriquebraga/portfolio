import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useMemo } from "react";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Body from "@components/MuralPosts/Body";
import Head from "next/head";
import BirthdayPost from "src/models/BirthdayPost";
import dbConnect from "src/lib/db";
import { PostData } from "@components/MuralPosts/Posts";
import { Container } from "@styles/pages/mural-posts";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

const MuralPosts: React.FC<{ posts: PostData[] }> = ({ posts }) => {
  const { query } = useRouter();
  const createdPostToast = useMemo(
    () => query["created-post"] === "1",
    [query]
  );

  useEffect(() => {
    if (createdPostToast) {
      toast.success("Post created! Thanks!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  }, [createdPostToast]);

  const t = useTranslations("mural_posts");

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
      {createdPostToast && (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={1}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastStyle={{ fontSize: "1.3rem", fontFamily: "Poppins" }}
        />
      )}
      <Container>
        <Header hiddenNav />
        <Body posts={posts} />
        <Footer />
      </Container>
    </>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  await dbConnect();
  const posts = await BirthdayPost.find({}).sort({ _id: -1 });

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      messages: require(`../../../src/locales/${locale}.json`),
    },
    revalidate: 10,
  };
};

export default MuralPosts;
