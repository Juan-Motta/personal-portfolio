import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import CustomThemeProvider from '@/providers/CustomThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
    // esint-disable-next-line
    // @ts-ignore
    function clarityInit(c, l, a, r, i, t, y) {
        c[a] =
            c[a] ||
            function () {
                (c[a].q = c[a].q || []).push(arguments);
            };
        t = l.createElement(r);
        t.async = 1;
        t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
    }
    useEffect(() => {
        // eslint-disable-next-line
        // @ts-ignore
        clarityInit(window, document, 'clarity', 'script', 'jvtkzru24o');
    }, []);
    return (
        <CustomThemeProvider>
            <Component {...pageProps} />
        </CustomThemeProvider>
    );
}
