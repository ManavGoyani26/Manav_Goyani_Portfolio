import { SkillGroup as SkillGroupType } from '@/lib/data';

interface SkillGroupProps {
    group: SkillGroupType;
}

export default function SkillGroup({ group }: SkillGroupProps) {
    return (
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-muted transition-colors duration-250">
            <h3 className="text-heading-3 font-semibold text-foreground mb-4">
                {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1.5 text-body-sm bg-background border border-border rounded-md text-foreground/80 hover:border-accent hover:text-accent transition-colors duration-250"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
