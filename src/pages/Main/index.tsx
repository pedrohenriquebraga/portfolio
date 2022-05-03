import React from 'react';
import Header from '../../components/Header';
import Body from '../../components/Main/Body';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default Main;