import { useRef } from 'react';
import { useTheme } from 'next-themes';

import { MenuIcon } from '@/components/Shared/Icons/MenuIcon';
import { MenuTogglerProps } from '@/types/Main/Navbar/MenuToggler';

/**
 * Represents a menu toggle button.
 *
 * This component creates a button to toggle the visibility of a menu. The
 * component requires a reference to the menu list element (`menuListRef`) to
 * apply the toggle effect. The toggle changes the menu's position and opacity,
 * effectively showing or hiding it.
 *
 * @component
 * @param {MenuTogglerProps} props - The properties for the MenuToggler component.
 * @param {React.RefObject<HTMLUListElement>} props.menuListRef - A reference to
 * the menu list HTML element that this toggle button controls.
 *
 * @returns {JSX.Element} A JSX element representing the toggle button.
 */
function MenuToggler({ menuListRef }: MenuTogglerProps): JSX.Element {
    const { theme } = useTheme();
    const isMenuToggled = useRef(false);

    function handleMenuToggleClick() {
        const menuList = menuListRef.current;
        if (isMenuToggled.current) {
            menuList && menuList.classList.toggle('top-12');
            menuList && menuList.classList.add('opacity-0');
            isMenuToggled.current = false;
        } else {
            menuList && menuList.classList.add('top-12');
            menuList && menuList.classList.toggle('opacity-0');
            isMenuToggled.current = true;
        }
    }

    return (
        <button
            onClick={handleMenuToggleClick}
            className="align-middle hover:bg-[var(--hover-nav)] rounded-full p-3"
        >
            <span>
                <MenuIcon
                    width="32"
                    height="32"
                    strokeWidth="2.5"
                    fill="none"
                    className="cursor-pointer"
                    viewBox="0 0 24 24"
                    transform="rotate(0)"
                    stroke={theme === 'dark' ? '#ffffff' : '#000000'}
                />
            </span>
        </button>
    );
}

export { MenuToggler };
