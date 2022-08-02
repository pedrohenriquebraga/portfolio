import React from 'react';
import { Post } from 'types/interfaces';
import PostContent from '../PostContent';
import { Container } from './styles';

const Body = ({ post }: { post: Post }) => {
  return (
    <Container>
      <PostContent post={post} />
    </Container>
  );
}

export default Body;