import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 4rem 8rem;
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
  align-items: center;
  justify-content: center;

  #slider-controller-container {
    position: absolute;
    
    display: flex;
    width: 100%;
    flex: 1;

    justify-content: space-between;
    align-items: center;

    top: 50%;

    .slider-controller {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
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
  }

  #slider-main-image {
    display: flex;
    flex: 1;
    width: 100%;
    user-select: none;

    cursor: pointer;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;
