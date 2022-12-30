import { useTranslations } from "next-intl";
import React from "react";
import { Container } from "./styles";

const Presentation: React.FC = () => {

  const t = useTranslations("blog")

  return (
    <Container>
      <h1>{t("presentation.title")}</h1>
      <p>
        {t("presentation.subtitle")}
      </p>
    </Container>
  );
};

export default Presentation;
