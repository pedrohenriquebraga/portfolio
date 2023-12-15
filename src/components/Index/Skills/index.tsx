import React, { useMemo } from "react";
import { Container } from "./styles";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Image from "next/image";
import { useTranslations } from "next-intl";

const Skills: React.FC = () => {
  const skills = useMemo(
    () => [
      {
        name: "Node JS",
        docsUrl: "https://nodejs.org/en/about/",
        srcImg: "/logos/nodejs-logo.webp",
        altImg: "Node JS Logo",
      },
      {
        name: "Typescript",
        docsUrl: "https://www.typescriptlang.org/",
        srcImg: "/logos/typescript-logo.webp",
        altImg: "Typescript Logo",
      },
      {
        name: "Typeorm",
        docsUrl: "https://typeorm.io/",
        srcImg: "/logos/typeorm-logo.webp",
        altImg: "Typeorm Logo",
      },
      {
        name: "Expo",
        docsUrl: "https://docs.expo.dev/",
        srcImg: "/logos/expo-logo.webp",
        altImg: "Expo Logo",
      },
      {
        name: "React JS",
        docsUrl: "https://reactjs.org/",
        srcImg: "/logos/react-logo.webp",
        altImg: "React Logo",
      },
      {
        name: "React Native",
        docsUrl: "https://reactnative.dev/",
        srcImg: "/logos/react-native-logo.webp",
        altImg: "React Native Logo",
      },
      {
        name: "NextJs",
        docsUrl: "https://nextjs.org/docs",
        srcImg: "/logos/nextjs-logo.png",
        altImg: "NextJs Logo",
      },
      {
        name: "Styled Components",
        docsUrl: "https://styled-components.com/docs",
        srcImg: "/logos/styled-components-logo.png",
        altImg: "Styled Components Logo",
      },
      {
        name: "Socket IO",
        docsUrl: "https://socket.io/docs/v4/",
        srcImg: "/logos/socket-io-logo.png",
        altImg: "Socket IO Logo",
      },
      {
        name: "Postgres",
        docsUrl: "https://www.postgresql.org/about/",
        srcImg: "/logos/postgresql-logo.png",
        altImg: "Postgres Logo",
      },
      {
        name: "HTML",
        docsUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        srcImg: "/logos/html-logo.png",
        altImg: "HTML Logo",
      },{
        name: "CSS",
        docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        srcImg: "/logos/css-logo.png",
        altImg: "CSS Logo",
      },
    ],
    []
  );

  const t = useTranslations("home");

  return (
    <Container id="my-skills">
      <h2>{t("my_skills.title")}</h2>
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
