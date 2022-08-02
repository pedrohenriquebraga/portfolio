import styled from "styled-components";

export const Container = styled.main`
  padding: 4rem;
  h2 {
    font-size: 2rem;
  }

  #post-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

export const PostCard = styled.a`
  width: 30rem;
  cursor: pointer;
  background-color: #f3f3f3;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid transparent;

  margin: 1rem;

  h3 {
    font-size: 1.6rem;
  }

  #description {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }

  #read-time, #author, #date {
    font-size: 1.4rem;
    color: #535353;
    margin-top: -1rem;
  }

  &:hover {

    transform: scale(1.05);
    border: 1px solid #5863d8;

    transition: 500ms;
  }
`;
