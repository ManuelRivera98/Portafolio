import styled from 'styled-components';

import fadeIn from '../../../public/styles/animations';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 15rem;
  margin: 2rem;
  border-bottom: 1px solid #07002E;
  text-align: center;
  transition: 1s;

  @media screen and (max-width: 767px) {
    :hover {
      transform: scale(1.4);
  }

  }

  :hover {
    transform: scale(1.2);
  }

  h2 {
    ${fadeIn()};
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
  }

  h4 {
    ${fadeIn()};
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: .5rem;
  }

  p {
    ${fadeIn()};
    font-size: .8rem;
    margin: .5rem 0;
    line-height: 1.2rem;
  }
`;

export default Article;
