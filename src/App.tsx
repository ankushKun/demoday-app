import { useState, useEffect } from 'react';
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 relative overflow-hidden" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, #1a1a1a 1px, transparent 0)',
      backgroundSize: '24px 24px'
    }}>
      <div className={`scanline max-w-2xl mx-auto ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="relative mb-12">
          <h1 className="text-4xl font-bold text-center mb-2 transition-transform hover:scale-[1.02]">
            Arweave Day India
          </h1>
          <h2 className="text-xl text-center text-emerald-400 animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
            Demo Day Projects
          </h2>
          <div className="absolute -right-8 top-0">
            <div className="w-4 h-4 bg-emerald-400 animate-fade-in" style={{
              animationDelay: '0.4s'
            }}></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-between gap-4 mb-8">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(index)}
              className={`relative flex-1 py-3 px-6 text-center font-medium border transition-all duration-300
                ${activeTab === index
                  ? 'border-emerald-400 text-emerald-400 scale-[1.02]'
                  : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:scale-[1.02]'
                } animate-fade-in`}
              style={{
                animationDelay: `${0.1 * (index + 1)}s`
              }}
            >
              {project.name}
              {activeTab === index && (
                <div className="absolute -top-1 -right-1">
                  <div className="w-2 h-2 bg-emerald-400"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Project Card */}
        <div key={activeTab} className="animate-fade-in" style={{ animationDuration: '0.3s' }}>
          <ProjectCard project={projects[activeTab]} />
        </div>
      </div>
    </div>
  );
}