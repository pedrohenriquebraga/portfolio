import React from 'react';
import Posts from '../Posts';
import Presentation from '../Presentation';

import { Container } from './styles';

const Body: React.FC = () => {
  return (
    <Container>
      <Presentation />
      <Posts />
    </Container>
  );
}

export default Body;