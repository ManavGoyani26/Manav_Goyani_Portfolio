import { Metadata } from 'next';
import { skillGroups } from '@/lib/data';
import {
    SiPython, SiPostgresql, SiPandas, SiNumpy, SiTableau, SiApacheairflow,
    SiAmazon, SiTerraform, SiDocker, SiGithubactions, SiLinux,
    SiScikitlearn, SiPytorch, SiTensorflow, SiOpenai,
    SiGit, SiPostman, SiFastapi
} from 'react-icons/si';
import { IconType } from 'react-icons';

export const metadata: Metadata = {
    title: 'Tools',
    description: 'Technologies and tools I work with regularly, categorized by function.',
};

const iconConfig: Record<string, { icon: IconType; color: string }> = {
    'Python': { icon: SiPython, color: 'group-hover:text-[#3776AB]' },
    'SQL': { icon: SiPostgresql, color: 'group-hover:text-[#336791]' },
    'Pandas': { icon: SiPandas, color: 'group-hover:text-[#150458]' },
    'NumPy': { icon: SiNumpy, color: 'group-hover:text-[#013243]' },
    'Power BI': { icon: null as any, color: 'group-hover:text-[#F2C811]' },
    'Excel (VBA)': { icon: null as any, color: 'group-hover:text-[#217346]' },
    'Tableau': { icon: SiTableau, color: 'group-hover:text-[#E97627]' },
    'Airflow': { icon: SiApacheairflow, color: 'group-hover:text-[#017CEE]' },
    'AWS (Lambda, S3, RDS, ECS)': { icon: SiAmazon, color: 'group-hover:text-[#FF9900]' },
    'Azure': { icon: null as any, color: 'group-hover:text-[#0078D4]' },
    'Terraform': { icon: SiTerraform, color: 'group-hover:text-[#7B42BC]' },
    'Docker': { icon: SiDocker, color: 'group-hover:text-[#2496ED]' },
    'GitHub Actions': { icon: SiGithubactions, color: 'group-hover:text-[#2088FF]' },
    'Linux': { icon: SiLinux, color: 'group-hover:text-[#FCC624]' },
    'CI/CD': { icon: SiGithubactions, color: 'group-hover:text-[#2088FF]' },
    'Scikit-learn': { icon: SiScikitlearn, color: 'group-hover:text-[#F7931E]' },
    'PyTorch': { icon: SiPytorch, color: 'group-hover:text-[#EE4C2C]' },
    'TensorFlow': { icon: SiTensorflow, color: 'group-hover:text-[#FF6F00]' },
    'OpenAI API': { icon: SiOpenai, color: 'group-hover:text-white' },
    'Git': { icon: SiGit, color: 'group-hover:text-[#F05032]' },
    'Postman': { icon: SiPostman, color: 'group-hover:text-[#FF6C37]' },
    'PostgreSQL': { icon: SiPostgresql, color: 'group-hover:text-[#336791]' },
    'FastAPI': { icon: SiFastapi, color: 'group-hover:text-[#05998B]' },
};

export default function SkillsPage() {
    return (
        <section className="py-20 md:py-32 px-8 md:px-12 lg:px-16 bg-white min-h-screen">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    Tools
                </h1>
                <p className="text-lg text-neutral-500 max-w-2xl">
                    My technical toolkit, organized by function and area of expertise.
                </p>
            </div>

            {/* Categorized Tools Grid */}
            <div className="max-w-6xl mx-auto space-y-20">
                {skillGroups.map((group) => (
                    <div key={group.category}>
                        <h2 className="text-xl font-bold text-black mb-10 border-b border-neutral-100 pb-2">
                            {group.category}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {group.skills.map((skill) => {
                                const config = iconConfig[skill] || { icon: null, color: 'group-hover:text-blue-400' };
                                const Icon = config.icon;
                                return (
                                    <div
                                        key={skill}
                                        className="group relative flex flex-col items-center justify-center p-8 bg-neutral-900 rounded-2xl border border-neutral-800 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-800/80 hover:-translate-y-1 shadow-xl"
                                    >
                                        <div className={`text-4xl text-neutral-500 transition-colors duration-300 ${config.color} mb-4`}>
                                            {Icon ? <Icon /> : <span className="text-xl font-bold">{skill[0]}</span>}
                                        </div>
                                        <h3 className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors text-center">
                                            {skill}
                                        </h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
