import { Metadata } from 'next';
import { projects } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Featured projects showcasing data engineering, cloud infrastructure, and AI system development.',
};

export default function ProjectsPage() {
    return (
        <section className="py-20 md:py-32 px-8 md:px-12 lg:px-16 bg-white min-h-screen">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-16 opacity-0-initial animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    Projects
                </h1>
                <p className="text-lg text-neutral-500 max-w-2xl">
                    Featured work demonstrating end-to-end problem solving across data, cloud,
                    and AI systems.
                </p>
            </div>

            {/* Projects List */}
            <div className="max-w-6xl mx-auto space-y-12">
                {projects.map((project, index) => (
                    <article
                        key={project.id}
                        className="group opacity-0-initial border-b border-neutral-200 pb-12 last:border-0"
                        style={{
                            animation: `fade-in-up 0.6s ease-out ${0.1 + index * 0.1}s forwards`,
                        }}
                    >
                        {/* Project Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-neutral-600 transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-lg text-neutral-600">{project.problem}</p>
                            </div>
                            {/* Links */}
                            <div className="flex items-center gap-4 flex-shrink-0">
                                {project.links.github && (
                                    <Link
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </Link>
                                )}
                                {project.links.demo && project.links.demo !== '#' && (
                                    <Link
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Demo
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-neutral-600 mb-6 max-w-3xl">{project.description}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.flatMap((group) =>
                                group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm bg-neutral-100 text-neutral-600 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))
                            )}
                        </div>

                        {/* Outcomes */}
                        <div className="grid md:grid-cols-3 gap-4">
                            {project.outcomes.map((outcome, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <span className="text-neutral-400 mt-0.5">→</span>
                                    <span className="text-sm text-neutral-600">{outcome}</span>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
