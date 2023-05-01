import React from 'react';
import createEmotionCache from '../utils/createEmotionCache';
import '../styles/globals.scss';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps: { session, ...pageProps } }) {
	return (
		<Component {...pageProps} />
	);
}

export default MyApp;
