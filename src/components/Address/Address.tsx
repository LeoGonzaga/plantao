import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';

import * as SC from './styles';

interface IAddress {
  value: string;
}

export const Address = ({ value }: IAddress): JSX.Element => {
  return (
    <SC.Container>
      <BiLocationPlus />
      {value}
    </SC.Container>
  );
};
