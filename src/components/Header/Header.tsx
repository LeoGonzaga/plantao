import React from 'react';

import Background from '@/components/Background';

import Logo from '../Logo';
import * as SC from './styles';

export const Header = (): JSX.Element => {
  return (
    <SC.Container>
      <Background />
      <Logo />
      <SC.Description>
        Uma solução prática e eficiente para encontrar farmácias que estão de
        plantão aos finais de semana.
      </SC.Description>
    </SC.Container>
  );
};
