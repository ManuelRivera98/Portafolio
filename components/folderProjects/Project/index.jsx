import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { FaRegEye, FaGithub } from 'react-icons/fa';
import {
  Article, Title, P, ImgWrapper, ContainerButton, ButtonLink,
} from './styles';

import useNearScreen from '../../../hooks/useNearScreen';


const Project = ({
  title, img, description, url, src,
}) => {
  const { show, element } = useNearScreen();

  return (
    <Article ref={element}>
      {show
      && (
      <>
        <Title>{title}</Title>
        <ImgWrapper>
          <img width="100%" height="100%" src={img} alt={title} />
        </ImgWrapper>
        <P>{description}</P>
        <ContainerButton>
          {url && (
          <ButtonLink href={url} target="_blank" rel="noopener noreferrer">
            <span>
              <FaRegEye title="Icon Eye" size="100%" />
            </span>
            Ir
          </ButtonLink>
          )}
          {src && (
          <ButtonLink href={src} target="_blank" rel="noopener noreferrer">
            <span>
              <FaGithub title="Icon GitHub" size="100%" />
            </span>
            Código
          </ButtonLink>
          )}
        </ContainerButton>
      </>
      )}
    </Article>
  );
};
Project.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Project;
