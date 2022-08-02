import Link from "next/link";
import React from "react";
import readTime from "reading-time";
import { Post } from "types/interfaces";
import { Container, PostCard } from "./styles";
import { FiClock, FiUser, FiCalendar } from "react-icons/fi";
import Image from "next/image";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <Container>
      <h2>Posts</h2>
      <div id="post-list">
        {posts.map((post, index) => {
          return (
            <Link key={index} href={`/blog/posts/${post.slug}`}>
              <PostCard>
                <Image 
                  src={post.banner}
                  alt={`Banner of post "${post.title}"`}
                  width={1920}
                  height={1080}
                  layout="responsive"
                  quality={65}
                  id="banner"
                />
                <h3>{post.title}</h3>
                <p id="description">{post.description}</p>
                <p id="date">
                  <FiCalendar style={{ marginTop: 10 }} /> {post.date}
                </p>
                <p id="author">
                  <FiUser style={{ marginTop: 10 }} /> {post.author}
                </p>
                <p id="read-time">
                  <FiClock style={{ marginTop: 10 }} /> Approximately{" "}
                  {Math.ceil(post.readingTime)} minutes
                </p>
              </PostCard>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default PostList;
