import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import CustomLink from "../customLink";
import CustomImage from "../customImage";
import { Post } from "types/interfaces";
import { Container } from "./styles";

import { FiClock, FiUser, FiCalendar } from "react-icons/fi";


const PostContent = ({ post }: { post: Post }) => {
  return (
    <Container>
      <div id="post">
        <h1 id="main-title">{post.title}</h1>
        <p id="description">{post.description}</p>
        <div id="post-infos">
          <p id="date"><FiCalendar /> {post.date}</p>
          <p id="author"><FiUser /> {post.author}</p>
          <p id="read-time"><FiClock /> Approximately {Math.ceil(post.readingTime)} minutes</p>
        </div>
        <Image
          id="banner"
          src={post.banner}
          alt={`Banner of post "${post.title}"`}
          width={1920}
          height={1080}
          layout="responsive"
          priority
        />
        <div id="content">
          <ReactMarkdown
            skipHtml={false}
            components={{
              a: CustomLink,
              img: CustomImage,
            }}
          >
            {post.markdown}
          </ReactMarkdown>
        </div>
      </div>
    </Container>
  );
};

export default PostContent;
