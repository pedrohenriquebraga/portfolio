import React from 'react';
import { Post } from 'types/interfaces';
import PostList from '../PostList';
import Presentation from '../Presentation';
import { Container } from './styles';

const Body = ({ posts }: { posts: Post[] }) => {
  return (
    <Container>
      <Presentation />
      <PostList posts={posts} />
    </Container>
  );
}

export default Body;