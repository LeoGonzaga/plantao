import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@/styles/theme.config";
import { LIGHT } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LIGHT}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
