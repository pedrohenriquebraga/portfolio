import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Container } from './styles';
import { useTranslations } from 'next-intl';

const BlogHeader: React.FC = () => {

  const t = useTranslations("header")

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
          <a>{t("nav.portfolio")}</a>
        </Link>
      </nav>
    </Container>
  );
}

export default BlogHeader;