import React from 'react';
import Header from '@components/Header';
import Body from '@components/Index/Body';

import { Container } from '@styles/pages';
import Footer from '@components/Footer';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default Main;