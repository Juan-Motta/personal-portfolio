import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';

import CustomThemeProvider from '@/providers/CustomThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        clarity.init('jvtkzru24o');
    }, []);
    return (
        <CustomThemeProvider>
            <Component {...pageProps} />
        </CustomThemeProvider>
    );
}
