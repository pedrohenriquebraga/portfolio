import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Container } from './styles';

const BlogHeader: React.FC = () => {
  return (
    <Container>
      <div id="logo">
        <Link href="/blog/posts">
          <a>
            <Image
              src="/logo.png"
              alt="Pedro Henrique portfolio's logo"
              width={60}
              height={60}
            />
            <span>Blog</span>
          </a>
        </Link>
      </div>
      <nav id="links-container">
        <Link href="/">
          <a>Portfolio</a>
        </Link>
      </nav>
    </Container>
  );
}

export default BlogHeader;