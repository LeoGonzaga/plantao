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
const BENESSERE = PHARMACYS[4];
const PEDRALFARMA = PHARMACYS[5];

export const SCHEDULING: IScheduling = {
  3: [
    {
      2: SANTA_BRANCA,
      3: SANTA_BRANCA,
      9: BENESSERE,
      10: BENESSERE,
      16: PEDRALFARMA,
      17: PEDRALFARMA,
      23: ECONOMIZE,
      24: ECONOMIZE,
      29: SAO_JOSE,
      30: VILAS_BOAS,
      31: VILAS_BOAS,
    },
  ],
  4: [
    {
      6: SANTA_BRANCA,
      7: SANTA_BRANCA,
      13: BENESSERE,
      14: BENESSERE,
      20: PEDRALFARMA,
      21: PEDRALFARMA,
      27: ECONOMIZE,
      28: ECONOMIZE,
    },
  ],
  5: [
    {
      1: SAO_JOSE,
      4: VILAS_BOAS,
      5: VILAS_BOAS,
      7: SANTA_BRANCA,
      11: BENESSERE,
      12: BENESSERE,
      18: PEDRALFARMA,
      19: PEDRALFARMA,
      25: ECONOMIZE,
      26: ECONOMIZE,
      30: SAO_JOSE,
    },
  ],
  6: [
    {
      1: VILAS_BOAS,
      2: VILAS_BOAS,
      8: SANTA_BRANCA,
      9: SANTA_BRANCA,
      15: BENESSERE,
      16: BENESSERE,
      22: PEDRALFARMA,
      23: PEDRALFARMA,
      29: ECONOMIZE,
      30: ECONOMIZE,
    },
  ],
  7: [
    {
      6: SAO_JOSE,
      7: SAO_JOSE,
      13: VILAS_BOAS,
      14: VILAS_BOAS,
      20: SANTA_BRANCA,
      21: SANTA_BRANCA,
      27: BENESSERE,
      28: BENESSERE,
    },
  ],
  8: [
    {
      3: PEDRALFARMA,
      4: PEDRALFARMA,
      10: ECONOMIZE,
      11: ECONOMIZE,
      17: SAO_JOSE,
      18: SAO_JOSE,
      24: VILAS_BOAS,
      25: VILAS_BOAS,
      30: SANTA_BRANCA,
    },
  ],
  9: [
    {
      1: SANTA_BRANCA,
      7: BENESSERE,
      8: BENESSERE,
      14: PEDRALFARMA,
      15: PEDRALFARMA,
      21: ECONOMIZE,
      22: ECONOMIZE,
      28: SAO_JOSE,
      29: SAO_JOSE,
    },
  ],
  10: [
    {
      5: VILAS_BOAS,
      6: VILAS_BOAS,
      12: SANTA_BRANCA,
      13: SANTA_BRANCA,
      19: BENESSERE,
      20: BENESSERE,
      26: PEDRALFARMA,
      27: PEDRALFARMA,
    },
  ],
  11: [
    {
      2: ECONOMIZE,
      3: ECONOMIZE,
      9: SAO_JOSE,
      10: SAO_JOSE,
      15: VILAS_BOAS,
      16: SANTA_BRANCA,
      17: SANTA_BRANCA,
      20: BENESSERE,
      22: PEDRALFARMA,
      23: PEDRALFARMA,
      30: ECONOMIZE,
    },
  ],
  12: [
    {
      1: ECONOMIZE,
      7: SAO_JOSE,
      8: SAO_JOSE,
      14: VILAS_BOAS,
      15: VILAS_BOAS,
      21: SANTA_BRANCA,
      22: SANTA_BRANCA,
      25: BENESSERE,
      28: PEDRALFARMA,
      29: PEDRALFARMA,
    },
  ],
};
