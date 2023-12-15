import styled from "styled-components";

export const Container = styled.section`
  padding: 3rem 6rem;

  h2 {
    margin-bottom: 2rem;
    font-size: 3.5rem;
    color: #19162b;
  }

  #skills-container {
    display: grid;
    grid-template-columns: repeat(4, minmax(30px, 1fr));
    gap: 15px;
    
    .skill-container {
      margin: 0 auto;
      a {
        img {
          filter: saturate(0%);
          object-fit: cover;
          &:hover {
            filter: saturate(100%);
            transition: 250ms;
          }
        }
      }
      &:hover {
        transform: scale(1.2);
      }
      transition: 250ms;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 5rem;
  }
`;
