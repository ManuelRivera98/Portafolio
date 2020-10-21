import styled from 'styled-components';


import { selected } from '../../../public/styles/animations';

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
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
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
