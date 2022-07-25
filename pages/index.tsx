import React from 'react';
import Header from '@components/Header';
import Body from '@components/Index/Body';

import { Container } from '../src/styles/pages';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default Main;