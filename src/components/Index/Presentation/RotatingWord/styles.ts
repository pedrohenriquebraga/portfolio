import styled, { keyframes } from "styled-components";

const glowEffect = keyframes`
  0%, 100% {
    text-shadow: 
      0 0 3px rgba(25, 22, 43, 0.2);
    color: #19162b;
  }
  50% {
    text-shadow: 
      0 0 8px rgba(25, 22, 43, 0.3),
      0 0 12px rgba(25, 22, 43, 0.15);
    color: #19162b;
  }
`;

const shakeEffect = keyframes`
  0%, 100% {
    transform: translateX(0) scale(1);
  }
  10% {
    transform: translateX(-2px) scale(1.02);
  }
  20% {
    transform: translateX(2px) scale(1.02);
  }
  30% {
    transform: translateX(-2px) scale(1.01);
  }
  40% {
    transform: translateX(2px) scale(1.01);
  }
  50% {
    transform: translateX(0) scale(1);
  }
`;

const fadeInOutSmooth = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const RotatingWordContainer = styled.span<{ isVisible: boolean }>`
  display: inline-block;
  animation: 
    ${glowEffect} 2.5s ease-in-out infinite,
    ${shakeEffect} 0.6s ease-in-out,
    ${fadeInOutSmooth} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: #19162b;
  font-weight: 700;
  transition: opacity 0.3s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  letter-spacing: 0.5px;
`;
