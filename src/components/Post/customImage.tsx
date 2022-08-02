import Image from "next/image";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const CustomImage = ({ src, ...props }: any) => {
  return (
    <AnimationOnScroll animateOnce animateIn="animate__zoomIn" duration={0.5}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...props}
        src={src}
        layout="responsive"
        width={1920}
        height={1080}
        quality={70}
      />
    </AnimationOnScroll>
  );
};

export default CustomImage;
