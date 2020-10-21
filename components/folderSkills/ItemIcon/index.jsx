import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import IconContainer from './styles';

const ItemIcon = ({ Icon, color, name }) => (
  <IconContainer>
    <Icon color={color} size="100%" title={name} />
  </IconContainer>
);

ItemIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ItemIcon;
