import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #5863d8;
  min-height: 40vh;
  color: #fff; 
  padding: 2rem;
  text-align: center;
  width: 100%;
  
  h1 {
    font-size: 2.5rem;
    margin-top: 7rem;
  }

  p {
    font-size: 1.6rem;
  }

  @media (min-width: 1920px) {
    padding: 2rem 12rem;
  }

  @media (min-width: 1400px) and (max-width: 1919px) {
    padding: 2rem 8rem;
  }

  @media (min-width: 2561px) {
    padding-left: calc(50% - 1280px);
    padding-right: calc(50% - 1280px);
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
