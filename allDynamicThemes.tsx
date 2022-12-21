import React from 'react';

import { Brand } from './brands';

import type { ThemeSpecification } from './specification';

const allDynamicThemes: Record<
  Brand,
  React.ComponentType<React.PropsWithChildren<unknown>>
> = {
  [Brand.chefsplate]: React.lazy(async () => {
    return await import('./chefsplate');
  }),
  [Brand.everyplate]: React.lazy(async () => {
    return await import('./everyplate');
  }),
  [Brand.factor]: React.lazy(async () => {
    return await import('./factor');
  }),
  [Brand.goodchop]: React.lazy(async () => {
    return await import('./goodchop');
  }),
  [Brand.greenchef]: React.lazy(async () => {
    return await import('./greenchef');
  }),
  [Brand.hellofresh]: React.lazy(async () => {
    return await import('./hellofresh');
  }),
  [Brand.petstable]: React.lazy(async () => {
    return await import('./petstable');
  }),
  [Brand.youfoodz]: React.lazy(async () => {
    return await import('./youfoodz');
  }),
};

export default allDynamicThemes;
