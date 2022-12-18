import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  min-width: 400px;
  height: 100%;
  margin: 4rem auto;
  background-color: #EFEFEF;
  border-radius: 8px;
  box-shadow: -1px 1px 5px #00000077;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    .input-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      margin-bottom: 1rem;

      label {
        font-size: 1.5rem;
      }

      input,
      textarea {
        padding: 1rem;
        border: 1px solid #aaa;
        border-radius: 5px;
        font-family: "Poppins", sans-serif;
        font-size: 1.6rem;
      }

      textarea {
        resize: none;
      }
    }
    button {
      padding: 1.5rem 6rem;
      border-radius: 8px;
      width: 100%;
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      background-color: #5863d8;
      color: #fff;

      &:hover {
        background-color: #5862c7;
        transition: 500ms;
      }
    }
  }
`;
