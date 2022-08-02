import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 5;

  padding: 1.5rem 4rem;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px #00000055;

  #logo {
    a {
      display: flex;
      align-items: center;

      text-decoration: none;
      color: #000;

      span {
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }
`;
