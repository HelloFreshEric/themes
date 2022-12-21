import { Brand } from './brands';

export type ThemeSpecification = {
  name: Brand;
  colors: Record<ColorFamily, Record<ColorScale, string>>;
  fonts: Record<FontFamily, string>;
  fontSizes: Record<FontSize, string>;
  fontWeights: Record<FontWeight, number>;
  lineHeights: Record<LineHeight, string>;
  space: Record<Space, string | number>;
  shadows: Record<Shadow, string>;
  radii: Record<BorderRadius, string | number>;
  breakpoints: string[] & Record<Breakpoint, string>;
};

export type ColorFamily =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'success'
  | 'error'
  | 'warning'
  | 'information'
  | 'reward'
  | 'social';

export type ColorScale =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800';

export type Color = `${ColorFamily}.${ColorScale}` | 'inherit' | 'transparent';

export type FontFamily = 'primary' | 'secondary' | 'cta';

export type FontSize =
  | 'headline-xl-desktop'
  | 'headline-lg-desktop'
  | 'headline-md-desktop'
  | 'headline-sm-desktop'
  | 'headline-xl-mobile-tablet'
  | 'headline-lg-mobile-tablet'
  | 'headline-md-mobile-tablet'
  | 'headline-sm-mobile-tablet'
  | 'body-xxl-regular'
  | 'body-xl-regular'
  | 'body-lg-regular'
  | 'body-md-regular'
  | 'body-sm-regular'
  | 'body-xs-regular';

export type FontWeight = 'headline' | 'body-bold' | 'body-regular';

export type LineHeight =
  | 'line-height-sm-1'
  | 'line-height-md-1'
  | 'line-height-md-2'
  | 'line-height-md-3'
  | 'line-height-lg-1'
  | 'line-height-lg-2';

export type Space =
  | 'zero'
  | 'xxs'
  | 'xs'
  | 'sm-1'
  | 'sm-2'
  | 'md-1'
  | 'md-2'
  | 'md-3'
  | 'lg-1'
  | 'lg-2'
  | 'lg-3'
  | 'xl-1'
  | 'xl-2'
  | 'xxl';

export type Shadow =
  | 'shadow-none'
  | 'shadow-sm'
  | 'shadow-md'
  | 'shadow-lg'
  | 'shadow-xl'
  | 'outline-sm'
  | 'outline-md';

export type BorderRadius =
  | 'border-radius-zero'
  | 'border-radius-sm'
  | 'border-radius-md'
  | 'border-radius-lg'
  | 'border-radius-xl'
  | 'border-radius-circle'
  | 'border-radius-pill';

export type Breakpoint = 'tablet' | 'desktop';
