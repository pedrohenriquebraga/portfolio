import React, { useMemo } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { Container } from "./styles";

const Footer: React.FC = () => {
  const socialNetworks = useMemo(
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
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/phsantosbraga/",
        icon: <FaLinkedin />,
      },
    ],
    []
  );

  return (
    <Container>
      <p id="social-networks">
        {socialNetworks.map(({ name, url, icon }) => (
          <a
            key={name}
            title={`Visit my ${name} page`}
            href={url}
            target="_blank"
            rel="external noopener noreferrer"
            className="social-button"
          >
            {icon}
          </a>
        ))}
      </p>
      <p>&copy; {new Date().getFullYear()} all rights reserved</p>
      <p>
        Developed by{" "}
        <a
          href="https://github.com/pedrohenriquebraga"
          target="_blank"
          rel="external noreferrer"
        >
          Pedro Henrique
        </a>
      </p>
    </Container>
  );
};

export default Footer;
