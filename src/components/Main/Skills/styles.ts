import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 8rem;

  h2 {
    margin-bottom: 2rem;
    font-size: 3.5rem;
    color: #19162b;
  }

  #skills-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .skill-container {
      a {
        margin: 1rem;
        img {
          width: 15rem;
          height: 15rem;
          object-fit: cover;
          filter: saturate(0%);

          &:hover {
            filter: saturate(100%);
            transform: scale(1.1);
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
