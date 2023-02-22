import React from 'react';
import createEmotionCache from '../utils/createEmotionCache';
const clientSideEmotionCache = createEmotionCache();
import '../styles/globals.css';

function MyApp({Component, emotionCache = clientSideEmotionCache, pageProps: {session, ...pageProps}}) {
    return (
        <></>
    );
}

export default MyApp
