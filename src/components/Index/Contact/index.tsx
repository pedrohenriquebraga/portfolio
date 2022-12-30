import { useTranslations } from "next-intl";
import React from "react";
import { FiMapPin, FiMessageSquare, FiInstagram } from "react-icons/fi";

import { Container } from "./styles";

const Contact: React.FC = () => {

  const t = useTranslations("home");

  return (
    <Container id="contact-me">
      <div id="contact-container">
        <h2>{t("contact.title")}</h2>
        <p>
          {t("contact.subtitle")}
        </p>

        <ul>
          <li>
            <FiMapPin /> Goiânia/GO
          </li>
          <li>
            <a href="mailto:pedrobraga693@gmail.com">
              <FiMessageSquare /> pedrobraga693@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/pedro_henriquebraga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram /> {t("contact.dm_ig")}
            </a>
          </li>
        </ul>
      </div>
      <div id="left-side"></div>
    </Container>
  );
};

export default Contact;
