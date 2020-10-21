import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: initial;
    justify-content: space-evenly;
    width: 80vw;
  }
`;

export const Img = styled.img`
  border-radius: 15rem;
  object-fit: cover;
  box-shadow: .2rem .2rem .2rem .4rem rgba(0 , 0, 0, .4);

  @media screen and (max-width: 1024px) {
    width: 110px;
    height: 110px;
  }

  @media screen and (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
  
  @media screen and (max-width: 480px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 320px) {
    width: 50px;
    height: 50px;
  }



`;

export const SectionName = styled.div`
  margin: .5rem 0;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  color: #8A8891;
`;

export const SubTitle = styled.h1`
  font-size: 1.4rem;
  color: #8A8891;
`;
