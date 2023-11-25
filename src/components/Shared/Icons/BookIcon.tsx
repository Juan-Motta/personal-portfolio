import { IconProps } from '@/types/Shated/Icons/IconProps';

function BookIcon({
    viewBox = '0 0 24 24',
    xmlns = 'http://www.w3.org/2000/svg',
    className = '',
}: IconProps) {
    return (
        <svg viewBox={viewBox} xmlns={xmlns} className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
            <path d="M3 6l0 13" />
            <path d="M12 6l0 13" />
            <path d="M21 6l0 13" />
        </svg>
    );
}

export { BookIcon };
