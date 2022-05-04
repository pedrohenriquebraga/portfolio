import styled from 'styled-components';

export const Container = styled.div`

  padding: 30px 80px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 35px;
    color: #19162B;
  }
  
  #skills-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .skill-container {
      a {
        img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          filter: saturate(0%);

          &:hover {
            filter: saturate(100%);
            transform: scale(1.1);
            transition: 300ms;
          }
        }
      }
    }
  }
`;
