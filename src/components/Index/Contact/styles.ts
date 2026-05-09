import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex: 1;
  padding: 4rem 6rem;
  color: #19162b;
  width: 100%;
  justify-content: space-between;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }

  #contact-container {
    display: flex;
    flex-direction: column;

    width: 65%;

    p,
    ul {
      font-size: 1.7rem;
      margin-bottom: 2rem;

      list-style: none;

      li {
        margin-bottom: 0.5rem;
        a {
          text-decoration: none;
          color: #5863d8;

          :hover {
            color: #19162b;
            text-decoration: underline;
            transition: 300ms;
          }
        }
      }
    }
  }

  #left-side {
    display: flex;
    width: 35%;
    background: url("/contact.svg") no-repeat center;
    background-size: contain;
  }

  @media (min-width: 1920px) {
    padding: 4rem 12rem;
    justify-content: center;
  }

  @media (min-width: 1400px) and (max-width: 1919px) {
    padding: 4rem 8rem;
    justify-content: center;
  }

  @media (min-width: 2561px) {
    padding-left: calc(50% - 1280px);
    padding-right: calc(50% - 1280px);
  }

  @media (max-width: 1024px) {
    padding: 4rem 4rem;
    flex-direction: column;

    #contact-container {
      width: 100%;
    }

    #left-side {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
    flex-direction: column;

    #contact-container {
      width: 100%;
    }

    #left-side {
      display: none;
    }
  }
`;
