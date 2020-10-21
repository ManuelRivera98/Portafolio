import React from 'react';

import Nav from '../Nav/index';
import NavMobile from '../NavMobile/index';
import Buttons from '../Buttons/index';

import { useStateValue } from '../../../helpers/Context';

const NavBar = () => {
  const [{ ShowNavMobile }] = useStateValue();

  return (
    <>
      <Nav />
      {ShowNavMobile && <NavMobile />}
      <Buttons />
    </>
  );
};

export default NavBar;
