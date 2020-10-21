import styled from 'styled-components';

import fadeIn, { jump } from '../../../public/styles/animations';

export const List = styled.ul`
 ${fadeIn()}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerIcon = styled.div`
  ${jump()};
  width: 2rem;
`;
