import styled from "styled-components";
import ReadingImg from "../../../assets/reading.svg"

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 40px 80px;
  background-color: #5863d8;

  #about-me-container {

    width: 50%;

    h2 {
      color: #fff;
      font-size: 35px;
      margin-bottom: 30px;
    }
    p {
      font-size: 20px;
      margin-bottom: 20px;
      color: #fcfcfd;
    }
  }

  #left-side {
    width: 50%;
    background: url(${ReadingImg}) no-repeat center;
    background-size: contain;
  }
`;
