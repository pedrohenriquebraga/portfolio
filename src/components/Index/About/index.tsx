import { useTranslations } from "next-intl";
import React, { useMemo } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Container } from "./styles";

const About: React.FC = () => {
  const yearsOld = useMemo(() => new Date().getFullYear() - 2005, []);

  const t = useTranslations("home")

  return (
    <Container id="about">
      <div id="about-me-container">
        <h2>{t("about_me.title")}</h2>
        <AnimationOnScroll animateOnce duration={0.5} animateIn="animate__zoomIn">
          <p>
            {t("about_me.paragraphs.0", { yearsOld })}
          </p>
          <p>
            {t("about_me.paragraphs.1")}
          </p>
          <p>
          {t("about_me.paragraphs.2")}
          </p>
          <ul>
            <li>{t("about_me.skills_list.0")}</li>
            <li>{t("about_me.skills_list.1")}</li>
            <li>{t("about_me.skills_list.2")}</li>
            <li>{t("about_me.skills_list.3")}</li>
            <li>{t("about_me.skills_list.4")}</li>
            <li>{t("about_me.skills_list.5")}</li>
            <li>{t("about_me.skills_list.6")}</li>
          </ul>
        </AnimationOnScroll>
      </div>
      <div id="left-side"></div>
    </Container>
  );
};

export default About;
