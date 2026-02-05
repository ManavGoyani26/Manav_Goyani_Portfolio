import Link from 'next/link';

interface ButtonProps {
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
}: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';

    const variants = {
        primary: 'bg-black text-white hover:bg-neutral-800',
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

        return (
            <Link href={href} className={combinedStyles} download={download} {...linkProps}>
                {children}
            </Link>
        );
    }

    return <button className={combinedStyles}>{children}</button>;
}
