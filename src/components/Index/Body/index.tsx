import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Presentation from '../Presentation';
import Projects from '../Projects';
import Skills from '../Skills';

import { Container } from './styles';

const Body: React.FC = () => {
  return (
    <Container>
      <Presentation />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
}

export default Body;