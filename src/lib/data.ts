export interface Project {
    id: string;
    title: string;
    problem: string;
    description: string;
    techStack: {
        category: string;
        items: string[];
    }[];
    outcomes: string[];
    links: {
        github?: string;
        demo?: string;
        note?: string;
    };
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    period: string;
    context: string;
    ownership: string[];
    impact: string[];
}

export interface SkillGroup {
    category: string;
    skills: string[];
}

export const projects: Project[] = [
    {
        id: 'aws-deployment',
        title: 'Full-Stack AWS Deployment',
        problem: 'Organizations needed scalable, cost-effective cloud infrastructure with automated deployment pipelines.',
        description: 'Designed and implemented a production-grade AWS infrastructure with CI/CD pipelines, containerized services, and infrastructure-as-code practices.',
        techStack: [
            { category: 'Cloud', items: ['AWS EC2', 'S3', 'RDS', 'Lambda', 'CloudFront'] },
            { category: 'DevOps', items: ['Terraform', 'Docker', 'GitHub Actions'] },
            { category: 'Backend', items: ['Node.js', 'Python'] },
        ],
        outcomes: [
            'Reduced deployment time by 70% through automated CI/CD',
            'Achieved 99.9% uptime with auto-scaling configuration',
            'Cut infrastructure costs by 40% with optimized resource allocation',
        ],
        links: {
            github: 'https://github.com/manavgoyani',
        },
    },
    {
        id: 'virtualarch',
        title: 'VirtualArch – Generative AI Platform',
        problem: 'Architects and designers lacked accessible tools for rapid AI-powered design visualization.',
        description: 'Built a generative AI application enabling users to create and iterate on architectural designs using natural language prompts and image generation models.',
        techStack: [
            { category: 'AI/ML', items: ['OpenAI API', 'Stable Diffusion', 'LangChain'] },
            { category: 'Backend', items: ['Python', 'FastAPI', 'PostgreSQL'] },
            { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
        ],
        outcomes: [
            'Processed 1,000+ design iterations during beta testing',
            'Reduced initial concept generation time from hours to minutes',
            'Integrated with existing design workflows via API',
        ],
        links: {
            github: 'https://github.com/manavgoyani',
            demo: '#',
        },
    },
    {
        id: 'virtual-assistant',
        title: 'Humber Team Virtual Assistant',
        problem: 'Team coordination and information retrieval were fragmented across multiple platforms.',
        description: 'Developed an intelligent virtual assistant using NLP to handle team queries, automate scheduling, and provide contextual information retrieval.',
        techStack: [
            { category: 'AI/ML', items: ['NLP', 'Intent Classification', 'RAG'] },
            { category: 'Backend', items: ['Python', 'Flask', 'MongoDB'] },
            { category: 'Integration', items: ['REST APIs', 'Webhooks', 'OAuth 2.0'] },
        ],
        outcomes: [
            'Automated 60% of routine team inquiries',
            'Improved response time for common questions by 80%',
            'Integrated with 5+ team productivity tools',
        ],
        links: {
            github: 'https://github.com/manavgoyani',
        },
    },
];

export const experiences: Experience[] = [
    {
        id: 'applause',
        role: 'QA Tester',
        company: 'Applause (uTest)',
        location: 'Remote',
        period: '2022 – Present',
        context: 'Global crowdsourced testing platform serving enterprise clients with quality assurance at scale.',
        ownership: [
            'Execute functional, regression, and exploratory testing across web and mobile platforms',
            'Document and reproduce complex bugs with detailed technical analysis',
            'Collaborate with distributed QA teams across time zones',
        ],
        impact: [
            'Identified 200+ critical bugs across enterprise applications',
            'Maintained 95%+ bug acceptance rate',
            'Contributed to testing cycles for Fortune 500 clients',
        ],
    },
    {
        id: 'supervisor',
        role: 'Operations Supervisor',
        company: 'Previous Role',
        location: 'Toronto, ON',
        period: '2020 – 2022',
        context: 'Led operational teams in fast-paced environment requiring real-time decision making.',
        ownership: [
            'Managed team of 10+ staff with scheduling and performance oversight',
            'Developed training programs and SOPs for operational efficiency',
            'Coordinated cross-functional workflows and resource allocation',
        ],
        impact: [
            'Improved team productivity by 25% through process optimization',
            'Reduced onboarding time by 40% with structured training',
            'Maintained zero compliance incidents during tenure',
        ],
    },
    {
        id: 'intern',
        role: 'IT Intern',
        company: 'Academic Institution',
        location: 'India',
        period: '2019',
        context: 'Internship focused on IT systems support and technical documentation.',
        ownership: [
            'Provided technical support for hardware and software issues',
            'Created documentation for IT processes and troubleshooting guides',
            'Assisted with network configuration and maintenance',
        ],
        impact: [
            'Resolved 100+ support tickets with 90%+ satisfaction rating',
            'Documented 20+ technical procedures for knowledge base',
            'Supported IT infrastructure serving 500+ users',
        ],
    },
];

export const skillGroups: SkillGroup[] = [
    {
        category: 'Data & Analytics',
        skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Visualization', 'ETL Pipelines', 'Power BI', 'Excel'],
    },
    {
        category: 'Cloud & Infrastructure',
        skills: ['AWS (EC2, S3, RDS, Lambda)', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux'],
    },
    {
        category: 'Machine Learning & AI',
        skills: ['Scikit-learn', 'TensorFlow', 'NLP', 'LLMs', 'RAG Systems', 'OpenAI API', 'Prompt Engineering'],
    },
    {
        category: 'Engineering & Tooling',
        skills: ['Git', 'REST APIs', 'Node.js', 'React', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Agile/Scrum'],
    },
];

export const contact = {
    email: 'manav.goyani8000@gmail.com',
    linkedin: 'https://linkedin.com/in/manavgoyani',
    github: 'https://github.com/ManavGoyani26',
};
