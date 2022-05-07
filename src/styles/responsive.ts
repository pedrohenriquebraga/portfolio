import { createGlobalStyle } from "styled-components";


export const Responsive = createGlobalStyle`
  html {
    @media (max-width: 1000px) {
      font-size: 58%;
    }
  }
`