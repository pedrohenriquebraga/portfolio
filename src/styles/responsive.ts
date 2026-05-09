import { createGlobalStyle } from "styled-components";

export const Responsive = createGlobalStyle`
  html {
    /* Tablets e telas menores */
    @media (max-width: 1000px) {
      font-size: 58%;
    }

    /* Telas pequenas */
    @media (max-width: 768px) {
      font-size: 55%;
    }

    /* Telas muito grandes */
    @media (min-width: 1920px) {
      font-size: 68%;
    }

    /* Telas grandes (1400-1920px) */
    @media (min-width: 1400px) and (max-width: 1919px) {
      font-size: 64%;
    }
  }
`