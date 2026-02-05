import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: {
        default: 'Manav Goyani Portfolio',
        template: '%s | Manav Goyani',
    },
    description:
        'Data-driven problem solver with hands-on experience across analytics, cloud infrastructure, and applied AI systems. Building reliable, scalable solutions.',
    keywords: [
        'Data Engineer',
        'Cloud Engineer',
        'Machine Learning',
        'AWS',
        'Python',
        'AI Systems',
        'Analytics',
    ],
    authors: [{ name: 'Manav Goyani' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://manavgoyani.com',
        siteName: 'Manav Goyani',
        title: 'Manav Goyani Portfolio',
        description:
            'Data-driven problem solver with hands-on experience across analytics, cloud infrastructure, and applied AI systems.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Manav Goyani Portfolio',
        description:
            'Data-driven problem solver with hands-on experience across analytics, cloud infrastructure, and applied AI systems.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
