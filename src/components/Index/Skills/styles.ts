import styled from "styled-components";

export const Container = styled.section`
  padding: 3rem 6rem;

  h2 {
    margin-bottom: 2rem;
    font-size: 3.5rem;
    color: #19162b;
  }

  #skills-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .skill-container {
      a {
        width: 12rem;
        height: 12rem;
        margin: 2rem;
        img {
          object-fit: cover;
          filter: saturate(0%);

          &:hover {
            filter: saturate(100%);
            transform: scale(1.05);
            transition: 300ms;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 5rem;
  }
`;
