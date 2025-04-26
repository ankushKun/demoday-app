export interface Project {
    id: number;
    name: string;
    category: 'launchpad' | 'hackerhouse';
    logo: string;
    description: string;
    telegramGroup: string;
    investText: string;
    contributeText: string;
    collaborateText: string;
} 