import React from "react";
import SocialButtons from "../SocialButtons";
import { FaArrowDown } from "react-icons/fa";
import { Container, PresentationContainer } from "./styles";
import { useTranslations } from "next-intl";

const Presentation: React.FC = () => {

  const t = useTranslations("home");

  return (
    <Container id="welcome">
      <PresentationContainer>
        <div id="right-side">
          <div id="title-container">
            <h1>
            {t("presentation.title")}
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
