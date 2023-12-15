import React from "react";
import { Container } from "./styles";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { TSkills } from "pages";


const Skills: React.FC<{ skills: TSkills[] }> = ({ skills }) => {
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
