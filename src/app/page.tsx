import Button from '@/components/ui/Button';
import TypingText from '@/components/ui/TypingText';

export default function Home() {
    return (
        <>
            {/* Hero Section - Split Layout */}
            <section className="min-h-[calc(100vh-4rem)] grid md:grid-cols-2">
                {/* Left Side - Name and Info */}
                <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16 bg-white">
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[8rem] font-bold text-black leading-[0.9] tracking-tight opacity-0-initial animate-fade-in">
                            Manav
                            <br />
                            Goyani
                        </h1>
                    </div>
                    <div className="flex items-center justify-between opacity-0-initial animate-fade-in-delay-2">
                        <p className="text-lg md:text-xl text-neutral-600">
                            Data & AI Analyst based in Toronto
                        </p>
                    </div>
                </div>

                {/* Right Side - Image Placeholder / Visual */}
                <div className="flex md:flex items-center justify-center bg-neutral-100 relative overflow-hidden py-12 md:py-0 min-h-[50vh] md:min-h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200" />

                    {/* Circular Image */}
                    <div className="relative z-10 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <img
                            src="/Home.jpeg"
                            alt="Manav Goyani"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    <div className="absolute bottom-8 right-8 flex flex-col gap-2 z-20">
                        <Button href="/contact" variant="primary" size="default">
                            Get in Touch
                        </Button>
                        <Button href="/projects" variant="secondary" size="default">
                            View Projects
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Statement Section */}
            <section className="py-20 md:py-32 px-8 md:px-12 lg:px-16 bg-white border-t border-neutral-200">
                <div className="max-w-5xl">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-relaxed opacity-0-initial animate-fade-in">
                        <span className="text-black">
                            I'm Manav Goyani, a Data & AI Enthusiast,
                        </span>{' '}
                        <span className="text-neutral-400">
                            I specialize in turning complex data and AI prototypes into scalable, reliable solutions.
                        </span>
                    </p>
                </div>
            </section>

            {/* Typing Text Section */}
            <section className="py-12 px-8 md:px-12 lg:px-16 bg-neutral-50 border-t border-neutral-200">
                <div className="max-w-5xl">
                    <p className="text-sm text-neutral-500 mb-2">Currently focused on</p>
                    <TypingText />
                </div>
            </section>
        </>
    );
}
