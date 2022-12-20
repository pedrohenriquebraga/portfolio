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
    margin: 0 auto;

    .post-container {
      width: 30rem;
      background-color: #fafafa;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: -1px 1px 3px 2px #00000055;
      margin: 1rem;

      #message {
        font-size: 1.7rem;
        font-style: italic;
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
          font-size: 1.1rem;
          font-weight: lighter;
          color: #555;
        }
      }

      transition: 500ms;
      &:hover {
        background-color: #5863d8;
        color: #fff;
        
        & #author {
          span {
            color: #ccc;
          }
          color: #fff;
        }
      }
    }
  }
`;
