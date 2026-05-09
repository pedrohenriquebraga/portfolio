import styled from "styled-components";

export const Container = styled.section`
  padding: 3rem 6rem;
  text-align: center;
  background-color: #e7e7e7;
  width: 100%;

  @media (min-width: 1920px) {
    padding: 3rem 12rem;
  }

  @media (min-width: 1400px) and (max-width: 1919px) {
    padding: 3rem 8rem;
  }

  @media (min-width: 2561px) {
    padding-left: calc(50% - 1280px);
    padding-right: calc(50% - 1280px);
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }

  h2 {
    font-size: 2.6rem;
  }
  p {
    font-size: 1.6rem;
  }
  a {
    font-size: 1.8rem;
    text-decoration: none;

    color: #1d1ef9;
    margin-top: 1.5rem;
    &:hover {
      text-decoration: underline;
    } 
  }
`;
