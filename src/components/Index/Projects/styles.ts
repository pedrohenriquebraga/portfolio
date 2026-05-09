import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 4rem 6rem;
  background-color: #5863d8;
  width: 100%;

  @media (min-width: 1920px) {
    padding: 4rem 12rem;
  }

  @media (min-width: 1400px) and (max-width: 1919px) {
    padding: 4rem 8rem;
  }

  @media (min-width: 2561px) {
    padding-left: calc(50% - 1280px);
    padding-right: calc(50% - 1280px);
  }

  @media (max-width: 1024px) {
    padding: 4rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }

  #my-projects-container {
    h2 {
      color: #fff;
      font-size: 3.5rem;
      margin-bottom: 3rem;
    }
    p {
      font-size: 1.7rem;
      margin-bottom: 2rem;
      color: #fcfcfd;

      a {
        color: #fcfcfd;
        text-decoration: underline;
        &:hover {
          color: #dedede;
          transition: 500ms;
        }
      }
    }
  }
`;

export const ProjectsCardsContainer = styled.div`
  column-count: 3;
  column-gap: 1.5rem;

  @media (max-width: 1400px) {
    column-count: 2;
  }

  @media (max-width: 768px) {
    column-count: 1;
  }

  .card-container {
    width: 90%;
    margin: 0;
    break-inside: avoid;
    margin-bottom: 1.5rem;

    img {
      width: 100%;
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
    }

    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      line-height: 1.4;
      min-height: 3rem;
      display: flex;
      align-items: center;
    }

    #project-infos-container {
      background-color: #fff;
      margin-top: -.5rem;
      padding: 1.5rem;  
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      display: flex;
      flex-direction: column;

      #techs-container {
        margin: 10px 0;
        order: 3;

        .tech {
          display: inline-block;
          margin: .2rem .5rem;
          background-color: #5863d8;
          color: #fff;
          padding: .5rem 1.2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 20px;
        }
      }

      p {
        color: #000;
        font-size: 1.4rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        flex-grow: 1;
        order: 2;
        min-height: 4rem;
      }

      a {
        display: block;
        background-color: #000;
        color: #fff;
        padding: 1rem;
        text-align: center;
        font-weight: 600;
        font-size: 1.1rem;
        text-decoration: none;
        cursor: pointer;
        border-radius: 12px;
        order: 4;
      }
    }

    &:hover {
      transform: scale(1.05);
    }

    transition: 250ms;
  }

  @media (max-width: 1200px) {
    column-count: 2;
  }

  @media (max-width: 632px) {
    display: grid;
    grid-template-columns: 1fr;
    column-count: unset;
    
    .card-container {
      width: 100%;
      margin-bottom: 10px;
      break-inside: auto;
    }
  }
`;