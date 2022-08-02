import Image from 'next/image';
import React from 'react';

const CustomImage = ({ src, ...props }: any) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image 
      {...props}
      src={src}
      layout='responsive'
      width={1920}
      height={1080}
    />
  );
}

export default CustomImage;