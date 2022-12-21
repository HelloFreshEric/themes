import useBrand from './useBrand';
import Brand from './Brand';
import { BrandFamily, brandFamilyMap } from './brandFamily';

/**
 * Get the current brand family.
 *
 * The current brand family by the current brand
 *
 * Example:
 *
 * ```ts
 * import { useBrandFamily } from '@/libs/system-country';
 *
 * const brand = useBrandFamily();
 * ```
 */
const useBrandFamily = (): BrandFamily => {
  const brand: Brand = useBrand();
  return brandFamilyMap[brand];
};

export default useBrandFamily;
