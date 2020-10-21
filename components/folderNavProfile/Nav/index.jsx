import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  AboutMe, Projects, Skills, Contact, ContainerNav,
} from './styles';

const Nav = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <ContainerNav>
        <Link href="/" passHref>
          <AboutMe pathname={pathname} aria-label="Primer elemento de 4 elementos, sobre mi">Sobre mi</AboutMe>
        </Link>
        <Link href="/projects" passHref>
          <Projects pathname={pathname} aria-label="Segundo elemento de 4 elementos, Proyectos">Proyectos</Projects>
        </Link>
        <Link href="/skills" passHref>
          <Skills pathname={pathname} aria-label="Tercer elemento de 4 elementos, Conocimientos">Conocimientos</Skills>
        </Link>
        <Link href="/contact" passHref>
          <Contact pathname={pathname} aria-label="ultimo elemento, Contacto">Contacto</Contact>
        </Link>
      </ContainerNav>
    </>
  );
};

export default Nav;
