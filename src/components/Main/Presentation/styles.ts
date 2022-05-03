import styled from 'styled-components';
import programmerImg from "../../../assets/programmer.png"

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  padding: 20px 80px;
`;

export const PresentationContainer = styled.div`
  display: flex;
  flex: 1;

  #right-side {
    display: flex;
    justify-content: center;
    flex-direction: column;
  
    #title-container {
      h1 {
        font-size: 50px;
        color: #19162B;
      }
    }
  }

  #left-side {
    display: flex;
    flex: 1;
    background-color: #987;

    background: url(${programmerImg}) no-repeat center;
    background-size: 100%;
  }
`
