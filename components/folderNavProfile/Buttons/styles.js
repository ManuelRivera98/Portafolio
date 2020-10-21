import styled from 'styled-components';

export const ContainerSection = styled.section`
  display: flex;
  width: 20vw;

  @media screen and (min-width: 767px) {
    display: initial;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  text-align: center;
  width: 3rem;
  outline: none;
  margin-left: auto;
  cursor: pointer;
  padding: 0;

  :focus {
    transform: scale(1.1);
  }

  @media screen and (max-width: 767px) {
    width: 4rem;
  }
`;

export const IconButton2 = styled.button`
  background: none;
  border: none;
  text-align: center;
  width: 5rem;
  outline: none;
  margin-left: auto;
  cursor: pointer;
  padding: 0;

  @media screen and (min-width: 767px) {
    display: none;
  }
`;
