import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';

import * as SC from './styles';

export const Address = (): JSX.Element => {
  return (
    <SC.Container>
      <BiLocationPlus />
      R. Xavier Lisboa, 92 - Centro, Pedralva
    </SC.Container>
  );
};
