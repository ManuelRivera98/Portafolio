import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import useNearScreen from '../../../hooks/useNearScreen';

import Article from './styles';

const Item = ({ title, items, description }) => {
  const { show, element } = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
      <>
        <h2>{title}</h2>
        <h4>{items}</h4>
        <p>{description}</p>
      </>
      )}
    </Article>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;
