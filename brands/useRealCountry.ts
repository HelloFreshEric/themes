import useSystemCountry from './useSystemCountry';
import { getRealCountryFromSystemCountry } from './brandCountries';

const useRealCountry = (): string => {
  const systemCountry = useSystemCountry();

  return getRealCountryFromSystemCountry(systemCountry);
};

export default useRealCountry;
