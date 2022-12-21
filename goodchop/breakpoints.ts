import { ThemeSpecification } from '../specification';

const breakpoints = ['768px', '1200px'] as ThemeSpecification['breakpoints'];

[breakpoints.tablet, breakpoints.desktop] = breakpoints;

export default breakpoints;
