import React from 'react';
import About from '../About';
import Presentation from '../Presentation';
import Skills from '../Skills';

import { Container } from './styles';

const Body: React.FC = () => {
  return (
    <Container>
      <Presentation />
      <About />
      <Skills />
    </Container>
  );
}

export default Body;