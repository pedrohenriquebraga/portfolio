import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: rgb(254, 254, 254);
  background: linear-gradient(
    153deg,
    rgba(254, 254, 254, 1) 0%,
    rgba(255, 255, 255, 1) 18%,
    rgba(239, 239, 239, 1) 79%
  );

  h2 {
    margin: 2rem 0;
    font-size: 2rem;
  }

  #posts-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .post-container {
      width: 33rem;
      background-color: #fafafa;
      padding: 1.5rem;
      border-radius: 5px;
      box-shadow: -1px 1px 3px 2px #00000055;
      border: 2px dashed #55555555;
      margin: 1rem;

      #message {
        font-size: 1.6rem;
        font-style: italic;
        height: 250px;
        text-overflow: ellipsis;

        span {
          font-size: 2rem;
          font-weight: 600;
        }
      }

      #author {
        font-size: 1.6rem;
        text-align: right;
        margin: 0.5rem 0;
        color: #5863d8;
        font-weight: 600;

        span {
          font-size: 1rem;
          font-weight: lighter;
          color: #555;
        }
      }

      &:hover {
        border: 2px solid #5863d8;
        transition: 500ms;
      }
    }
  }
`;
