import React from "react";
import { Container } from "./styles";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { TSkills } from "@pages/index";


const Skills: React.FC<{ skills: TSkills[] }> = ({ skills }) => {
  const t = useTranslations("home");
  
  return (
    <Container id="my-skills">
      <h2>{t("my_skills.title")}</h2>
      <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
        <div id="skills-container">
          {[...skills, ...skills].map(({ name, docsUrl, srcImg, altImg }) => (
            <div key={`skill-${name}-${docsUrl}`} className="skill-container">
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
