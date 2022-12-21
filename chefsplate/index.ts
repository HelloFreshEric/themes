import { Brand } from '../brands';

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

const chefsPlateTheme: ThemeSpecification = {
  name: Brand.chefsplate,
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

export default chefsPlateTheme;
