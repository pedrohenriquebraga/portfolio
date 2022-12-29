import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

import { Container } from './styles';

const CallToBlog: React.FC = () => {

  const t = useTranslations("home")

  return (
    <Container>
      <h2>{t("call_to_blog.title")}</h2>
      <p>{t("call_to_blog.subtitle")}</p>
      <Link href="/blog/posts">
        <a>{t("call_to_blog.access_blog")}</a>
      </Link>
    </Container>
  );
}

export default CallToBlog;