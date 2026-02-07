import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'secondary';
    size?: 'default' | 'lg';
    children: React.ReactNode;
    className?: string;
    external?: boolean;
    download?: boolean;
}

export default function Button({
    href,
    variant = 'primary',
    size = 'default',
    children,
    className = '',
    external = false,
    download = false,
    ...props
}: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-black text-white hover:bg-neutral-800 border border-transparent',
        secondary:
            'bg-white border border-neutral-300 text-black hover:bg-neutral-50 hover:border-neutral-400',
    };

    const sizes = {
        default: 'px-5 py-2.5 text-sm',
        lg: 'px-7 py-3.5 text-base',
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        const linkProps = external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {};

        // Note: we can't pass button-specific props like 'disabled' to Link easily, so we extract them if needed, 
        // but for now we assume Link usage won't need 'disabled' or 'type'.
        return (
            <Link href={href} className={combinedStyles} {...linkProps}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedStyles} {...props}>
            {children}
        </button>
    );
}
