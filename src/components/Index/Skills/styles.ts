import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  min-height: 30rem;
  overflow: hidden;
  width: 100%;

  h2 {
    margin-bottom: 3.5rem;
    font-size: 3.5rem;
    color: #19162b;
    position: relative;
    z-index: 20;
    width: 100%;
    margin-bottom: 1%.5;
  }

  @media (min-width: 1920px) {
    padding: 6rem 12rem;
  }

  @media (min-width: 1400px) and (max-width: 1919px) {
    padding: 6rem 8rem;
  }

  @media (min-width: 2561px) {
    padding-left: calc(50% - 1280px);
    padding-right: calc(50% - 1280px);
  }

  @media (max-width: 1024px) {
    padding: 6rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

  #skills-container {
    display: flex;
    overflow: hidden;
    gap: 12rem;
    position: relative;
    width: 100%;
    will-change: transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100px;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      z-index: 10;
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100px;
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      z-index: 10;
    }

    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-50% - 12rem));
      }
    }

    animation: marquee 120s linear infinite;

    .skill-container {
      flex-shrink: 0;
      min-width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        display: flex;
        img {
          object-fit: cover;
          &:hover {
            transition: 250ms;
          }
        }
      }

      &:hover {
        transform: scale(1.2);
      }
      transition: 250ms;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 5rem;

    #skills-container {
      gap: 8rem;

      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-50% - 8rem));
        }
      }

      animation: marquee 120s linear infinite;
    }
  }
`;
