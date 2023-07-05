import React from 'react';

import Image from 'next/image';

import LOGO from '../../../assets/logo.png';
import * as SC from './styles';

export const Logo = (): JSX.Element => {
  return (
    <SC.Container>
      <Image src={LOGO} alt="" />
    </SC.Container>
  );
};
