import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { Brand } from '@/libs/system-country';

import type { ThemeSpecification } from './specification';
import React from 'react';
import dynamic from 'next/dynamic';

const createDynamicThemeProvider = (theme: ThemeSpecification) => {
  const DynamicThemeProvider: React.FC<React.PropsWithChildren<unknown>> = ({
    children,
  }) => {
    return (
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    );
  };

  return DynamicThemeProvider;
};

const allDynamicThemeProviders: Record<
  Brand,
  React.ComponentType<React.PropsWithChildren<unknown>>
> = {
  [Brand.chefsplate]: dynamic(async () => {
    const { default: theme } = await import('./chefsplate');

    return createDynamicThemeProvider(theme);
  }),
  [Brand.everyplate]: dynamic(async () => {
    const { default: theme } = await import('./everyplate');

    return createDynamicThemeProvider(theme);
  }),
  [Brand.factor]: dynamic(async () => {
    const { default: theme } = await import('./factor');

    return createDynamicThemeProvider(theme);
  }),
  [Brand.goodchop]: dynamic(async () => {
    const { default: theme } = await import('./goodchop');

    return createDynamicThemeProvider(theme);
  }),
  [Brand.greenchef]: dynamic(async () => {
    const { default: theme } = await import('./greenchef');

    return createDynamicThemeProvider(theme);
  }),
  [Brand.hellofresh]: dynamic(async () => {
    const { default: theme } = await import('./hellofresh');

    return createDynamicThemeProvider(theme);
  }),
  [Brand.petstable]: dynamic(async () => {
    const { default: theme } = await import('./petstable');

    return createDynamicThemeProvider(theme);
  }),
  [Brand.youfoodz]: dynamic(async () => {
    const { default: theme } = await import('./youfoodz');

    return createDynamicThemeProvider(theme);
  }),
};

export default allDynamicThemeProviders;
