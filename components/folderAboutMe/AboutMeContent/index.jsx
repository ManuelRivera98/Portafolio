import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { FaHandPeace } from 'react-icons/fa';

import { Container, Icon, P } from './styles';

import ListHobbies from '../ListHobbies/index';

const AboutMeContent = ({ text: { phrase, author }, hobbies }) => (
  <Container>

    <Icon>
      <FaHandPeace size="100%" color="#07002E" title="Peace" />
    </Icon>
    <P>{phrase}</P>
    <i>
      <span>{author}</span>
    </i>
    <ListHobbies hobbies={hobbies} />
  </Container>
);

AboutMeContent.propTypes = {
  text: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  hobbies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default AboutMeContent;
