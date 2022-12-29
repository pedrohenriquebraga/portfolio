import React, { useMemo } from "react";
import { Container } from "./styles";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Image from "next/image";

const Skills: React.FC = () => {
  const skills = useMemo(
    () => [
      {
        name: "Node JS",
        docsUrl: "https://nodejs.org/en/about/",
        srcImg: "/nodejs-logo.webp",
        altImg: "Node JS Logo",
      },
      {
        name: "Typescript",
        docsUrl: "https://www.typescriptlang.org/",
        srcImg: "/typescript-logo.webp",
        altImg: "Typescript Logo",
      },
      {
        name: "Typeorm",
        docsUrl: "https://typeorm.io/",
        srcImg: "/typeorm-logo.webp",
        altImg: "Typeorm Logo",
      },
      {
        name: "Expo",
        docsUrl: "https://expo.dev/",
        srcImg: "/expo-logo.webp",
        altImg: "Expo Logo",
      },
      {
        name: "React JS",
        docsUrl: "https://reactjs.org/",
        srcImg: "/react-logo.webp",
        altImg: "React Logo",
      },
      {
        name: "React Native",
        docsUrl: "https://reactnative.dev/",
        srcImg: "/react-native-logo.webp",
        altImg: "React Native Logo",
      },
    ],
    []
  );

  return (
    <Container id="my-skills">
      <h2>My Skills</h2>
      <AnimationOnScroll animateOnce animateIn="animate__zoomIn">
        <div id="skills-container">
          {skills.map(({ name, docsUrl, srcImg, altImg }) => (
            <div key={name} className="skill-container">
              <a
                target="_blank"
                rel="external noopener noreferrer"
                href={docsUrl}
              >
                <Image width={80} height={80} src={srcImg} alt={altImg} />
              </a>
            </div>
          ))}
        </div>
      </AnimationOnScroll>
    </Container>
  );
};

export default Skills;
