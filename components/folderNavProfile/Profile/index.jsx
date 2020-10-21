/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Container, Img, SectionName, Title, SubTitle,
} from './styles';

import data from '../../../data/index';

const Profile = () => {
  const { infoProfile: { name, occupation, avatar: { src, alt } } } = data;
  // Router
  const Router = useRouter();
  const { pathname } = Router;

  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <Img width="150" height="150" src={src} alt={alt} pathname={pathname} />
        </a>
      </Link>
      <SectionName>
        <Title>{name}</Title>
        <SubTitle><em>{occupation}</em></SubTitle>
      </SectionName>
    </Container>
  );
};

export default Profile;
