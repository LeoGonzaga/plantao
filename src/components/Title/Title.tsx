import React from 'react';

import * as SC from './styles';

interface ITitle {
  value: string;
}

export const Title = ({ value }: ITitle): JSX.Element => {
  return <SC.Container>Farmácia {value}</SC.Container>;
};
