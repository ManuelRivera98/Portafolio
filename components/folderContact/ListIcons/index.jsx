/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { FaHandPointDown } from 'react-icons/fa';

import { Container, ContainerIcon, List } from './styles';

import Item from '../Item/index';

import data from '../../../data/index';

const ListIcons = () => {
  const { infoContact } = data;

  return (
    <Container>

      <ContainerIcon>
        <FaHandPointDown size="100%" />
      </ContainerIcon>
      <List>
        {infoContact.map((icon) => (
          <li key={icon.id}>
            <Item {...icon} />
          </li>
        ))}
      </List>
    </Container>
  );
};

export default ListIcons;
