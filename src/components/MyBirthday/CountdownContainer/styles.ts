import styled, { keyframes } from "styled-components";

const CountdownAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  color: #fff;
  background-color: #00000033;
  text-align: center;

  #countdown-container {
    text-align: center;
    padding: 2rem;

    h1 {
      font-size: 3rem;
      font-family: 'JetBrains Mono', monospace;;
      animation: ${CountdownAnimation} 3s alternate infinite;
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

    p {
      text-align: center;
      font-size: 1.4rem;
    }

    #send-message-buttons {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      .send-message-button {
        color: #fff;
        text-decoration: none;
        font-size: 1.4rem;
        padding: 1.5rem;
        border-radius: 8px;
        margin: 1rem;

        background-color: #fd5949;


        &.instagram {
          background: radial-gradient(
            circle at 30% 107%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 60%,
            #285aeb 90%
          );
        }

        &.mural {
          background-color: #5863d8;
        }

        &:hover {
          transform: scale(1.05);
        }
        
        transition: 500ms;
      }
    }
  }
`;
