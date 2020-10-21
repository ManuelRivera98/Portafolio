import styled from 'styled-components';


import { selected, rightToLeft } from '../../../public/styles/animations';

export const AboutMe = styled.a`
  ${(props) => (props.pathname === '/' ? selected() : 'none')};
`;

export const Projects = styled.a`
  ${(props) => (props.pathname === '/projects' ? selected() : 'none')};


`;
export const Skills = styled.a`
  ${(props) => (props.pathname === '/skills' ? selected() : 'none')};
  
`;
export const Contact = styled.a`
  ${(props) => (props.pathname === '/contact' ? selected() : 'none')};
`;

export const ContainerNav = styled.nav`
  position: fixed;
  z-index: 3;
  top: 7rem;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 12rem;
  background: ${(props) => (props.Light === 'true' ? '#07002E' : '#0e3942')};
  padding: 0 .5rem;
  border-bottom-left-radius: 1rem;
  ${rightToLeft()};

  @media screen and (min-width: 767px) {
    display: none;
  }

  a {
    color: white;
    font-size: 1rem;
    margin-bottom: .5rem;
    height: 3rem;
    border-radius: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 3rem;
  }
`;
