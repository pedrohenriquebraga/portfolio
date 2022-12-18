import Footer from '@components/Footer';
import React from 'react';
import Form from '../Form';
import Presentation from '../Presentation';

import { Container } from './styles';

const Body: React.FC = () => {
  return (
    <Container>
      <Presentation />
      <Form />
      <Footer />
    </Container>
  );
}

export default Body;