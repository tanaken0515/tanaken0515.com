import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import '@fontsource/roboto';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
