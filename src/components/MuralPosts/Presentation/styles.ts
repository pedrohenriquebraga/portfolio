import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 0;
  background-color: #5863d8;
  color: #fff;
  padding-top: 14rem;

  @media (min-width: 1920px) {
    padding: 4rem 12rem;
    padding-top: 14rem;
  }

  @media (min-width: 1400px) and (max-width: 1919px) {
    padding: 4rem 8rem;
    padding-top: 14rem;
  }

  @media (min-width: 2561px) {
    padding-left: calc(50% - 1280px);
    padding-right: calc(50% - 1280px);
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    padding-top: 12rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.4rem;
  }
`;
