import { useContext } from 'react';

import SystemCountry from './SystemCountry';
import { ThemeProviderContext } from '../ThemeProvider';

const useSystemCountry = (): SystemCountry => {
  const { systemCountry } = useContext(ThemeProviderContext);
  return systemCountry
};

export default useSystemCountry;
