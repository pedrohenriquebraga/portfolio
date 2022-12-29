import React, { useEffect, useMemo, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiArrowLeft } from "react-icons/fi";

import { Container } from "./styles";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface IHeader {
  hiddenNav?: boolean;
  hiddenShadow?: boolean;
  backColor?: string;
}

const SCROLL_Y_TO_REDUCE_HEADER_OPACITY = 80

const Header: React.FC<IHeader> = ({ hiddenNav, hiddenShadow, backColor }) => {
  const [openHeader, setOpenHeader] = useState(false);
  const [reduceOpacity, setReduceOpacity] = useState(false);

  const t = useTranslations("header")

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

  useEffect(() => {
    window.addEventListener("scroll", e => {
      if (window.scrollY >= SCROLL_Y_TO_REDUCE_HEADER_OPACITY) {
        if (!reduceOpacity)
          setReduceOpacity(true)
      } else {
        setReduceOpacity(false)
      }
    })

    return () => {
      window.removeEventListener("scroll", () => {});
    }
  }, [])

  return (
    <Container
      style={{
        backgroundColor: backColor || "#fff",
        boxShadow: hiddenShadow || reduceOpacity ? "none" : undefined,
        opacity: reduceOpacity && !openHeader ? 0.35 : 1
      }}
      openHeader={openHeader}
    >
      <div id="logo">
        <Link href="/">
          <a rel="internal">
            <Image
              src="/logo.png"
              alt="Pedro Henrique portfolio's logo"
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
            />
          </a>
        </Link>
      </div>
      {!hiddenNav && (
        <>
          <nav>
            <div id="close-header">
              <button onClick={handleOpenHeader}>
                <span>
                  <FiArrowLeft />
                </span>{" "}
                {t("nav.close_menu")}
              </button>
            </div>
            <div id="nav-buttons-container">
              <a href="#welcome" rel="internal" className="nav-button">
                {t("nav.welcome")}
              </a>
              <a href="#about" rel="internal" className="nav-button">
                {t("nav.about_me")}
              </a>
              <a href="#my-skills" rel="internal" className="nav-button">
                {t("nav.my_skills")}
              </a>
              <a href="#my-projects" rel="internal" className="nav-button">
                {t("nav.my_projects")}
              </a>
              <a href="#contact-me" rel="internal" className="nav-button">
                {t("nav.contact_me")}
              </a>
              <Link href="/blog/posts" rel="internal">
                <a className="nav-button">{t("nav.blog")}</a>
              </Link>
              <Link href="/my-birthday" rel="internal">
                <a className="nav-button">{t("nav.my_birthday")}</a>
              </Link>
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
        </>
      )}
    </Container>
  );
};

export default Header;
