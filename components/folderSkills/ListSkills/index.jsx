/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ListContainer from './styles';

import Item from '../Item/index';

import data from '../../../data/index';

const ListSkills = () => {
  const { infoSkills: { List } } = data;

  return (
    <ListContainer>
      {List.map((item) => (
        <li key={item.id}>
          <Item {...item} />
        </li>
      ))}
    </ListContainer>
  );
};

export default ListSkills;
