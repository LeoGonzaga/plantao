import { IIsOpened } from '@/screens/Home/Home';

import { PHARMACYS } from './pharmacy ';

interface IScheduling {
  [value: number]: Array<{
    [num: number]: IIsOpened;
  }>;
}

const ECONOMIZE = PHARMACYS[0];
const SAO_JOSE = PHARMACYS[1];
const VILAS_BOAS = PHARMACYS[2];
const SANTA_BRANCA = PHARMACYS[3];
const FERREIRA = PHARMACYS[4];
const PEDRALFARMA = PHARMACYS[5];

export const SCHEDULING: IScheduling = {
  7: [
    {
      1: VILAS_BOAS,
      2: VILAS_BOAS,
      8: SANTA_BRANCA,
      9: SANTA_BRANCA,
      15: FERREIRA,
      16: FERREIRA,
      22: PEDRALFARMA,
      23: PEDRALFARMA,
      29: ECONOMIZE,
      30: ECONOMIZE,
    },
  ],
  8: [
    {
      5: SAO_JOSE,
      6: SAO_JOSE,
      12: VILAS_BOAS,
      13: VILAS_BOAS,
      19: SANTA_BRANCA,
      20: SANTA_BRANCA,
      26: FERREIRA,
      27: FERREIRA,
    },
  ],
  9: [
    {
      2: PEDRALFARMA,
      3: PEDRALFARMA,
      7: ECONOMIZE,
      9: SAO_JOSE,
      10: SAO_JOSE,
      16: VILAS_BOAS,
      17: VILAS_BOAS,
      23: SANTA_BRANCA,
      24: SANTA_BRANCA,
      30: FERREIRA,
    },
  ],
  10: [
    {
      1: FERREIRA,
      7: PEDRALFARMA,
      8: PEDRALFARMA,
      12: ECONOMIZE,
      14: SAO_JOSE,
      15: SAO_JOSE,
      21: VILAS_BOAS,
      22: VILAS_BOAS,
      28: SANTA_BRANCA,
      29: SANTA_BRANCA,
    },
  ],
  11: [
    {
      2: FERREIRA,
      4: PEDRALFARMA,
      5: PEDRALFARMA,
      11: ECONOMIZE,
      12: ECONOMIZE,
      15: SAO_JOSE,
      18: VILAS_BOAS,
      19: VILAS_BOAS,
      25: SANTA_BRANCA,
      26: SANTA_BRANCA,
    },
  ],
  12: [
    {
      2: FERREIRA,
      3: FERREIRA,
      8: PEDRALFARMA,
      9: ECONOMIZE,
      10: ECONOMIZE,
      16: SAO_JOSE,
      17: SAO_JOSE,
      23: VILAS_BOAS,
      24: VILAS_BOAS,
      25: SANTA_BRANCA,
      30: FERREIRA,
    },
  ],
};
