import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 4rem 6rem;
  background-color: #5863d8;
  gap: 2rem;
  width: 100%;

  #about-me-container {
    width: 65%;

    h2 {
      color: #fff;
      font-size: 3.5rem;
      margin-bottom: 3rem;
    }
  }

  #left-side {
    width: 35%;
    height: auto;
    min-height: 300px;
    background: url('/reading.svg') no-repeat center;
    background-size: contain;
    background-position: center right;
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

    #about-me-container {
      width: 100%;
    }

    #left-side {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 3rem;
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
  gap: 1rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

export const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .content {
    font-size: 1.2rem;
    color: #fcfcfd;
    line-height: 1.5;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;
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
    padding: 1rem;
    
    h3 {
      font-size: 1.2rem;
    }

    .icon {
      font-size: 1.5rem;
    }

    .content {
      font-size: 1rem;
    }
  }
`;
