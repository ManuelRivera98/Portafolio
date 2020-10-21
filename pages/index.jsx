/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Layout from '../components/Layout/index';
import AboutMeContent from '../components/folderAboutMe/AboutMeContent/index';

import data from '../data/index';

const AboutMe = () => {
  const { infoAboutMe } = data;

  return (
    <Layout
      title="Manuel Rivera"
      description="Mi nombre es Manuel Rivera, soy front-end developer Jr, conoceme un poco mas"
      keywords="Manuel, Rivera, front-end developer, web developer"
    >
      <AboutMeContent {...infoAboutMe} />

    </Layout>
  );
};

export default AboutMe;
