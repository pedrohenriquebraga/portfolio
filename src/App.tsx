import React from "react";
import Main from "./pages/Main";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
      
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
