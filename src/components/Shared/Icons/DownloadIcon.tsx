import { IconProps } from '@/types/Shated/Icons/IconProps';

function DownloadIcon({
    width = '64',
    height = '64',
    viewBox = '0 0 24 24',
    fill = 'none',
    xmlns = 'http://www.w3.org/2000/svg',
    transform = 'rotate(0)',
    stroke = '#000000',
    strokeWidth = '',
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    className = '',
}: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
            xmlns={xmlns}
            className={className}
            transform={transform}
        >
            <path
                id="Vector"
                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                stroke={stroke}
                stroke-width={strokeWidth}
                strokeLinecap={strokeLinecap}
                strokeLinejoin={strokeLinejoin}
            ></path>
        </svg>
    );
}

export { DownloadIcon };
