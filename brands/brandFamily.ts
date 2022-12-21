import Brand from './Brand';

export enum BrandFamily {
  HelloFresh = 'HF',
  WhiteLabelMealKits = 'WLMK',
  ReadyToEat = 'RTE',
  NewVentures = 'NV',
}

export const brandFamilyMap: Record<Brand, BrandFamily> = {
  [Brand.greenchef]: BrandFamily.WhiteLabelMealKits,
  [Brand.everyplate]: BrandFamily.WhiteLabelMealKits,
  [Brand.hellofresh]: BrandFamily.HelloFresh,
  [Brand.factor]: BrandFamily.ReadyToEat,
  [Brand.chefsplate]: BrandFamily.WhiteLabelMealKits,
  [Brand.goodchop]: BrandFamily.NewVentures,
  [Brand.youfoodz]: BrandFamily.ReadyToEat,
  [Brand.petstable]: BrandFamily.NewVentures,
};
