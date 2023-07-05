import React from 'react';

import Background from '@/components/Background';
import Input from '@/components/Input';

import Logo from '../Logo';
import * as SC from './styles';

export const Header = (): JSX.Element => {
  return (
    <SC.Container>
      <Background />
      <Logo />
      <Input />
    </SC.Container>
  );
};
