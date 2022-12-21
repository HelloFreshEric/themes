import { useTheme as StyledComponentsUseTheme } from 'styled-components';
import { ThemeSpecification } from './specification';

export default function useTheme(): Readonly<ThemeSpecification> {
  return StyledComponentsUseTheme();
}
