import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { Article, IconContainer } from './styles';

import useNearScreen from '../../../hooks/useNearScreen';

const Item = ({
  text, Icon, color, name,
}) => {
  const { show, element } = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
      <>
        <IconContainer>
          <Icon size="100%" color={color} title={name} />
        </IconContainer>
        <p>{text}</p>
      </>
      )}
    </Article>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Item;
