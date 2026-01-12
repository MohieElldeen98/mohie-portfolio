import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-16 border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 text-center text-slate-400 text-sm">
        <p dir="ltr" className="font-medium text-slate-300">
          &copy; {new Date().getFullYear()} Mohie El-Deen. All rights reserved.
        </p>
        <p className="mt-2 text-slate-500">
          تم التصميم والتطوير مع التركيز على البساطة والأداء
        </p>
      </div>
    </footer>
  );
};

export default Footer;