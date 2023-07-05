import React from 'react';

import Image from 'next/image';

import BLOB1 from '../../../assets/Group 9.png';
import Address from '../Address';
import Tag from '../Tag';
import Title from '../Title';
import * as SC from './styles';

interface ICard {
  name: string;
  address: string;
  contact: string;
}

export const Card = ({ address, contact, name }: ICard): JSX.Element => {
  return (
    <SC.Container>
      <div>
        <Image src={BLOB1} alt="" />
      </div>
      <div>
        <Tag value={contact} />
        <Title value={name} />
        <Address value={address} />
      </div>
    </SC.Container>
  );
};
