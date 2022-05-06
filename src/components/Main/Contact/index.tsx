import React from "react";
import { FiMapPin, FiMessageSquare, FiInstagram } from "react-icons/fi";

import { Container } from "./styles";

const Contact: React.FC = () => {
  return (
    <Container id="contact-me">
      <div id="contact-container">
        <h2>Contact me</h2>
        <p>
          Contact me for more infos, jobs opportunities, freelance and others
          questions.
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
              <FiInstagram /> Contact me in Instagram DM
            </a>
          </li>
        </ul>
      </div>
      <div id="left-side"></div>
    </Container>
  );
};

export default Contact;
