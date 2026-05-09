import styled from "styled-components";

export const Container = styled.main`
  padding: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1920px) {
    padding: 3rem 12rem;
  }

  @media (min-width: 1400px) and (max-width: 1919px) {
    padding: 3rem 8rem;
  }

  @media (min-width: 2561px) {
    padding-left: calc(50% - 1280px);
    padding-right: calc(50% - 1280px);
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

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
  width: 100%;
  max-width: 35rem;
  cursor: pointer;
  background-color: #f3f3f3;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid transparent;

  margin: 1rem;

  #banner {
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.6rem;
    margin: 1rem 0;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
  }

  #description {
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
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
