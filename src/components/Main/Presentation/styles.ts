import styled, { keyframes } from 'styled-components';
import programmerImg from "../../../assets/programmer.png"

const scrollDownAnimation = keyframes`
  0% {
    transform: translateY(-5%);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(-5%);
  }
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  padding: 20px 80px;
`;

export const PresentationContainer = styled.div`
  position: relative;
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

    background: url(${programmerImg}) no-repeat center;
    background-size: contain;
  }

  #scroll-warning {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;

    font-size: 16px;
    animation: ${scrollDownAnimation} 1s linear infinite;

    span {
      display: flex;
      align-items: center;
      margin-right: 5px;
    }
  }

`
