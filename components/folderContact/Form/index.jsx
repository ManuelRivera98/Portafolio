import React from 'react';

import { FaUserAlt } from 'react-icons/fa';
import { MdEmail, MdSubject } from 'react-icons/md';

import {
  FormContain, Label, Campo, Message, IconWrapper, Button, ContainerButtons,
} from './styles';

const Form = () => (
  <FormContain action="mailto:manuel.rivera1788@gmail.com, mr98.dev@gmail.com" method="GET">
    <Label htmlFor="name">
      <IconWrapper>
        <FaUserAlt size="100%" color="#8A8891" />
      </IconWrapper>
      <Campo type="text" name="name" id="name" placeholder="nombre" />
    </Label>
    <Label htmlFor="subject">
      <IconWrapper>
        <MdEmail size="100%" color="#8A8891" />
      </IconWrapper>
      <Campo type="text" name="subject" id="subject" placeholder="asunto" required />
    </Label>
    <Label htmlFor="message">
      <IconWrapper>
        <MdSubject size="100%" color="#8A8891" />
      </IconWrapper>
      <Message name="body" placeholder="mensaje" required />
    </Label>
    <ContainerButtons>
      <Button type="submit" value="Enviar" />
      <Button type="reset" value="Reset" />
    </ContainerButtons>
  </FormContain>
);

export default Form;
