import { IconProps } from '@/types/Shated/Icons/IconProps';

function DownloadIcon({
    viewBox = '0 0 24 24',
    xmlns = 'http://www.w3.org/2000/svg',
    className = '',
}: IconProps) {
    return (
        <svg viewBox={viewBox} xmlns={xmlns} className={className}>
            <path
                id="Vector"
                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
            ></path>
        </svg>
    );
}

export { DownloadIcon };
