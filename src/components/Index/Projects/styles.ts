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

export const ProjectsSliderImagesContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;

  #slider-controller-container {
    position: absolute;
    
    display: flex;
    width: 90%;
    flex: 1;

    justify-content: space-between;
    align-items: center;

    right: 5%;
    top: 50%;

    .slider-controller {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      background: #00000055;
      color: #fff;
      border-radius: 50%;

      width: 5rem;
      height: 5rem;

      &:hover {
        background: #00000077;
        transition: 500ms;
      }

    }

    @media (max-width: 550px) {
      bottom: 20%;
    }
  }

  #slider-main-image {
    a {
      display: flex;
      flex-direction: column;
      width: 70%;
      flex: 1;
      user-select: none;
  
      align-items: center;
      justify-content: center;
      margin: auto;

      @media (max-width: 550px) {
        width: 100%;
      }
  
  
      cursor: pointer;
      text-decoration: none;
  
      h3 {
        text-align: center;
        font-size: 2.5rem;
        color: #fff;
        margin-bottom: 1rem;
      }
  
      img {
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }

    #slider-counter {
      user-select: none;
      width: 50%;
      font-size: 1.4rem;
      text-align: center;
      margin-top: 1rem;
      background-color: #00000055;
      padding: 1rem;
      border-radius: 8px;
      margin: 10px auto;
    }
  }
`;
