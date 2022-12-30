import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import CustomLink from "../customLink";
import CustomImage from "../customImage";
import { Post } from "types/interfaces";
import { Container } from "./styles";

import { FiClock, FiUser, FiCalendar, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { useTranslations } from "next-intl";

const PostContent = ({ post }: { post: Post }) => {

  const t = useTranslations("blog")

  return (
    <Container>
      <div id="post">
        <div className="go-back">
          <Link href="/blog/posts">
            <a><FiArrowLeft style={{ paddingTop: 2 }} /> {t("post.back")}</a>
          </Link>
        </div>
        <h1 id="main-title">{post.title}</h1>
        <p id="description">{post.description}</p>
        <div id="post-infos">
          <p id="date">
            <FiCalendar /> {post.date}
          </p>
          <p id="author">
            <FiUser /> {post.author}
          </p>
          <p id="read-time">
            <FiClock /> {t("post.reading_time", { readingTime: Math.ceil(post.readingTime) })}
          </p>
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
        <div className="go-back">
          <Link href="/blog/posts">
            <a><FiArrowLeft style={{ paddingTop: 2 }} /> {t("post.back")}</a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default PostContent;
