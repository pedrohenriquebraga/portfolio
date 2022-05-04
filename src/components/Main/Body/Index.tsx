import React from 'react';
import About from '../About';
import Presentation from '../Presentation';

import { Container } from './styles';

const Body: React.FC = () => {
  return (
    <Container>
      <Presentation />
      <About />
    </Container>
  );
}

export default Body;