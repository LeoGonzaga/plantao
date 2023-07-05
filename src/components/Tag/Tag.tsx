import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';

import Router from 'next/router';

import * as SC from './styles';
interface ITag {
  value: string;
}

const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=`;
const MESSAGE = `&text=Olá!`;

export const Tag = ({ value }: ITag): JSX.Element => {
  const handleClick = () => {
    const phoneClean = value.replace(/[^\w]/g, '');
    const LINK = WHATSAPP_URL + phoneClean + MESSAGE;
    Router.push(LINK);
  };

  return (
    <SC.Container>
      <div>
        <SC.Online />
        Aberto agora
      </div>

      <button onClick={handleClick}>
        <BiSolidPhoneCall size={20} color="#000" />
      </button>
    </SC.Container>
  );
};
