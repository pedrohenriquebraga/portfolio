import styled, { keyframes } from "styled-components";

const ShowHeader = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

export const Container = styled.header<{ openHeader: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 5;

  padding: 2rem 3rem;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px #00000055;

  animation: ${ShowHeader} 500ms ease-in-out;

  transition: 300ms;
  
  nav {
    display: flex;
    align-items: center;

    #logo {
      margin-right: 2rem;
    }

    #close-header {
      display: none;
      button {
        display: flex;

        span {
          display: flex;
          align-items: center;
          margin-right: 5px;
        }

        color: #1d1ef9;
        background: transparent;
        font-size: 17px;
      }
    }

    #nav-buttons-container {
      margin-right: 5rem;
      .nav-button {
        &:not(:first-child) {
          margin-left: 3rem;
        }

        &:hover {
          color: #1d1ef9;
          transition: 300ms;
        }

        font-size: 1.6rem;
        font-weight: 600;
        text-decoration: none;
        color: #19162b;
      }
    }

    #social-buttons-container {
      margin-top: 1rem;
      .social-button {
        &:not(:first-child) {
          margin-left: 2rem;
        }

        &:hover {
          color: #1d1ef9;
          transition: 300ms;
        }

        font-size: 2.5rem;
        font-weight: 600;
        text-decoration: none;
        color: #19162b;
      }
    }
  }

  #menu-button-container {
    display: none;
    button {
      background: transparent;
      font-size: 2.5rem;

      &:hover {
        color: #1d1ef9;
      }
    }
  }

  @media (max-width: 1050px) {
    display: flex;
    padding: 2rem;

    nav {
      display: ${(props) => (!props.openHeader ? "none" : "flex")};

      height: 100vh;
      position: absolute;
      flex-direction: column;
      justify-content: space-around;
      background-color: #fcfcfd;
      right: 0;
      top: 0;

      padding: 2rem;
      box-shadow: 1px 1px 5px #00000055;

      #close-header {
        display: block;
      }

      #nav-buttons-container {
        display: flex;
        flex-direction: column;
        margin-right: 0;

        .nav-button {
          &:not(:first-child) {
            margin-left: 0px;
          }

          margin-bottom: 1rem;
        }
      }
    }

    #menu-button-container {
      display: block;
    }
  }
`;
