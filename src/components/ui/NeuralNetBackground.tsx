'use client';

export default function NeuralNetBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-[0.22] grayscale invert hidden md:block">
            <div
                className="absolute inset-0 bg-no-repeat bg-right-bottom bg-contain"
                style={{
                    backgroundImage: 'url("/neural-net.jpg")',
                    maskImage: 'radial-gradient(circle at bottom right, black, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(circle at bottom right, black, transparent 75%)'
                }}
            />
        </div>
    );
}
