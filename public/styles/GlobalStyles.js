import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/*
primary color: #07002E 
second color: #544A70
three color #56545ffc
 */

 /* 
 Dark
 primary Color: #0e3942
 second color: #082e39
  */

  html {

    font-size: 16px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    @media screen and (max-width: 480px) {
      font-size: 12px;
    }

    @media screen and (max-width: 320px) {
      font-size: 10px;
    }

  }

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  font-family: 'Roboto Slab', serif;
  box-sizing: border-box;
  color: #56545ffc;
  background: ${(props) => (props.Light === 'true' ? 'white' : '#8A8891')};
  padding: 2rem;

  @media screen and (max-width: 767px) {
      background: none;
      display: initial;
      padding: 0;
  }
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  display: none;
}

*, *:before, *:after {
  box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 ,h4 {
    margin: 0;
    padding: 0;
  }
  img {
    object-fit: cover;
  }
`;

export default GlobalStyles;
