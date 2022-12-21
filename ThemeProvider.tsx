import React, { createContext } from 'react';

import { Brand, useBrand } from './brands';
import SystemCountry from './brands/SystemCountry';

import allDynamicThemeProviders from './allDynamicThemeProviders';

type ThemeProviderProps = {
  systemCountry: SystemCountry;
  customBrand: Brand;
};

export const ThemeProviderContext = createContext<ThemeProviderProps>();

export const ThemeProvider: React.FC<React.PropsWithChildren<ThemeProviderProps>> = ({
  children,
  systemCountry,
  customBrand,
}) => {
  const contextBrand = useBrand();
  const DynamicThemeProvider =
    allDynamicThemeProviders[customBrand || contextBrand];

  return (
    <ThemeProviderContext.Provider value={{systemCountry, customBrand}}>
      <DynamicThemeProvider>
        {children}
      </DynamicThemeProvider>
    </ThemeProviderContext.Provider>
  );
};
