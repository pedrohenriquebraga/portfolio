import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex: 1;
  padding: 4rem 6rem;
  color: #19162b;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }

  #contact-container {
    display: flex;
    flex-direction: column;

    width: 50%;

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
    width: 50%;
    background: url("/contact.svg") no-repeat center;
    background-size: contain;
  }

  @media (max-width: 768px) {
    padding: 2rem 4rem;

    #contact-container {
      width: 100%;
    }

    #left-side {
      display: none;
    }
  }
`;
