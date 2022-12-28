import React from 'react';
import Posts, { PostData } from '../Posts';
import Presentation from '../Presentation';

import { Container } from './styles';

const Body: React.FC<{ posts: PostData[] }> = ({ posts }) => {  
  return (
    <Container>
      <Presentation />
      <Posts posts={posts} />
    </Container>
  );
}

export default Body;