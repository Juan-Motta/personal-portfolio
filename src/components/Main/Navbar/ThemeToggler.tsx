import { useTheme } from 'next-themes';

import { MoonIcon } from '@/components/Shared/Icons/MoonIcon';
import { SunIcon } from '@/components/Shared/Icons/SunIcon';

/**
 * Represents a theme toggle button.
 *
 * This component creates a button that allows users to toggle between light
 * and dark themes. It utilizes a custom hook `useTheme` to manage and apply
 * the theme state. The button's icon changes appearance based on the current
 * theme.
 *
 * @returns {JSX.Element} A JSX element representing the toggle button.
 */
function ThemeToggler(): JSX.Element {
    const { theme, setTheme } = useTheme();

    function handleThemeToggleClick() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <button
            onClick={handleThemeToggleClick}
            className="align-middle hover:bg-[var(--hover-nav)] rounded-full p-2"
        >
            {theme === 'dark' ? (
                <span>
                    <SunIcon className="h-[40px] w-[40px] md:h-[28px] md:w-[28px] stroke-black dark:stroke-white" />
                </span>
            ) : (
                <span>
                    <MoonIcon className="h-[40px] w-[40px] md:h-[24px] md:w-[24px] stroke-black dark:stroke-white" />
                </span>
            )}
        </button>
    );
}

export { ThemeToggler };
