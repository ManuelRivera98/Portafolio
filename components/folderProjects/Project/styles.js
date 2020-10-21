import styled from 'styled-components';

import fadeIn from '../../../public/styles/animations';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 18rem;
  height: 22rem;
  margin: 2rem;
`;

export const Title = styled.h2`
  ${fadeIn()};
  font-size: 1.2rem;
  margin-bottom: .5rem;
`;

export const ImgWrapper = styled.div`
  ${fadeIn()};
  width: 100%;
  height: 10rem;
  margin-bottom: .5rem;
`;

export const P = styled.p`
  ${fadeIn()};
  font-size: 1rem;
  margin: 0;
  margin-bottom: .5rem;
  text-align: center;
`;


export const ContainerButton = styled.div`
  ${fadeIn()};
  display: flex;
  justify-content: center;
`;

export const ButtonLink = styled.a`
  ${fadeIn()};
  font-family: 'Roboto Slab', serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: .7rem;
  background: #07002E;
  color: white;
  width: 5rem;
  height: 2rem;
  margin: 0 .2rem;
  font-size: .8rem;
  transition: 1s;
  box-shadow: .1rem .1rem .1rem .1rem rgba(0, 0, 0, .2);
  outline: none;

  :focus {
    transform: scale(1.1);
  }

  :hover {
    transform: scale(1.1);
  }

  span {
    ${fadeIn()};
    width: 1rem;
    margin-right: .2rem;
  }
`;
