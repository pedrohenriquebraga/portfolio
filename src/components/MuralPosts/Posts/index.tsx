import React, { useEffect, useState } from "react";
import { Container } from "./styles";

type PostData = {
  name: string;
  message: string;
};

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/birthday-posts").then((res) => res.json());

      if (res.success) {
        setPosts(res.posts);
      }
    })();
  }, []);

  return (
    <>
      <Container>
        <h2>{posts.length} Messages received</h2>
        <div id="posts-container">
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
        </div>
      </Container>
    </>
  );
};

export default Posts;
