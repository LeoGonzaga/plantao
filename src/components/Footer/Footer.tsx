import React from 'react';

import * as SC from './styles';

export const Footer = (): JSX.Element => {
  return (
    <SC.Container>
      Desenvolvido por{' '}
      <a
        href="https://www.linkedin.com/in/leogonzaga/"
        target="_blank"
        rel="noreferrer"
      >
        Léo Gonzaga
      </a>
    </SC.Container>
  );
};
