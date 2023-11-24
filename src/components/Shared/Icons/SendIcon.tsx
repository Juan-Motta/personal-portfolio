import { IconProps } from '@/types/Shated/Icons/IconProps';

function SendIcon({
    viewBox = '0 0 24 24',
    xmlns = 'http://www.w3.org/2000/svg',
    className = '',
}: IconProps) {
    return (
        <svg viewBox={viewBox} xmlns={xmlns} className={className}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />{' '}
        </svg>
    );
}

export { SendIcon };
