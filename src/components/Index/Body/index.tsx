import React from 'react';
import About from '../About';
import CallToBlog from '../CallToBlog';
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
      <CallToBlog />
    </Container>
  );
}

export default Body;