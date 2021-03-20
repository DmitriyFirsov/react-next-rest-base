import 'styled-components';
import { Breakpoints, Colors, up, down, between } from '../config/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly colors: typeof Colors;
    readonly breakpoints: typeof Breakpoints;
    readonly up: typeof up;
    readonly down: typeof down;
    readonly between: typeof between;
  }
}
