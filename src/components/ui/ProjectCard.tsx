import Link from 'next/link';
import { Project } from '@/lib/data';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:bg-card-hover hover:border-muted transition-all duration-250">
            <h3 className="text-heading-3 font-semibold text-foreground mb-3">
                {project.title}
            </h3>

            <p className="text-muted text-body mb-4">{project.problem}</p>

            <p className="text-foreground/90 text-body mb-6">{project.description}</p>

            {/* Tech Stack */}
            <div className="mb-6">
                <h4 className="text-body-sm font-medium text-muted mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                    {project.techStack.map((group) => (
                        <div key={group.category} className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 text-body-sm bg-background border border-border rounded-md text-muted"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Outcomes */}
            <div className="mb-6">
                <h4 className="text-body-sm font-medium text-muted mb-3">Outcomes</h4>
                <ul className="space-y-2">
                    {project.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2 text-body-sm text-foreground/80">
                            <span className="text-accent mt-1.5">•</span>
                            {outcome}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
                {project.links.github && (
                    <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-body-sm text-muted hover:text-accent transition-colors duration-250"
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
                        className="inline-flex items-center gap-2 text-body-sm text-muted hover:text-accent transition-colors duration-250"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                    </Link>
                )}
            </div>
        </article>
    );
}
