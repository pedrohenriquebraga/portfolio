import { useTranslations } from "next-intl";
import React, { useMemo } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Container, CardsContainer } from "./styles";
import Card from "./Card";

const About: React.FC = () => {
  const yearsOld = useMemo(() => new Date().getFullYear() - 2005, []);

  const t = useTranslations("home")

  const skills = [
    t("about_me.skills_list.0"),
    t("about_me.skills_list.1"),
    t("about_me.skills_list.2"),
    t("about_me.skills_list.3"),
    t("about_me.skills_list.4"),
    t("about_me.skills_list.5"),
    t("about_me.skills_list.6"),
  ];

  return (
    <Container id="about">
      <div id="about-me-container">
        <h2>{t("about_me.title")}</h2>
        <AnimationOnScroll animateOnce duration={0.5} animateIn="animate__zoomIn">
          <CardsContainer>
            <Card
              icon="💼"
              title={t("about_me.cards.experience")}
              content={t("about_me.paragraphs.0", { yearsOld })}
            />
            <Card
              icon="🎯"
              title={t("about_me.cards.objective")}
              content={t("about_me.paragraphs.1")}
            />
            <Card
              icon="🎨"
              title={t("about_me.cards.interests")}
              content={t("about_me.paragraphs.2")}
            />
            <Card
              icon="⚡"
              title={t("about_me.cards.skills")}
              content={
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              }
            />
          </CardsContainer>
        </AnimationOnScroll>
      </div>
      <div id="left-side"></div>
    </Container>
  );
};

export default About;
