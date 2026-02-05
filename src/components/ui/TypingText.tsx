'use client';

import { useState, useEffect } from 'react';

const typingTexts = [
    'Analytics',
    'Cloud Architecture',
    'Applied ML',
    'Automation',
];

export default function TypingText() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = typingTexts[currentIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = 2000;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex]);

    return (
        <span className="text-2xl md:text-3xl font-medium text-black">
            {displayText}
            <span className="text-blue-500 animate-pulse">|</span>
        </span>
    );
}
