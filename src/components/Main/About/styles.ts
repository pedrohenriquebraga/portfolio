import styled from "styled-components";
import ReadingImg from "../../../assets/reading.svg";

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 4rem 8rem;
  background-color: #5863d8;

  #about-me-container {
    width: 50%;

    h2 {
      color: #fff;
      font-size: 3.5rem;
      margin-bottom: 3rem;
    }
    p,
    ul {
      font-size: 1.9rem;
      margin-bottom: 2rem;
      color: #fcfcfd;

      li {
        margin-left: 5rem;
      }
    }
  }

  #left-side {
    width: 50%;
    background: url(${ReadingImg}) no-repeat center;
    background-size: contain;
  }

  @media (max-width: 768px) {
    padding: 6rem;

    #about-me-container {
      width: 100%;
    }

    #left-side {
      display: none;
    }
  }
`;
