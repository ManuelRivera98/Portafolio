import React from 'react';

import { BsToggleOff, BsToggleOn, BsList } from 'react-icons/bs';
import { MdFilterList } from 'react-icons/md';

import { ContainerSection, IconButton, IconButton2 } from './styles';

import { useStateValue } from '../../../helpers/Context';

const Button = () => {
  const [{ Light, ShowNavMobile }, dispatch] = useStateValue();

  const handelClick = (type) => {
    dispatch({
      type,
      payload: type === 'On' ? !Light : !ShowNavMobile,
    });
  };

  return (
    <ContainerSection>

      <IconButton
        type="button"
        onClick={() => handelClick('On')}
        aria-label={Light ? 'Modo oscuro' : 'Modo claro'}
      >
        {
        Light ? <BsToggleOn size="100%" title="Button On" color="#0e3942" />
          : <BsToggleOff size="100%" title="Button Of" color="#07002E" />
}
      </IconButton>
      <IconButton2
        type="button"
        onClick={() => handelClick('ShowNavMobile', 'ShowNavMobile')}
      >
        {
        ShowNavMobile
          ? <MdFilterList size="100%" title="List" color={Light ? 'white' : '#07002E'} />
          : <BsList size="100%" title="List" color={Light ? 'white' : '#07002E'} />
        }

      </IconButton2>
    </ContainerSection>
  );
};

export default Button;
