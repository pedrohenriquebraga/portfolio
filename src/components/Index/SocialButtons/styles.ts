import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;

  .button-container {
    display: flex;
    

    cursor: pointer;
    background-color: #1D1EF9;
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
      transition: 300ms;
      transform: scale(1.05);
    }
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
