import React from 'react';

import { Container } from './styles';

const Presentation: React.FC = () => {
  return (
    <Container>
      <h1>Birthday Mural</h1>
      <p>
        See messages that were sent on my last birthday (all messages are
        deleted on 04/13 at 23:50)
      </p>
    </Container>
  );
}

export default Presentation;