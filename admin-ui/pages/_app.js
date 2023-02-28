import React from 'react';
import createEmotionCache from '../utils/createEmotionCache';
const clientSideEmotionCache = createEmotionCache();
import '../styles/globals.scss';

function MyApp({Component, emotionCache = clientSideEmotionCache, pageProps: {session, ...pageProps}}) {
    return (
        <Component {...pageProps} />
    );
}

export default MyApp
