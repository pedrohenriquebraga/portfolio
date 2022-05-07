import React from "react";
import Main from "./pages/Main";
import { GlobalStyle } from "./styles/global";
import { Responsive } from "./styles/responsive";

function App() {
  return (
    <>      
      <GlobalStyle />
      <Responsive />
      <Main />
    </>
  );
}

export default App;
