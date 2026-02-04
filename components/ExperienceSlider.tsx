
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const ExperienceSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % EXPERIENCES.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length);

  const exp = EXPERIENCES[activeIndex];

  return (
    <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-gray-100 mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-50">
        <motion.div 
          className="h-full bg-black"
          initial={{ width: 0 }}
          animate={{ width: `${((activeIndex + 1) / EXPERIENCES.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "circOut" }}
        />
      </div>

      <div className="flex items-center justify-between mb-16">
        <div className="space-y-1">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Curriculum Vitae</span>
          <h3 className="text-3xl font-black tracking-tighter uppercase">{exp.company}</h3>
        </div>
        <div className="flex space-x-3">
          <button onClick={prev} className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all group shadow-sm">
            <svg className="w-6 h-6 transform group-active:scale-90 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button onClick={next} className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all group shadow-sm">
            <svg className="w-6 h-6 transform group-active:scale-90 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={exp.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h4 className="text-4xl font-extrabold tracking-tight leading-[1.1]">{exp.role}</h4>
            <p className="text-gray-500 leading-relaxed text-xl max-w-2xl font-medium italic">
              "{exp.description}"
            </p>
          </div>
          <div className="flex items-center space-x-4">
             <span className="px-4 py-2 bg-gray-50 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 border border-gray-100">
               Timeframe: {exp.period}
             </span>
             <div className="h-[1px] flex-grow bg-gray-100" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ExperienceSlider;
