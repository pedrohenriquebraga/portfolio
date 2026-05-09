import React from "react";
import SocialButtons from "../SocialButtons";
import { FaArrowDown } from "react-icons/fa";
import { Container, PresentationContainer } from "./styles";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import RotatingWord from "./RotatingWord";

const Presentation: React.FC = () => {

  const t = useTranslations("home");
  const router = useRouter();
  
  const rotatingWords = router.locale === "en-US" 
    ? ["developer", "researcher", "scientist"]
    : ["desenvolvedor", "pesquisador", "cientista"];

  const titleText = router.locale === "en-US"
    ? "Hello, my\nname's Pedro Henrique.\nI'm a"
    : "Olá, meu nome é Pedro Henrique.\nEu sou um";

  return (
    <Container id="welcome">
      <PresentationContainer>
        <div id="right-side">
          <div id="title-container">
            <h1>
            {titleText} <RotatingWord words={rotatingWords} interval={6000} />.
            </h1>
          </div>
          <SocialButtons />
        </div>
        <div id="left-side"></div>
        <div id="scroll-warning">
          <span>
            <FaArrowDown />
          </span>{" "}
          {t("presentation.scroll_down")}
        </div>
      </PresentationContainer>
    </Container>
  );
};

export default Presentation;
