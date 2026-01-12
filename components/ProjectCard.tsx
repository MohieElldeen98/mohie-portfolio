import React from 'react';
import { ExternalLink, Instagram, Eye } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onPreview: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPreview }) => {
  const Icon = project.icon;

  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 flex flex-col items-start h-full hover:bg-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative z-10 w-full flex flex-col h-full">
        <div className="w-full mb-6">
          <div className="p-3 bg-white/10 rounded-xl text-teal-300 border border-white/5 shadow-inner w-fit">
            <Icon size={32} strokeWidth={1.5} />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">
          {project.title}
        </h3>
        
        <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-auto w-full">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center flex-1 sm:flex-none px-6 py-3 bg-white/10 hover:bg-teal-600/80 text-white font-medium rounded-lg border border-white/20 hover:border-teal-500/50 transition-all duration-300 gap-2 backdrop-blur-sm shadow-lg"
          >
            <span>{project.buttonText}</span>
            <ExternalLink size={18} />
          </a>

          {project.instagram && (
            <a 
              href={project.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center flex-1 sm:flex-none px-6 py-3 bg-white/5 hover:bg-pink-600/80 text-white font-medium rounded-lg border border-white/20 hover:border-pink-500/50 transition-all duration-300 gap-2 backdrop-blur-sm shadow-lg"
            >
              <span>انستجرام</span>
              <Instagram size={18} />
            </a>
          )}
          
          <button
            onClick={() => onPreview(project)}
            className="inline-flex items-center justify-center px-4 py-3 bg-white/5 hover:bg-white/15 text-white font-medium rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 gap-2 backdrop-blur-sm"
            title="معاينة"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;