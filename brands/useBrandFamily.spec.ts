import Brand from './Brand';
import { BrandFamily } from './brandFamily';
import useBrand from './useBrand';
import useBrandFamily from './useBrandFamily';

jest.mock('./useBrand');

describe('useBrandFamily', () => {
  it('should return HF brand family for HelloFresh', () => {
    const BRAND = Brand.hellofresh;
    (useBrand as jest.Mock).mockReturnValue(BRAND);
    const brandFamily = useBrandFamily();
    expect(brandFamily).toBe(BrandFamily.HelloFresh);
  });

  it('should return WLMK brand family for Chefsplate', () => {
    const BRAND = Brand.chefsplate;
    (useBrand as jest.Mock).mockReturnValue(BRAND);
    const brandFamily = useBrandFamily();
    expect(brandFamily).toBe(BrandFamily.WhiteLabelMealKits);
  });

  it('should return RTE brand family for Factor', () => {
    const BRAND = Brand.factor;
    (useBrand as jest.Mock).mockReturnValue(BRAND);
    const brandFamily = useBrandFamily();
    expect(brandFamily).toBe(BrandFamily.ReadyToEat);
  });

  it('should return NV brand family for Goodchop', () => {
    const BRAND = Brand.goodchop;
    (useBrand as jest.Mock).mockReturnValue(BRAND);
    const brandFamily = useBrandFamily();
    expect(brandFamily).toBe(BrandFamily.NewVentures);
  });
});
