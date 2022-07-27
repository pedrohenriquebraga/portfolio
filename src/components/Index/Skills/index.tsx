import React, { useMemo } from "react";
import { Container } from "./styles";

import Image from "next/image";

const Skills: React.FC = () => {
  const skills = useMemo(
    () => [
      {
        name: "Node JS",
        docsUrl: "https://nodejs.org/en/about/",
        srcImg: "/expo-logo.webp",
        altImg: "Node JS Logo",
      },
      {
        name: "Typescript",
        docsUrl: "https://www.typescriptlang.org/",
        srcImg: "/typescript-logo.png",
        altImg: "Typescript Logo",
      },
      {
        name: "Typeorm",
        docsUrl: "https://typeorm.io/",
        srcImg: "/typeorm-logo.png",
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
        srcImg: "/react-logo.png",
        altImg: "React Logo",
      },
      {
        name: "React Native",
        docsUrl: "https://reactnative.dev/",
        srcImg: "/react-native-logo.svg",
        altImg: "React Native Logo",
      },
    ],
    []
  );

  return (
    <Container id="my-skills">
      <h2>My Skills</h2>
      <div id="skills-container">
        {skills.map(({ name, docsUrl, srcImg, altImg }) => (
          <div key={name} className="skill-container">
            <a
              target="_blank"
              rel="external noopener noreferrer"
              href={docsUrl}
            >
              <Image
                width={100}
                height={100}
                quality={65}
                src={srcImg}
                alt={altImg}
              />
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
