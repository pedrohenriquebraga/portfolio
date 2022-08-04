import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 5;

  padding: 2rem 3rem;
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

  nav {
    a {
      &:not(:first-child) {
        margin-left: 3rem;
      }

      &:hover {
        color: #1d1ef9;
        transition: 300ms;
      }

      font-size: 17px;
      font-weight: 600;
      text-decoration: none;
      color: #19162b;
    }
  }
`;
