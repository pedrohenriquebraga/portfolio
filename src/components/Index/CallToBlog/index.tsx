import Link from 'next/link';
import React from 'react';

import { Container } from './styles';

const CallToBlog: React.FC = () => {
  return (
    <Container>
      <h2>Hey, visit my blog!</h2>
      <p>Read my tech posts, daily development, details of my projects and more. Every week have new posts!</p>
      <Link href="/blog/posts">
        <a>Access blog</a>
      </Link>
    </Container>
  );
}

export default CallToBlog;