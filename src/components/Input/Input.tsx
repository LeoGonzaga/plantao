import React from 'react';
import { BsSearch } from 'react-icons/bs';

import * as SC from './styles';

export const Input = (): JSX.Element => {
  return (
    <SC.Container>
      <BsSearch color="#CFCFCF" />
      <SC.StyledInput placeholder="Buscar por nome" />
    </SC.Container>
  );
};
