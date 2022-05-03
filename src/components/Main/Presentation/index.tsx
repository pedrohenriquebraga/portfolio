import React from "react";
import SocialButtons from "../SocialButtons";
import { Container } from "./styles";

const Presentation: React.FC = () => {
  return (
    <Container>
      <div id="title-container">
        <span id="author">Pedro Henrique</span>
        <h1>
          Hello, my <br /> name's Pedro Henrique. <br /> I'm a software <br />
          developer.
        </h1>
      </div>
      <SocialButtons />
    </Container>
  );
};

export default Presentation;
