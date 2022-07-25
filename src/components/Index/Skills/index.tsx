import React, { useMemo } from "react";
import ReactNativeLogo from "@assets/react-native-logo.svg";
import ReactLogo from "@assets/react-logo.png";
import TypescriptLogo from "@assets/typescript-logo.png";
import NodeJsLogo from "@assets/nodejs-logo.png";
import TypeormLogo from "@assets/typeorm-logo.png";
import ExpoLogo from "@assets/expo-logo.webp";
import { Container } from "./styles";

import Image from "next/image";

const Skills: React.FC = () => {
  const skills = useMemo(
    () => [
      {
        name: "Node JS",
        docsUrl: "https://nodejs.org/en/about/",
        srcImg: NodeJsLogo,
        altImg: "Node JS Logo",
      },
      {
        name: "Typescript",
        docsUrl: "https://www.typescriptlang.org/",
        srcImg: TypescriptLogo,
        altImg: "Typescript Logo",
      },
      {
        name: "Typeorm",
        docsUrl: "https://typeorm.io/",
        srcImg: TypeormLogo,
        altImg: "Typeorm Logo",
      },
      {
        name: "Expo",
        docsUrl: "https://expo.dev/",
        srcImg: ExpoLogo,
        altImg: "Expo Logo",
      },
      {
        name: "React",
        docsUrl: "https://reactjs.org/",
        srcImg: ReactLogo,
        altImg: "React Logo",
      },
      {
        name: "React Native",
        docsUrl: "https://reactnative.dev/",
        srcImg: ReactNativeLogo,
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
