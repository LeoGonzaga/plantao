/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PHARMACYS } from '@/constants/pharmacy ';
import { SCHEDULING } from '@/constants/scheduling';

import * as SC from './styles';

const date = new Date();
const weekend = date.getDay();
const day = date.getDate();
const month = date.getMonth() + 1;

const SATURDAY = 6;
const SUNDAY = 0;

export interface IIsOpened {
  name: string;
  address: string;
  contact: string;
  isOpen: boolean;
}

const LOADING = () => (
  <>
    <SC.SSkeletonLine />
    <SC.SSkeletonLine />
    <SC.SSkeletonLine />
    <SC.SSkeletonLine />
    <SC.SSkeletonLine />
    <SC.SSkeletonLine />
    <SC.SSkeletonLine />
    <SC.SSkeletonLine />
    <SC.SSkeletonLine />
  </>
);

export const Home = (): JSX.Element => {
  const [selectedPharmacy, setSelectedPharmacy] = useState<IIsOpened[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const checkIsWeeked = () => {
    return weekend === SATURDAY || weekend === SUNDAY;
  };

  const getPharmacyByName = (name: string) => {
    return PHARMACYS.findIndex((elem) => elem.name === name);
  };

  const activeAllPharmacys = () => {
    return PHARMACYS.map(({ address, contact, name }) => {
      return {
        address,
        contact,
        isOpen: true,
        name,
      };
    });
  };

  const getOpenedInWeeked = () => {
    const actualMonth = SCHEDULING[month][0];
    const isToday = actualMonth[day];
    const index = getPharmacyByName(isToday.name);
    const items = [...PHARMACYS];
    items[index].isOpen = true;
    setSelectedPharmacy(items);
  };

  const getPharmacyOpen = () => {
    const isWeeked = checkIsWeeked();
    if (isWeeked) {
      getOpenedInWeeked();
      setIsLoading(false);

      return;
    }

    const allItems = activeAllPharmacys();
    setSelectedPharmacy(allItems);
    setIsLoading(false);
  };

  useEffect(() => {
    getPharmacyOpen();
  }, []);

  return (
    <div>
      <Header />
      <SC.Container>
        {isLoading && <LOADING />}

        {!isLoading &&
          selectedPharmacy.map((pharmacy) => (
            <Card key={pharmacy.name} {...pharmacy} />
          ))}
      </SC.Container>
      <Footer />
    </div>
  );
};
