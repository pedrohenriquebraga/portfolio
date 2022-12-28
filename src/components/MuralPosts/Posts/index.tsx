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
  return (
    <>
      <Container>
        <h2>{posts.length} Messages received</h2>
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
                <span>by</span> {post.name}
              </p>
            </div>
          ))}
        </Masonry>
      </Container>
    </>
  );
};

export default Posts;
