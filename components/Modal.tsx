import React, { useEffect, useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = 'hidden';
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    // Cleanup: Unlock scroll on unmount
    return () => {
      document.body.style.overflow = ''; // Empty string reverts to default stylesheet behavior
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-white/5 backdrop-blur-md z-10">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{project.title}</h3>
          <button 
            onClick={onClose}
            className="p-2.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-full transition-all duration-200 border border-transparent hover:border-white/10 shadow-sm hover:shadow-md active:scale-95"
            aria-label="Close preview"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-4 md:p-6 overflow-y-auto bg-slate-950/50 flex flex-col items-center">
            {project.screenshot ? (
                <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 min-h-[200px] flex items-center justify-center relative group">
                  {!isImageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img 
                    src={project.screenshot} 
                    alt={`Preview of ${project.title}`} 
                    className={`w-full h-auto object-cover transition-all duration-700 ease-out ${isImageLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'}`}
                    onLoad={() => setIsImageLoaded(true)}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none"></div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-64 w-full text-slate-400 border border-dashed border-white/10 rounded-xl bg-white/5">
                    لا توجد معاينة متاحة
                </div>
            )}
            
            <p className="mt-8 text-slate-300 text-center max-w-2xl leading-relaxed text-lg">
              {project.description}
            </p>
        </div>
        
        {/* Footer */}
        <div className="p-4 md:p-6 border-t border-white/10 bg-white/5 backdrop-blur-md flex flex-wrap justify-end gap-3 z-10">
            <button 
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all font-medium active:scale-95"
            >
                إغلاق
            </button>
            <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-primary-700 hover:bg-primary-600 text-white rounded-lg transition-all shadow-lg hover:shadow-primary-600/20 border border-transparent hover:border-primary-500/50 gap-2 font-bold active:scale-95"
            >
                <span>فتح المشروع</span>
                <ExternalLink size={18} />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;