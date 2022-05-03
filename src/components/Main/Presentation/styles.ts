import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 90vh;
  padding: 20px 80px;
  justify-content: center;
  flex-direction: column;

  #title-container {
    #author {
      font-size: 16px;
      font-weight: 600;
      color: #1D1EF9;
    }

    h1 {
      font-size: 50px;
      color: #19162B;
    }
  }
`;
