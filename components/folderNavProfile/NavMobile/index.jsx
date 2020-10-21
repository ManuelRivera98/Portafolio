import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useStateValue } from '../../../helpers/Context';

import {
  AboutMe, Projects, Skills, Contact, ContainerNav,
} from './styles';

const Nav = () => {
  const router = useRouter();
  const { pathname } = router;

  const [{ Light }] = useStateValue();

  return (
    <>
      <ContainerNav
        Light={Light.toString()}
      >
        <Link href="/" passHref>
          <AboutMe pathname={pathname}>Sobre mi</AboutMe>
        </Link>
        <Link href="/projects" passHref>
          <Projects pathname={pathname}>Proyectos</Projects>
        </Link>
        <Link href="/skills" passHref>
          <Skills pathname={pathname}>Conocimientos</Skills>
        </Link>
        <Link href="/contact" passHref>
          <Contact pathname={pathname}>Contacto</Contact>
        </Link>
      </ContainerNav>
    </>
  );
};

export default Nav;
