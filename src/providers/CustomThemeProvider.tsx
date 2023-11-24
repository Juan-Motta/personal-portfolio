import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

interface Props {
    children: React.ReactNode;
}

/**
 * Provides a theme context to child components, enabling them to
 * utilize the theming capabilities such as dark mode or light mode. It ensures
 * that the theme is only applied after the component has been mounted to
 * avoid mismatches between server-side rendered and client-side rendered content.
 *
 * The `ThemeProvider` waits for the component to be mounted on the client side
 * before applying any theming attributes. It uses the `NextThemeProvider` to
 * apply the theme, with system preferences enabled by default.
 *
 * @component
 * @param {Props} props - The properties passed to the ThemeProvider component.
 * @returns {React.ReactNode} The children wrapped with the Next.js ThemeProvider
 * or the children as is if not mounted.
 */
export default function CustomThemeProvider({
    children,
}: Props): React.ReactNode {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return !mounted ? (
        <>{children}</>
    ) : (
        <NextThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
        >
            {children}
        </NextThemeProvider>
    );
}
