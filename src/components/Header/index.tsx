import React, { useMemo } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { Container } from "./styles";

const Header: React.FC = () => {
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
        url: "",
        icon: <FaLinkedin />,
      },
    ],
    []
  );

  return (
    <Container>
      <nav>
        <div id="nav-buttons-container">
          <a href="#welcome" rel="internal" className="nav-button">
            Welcome
          </a>
          <a href="#about" rel="internal" className="nav-button">
            About me
          </a>
          <a href="#my-skills" rel="internal" className="nav-button">
            My skills
          </a>
          <a href="#" rel="internal" className="nav-button">
            Projects
          </a>
          <a href="#contact-me" rel="internal" className="nav-button">
            Contact me
          </a>
        </div>
        <div id="social-buttons-container">
          {socialNetworks.map(({ name, url, icon }) => (
            <a
              key={name}
              title={`Visit my ${name} page`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              {icon}
            </a>
          ))}
        </div>
      </nav>
    </Container>
  );
};

export default Header;
