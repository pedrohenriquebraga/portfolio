import React from "react";
import SocialButtons from "../SocialButtons";
import { FaArrowDown } from "react-icons/fa";
import { Container, PresentationContainer } from "./styles";

const Presentation: React.FC = () => {
  return (
    <Container id="welcome">
      <PresentationContainer>
        <div id="right-side">
          <div id="title-container">
            <h1>
              Hello, my <br /> name&apos;s Pedro Henrique. <br /> I&apos;m a fullstack{" "}
              <br />
              developer.
            </h1>
          </div>
          <SocialButtons />
        </div>
        <div id="left-side"></div>
        <div id="scroll-warning">
          <span>
            <FaArrowDown />
          </span>{" "}
          scroll down
        </div>
      </PresentationContainer>
    </Container>
  );
};

export default Presentation;
