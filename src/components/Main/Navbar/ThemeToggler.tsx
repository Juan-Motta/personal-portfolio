import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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
                    <SunIcon
                        width="24"
                        height="24"
                        strokeWidth="1"
                        fill="#ffffff"
                        stroke="#ffffff"
                        className="cursor-pointer"
                        viewBox="0 0 24 24"
                        transform="rotate(0)"
                    />
                </span>
            ) : (
                <span>
                    <MoonIcon
                        width="24"
                        height="24"
                        strokeWidth="1"
                        className="cursor-pointer"
                        viewBox="0 2 24 24"
                        transform="rotate(15)"
                        stroke="#000000"
                        fill="#000000"
                    />
                </span>
            )}
        </button>
    );
}

export { ThemeToggler };
