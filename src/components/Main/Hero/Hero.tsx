import { HeroButton } from './HeroButton';
import { SocialButton } from './SocialButton';

import { SendIcon } from '@/components/Shared/Icons/SendIcon';
import { DownloadIcon } from '@/components/Shared/Icons/DownloadIcon';
import { GithubIcon } from '@/components/Shared/Icons/GithubIcon';
import { LinkedinIcon } from '@/components/Shared/Icons/LinkedinIcon';
import { MailIcon } from '@/components/Shared/Icons/MailIcon';
import Link from 'next/link';

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
    return (
        <section
            className="flex flex-col justify-center items-center md:gap-20 gap-10"
            style={{ height: 'calc(100vh - 80px)' }}
        >
            <span className="text-xl md:text-3xl select-none font-bold">
                Hola, 👋🏻 soy
            </span>
            <h1
                className="text-7xl md:text-9xl break-words font-bold animate-gradient select-none text-center"
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
            <span className="text-xl md:text-3xl select-none font-bold text-center">
                Desarrollador web full stack.
            </span>
            <div className="flex gap-8 md:flex-row flex-col">
                <HeroButton>
                    <span className="flex items-center h-full">
                        <SendIcon className="h-[26px] w-[26px] stroke-black dark:stroke-white stroke-[2.5] fill-none" />
                    </span>
                    Contactame
                </HeroButton>
                <HeroButton>
                    <span className="flex items-center h-full">
                        <DownloadIcon className="h-[28px] w-[28px] stroke-black dark:stroke-white stroke-[2.5]" />
                    </span>
                    Descargar CV
                </HeroButton>
            </div>
            <div className="flex gap-5">
                <Link
                    href="https://github.com/Juan-Motta"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <GithubIcon className="stroke-black dark:stroke-white fill-none stroke-2  w-[48px] h-[48px] hover:scale-125 transition-transform" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/jualopezmo/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <LinkedinIcon className="stroke-black dark:stroke-white fill-none stroke-2  w-[48px] h-[48px] hover:scale-125 transition-transform" />
                </Link>
                <SocialButton>
                    <MailIcon className="stroke-black dark:stroke-white fill-none stroke-2  w-[48px] h-[48px] hover:scale-125 transition-transform" />
                </SocialButton>
            </div>
        </section>
    );
}

export { Hero };
