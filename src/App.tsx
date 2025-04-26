import { useState, useEffect } from 'react';
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';

export default function App() {
  const [activeSection, setActiveSection] = useState<'launchpad' | 'hackerhouse'>('launchpad');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const launchpadProjects = projects.filter(p => p.category === 'launchpad');
  const hackerhouseProjects = projects.filter(p => p.category === 'hackerhouse');

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 relative overflow-hidden" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, #f0f0f0 1px, transparent 0)',
      backgroundSize: '24px 24px'
    }}>
      <div className={`scanline max-w-2xl mx-auto ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="relative mb-12">
          <h1 className="text-4xl font-bold text-center mb-2 text-gray-900 transition-transform hover:scale-[1.02]">
            Arweave Day India
          </h1>
          <h2 className="text-xl text-center text-emerald-600 animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
            Demo Day Projects
          </h2>
          <div className="absolute -right-8 top-0">
            <div className="w-4 h-4 bg-emerald-500 animate-fade-in" style={{
              animationDelay: '0.4s'
            }}></div>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex justify-between gap-4 mb-8">
          <button
            onClick={() => setActiveSection('launchpad')}
            className={`relative flex-1 py-3 px-6 text-center font-medium border transition-all duration-300
              ${activeSection === 'launchpad'
                ? 'border-emerald-500 text-emerald-600 bg-emerald-50 scale-[1.02]'
                : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:scale-[1.02]'
              } animate-fade-in`}
          >
            Launchpad Projects
            {activeSection === 'launchpad' && (
              <div className="absolute -top-1 -right-1">
                <div className="w-2 h-2 bg-emerald-500"></div>
              </div>
            )}
          </button>
          <button
            onClick={() => setActiveSection('hackerhouse')}
            className={`relative flex-1 py-3 px-6 text-center font-medium border transition-all duration-300
              ${activeSection === 'hackerhouse'
                ? 'border-emerald-500 text-emerald-600 bg-emerald-50 scale-[1.02]'
                : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:scale-[1.02]'
              } animate-fade-in`}
          >
            Hackerhouse Projects
            {activeSection === 'hackerhouse' && (
              <div className="absolute -top-1 -right-1">
                <div className="w-2 h-2 bg-emerald-500"></div>
              </div>
            )}
          </button>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {activeSection === 'launchpad' ? (
            launchpadProjects.map((project, index) => (
              <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            hackerhouseProjects.map((project, index) => (
              <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <ProjectCard project={project} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}