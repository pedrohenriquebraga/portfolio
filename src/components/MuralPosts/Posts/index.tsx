import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Container } from "./styles";

export type PostData = {
  name: string;
  message: string;
};

const breakpointColumnsObj = {
  default: 4,
  1276: 3,
  900: 2,
  620: 1,
};

const Posts: React.FC<{ posts: PostData[] }> = ({ posts }) => {

  const t = useTranslations("mural_posts")

  return (
    <>
      <Container>
        <h2>{t("posts.title", { amount: posts.length })}</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="posts-container"
          id="posts-container"
        >
          {posts.map((post, index) => (
            <div
              key={index}
              className="post-container animate__animated animate__bounceIn"
            >
              <p id="message">
                <span>{'"'}</span>
                {post.message}
                <span>{'"'}</span>
              </p>
              <p id="author">
                <span>{t("post.by")}</span> {post.name}
              </p>
            </div>
          ))}
        </Masonry>
      </Container>
    </>
  );
};

export default Posts;
