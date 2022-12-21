import { useContext } from 'react';
import { ThemeSpecification } from './specification';
import { ThemeProviderContext } from './ThemeProvider';

export default function useTheme(styleSheetFn: (params: ThemeSpecification) => any): Readonly<ThemeSpecification> {
  const theme = useContext(ThemeProviderContext);
  return styleSheetFn(theme);
}
