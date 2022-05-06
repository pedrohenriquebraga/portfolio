import styled from "styled-components";
import ContactImg from "../../../assets/contact.svg";

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 40px 80px;
  color: #19162b;

  h2 {
    font-size: 35px;
    margin-bottom: 30px;
  }

  #contact-container {
    display: flex;
    flex-direction: column;

    width: 50%;

    p,
    ul {
      font-size: 19px;
      margin-bottom: 20px;

      list-style: none;

      li {
        margin-bottom: 5px;
        a {
          text-decoration: none;
          color: #5863d8;

          :hover {
            color: #19162b;
            text-decoration: underline;
            transition: 300ms;
          }
        }
      }
    }
  }

  #left-side {
    display: flex;
    width: 50%;
    background: url(${ContactImg}) no-repeat center;
    background-size: contain;
  }
`;
