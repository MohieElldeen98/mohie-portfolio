import React, { useState } from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { PROJECTS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handlePreview = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <Hero />
        
        <section id="projects" className="mt-12 md:mt-20 scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white tracking-wide drop-shadow-md">المشاريع</h2>
            <div className="h-px bg-white/20 flex-grow shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onPreview={handlePreview}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Conditionally render Modal to ensure lifecycle hooks run correctly */}
      {selectedProject && (
        <Modal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default App;