/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import List from './styles';

import ItemIcon from '../ItemIcon/index';

import data from '../../../data/index';

const ListSkillsIcons = () => {
  const { infoSkills: { skillsIcons } } = data;
  return (
    <List>
      {skillsIcons.map((icon) => (
        <li key={icon.id}>
          <ItemIcon {...icon} />
        </li>
      ))}
    </List>
  );
};

export default ListSkillsIcons;
