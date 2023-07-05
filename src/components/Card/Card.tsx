import React from 'react';

import Image from 'next/image';

import BLOB1 from '../../../assets/Group 9.png';
import Address from '../Address';
import Tag from '../Tag';
import Title from '../Title';
import * as SC from './styles';

export const Card = (): JSX.Element => {
  return (
    <SC.Container>
      <div>
        <Image src={BLOB1} alt="" />
      </div>
      <div>
        <Tag />
        <Title />
        <Address />
      </div>
    </SC.Container>
  );
};
