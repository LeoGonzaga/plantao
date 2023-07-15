import { LIGHT } from '@/styles/theme';
import { GlobalStyles } from '@/styles/theme.config';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LIGHT}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
