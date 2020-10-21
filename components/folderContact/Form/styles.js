import styled from 'styled-components';
import fadeIn from '../../../public/styles/animations';

export const FormContain = styled.form`
  ${fadeIn()};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: flex; 
  flex-direction: column;
  margin-bottom: .5rem;
  font-size: 1rem;
`;

export const Campo = styled.input`
  width: 15rem;
  height: 3rem;
  border-radius: .5rem;
  border: 2px solid #8A8891;
  background: none;
  outline: none;
  font-size: .8rem;
  padding: .5rem;

  :focus {
    outline: 2px solid #56545ffc;
  }

  ::placeholder {
    color: #8A8891;
    font-weight: 700;
    padding: .5rem;
    font-size: .8rem;
  }
`;

export const IconWrapper = styled.div`
  align-self: flex-start;
  width: .8rem;
  margin-bottom: .5rem;
`;


export const Message = styled.textarea`
  border-radius: .5rem;
  width: 15rem;
  height: 4rem;
  border: 2px solid #8A8891;
  background: none;
  outline: none;
  font-size: .8rem;
  padding: .5rem;

  :focus {
    outline: 2px solid #56545ffc;
  }

  ::placeholder {
    color: #8A8891;
    font-weight: 700;
    padding: .5rem;
    font-size: .8rem;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
`;

export const Button = styled.input`
  background: #07002E;
  color: white;
  width: 5rem;
  height: 2rem;
  margin: 0 .2rem;
  font-size: .8rem;
  transition: 1s;
  box-shadow: .1rem .1rem .1rem .1rem rgba(0, 0, 0, .2);
  border-radius: .7rem;
  cursor: pointer;
  border: none;
  outline: none;

  :focus {
    transform: scale(1.1);
  }

  :hover {
    transform: scale(1.1);
  }
`;
