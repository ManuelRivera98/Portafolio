import styled from 'styled-components';

import fadeIn from '../../../public/styles/animations';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #07002E;
  margin: 2rem;
  height: 8rem;
  width: 12rem;
  text-align: center;
  will-change: transform, transition;
  transition-duration: 1s;

  :hover {
    transform: scale(1.5);
  };

  p {
    font-size: .8rem;
    ${fadeIn()};
  }
`;

export const IconContainer = styled.div`
  width: 2.5rem;
  ${fadeIn()};
`;
