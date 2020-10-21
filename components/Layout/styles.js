import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: .5rem .5rem 1rem .5rem rgba(0, 0, 0, .5);
  border-radius: 1rem;
  background: ${(props) => (props.Light === 'true' ? 'white' : '#082e39')};
  width: calc(100vw - 4rem);
  height: calc(100vh - 4rem);

  @media screen and (max-width: 767px) {
    grid-template-columns: initial;
    grid-template-rows: 7rem calc(100vh - 7rem);
    width: 100%;
    height: 100%;
  }
`;

export const ItemProfile = styled.header`
  grid-column: 1 / 2;
  background: ${(props) => (props.Light === 'true' ? '#07002E' : '#0e3942')};
  border-radius: 1rem;
  padding: 2rem;

  @media screen and (max-width: 767px) {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 2;
    grid-column: initial;
    grid-row: 1 / 2;
    border-radius: initial;
    padding: .5rem;
    height: 7rem;
  }
`;

export const ItemPages = styled.section`
  grid-column: 2 / -1;
  padding: 2rem;
  overflow-y: auto;
  border-radius: 1rem;
  background: ${(props) => (props.Light === 'true' ? 'white' : '#082e39')};


  @media screen and (max-width: 767px) {
    grid-column: initial;
    grid-row: 2 / -1;
    border-radius: initial;
    height: 100%;
  }
`;
