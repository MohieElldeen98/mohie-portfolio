import React from 'react';
import { Stethoscope, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-20 pb-12 px-4 text-center min-h-[80vh]">
      {/* Glass Container for Hero Content */}
      <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        
        <div className="relative flex flex-col items-center">
          <div className="mb-6 p-4 bg-white/10 rounded-full text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.3)] ring-1 ring-white/20 backdrop-blur-sm">
            <Stethoscope size={48} strokeWidth={1.5} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            محي الدين
          </h1>
          
          <div className="flex items-center gap-2 text-teal-200 font-medium text-lg md:text-xl mb-6 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-sm">
            <span>أخصائي علاج طبيعي</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 box-shadow-[0_0_8px_currentColor]"></span>
            <span>مشاريع الصحة الرقمية</span>
          </div>

          <p className="max-w-xl text-slate-200 text-lg leading-relaxed md:text-xl drop-shadow-sm mb-8">
            بناء أدوات رعاية صحية وإنتاجية عملية للأطباء والممارسين الصحيين.
            <br className="hidden md:block" />
            أجمع بين الخبرة السريرية والتطوير التقني لتحسين كفاءة العمل الطبي.
          </p>

          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors animate-bounce mt-4"
            aria-label="Scroll to projects"
          >
            <span className="text-sm font-medium">عرض المشاريع</span>
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;