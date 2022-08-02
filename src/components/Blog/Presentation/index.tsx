import React from "react";
import { Container } from "./styles";

const Presentation: React.FC = () => {
  return (
    <Container>
      <h1>Read my blog!</h1>
      <p>
        All posts are write by me for people of world. Posts are in{" "}
        <abbr title="Brazilian Portuguese">pt-BR</abbr> (English not available
        in the moment).
      </p>
    </Container>
  );
};

export default Presentation;
