import Brand from './Brand';
import SystemCountry from './SystemCountry';
import {
  getCountriesFromBrand,
  getCurrentBrandFromSystemCountry,
} from './brandCountries';

describe('brandCountries', () => {
  describe('Brands functionalities', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    describe('getCountriesFromBrand(brand)', () => {
      it('should return countries of a chefsplate brand as an object', () => {
        expect(getCountriesFromBrand(Brand.chefsplate)).toEqual({
          CA: 'CK',
        });
        expect(getCountriesFromBrand(Brand.everyplate)).toEqual({
          AU: 'AO',
          US: 'ER',
        });
      });

      it('should throw an error for an unknown brand', () => {
        expect(() => getCountriesFromBrand('unknown' as Brand)).toThrow(
          "Brand unknown didn't match any of the known brands."
        );
      });
    });

    describe('getCurrentBrandFromSystemCountry(brand)', () => {
      it('should return countries of a chefsplate brand as an object', () => {
        expect(getCurrentBrandFromSystemCountry(SystemCountry.AO)).toBe(
          Brand.everyplate
        );
        expect(getCurrentBrandFromSystemCountry(SystemCountry.US)).toBe(
          Brand.hellofresh
        );
        expect(getCurrentBrandFromSystemCountry(SystemCountry.FJ)).toBe(
          Brand.factor
        );
        expect(getCurrentBrandFromSystemCountry(SystemCountry.ER)).toBe(
          Brand.everyplate
        );
      });

      it('should return countries of petstable brand as an object', () => {
        expect(getCurrentBrandFromSystemCountry(SystemCountry.KN)).toBe(
          Brand.petstable
        );

        expect(getCountriesFromBrand(Brand.petstable)).toEqual({
          US: 'KN',
        });
      });

      it('should return empty array for an unknown brand', () => {
        expect(
          getCurrentBrandFromSystemCountry('unknown' as SystemCountry)
        ).toBe(Brand.hellofresh);
      });
    });
  });
});
