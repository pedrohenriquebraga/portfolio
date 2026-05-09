import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 12rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;

  @media (min-width: 1920px) {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  @media (min-width: 1400px) and (max-width: 1919px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  @media (min-width: 2561px) {
    padding-left: calc(50% - 1280px);
    padding-right: calc(50% - 1280px);
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .go-back {
    margin: 1rem 0;
    a {
      font-size: 1.6rem;
      text-decoration: none;
      color: #565656;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  #post {
    width: 100%;
    max-width: 70rem;
    padding: 3rem;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: Roboto, sans-serif;
      margin: 2.5rem 0;
    }

    h1 {
      font-size: 2.8rem;
    }

    h2 {
      font-size: 2.3rem;
    }

    h3 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1.8rem;
    }

    h5 {
      font-size: 1.6rem;
    }

    h6 {
      font-size: 1.3rem;
    }

    #main-title {
      font-size: 3.5rem;
      color: #000;
      margin: 0;
    }

    #description {
      font-size: 1.6rem;
      margin: 0.8rem 0;
      color: #565656;
    }

    #post-infos {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rem;
      flex-wrap: wrap;

      #date,
      #author,
      #read-time {
        font-size: 1.4rem;
        color: #727272;
        margin: 0 0.5rem;
      }
    }

    #banner {
      width: 100%;
      border-radius: 8px;
      object-fit: cover;
    }

    #content {
      margin-top: 2rem;

      p {
        font-size: 1.8rem;
        margin: 1.5rem 0;
      }

      a {
        color: #5863d8;
        text-decoration: none;
        &:hover {
          color: #6973d8;
          text-decoration: underline;
        }
        transition: 500ms;
      }

      ul,
      ol {
        margin: 1.2rem 0;
        li {
          font-size: 1.8rem;
          margin: 0.5rem 0;
          margin-left: 2rem;
        }
      }

      img {
        width: 100%;
        border-radius: 8px;
        margin: 1.5rem 0;
        object-fit: cover;
      }

      pre {
        margin: 1.5rem 0;
        background-color: #353535;
        color: #fff;
        padding: 1.5rem;
        border-radius: 8px;

        code {
          font-family: "JetBrains Mono", monospace;
          font-size: 1.4rem;
        }
      }

      blockquote {
        padding: 1.5rem;
        margin: 1.5rem 0 1.5rem 1.5rem;
        border-left: 3px solid #656565;

        p {
          color: #333;
          font-style: italic;
          font-size: 1.7rem;
        }
      }
    }
  }
`;
