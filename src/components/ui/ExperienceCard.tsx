import { Experience } from '@/lib/data';

interface ExperienceCardProps {
    experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <article className="relative pl-8 pb-12 last:pb-0 border-l border-border">
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background" />

            <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-muted transition-colors duration-250">
                {/* Header */}
                <div className="mb-4">
                    <h3 className="text-heading-3 font-semibold text-foreground">
                        {experience.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-body-sm text-muted">
                        <span>{experience.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{experience.location}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{experience.period}</span>
                    </div>
                </div>

                {/* Context */}
                <p className="text-foreground/80 text-body mb-6">{experience.context}</p>

                {/* What you owned */}
                <div className="mb-6">
                    <h4 className="text-body-sm font-medium text-muted mb-3">What I Owned</h4>
                    <ul className="space-y-2">
                        {experience.ownership.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-body-sm text-foreground/80">
                                <span className="text-accent mt-1.5">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Impact */}
                <div>
                    <h4 className="text-body-sm font-medium text-muted mb-3">Impact</h4>
                    <ul className="space-y-2">
                        {experience.impact.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-body-sm text-foreground/80">
                                <span className="text-accent mt-1.5">→</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
}
