import styled from 'styled-components';

import fadeIn, { jump } from '../../../public/styles/animations';

const IconContainer = styled.div`
  ${fadeIn()};
  width: 3rem;
  margin: 2rem;
  transition: 1.5s;

  :hover {
    ${jump()}
  }
`;

export default IconContainer;
