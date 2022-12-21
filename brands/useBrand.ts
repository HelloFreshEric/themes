import useSystemCountry from './useSystemCountry';
import Brand from './Brand';
import { getCurrentBrandFromSystemCountry } from './brandCountries';

/**
 * Get the current brand.
 *
 * The current brand will be decided by the `systemCountry`
 * currently set in the app.
 *
 * Example:
 *
 * ```ts
 * import { useBrand } from '@/libs/system-country';
 *
 * const brand = useBrand();
 * ```
 */
const useBrand = (): Brand => {
  const systemCountry = useSystemCountry();

  return getCurrentBrandFromSystemCountry(systemCountry);
};

export default useBrand;
