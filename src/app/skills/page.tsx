import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tools',
    description: 'Technologies and tools I work with regularly.',
};

// Tool data with remote icon URLs
const tools = [
    {
        name: 'AWS',
        description: 'Cloud Infrastructure',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    {
        name: 'Python',
        description: 'Programming Language',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    },
    {
        name: 'MySQL',
        description: 'Database Management',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    },
    {
        name: 'Power BI',
        description: 'Data Visualization',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
    },
    {
        name: 'TensorFlow',
        description: 'Machine Learning',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
    },
    {
        name: 'Scikit-learn',
        description: 'ML Library',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
    },
    {
        name: 'OpenCV',
        description: 'Computer Vision',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
    },
    {
        name: 'GitHub',
        description: 'Version Control',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    },
    {
        name: 'Git',
        description: 'Source Control',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    },
    {
        name: 'Azure',
        description: 'Cloud Platform',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    },
    {
        name: 'Postman',
        description: 'API Testing',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    },
    {
        name: 'Linux',
        description: 'Operating System',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    },
    {
        name: 'Supabase',
        description: 'Backend as a Service',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
    },
    {
        name: 'Jira',
        description: 'Project Management',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
    },
    {
        name: 'Jupyter',
        description: 'Data Science',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
    },
];

export default function SkillsPage() {
    return (
        <section className="py-20 md:py-32 px-8 md:px-12 lg:px-16 bg-white min-h-screen">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-16 opacity-0-initial animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    Tools
                </h1>
                <p className="text-lg text-neutral-500 max-w-2xl">
                    Technologies and tools I work with regularly.
                </p>
            </div>

            {/* Tools Grid - Card Layout */}
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                    {tools.map((tool, index) => (
                        <div
                            key={tool.name}
                            className="flex items-center gap-6 p-6 bg-neutral-50 hover:bg-neutral-100 border border-neutral-100 hover:border-blue-200 transition-all duration-300 rounded-xl group cursor-default"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                <img
                                    src={tool.icon}
                                    alt={`${tool.name} logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-black mb-1 group-hover:text-blue-600 transition-colors">
                                    {tool.name}
                                </h3>
                                <p className="text-sm text-neutral-500 font-medium">
                                    {tool.description}
                                </p>
                            </div>

                            {/* Optional Percentage Placeholder (if we want to match reference exactly, but unused for now) */}
                            {/* <div className="text-sm font-medium text-neutral-300">
                                90%
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
