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
  isOpen: boolean;
}

export const Card = ({
  address,
  contact,
  name,
  isOpen,
}: ICard): JSX.Element => {
  return (
    <SC.Container isOpen={isOpen}>
      <div>
        <Image src={BLOB1} alt="" />
      </div>
      <div>
        <Tag value={contact} isOpen={isOpen} />
        <Title value={name} />
        <Address value={address} />
      </div>
    </SC.Container>
  );
};
