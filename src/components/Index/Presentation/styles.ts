import styled, { keyframes } from "styled-components";

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

const ShowBackgroundImage = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ShowPresentation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 2rem 6rem;
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

    animation: ${ShowPresentation} 500ms linear;

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

    background: url('/programmer.webp') no-repeat center;
    background-size: 100%;

    animation: ${ShowBackgroundImage} 500ms linear;
  }

  #scroll-warning {
    display: flex;
    position: absolute;
    top: 60vh;
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
  }
`;
