import styled from "styled-components";

export const Container = styled.section`
  padding: 3rem 6rem;
  text-align: center;
  background-color: #e7e7e7;

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
