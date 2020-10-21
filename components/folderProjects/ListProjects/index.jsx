/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import List from './styles';

import Project from '../Project/index';

import data from '../../../data/index';

const ListProjects = () => {
  const { infoProjects } = data;
  return (
    <List>
      {infoProjects.map((project) => (
        <li key={project.id}>
          <Project {...project} />
        </li>
      ))}
    </List>
  );
};

export default ListProjects;
