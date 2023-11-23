import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { ThemeToggler } from './ThemeToggler';
import { MenuToggler } from './MenuToggler';

/**
 * Represents a navigation bar component.
 *
 * This component creates a responsive navigation bar which includes a brand
 * name and a list of menu items. The navigation bar has two layouts: a row
 * layout for medium and larger screens, and a column layout for smaller screens.
 * It also includes a theme toggler and a menu toggler for smaller screens.
 *
 * @returns {JSX.Element} A JSX element representing the navigation bar.
 */
function Navbar(): JSX.Element {
    const menuListRef = useRef<HTMLUListElement>(null);
    const [mounted, setMounted] = useState(false);

    /**
     * This is a hack to prevent the menu from being shown on page load to avoid
     * hydration mismatch error.
     * https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
     */
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <></>;
    }

    return (
        <nav className="mt-5 flex justify-between items-center md:flex-row flex-col">
            <div className="flex w-full justify-between md:w-auto z-20">
                {/* prettier-ignore */}
                <Link href={"#"} className="text-4xl font-extrabold text hover:scale-110 transition-scale duration-100 cursor-pointer whitespace-pre-wrap select-none">
                    {"{  juan  }"}
                </Link>
                <div className="md:hidden">
                    <MenuToggler menuListRef={menuListRef} />
                </div>
            </div>
            <ul
                ref={menuListRef}
                className="text-3xl md:text-lg md:flex-row flex-col items-center gap-5 md:static absolute justify-evenly md:py-0 -top-[60rem] transition-all duration-300 md:transition-none md:duration-0 opacity-0 md:opacity-100 h-full w-full md:h-auto md:w-auto flex z-10 backdrop-blur-xl md:backdrop-blur-0"
            >
                <li className="hover:font-extrabold transition-scale duration-100 cursor-pointer select-none">
                    <Link href={'#'}>Acerca de mí</Link>
                </li>
                <li className="hover:font-extrabold transition-scale duration-100 cursor-pointer select-none">
                    <Link href={'#'}>Proyectos</Link>
                </li>
                <li className="hover:font-extrabold transition-scale duration-100 cursor-pointer select-none">
                    <Link href={'#'}>Contácto</Link>
                </li>
                <li>
                    <ThemeToggler />
                </li>
            </ul>
        </nav>
    );
}

export { Navbar };
