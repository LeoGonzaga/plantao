import React from 'react';

import Card from '@/components/Card';
import Header from '@/components/Header';
import { PHARMACYS } from '@/constants/pharmacy ';

import * as SC from './styles';

export const Home = (): JSX.Element => {
  return (
    <div>
      <Header />

      <SC.Container>
        {PHARMACYS.map((pharmacy) => (
          <Card key={pharmacy.name} {...pharmacy} />
        ))}
      </SC.Container>
    </div>
  );
};
