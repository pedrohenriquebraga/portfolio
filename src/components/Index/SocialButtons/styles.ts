import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  .button-container {
    display: flex;
    

    cursor: pointer;
    background-color: #1D1EF9;
    padding: 10px 30px;
    border: 2px solid transparent;
    border-radius: 12px;

    font-size: 18px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;

    &:first-child {
      margin-right: 20px;
    }

    span {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-right: 5px;
    }

    &:hover {
      background-color: #fcfcfd;
      border: 2px solid #1D1EF9;
      transition: 300ms;
      color: #19162b;
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
