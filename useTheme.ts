import { useContext } from 'react';
import { ThemeSpecification } from './specification';
import { ThemeProviderContext } from './ThemeProvider';

export function useTheme<T>(styleSheetFn: (params: ThemeSpecification) => T): Readonly<T> {
  const theme = useContext(ThemeProviderContext);
  return styleSheetFn(theme);
}
