import React, { createContext } from 'react';

import { Brand } from './brands';
import SystemCountry from './brands/SystemCountry';
import { getCurrentBrandFromSystemCountry } from './brands/brandCountries';
import { ThemeSpecification } from './specification';
import allDynamicThemes from './allDynamicThemes';

type ThemeProviderProps = {
  systemCountry: SystemCountry;
  customBrand: Brand;
};

export const ThemeProviderContext = createContext<ThemeSpecification>();

export const ThemeProvider: React.FC<React.PropsWithChildren<ThemeProviderProps>> = ({
  children,
  systemCountry,
  customBrand,
}) => {
  const contextBrand = getCurrentBrandFromSystemCountry(systemCountry);
  const theme = allDynamicThemes[customBrand || contextBrand];

  return (
    <ThemeProviderContext.Provider value={theme}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
