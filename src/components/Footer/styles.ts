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
