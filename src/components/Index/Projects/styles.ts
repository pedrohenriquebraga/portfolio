import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 4rem 6rem;
  background-color: #5863d8;

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

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  gap: .3rem;

  
  .card-container {
    width: 28rem;
    margin: 0 auto;

    img {
      width: 100%;
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
    }

    h3 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }

    #project-infos-container {
      background-color: #fff;
      margin-top: -.5rem;
      padding: 1.5rem;  
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;

      #techs-container {
        margin: 10px 0;

        .tech {
          display: inline-block;
          margin: .2rem .5rem;
          background-color: #5863d8;
          color: #fff;
          padding: .5rem 1.2rem;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 20px;
        }
      }

      p {
        color: #000;
        font-size: 1.4rem;
        margin-bottom: -.3rem;
      }

      a {
        display: block;
        background-color: #000;
        color: #fff;
        padding: 1rem;
        text-align: center;
        font-weight: 600;
        font-size: 1.2rem;
        text-decoration: none;
        cursor: pointer;
        border-radius: 12px;
      }
    }

    &:hover {
      transform: scale(1.05);
    }

    transition: 250ms;
  }

  @media (max-width: 632px) {
    .card-container {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;