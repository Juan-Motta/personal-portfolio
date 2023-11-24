import { HeroButtonProps } from '@/types/Main/Hero/HeroButton';

/**
 * HeroButton Component
 *
 * This is a React functional component for rendering a custom styled button.
 * It is designed to be used within the Hero component or wherever a similar styled button is needed.
 *
 * The component accepts `children` as props, allowing for flexible content inside the button,
 * such as text and icons. This makes the component highly reusable and adaptable to different contexts.
 *
 * @param {HeroButtonProps} props - The properties for the HeroButton component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the button.
 *
 * @returns {JSX.Element} A JSX element representing the HeroButton.
 */
function SocialButton({ children }: HeroButtonProps): JSX.Element {
    return (
        <button className="hover:scale-110 transition-transform duration-300 select-none">
            {children}
        </button>
    );
}

export { SocialButton };
