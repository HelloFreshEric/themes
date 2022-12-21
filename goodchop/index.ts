import { Brand } from '@/libs/system-country';

import { ThemeSpecification } from '../specification';

import colors from './colors';
import space from './space';
import lineHeights from './lineHeights';
import fontSizes from './fontSizes';
import fonts from './fonts';
import fontWeights from './fontWeights';
import shadows from './shadows';
import radii from './radii';
import breakpoints from './breakpoints';

const goodchopTheme: ThemeSpecification = {
  name: Brand.goodchop,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  shadows,
  radii,
  breakpoints,
};

export default goodchopTheme;
