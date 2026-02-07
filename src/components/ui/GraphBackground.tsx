'use client';

export default function GraphBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-20">
            <svg
                className="w-full h-full"
                viewBox="0 0 1440 800"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Time Series Line 1 */}
                <path
                    d="M0 600C100 580 200 620 300 550C400 480 500 520 600 450C700 380 800 420 900 350C1000 280 1100 320 1200 250C1300 180 1440 220 1440 220"
                    stroke="url(#gradient-data-1)"
                    strokeWidth="2"
                    className="animate-pulse"
                />

                {/* Time Series Line 2 */}
                <path
                    d="M0 400C150 420 300 380 450 450C600 520 750 480 900 550C1050 620 1200 580 1350 650C1440 680 1440 680 1440 680"
                    stroke="url(#gradient-data-2)"
                    strokeWidth="1.5"
                    strokeDasharray="8 4"
                />

                {/* Bars - Symbolic Representation */}
                <rect x="100" y="650" width="40" height="150" fill="currentColor" className="text-neutral-200" />
                <rect x="160" y="620" width="40" height="180" fill="currentColor" className="text-neutral-200" />
                <rect x="220" y="680" width="40" height="120" fill="currentColor" className="text-neutral-200" />
                <rect x="280" y="640" width="40" height="160" fill="currentColor" className="text-neutral-200" />

                <rect x="1100" y="50" width="30" height="80" fill="currentColor" className="text-neutral-200" />
                <rect x="1140" y="30" width="30" height="100" fill="currentColor" className="text-neutral-200" />
                <rect x="1180" y="60" width="30" height="70" fill="currentColor" className="text-neutral-200" />

                <defs>
                    <linearGradient id="gradient-data-1" x1="0" y1="600" x2="1440" y2="220" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#10B981" />
                    </linearGradient>
                    <linearGradient id="gradient-data-2" x1="0" y1="400" x2="1440" y2="680" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366F1" />
                        <stop offset="1" stopColor="#F59E0B" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
