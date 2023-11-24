import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import CustomThemeProvider from '@/providers/CustomThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CustomThemeProvider>
            <Component {...pageProps} />
        </CustomThemeProvider>
    );
}
