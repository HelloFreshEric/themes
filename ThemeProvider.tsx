import React from 'react';

import { Brand, useBrand } from '@/libs/system-country';

import allDynamicThemeProviders from './allDynamicThemeProviders';

type ThemeProviderProps = {
  customBrand?: Brand;
};

const ThemeProvider: React.FC<React.PropsWithChildren<ThemeProviderProps>> = ({
  children,
  customBrand,
}) => {
  const contextBrand = useBrand();
  const DynamicThemeProvider =
    allDynamicThemeProviders[customBrand || contextBrand];

  return <DynamicThemeProvider>{children}</DynamicThemeProvider>;
};

export default ThemeProvider;
