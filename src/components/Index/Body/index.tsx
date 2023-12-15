import React from 'react';
import About from '../About';
import CallToBlog from '../CallToBlog';
import Contact from '../Contact';
import Presentation from '../Presentation';
import Projects from '../Projects';
import Skills from '../Skills';

import { Container } from './styles';
import { TSkills } from 'pages';

const Body: React.FC<{ skills: TSkills[] }> = ({ skills }) => {
  return (
    <Container>
      <Presentation />
      <About />
      <Skills skills={skills} />
      <Projects />
      <Contact />
      <CallToBlog />
    </Container>
  );
}

export default Body;