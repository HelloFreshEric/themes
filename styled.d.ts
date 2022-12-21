import 'styled-components';
import { ThemeSpecification } from './specification';

declare module 'styled-components' {
  // https://styled-components.com/docs/api#create-a-declarations-file
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeSpecification {}
}
