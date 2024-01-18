import { apple } from "../assets/images";
import {
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Technical Support Engineer",
        company_name: "Apple iStore",
        icon: apple,
        iconBg: "#b7e4c7",
        date: "May 2023",
        points: [
            "Diagnosed and resolved operating system, hardware and software program problems to root causes.",
            "Identified process gaps and provided solutions that improve the customer's quality of service.",
            "Supported numerous company activities by setting up and configuring laptops, projectors, video teleconference.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Lerato-Lee',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/lerato-m-a63a7b25a/',
    }
];

export const projects = [
    {
        iconUrl: react,
        theme: 'btn-back-blue',
        name: 'AI powered 3D Website',
        description: 'Designed and built an ai powered 3d  website using Threejs and React.js',
        link: 'https://github.com/Lerato-Lee/threejs',
    },
    {
        iconUrl: javascript,
        theme: 'btn-back-pink',
        name: 'Frontend Facebook Clone',
        description: 'Built a complete clone of Facebook, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/Lerato-Lee/SheCodes',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/Lerato-Lee/projects_realestate',
    },
    {
        iconUrl: react,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/Lerato-Lee/ai_summarizer',
    }
];