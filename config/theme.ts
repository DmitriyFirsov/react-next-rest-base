import { DefaultTheme } from 'styled-components';

export enum Breakpoints {
  xxs = 0,
  xs = 360,
  sm = 512,
  md = 768,
  lg = 1024,
  xl = 1200,
  xxl = 1600,
}

export enum Colors {
  link = '#00f',
}

export const up = (breakpoint: Breakpoints, vertical = false) =>
  `@media (min-${vertical ? 'height' : 'width'}: calc(${breakpoint} + 0.02px))`;
export const down = (breakpoint: Breakpoints, vertical = false) =>
  `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`;
export const between = (breakpointMin: Breakpoints, breakpointMax: Breakpoints, vertical = false) =>
  `@media (max-${vertical ? 'height' : 'width'}: ${breakpointMax}) and (min-${
    vertical ? 'height' : 'width'
  }: calc(${breakpointMin} + 0.02px))`;

const theme: DefaultTheme = {
  breakpoints: Breakpoints,
  colors: Colors,
  up,
  down,
  between,
};

export default theme;
