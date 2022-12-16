import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  color: #fff;
  background-color: #00000033;
  
  #countdown-container {
    text-align: center;
    padding: 2rem;

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.4rem;
      margin: 1rem;
      font-weight: 200;
    }
  }

  #birthday-container {
    h1 {
      font-size: 3rem;
    }
  }
`;
