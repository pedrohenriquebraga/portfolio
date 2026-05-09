import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 4rem 6rem;
  background-color: #5863d8;
  gap: 2rem;

  #about-me-container {
    width: 50%;

    h2 {
      color: #fff;
      font-size: 3.5rem;
      margin-bottom: 3rem;
    }
    p,
    ul {
      font-size: 1.7rem;
      margin-bottom: 2rem;
      color: #fcfcfd;

      li {
        margin-left: 5rem;
      }
    }
  }

  #left-side {
    width: 50%;
    height: auto;
    min-height: 500px;
    background: url('/reading.svg') no-repeat center;
    background-size: contain;
    background-position: center right;
  }

  @media (max-width: 768px) {
    padding: 6rem;
    flex-direction: column;

    #about-me-container {
      width: 100%;
    }

    #left-side {
      display: none;
    }
  }
`;
