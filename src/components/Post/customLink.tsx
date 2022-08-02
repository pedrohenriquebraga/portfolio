import Link from 'next/link';
import React from 'react';

const CustomLink = ({ as, href, ...props }: any) => {
  return (
    <Link href={href}>
      <a {...props} rel="external noreferrer" />
    </Link>
  );
}

export default CustomLink;