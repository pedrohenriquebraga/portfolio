import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
  background-color: #5863d8;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1920px) {
    padding: 3rem 12rem;
  }

  @media (min-width: 1400px) and (max-width: 1919px) {
    padding: 3rem 8rem;
  }

  @media (min-width: 2561px) {
    padding-left: calc(50% - 1280px);
    padding-right: calc(50% - 1280px);
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #fff;
    text-align: center;

    a {
      color: #fff;
      text-decoration: underline;
    }
  }

  #social-networks {
    a {
      font-size: 2.3rem;
      margin: 0 .5rem;
    }
  }
`;
