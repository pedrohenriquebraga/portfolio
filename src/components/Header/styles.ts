import styled from "styled-components";

export const Container = styled.header<{ openHeader: boolean }>`
  position: fixed;
  width: 100%;
  z-index: 5;

  padding: 2rem 8rem;
  background-color: #fcfcfd;
  box-shadow: 1px 1px 5px #00000055;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

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
      .nav-button {
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

    #social-buttons-container {
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
        transition: 300ms;
      }
    }
  }

  @media (max-width: 872px) {
    display: flex;
    justify-content: flex-end;
    padding: 2rem;
    

    nav {
      display: ${(props) => (!props.openHeader ? "none" : "flex")};

      height: 100vh;
      position: absolute;
      flex-direction: column;
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
