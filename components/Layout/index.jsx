import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import Head from 'next/head';
import GlobalStyles from '../../public/styles/GlobalStyles';
import { Container, ItemProfile, ItemPages } from './styles';

import { useStateValue } from '../../helpers/Context';

import SectionProfile from '../folderNavProfile/ContainerProfile/index';

const Layout = ({
  // eslint-disable-next-line react/prop-types
  title, description, keywords, children,
}) => {
  const [{ Light }, dispatch] = useStateValue();

  const handleClick = () => {
    dispatch({
      type: 'ShowNavMobile',
      payload: false,
    });
  };

  return (
    <>
      <Head>
        <title>
          {title}
          {' '}
          || MR
        </title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <GlobalStyles Light={Light.toString()} />
      <Container Light={Light.toString()}>
        <ItemProfile Light={Light.toString()}>
          <SectionProfile />
        </ItemProfile>
        <ItemPages
          Light={Light.toString()}
          onClick={handleClick}
        >
          {children}
        </ItemPages>
      </Container>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};

export default Layout;
