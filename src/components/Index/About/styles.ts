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

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-5px);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .content {
    font-size: 1.4rem;
    color: #fcfcfd;
    line-height: 1.6;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;

        &:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.5rem;
    }

    .icon {
      font-size: 2.5rem;
    }

    .content {
      font-size: 1rem;
    }
  }
`;
