import React from 'react';
import createEmotionCache from '../utils/createEmotionCache';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import '../styles/globals.scss';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Hydrate state={pageProps.dehydratedState}> */}
        <Component {...pageProps} />
      {/* </Hydrate> */}
    </QueryClientProvider>
  )
}

export default MyApp;
