/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import List from './styles';

import Item from '../Item/index';

const ListHobbies = ({ hobbies }) => (
  <List>
    {hobbies.map((item) => (
      <li key={item.id}>
        <Item {...item} />
      </li>
    ))}
  </List>
);

ListHobbies.propTypes = {
  hobbies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default ListHobbies;
