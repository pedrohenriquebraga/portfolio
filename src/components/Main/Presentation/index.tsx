import React from "react";
import SocialButtons from "../SocialButtons";
import { Container, PresentationContainer } from "./styles";

const Presentation: React.FC = () => {
  return (
    <Container>
      <PresentationContainer>
        <div id="right-side">
          <div id="title-container">
            <h1>
              Hello, my <br /> name's Pedro Henrique. <br /> I'm a fullstack <br />
              developer.
            </h1>
          </div>
          <SocialButtons />
        </div>
        <div id="left-side">
          
        </div>
      </PresentationContainer>
    </Container>
  );
};

export default Presentation;
