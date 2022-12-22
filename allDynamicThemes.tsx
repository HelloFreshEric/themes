import { Brand } from './brands';

import chefsPlateTheme from './chefsplate';
import everyPlateTheme from './everyplate';
import factorTheme from './factor';
import goodchopTheme from './goodchop';
import greenChefTheme from './greenchef';
import helloFreshTheme from './hellofresh';
import petstableTheme from './petstable';
import youfoodzTheme from './youfoodz';

const allDynamicThemes = {
  [Brand.chefsplate]: chefsPlateTheme,
  [Brand.everyplate]: everyPlateTheme,
  [Brand.factor]: factorTheme,
  [Brand.goodchop]: goodchopTheme,
  [Brand.greenchef]: greenChefTheme,
  [Brand.hellofresh]: helloFreshTheme,
  [Brand.petstable]: petstableTheme,
  [Brand.youfoodz]: youfoodzTheme,
};

export default allDynamicThemes;
