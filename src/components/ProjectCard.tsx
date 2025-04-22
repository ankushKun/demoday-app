import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const handleButtonClick = (action: string) => {
        window.open(project.telegramGroup, '_blank');
    };

    return (
        <div className="relative border border-gray-700 bg-black/50 p-8 group transition-transform hover:scale-[1.01]">
            <div className="absolute -top-1 -right-1">
                <div className="w-2 h-2 bg-emerald-400"></div>
            </div>

            <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-6 group">
                    <div className="absolute -top-2 -right-2 w-full h-full border border-emerald-400 
                        transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
                    <img
                        src={project.logo}
                        alt={`${project.name} logo`}
                        className="w-full h-full object-contain relative z-10 
                            transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
                    />
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 transition-transform hover:scale-[1.02]">{project.name}</h2>
                <p className="text-gray-400 text-center mb-8 max-w-lg animate-fade-in" style={{
                    animationDelay: '0.2s'
                }}>{project.description}</p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                    {['Invest', 'Contribute', 'Collaborate'].map((action, index) => (
                        <button
                            key={action}
                            onClick={() => handleButtonClick(action.toLowerCase())}
                            className="flex-1 border border-emerald-400 bg-emerald-400/10 text-emerald-400 py-3 px-6 
                                hover:bg-emerald-400/20 transition-all duration-300 relative group/button
                                animate-fade-in hover:scale-[1.02]"
                            style={{
                                animationDelay: `${0.3 + (index * 0.1)}s`
                            }}
                        >
                            <span className="relative z-10">{action}</span>
                            <div className="absolute -top-1 -right-1 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 bg-emerald-400"></div>
                            </div>
                            <div className="absolute inset-0 bg-emerald-400/0 transition-colors duration-300 
                                group-hover/button:bg-emerald-400/10"></div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
} 