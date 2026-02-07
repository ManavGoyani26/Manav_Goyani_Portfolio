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
        title: 'Enterprise AWS Infrastructure',
        problem: 'Legacy on-premise infrastructure was costly ($15k/mo) and prone to downtime during peak loads.',
        description: 'Architected a serverless-first migration strategy using AWS Lambda and ECS, implementing infrastructure-as-code for reproducibility.',
        techStack: [
            { category: 'Cloud', items: ['AWS Lambda', 'ECS Fargate', 'Terraform', 'CloudFront'] },
            { category: 'Data', items: ['RDS (Postgres)', 'ElastiCache'] },
            { category: 'DevOps', items: ['GitHub Actions', 'Docker', 'Datadog'] },
        ],
        outcomes: [
            'Reduced monthly infrastructure costs by 40% ($6k/mo savings)',
            'Achieved 99.99% uptime with multi-AZ deployment',
            'Cut deployment time from 2 hours to 15 minutes via CI/CD',
        ],
        links: {
            github: 'https://github.com/ManavGoyani26',
        },
    },
    {
        id: 'etl-pipeline',
        title: 'Real-Time Data Pipeline',
        problem: 'Marketing decisions were delayed by 24+ hours due to slow batch processing of user events.',
        description: 'Engineered a streaming ETL pipeline to ingest, transform, and load 50GB+ daily event data for real-time analytics dashboards.',
        techStack: [
            { category: 'Pipeline', items: ['Apache Kafka', 'Python', 'Airflow'] },
            { category: 'Storage', items: ['Snowflake', 'S3 Data Lake'] },
            { category: 'Viz', items: ['Power BI', 'Tableau'] },
        ],
        outcomes: [
            'Reduced data latency from 24 hours to <5 minutes',
            'Enabled intraday campaign optimization, boosting ROAS by 15%',
            'Implemented automated data quality checks, catching 95% of schema errors',
        ],
        links: {
            github: 'https://github.com/ManavGoyani26',
        },
    },
    {
        id: 'predictive-maintenance',
        title: 'Predictive Maintenance Model',
        problem: 'Unexpected equipment failures caused significant production downtime and maintenance costs.',
        description: 'Developed an anomaly detection model using sensor data to predict component failures before they occurred.',
        techStack: [
            { category: 'ML', items: ['Python', 'Scikit-learn', 'XGBoost'] },
            { category: 'Data', items: ['Pandas', 'NumPy', 'SQL'] },
            { category: 'Deployment', items: ['FastAPI', 'Docker'] },
        ],
        outcomes: [
            'Predicted 80% of major failures with 48-hour lead time',
            'Reduced unplanned downtime by 25% in pilot phase',
            'Automated alert generation for maintenance teams',
        ],
        links: {
            github: 'https://github.com/ManavGoyani26',
        },
    },
];

export const experiences: Experience[] = [
    {
        id: 'applause',
        role: 'QA Data Analyst',
        company: 'Applause (uTest)',
        location: 'Remote',
        period: '2022 – Present',
        context: 'Global testing platform requiring rigorous data validation and quality assurance for enterprise clients.',
        ownership: [
            'Led data quality initiatives for user testing datasets across 5+ enterprise projects',
            'Designed validation scripts to automate regression testing protocols',
            'Collaborated with engineering teams to triage critical data anomalies',
        ],
        impact: [
            'Identified and resolved 200+ data integrity issues, preventing production rollbacks',
            'Reduced manual testing time by 30% through script automation',
            'Maintained 98% defect acceptance rate across all client deliverables',
        ],
    },
    {
        id: 'supervisor',
        role: 'Operations Supervisor',
        company: 'Previous Role',
        location: 'Toronto, ON',
        period: '2020 – 2022',
        context: 'High-volume operational environment requiring resource optimization and performance tracking.',
        ownership: [
            'Managed resource allocation for a 10-person shift based on daily volume forecasts',
            'Implemented performance tracking dashboards to monitor team throughput',
            'Standardized operational procedures (SOPs) to reduce error rates',
        ],
        impact: [
            'Increased team throughput by 25% via workflow optimization',
            'Reduced onboarding ramp-up time by 40% with structured data-driven training',
            'Achieved 100% compliance with safety and operational standards',
        ],
    },
];

// Tools grouped by function as per PRD v1.2
export const skillGroups: SkillGroup[] = [
    {
        category: 'Data & Analytics',
        skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI', 'Excel (VBA)', 'Tableau', 'Airflow'],
    },
    {
        category: 'Cloud & Infrastructure',
        skills: ['AWS (Lambda, S3, RDS, ECS)', 'Azure', 'Terraform', 'Docker', 'GitHub Actions', 'Linux', 'CI/CD'],
    },
    {
        category: 'Machine Learning & AI',
        skills: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'XGBoost', 'OpenAI API', 'NLP'],
    },
    {
        category: 'Engineering & Tools',
        skills: ['Git', 'Postman', 'PostgreSQL', 'FastAPI'],
    },
];

export const contact = {
    email: 'manav.goyani8000@gmail.com',
    linkedin: 'https://linkedin.com/in/manavgoyani',
    github: 'https://github.com/ManavGoyani26',
};
