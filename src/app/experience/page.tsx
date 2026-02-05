import { Metadata } from 'next';
import { experiences } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Experience',
    description: 'Professional experience across QA testing, operations leadership, and technical roles.',
};

export default function ExperiencePage() {
    return (
        <section className="py-20 md:py-32 px-8 md:px-12 lg:px-16 bg-white min-h-screen">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-16 opacity-0-initial animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    Experience
                </h1>
                <p className="text-lg text-neutral-500 max-w-2xl">
                    A track record of ownership, operational judgment, and measurable impact.
                </p>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto">
                {experiences.map((experience, index) => (
                    <article
                        key={experience.id}
                        className="relative pl-8 pb-16 last:pb-0 border-l border-neutral-200 opacity-0-initial"
                        style={{
                            animation: `fade-in-up 0.6s ease-out ${0.1 + index * 0.15}s forwards`,
                        }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-black" />

                        {/* Header */}
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold text-black">
                                {experience.role}
                            </h2>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-neutral-500">
                                <span className="font-medium text-neutral-700">{experience.company}</span>
                                <span>•</span>
                                <span>{experience.location}</span>
                                <span>•</span>
                                <span>{experience.period}</span>
                            </div>
                        </div>

                        {/* Context */}
                        <p className="text-neutral-600 mb-6">{experience.context}</p>

                        {/* Two columns for ownership and impact */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* What I Owned */}
                            <div>
                                <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wide mb-3">
                                    What I Owned
                                </h3>
                                <ul className="space-y-2">
                                    {experience.ownership.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                                            <span className="text-neutral-400 mt-0.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Impact */}
                            <div>
                                <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wide mb-3">
                                    Impact
                                </h3>
                                <ul className="space-y-2">
                                    {experience.impact.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                                            <span className="text-black mt-0.5">→</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
