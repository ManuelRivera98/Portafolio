import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { IconWrapper, IconLink } from './styles';

const Item = ({
  Icon, name, color, url,
}) => (
  <IconLink href={url} target="_blank" rel="noopener noreferrer">
    <IconWrapper>
      <Icon size="100%" color={color} title={name} />
    </IconWrapper>
  </IconLink>
);

Item.propTypes = {
  Icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Item;
