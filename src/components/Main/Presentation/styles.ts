import styled, { keyframes } from "styled-components";
import programmerImg from "../../../assets/programmer.png";

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
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 2rem 8rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 4rem;
  }
`;

export const PresentationContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  #right-side {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;

    #title-container {
      h1 {
        font-size: 4.2rem;
        color: #19162b;
      }
    }
  }

  #left-side {
    display: flex;
    width: 50%;

    background: url(${programmerImg}) no-repeat center;
    background-size: 100%;
  }

  #scroll-warning {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;

    font-size: 1.6rem;
    animation: ${scrollDownAnimation} 1s linear infinite;

    span {
      display: flex;
      align-items: center;
      margin-right: 5px;
    }
  }

  @media (max-width: 768px) {
    #right-side {
      width: 100%;
    }

    #left-side {
      display: none;
    }

    #right-side {
      #title-container {
        h1 {
          font-size: 3.5rem;
        }
      }
    }

    #scroll-warning {
      bottom: -5rem;
    }
  }
`;
