import React, { useMemo } from "react";
import { Container } from "./styles";

const About: React.FC = () => {
  const yearsOld = useMemo(() => new Date().getFullYear() - 2005, []);

  return (
    <Container id="about">
      <div id="about-me-container">
        <h2>About me</h2>
        <p>
          I'm {yearsOld} years old and programmer since 13 years old. I'm
          located in Brazil. I Have skills in frontend and backend development.
        </p>
        <p>
          I'm always learning new things. I'm always trying to improve my
          skills. I love to read books, watch movies, listen music, play games
          and obviously program.
        </p>
        <p>
          I'm a high school student. I'm available for jobs in anywhere.
        </p>
        <ul>
          <li>English intermediary</li>
          <li>Javascript/Typescript (ES6) and Python</li>
          <li>Web development (HTML/CSS, React and NextJS)</li>
          <li>Mobile development (React Native, Firebase and Expo)</li>
          <li>Backend development (NodeJS)</li>
          <li>API development (Express, Typeorm, Socket.io)</li>
          <li>PostgresSQL, MongoDB</li>
        </ul>
      </div>
      <div id="left-side"></div>
    </Container>
  );
};

export default About;
