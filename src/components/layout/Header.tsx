'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/skills', label: 'Tools' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Determine if we're on a dark page (only contact page is dark now)
    const isDarkPage = pathname === '/contact';

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${isDarkPage
            ? 'bg-black/80 border-neutral-800'
            : 'bg-white/80 border-neutral-200'
            }`}>
            <nav className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-center h-16">
                {/* Desktop Navigation - Center aligned */}
                <ul className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`text-lg font-medium transition-colors duration-200 ${pathname === item.href
                                    ? isDarkPage ? 'text-white' : 'text-black'
                                    : isDarkPage
                                        ? 'text-neutral-400 hover:text-white'
                                        : 'text-neutral-500 hover:text-black'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`md:hidden p-2 transition-colors ${isDarkPage
                        ? 'text-neutral-400 hover:text-white'
                        : 'text-neutral-500 hover:text-black'
                        }`}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {mobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={`md:hidden border-b ${isDarkPage
                    ? 'bg-black border-neutral-800'
                    : 'bg-white border-neutral-200'
                    }`}>
                    <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 items-center">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block text-xl font-medium transition-colors duration-200 ${pathname === item.href
                                        ? isDarkPage ? 'text-white' : 'text-black'
                                        : isDarkPage
                                            ? 'text-neutral-400 hover:text-white'
                                            : 'text-neutral-500 hover:text-black'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
