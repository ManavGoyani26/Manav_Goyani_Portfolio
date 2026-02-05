import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                foreground: '#fafafa',
                muted: '#a1a1aa',
                accent: '#3b82f6',
                'accent-hover': '#2563eb',
                border: '#27272a',
                card: '#18181b',
                'card-hover': '#1f1f23',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                'heading-2': ['2rem', { lineHeight: '1.3' }],
                'heading-3': ['1.5rem', { lineHeight: '1.4' }],
                'body': ['1rem', { lineHeight: '1.6' }],
                'body-sm': ['0.875rem', { lineHeight: '1.5' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            transitionDuration: {
                '250': '250ms',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.6s ease-out forwards',
                'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
                'fade-in-delay-1': 'fade-in 0.6s ease-out 0.1s forwards',
                'fade-in-delay-2': 'fade-in 0.6s ease-out 0.2s forwards',
                'fade-in-delay-3': 'fade-in 0.6s ease-out 0.3s forwards',
            },
        },
    },
    plugins: [],
}

export default config
