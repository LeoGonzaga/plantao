import React from 'react';

import Card from '@/components/Card';
import Header from '@/components/Header';

import * as SC from './styles';

export const Home = (): JSX.Element => {
  return (
    <div>
      <Header />
      <SC.Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SC.Container>
    </div>
  );
};
