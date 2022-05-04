import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 5;

  padding: 20px 80px;
  background-color: #FCFCFD;
  box-shadow: 1px 1px 5px #00000055;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    #nav-buttons-container {
      .nav-button {
        &:not(:first-child) {
          margin-left: 30px;
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

    #social-buttons-container {

      .social-button {
        &:not(:first-child) {
          margin-left: 20px;
        }

        &:hover {
          color: #1d1ef9;
          transition: 300ms;
        }

        font-size: 25px;
        font-weight: 600;
        text-decoration: none;
        color: #19162b;
      }
    }
  }
`;
