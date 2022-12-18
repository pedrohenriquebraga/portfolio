import React from "react";

import { Container } from "./styles";

const Posts: React.FC = () => {
  return (
    <Container>
      <h2>Messages</h2>
      <div id="posts-container">
        <div className="post-container animate__animated animate__bounceIn">
          <p id="message">
            <span>{'"'}</span>Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Fuga porro explicabo eligendi iusto possimus
            delectus deleniti animi sint accusamus nulla at, cupiditate ad
            laudantium ea quas illum placeat dolor fugit?<span>{'"'}</span>
          </p>
          <p id="author">
            <span>by</span> Pedro Henrique
          </p>
        </div>
        <div className="post-container">
          <p id="message">
            <span>{'"'}</span>Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Fuga porro explicabo eligendi iusto possimus
            delectus deleniti animi sint accusamus nulla at, cupiditate ad
            laudantium ea quas illum placeat dolor fugit?<span>{'"'}</span>
          </p>
          <p id="author">
            <span>By</span> Laura Lyiz
          </p>
        </div>
        <div className="post-container">
          <p id="message">
            <span>{'"'}</span>Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Fuga porro explicabo eligendi iusto possimus
            delectus deleniti animi sint accusamus nulla at, cupiditate ad
            laudantium ea quas illum placeat dolor fugit?<span>{'"'}</span>
          </p>
          <p id="author">
            <span>By</span> Ju
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Posts;
