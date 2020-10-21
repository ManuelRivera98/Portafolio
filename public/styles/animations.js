import { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  } 
`;

const fadeIn = ({ time = '3s', type = 'easy' } = {}) => css`
  animation-name: ${fadeInKeyframes};
  animation-duration: ${time};
  animation-timing-function: ${type};
  will-change: transform;

`;

export default fadeIn;


const jumpKeyframes = keyframes`
  from {
    transform: translateY(0)
  } 
  to {
    transform: translateY(1.6rem)
  } 
`;

export const jump = ({ time = '.5s', type = 'easy' } = {}) => css`
  animation-name: ${jumpKeyframes};
  animation-duration: ${time};
  animation-timing-function: ${type};
  animation-iteration-count: infinite;
  animation-direction: alternate;
  will-change: transform;
`;

const selectedKeyframes = keyframes`
  from {
    background: none;
    padding: 0;
    color: white;
  }
  to {
    background: white;
    padding-left: 1.5rem;
    color: black;
  }
`;


export const selected = ({ time = '1s', type = 'easy' } = {}) => css`
  animation-name: ${selectedKeyframes};
  animation-duration: ${time};
  animation-timing-function: ${type};
  animation-fill-mode: forwards;
  will-change: transform;
`;

const rightToLeftKeyframes = keyframes`
  from {
    transform: translateX(12rem);
  }
  to {
    transform: translateX(0);
  }
`;

export const rightToLeft = () => css`
  animation-name: ${rightToLeftKeyframes};
  animation-duration: .5s;
  animation-timing-function: linear;
  will-change: transform;
`;
