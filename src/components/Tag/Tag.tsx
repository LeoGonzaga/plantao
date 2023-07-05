import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';

import Router from 'next/router';

import * as SC from './styles';
interface ITag {
  value: string;
  isOpen: boolean;
}

const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=`;
const MESSAGE = `&text=Olá!`;

const CLOSED = 19;
const hour = new Date().getHours();
const beforeHours = hour < CLOSED;

export const Tag = ({ value, isOpen }: ITag): JSX.Element => {
  const iS_OPEN = isOpen && beforeHours;
  const handleClick = () => {
    const phoneClean = value.replace(/[^\w]/g, '');
    const LINK = WHATSAPP_URL + phoneClean + MESSAGE;
    Router.push(LINK);
  };

  return (
    <SC.Container isOpen={iS_OPEN}>
      <div>
        <SC.Online isOpen={iS_OPEN} />
        {iS_OPEN ? 'Aberto' : 'Fechado'} agora
      </div>

      {iS_OPEN && (
        <button onClick={handleClick}>
          <BiSolidPhoneCall size={20} color="#000" />
        </button>
      )}
    </SC.Container>
  );
};
