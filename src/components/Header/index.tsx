import React, { useMemo, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiArrowLeft } from "react-icons/fi";

import { Container } from "./styles";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [openHeader, setOpenHeader] = useState(false);
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

  const handleOpenHeader = () => {
    setOpenHeader((old) => !old);
  };

  return (
    <Container openHeader={openHeader}>
      <div id="logo">
        <Link href="/">
          <a rel="internal">
            <Image
              src="/logo.png"
              alt="Pedro Henrique portfolio's logo"
              width={60}
              height={60}
            />
          </a>
        </Link>
      </div>
      <nav>
        <div id="close-header">
          <button onClick={handleOpenHeader}>
            <span>
              <FiArrowLeft />
            </span>{" "}
            Close
          </button>
        </div>
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
          <a href="#my-projects" rel="internal" className="nav-button">
            My projects
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
              rel="external noopener noreferrer"
              className="social-button"
            >
              {icon}
            </a>
          ))}
        </div>
      </nav>
      <div id="menu-button-container" onClick={handleOpenHeader}>
        <button>
          <FiMenu />
        </button>
      </div>
    </Container>
  );
};

export default Header;
