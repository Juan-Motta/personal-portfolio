import { IconProps } from '@/types/Shated/Icons/IconProps';

function MenuIcon({
    viewBox = '0 0 24 24',
    xmlns = 'http://www.w3.org/2000/svg',
    className = '',
}: IconProps) {
    return (
        <svg viewBox={viewBox} xmlns={xmlns} className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
        </svg>
    );
}

export { MenuIcon };
