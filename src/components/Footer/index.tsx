import React from "react";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
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
