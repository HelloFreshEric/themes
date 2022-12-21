import Brand from './Brand';
import SystemCountry from './SystemCountry';

export type HelloFreshGalaxy =
  | SystemCountry.AT
  | SystemCountry.AU
  | SystemCountry.BE
  | SystemCountry.CA
  | SystemCountry.CH
  | SystemCountry.DE
  | SystemCountry.DK
  | SystemCountry.ES
  | SystemCountry.FR
  | SystemCountry.IE
  | SystemCountry.IT
  | SystemCountry.JP
  | SystemCountry.LU
  | SystemCountry.NL
  | SystemCountry.NO
  | SystemCountry.NZ
  | SystemCountry.SE
  | SystemCountry.US
  | SystemCountry.GB;

export type EveryPlateGalaxy = SystemCountry.ER | SystemCountry.AO;

export type GreenchefGalaxy =
  | SystemCountry.CG
  | SystemCountry.GN
  | SystemCountry.GQ;

export type ChefsplateGalaxy = SystemCountry.CK;

export type FactorGalaxy = SystemCountry.FJ | SystemCountry.CF;

export type GoodchopGalaxy = SystemCountry.MR;

export type YoufoodzGalaxy = SystemCountry.YE;

export type PetsTableGalaxy = SystemCountry.KN;

export type BrandGalaxies =
  | HelloFreshGalaxy
  | EveryPlateGalaxy
  | GreenchefGalaxy
  | ChefsplateGalaxy
  | FactorGalaxy
  | GoodchopGalaxy
  | PetsTableGalaxy
  | YoufoodzGalaxy;

export type Universe = Record<Brand, Record<string, BrandGalaxies>>;

export const UNIVERSE: Universe = {
  [Brand.hellofresh]: {
    AT: SystemCountry.AT,
    AU: SystemCountry.AU,
    BE: SystemCountry.BE,
    CA: SystemCountry.CA,
    CH: SystemCountry.CH,
    DE: SystemCountry.DE,
    DK: SystemCountry.DK,
    ES: SystemCountry.ES,
    FR: SystemCountry.FR,
    IE: SystemCountry.IE,
    IT: SystemCountry.IT,
    JP: SystemCountry.JP,
    LU: SystemCountry.LU,
    NL: SystemCountry.NL,
    NO: SystemCountry.NO,
    NZ: SystemCountry.NZ,
    SE: SystemCountry.SE,
    US: SystemCountry.US,
    GB: SystemCountry.GB,
  },
  [Brand.everyplate]: {
    US: SystemCountry.ER,
    AU: SystemCountry.AO,
  },
  [Brand.greenchef]: {
    US: SystemCountry.CG,
    GB: SystemCountry.GN,
    NL: SystemCountry.GQ,
  },
  [Brand.chefsplate]: {
    CA: SystemCountry.CK,
  },
  [Brand.factor]: {
    US: SystemCountry.FJ,
    CA: SystemCountry.CF,
  },
  [Brand.goodchop]: {
    US: SystemCountry.MR,
  },
  [Brand.youfoodz]: {
    AU: SystemCountry.YE,
  },
  [Brand.petstable]: {
    US: SystemCountry.KN,
  },
};

/*
 * Get the `getCountriesFromBrand` from the given brand
 *
 * Example:
 *
 * ```ts
 * const label = getCountriesFromBrand('chefsplate');
 *
 *  //  { CA: 'CK' } || undefined
 * ```
 */
export const getCountriesFromBrand = (
  brand: Brand
): Record<string, BrandGalaxies> => {
  if (Object.keys(Brand).includes(brand)) {
    return UNIVERSE[brand];
  }

  throw new Error(`Brand ${brand} didn't match any of the known brands.`);
};

/**
 * Get the current brand from the `systemCountry`.
 *
 * Example:
 *
 * ```ts
 * const brand = getCurrentBrandFromSystemCountry('ER');
 *
 * // brand = 'everyplate'
 * ```
 */
export const getCurrentBrandFromSystemCountry = (
  systemCountryNeedle: SystemCountry
): Brand => {
  for (const [brand, countriesPerBrand] of Object.entries(UNIVERSE)) {
    for (const [, systemCountry] of Object.entries(countriesPerBrand)) {
      if (systemCountry === systemCountryNeedle) {
        return brand as Brand;
      }
    }
  }

  return Brand.hellofresh;
};

export const getRealCountryFromSystemCountry = (
  systemCountryNeedle: SystemCountry
): string => {
  for (const [, countriesPerBrand] of Object.entries(UNIVERSE)) {
    for (const [realCountry, systemCountry] of Object.entries(
      countriesPerBrand
    )) {
      if (systemCountry === systemCountryNeedle) {
        return realCountry;
      }
    }
  }

  throw new Error(`No real country found`);
};
