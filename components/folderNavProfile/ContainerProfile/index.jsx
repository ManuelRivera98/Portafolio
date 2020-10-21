import React from 'react';

import ContainerSectionProfile from './styles';

import Profile from '../Profile/index';
import NavBar from '../NavBar/index';

const SectionProfile = () => (
  <ContainerSectionProfile>
    <Profile />
    <NavBar />
  </ContainerSectionProfile>
);

export default SectionProfile;
