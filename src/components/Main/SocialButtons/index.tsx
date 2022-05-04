import React, { useMemo } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Container } from "./styles";

const SocialButtons: React.FC = () => {
  const socialButtons = useMemo(
    () => [
      {
        name: "Github",
        url: "https://github.com/pedrohenriquebraga",
        icon: <FaGithub />,
      },
      {
        name: "Instagram",
        url: "https://instagram.com/pedro_henriquebraga",
        icon: <FaInstagram />,
      },
    ],
    []
  );

  return (
    <Container>
      {socialButtons.map((button) => (
        <a
          key={button.name}
          href={button.url}
          rel="external noreferrer"
          target="_blank"
          className="button-container"
        >
          <span>{button.icon}</span> {button.name}
        </a>
      ))}
    </Container>
  );
};

export default SocialButtons;
