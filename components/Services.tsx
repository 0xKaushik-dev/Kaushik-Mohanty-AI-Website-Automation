
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="flex items-center space-x-4">
        <h2 className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.4em] transition-colors">(Our Services)</h2>
        <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/10 transition-colors"></div>
      </div>

      <div className="grid gap-8">
        {SERVICES.map((s, idx) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
            className="p-12 rounded-[56px] border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl dark:hover:bg-white/10 transition-all"
          >
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="space-y-6">
                <span className="text-[10px] font-bold text-gray-300 dark:text-gray-600 uppercase tracking-[0.3em]">Solution 0{idx + 1}</span>
                <h4 className="text-4xl md:text-5xl font-light tracking-tight text-black dark:text-white transition-colors leading-none">{s.title}</h4>
                <p className="text-xl max-w-md text-gray-500 dark:text-gray-400 font-light transition-colors leading-relaxed">{s.description}</p>
              </div>
              <ul className="space-y-5 pt-4">
                {s.features.map(f => (
                  <li key={f} className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black dark:text-white transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
