import React from 'react';
import Countdown from '../CountdownContainer';

import { Container } from './styles';

const Body: React.FC = () => {
  return (
    <Container>
      <Countdown />
    </Container>
  );
}

export default Body;