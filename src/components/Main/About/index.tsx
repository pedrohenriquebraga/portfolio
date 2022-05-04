import React, { useMemo } from "react";
import { Container } from "./styles";

const About: React.FC = () => {
  const yearsOld = useMemo(() => new Date().getFullYear() - 2005, []);

  return (
    <Container id="about">
      <h2>About me</h2>
      <div id="about-me-container">
        <p>
          I'm {yearsOld} years old and programmer since 13 years old. I'm located in
          Brazil. I Have skills in frontend (mobile and web) and backend
          development.
        </p>
        <p>
          I'm always learning new things. I'm always trying to improve my
          skills. I love to read books, watch movies, listen music, play games and
          obviously programming.
        </p>
      </div>
    </Container>
  );
};

export default About;
