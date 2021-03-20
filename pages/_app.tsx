import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import theme from '../config/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../config/globalStyles';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default wrapper.withRedux(WrappedApp);
