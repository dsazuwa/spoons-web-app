import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@styles/globals.css';

import type { NextPage } from 'next';
import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';

import { Provider } from 'react-redux';

import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { wrapper } from '@store';
import createEmotionCache from '@utils/createEmotionCache';
import theme from '@utils/theme';

/**
 *  source:
 *  https://github.com/mui/material-ui/blob/1315abd9c1dcbe1741f142db559b4d7d42532a6b/examples/material-next-ts/pages/_app.tsx
 */

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppProps = NextAppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Spoons</title>
          <meta name='description' content='food ordering app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default App;
