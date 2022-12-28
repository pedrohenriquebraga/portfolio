import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;

  .button-container {
    display: flex;
    cursor: pointer;
    background-color: #1d1ef9;

    &.github {
      background-color: #000;
    }

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

    padding: 1.2rem 3rem;
    border-radius: 8px;

    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;

    &:first-child {
      margin-right: 2rem;
    }

    span {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-right: 5px;
    }

    &:hover {
      transform: scale(1.08);
      box-shadow: 0px 4px 8px #00000044;
    }

    transition: 300ms;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .button-container {
      margin-bottom: 1rem;
      padding: 1rem;
      width: 100%;
      max-width: 320px;
    }
  }
`;
