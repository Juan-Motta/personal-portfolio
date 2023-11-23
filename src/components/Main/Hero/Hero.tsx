import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { HeroButton } from './HeroButton';

import { SendIcon } from '@/components/Shared/Icons/SendIcon';
import { DownloadIcon } from '@/components/Shared/Icons/DownloadIcon';

/**
 * Hero Component
 *
 * This is a React functional component used to display a hero section on a web page.
 * It showcases a greeting, the name of the developer (Juan Motta), and their title as a full stack web developer.
 * Additionally, it includes two buttons for contacting and downloading the developer's CV.
 *
 * The component makes use of React hooks (`useState`, `useEffect`) for managing the mounted state,
 * and `useTheme` for accessing the current theme context.
 *
 * The component initially renders as null until it is mounted (to handle server-side rendering scenarios).
 * Once mounted, it displays the hero section with styled text and buttons.
 *
 * The styling is achieved using Tailwind CSS classes and custom gradient styling for the main heading.
 * The `HeroButton` is a custom button component, and `DownloadIcon` and `SendIcon` are custom icon components.
 *
 * The icons change color based on the current theme (dark or light).
 *
 * * @returns {JSX.Element} A JSX element representing the Hero banner.
 */
function Hero(): JSX.Element {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <></>;
    }

    return (
        <section className="flex flex-col justify-center items-center h-screen">
            <span className="text-xl md:text-3xl mb-12 select-none font-bold">
                Hola, 👋🏻 soy
            </span>
            <h1
                className="text-7xl md:text-9xl break-words mb-16 font-bold animate-gradient select-none text-center"
                style={{
                    background:
                        '-webkit-linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5, #23d5ab)',
                    backgroundSize: '250%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                Juan Motta
            </h1>
            <span className="text-xl md:text-3xl mb-20 select-none font-bold text-center">
                Desarrollador web full stack.
            </span>
            <div className="flex gap-8 mb-20 md:flex-row flex-col">
                <HeroButton>
                    <span className="flex items-center h-full">
                        <SendIcon
                            strokeWidth="2.5"
                            transform="rotate(0)"
                            stroke={theme === 'dark' ? '#fff' : '#000'}
                            className="h-[26px] w-[26px]"
                        />
                    </span>
                    Contactame
                </HeroButton>
                <HeroButton>
                    <span className="flex items-center h-full">
                        <DownloadIcon
                            strokeWidth="2.5"
                            stroke={theme === 'dark' ? '#fff' : '#000'}
                            className="h-[28px] w-[28px]"
                        />
                    </span>
                    Descargar CV
                </HeroButton>
            </div>
        </section>
    );
}

export { Hero };
