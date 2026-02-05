
import React from 'react';
import { motion } from 'framer-motion';
import { PIPELINE_STEPS } from '../constants';
import { MessageSquare, Cpu, Layers, Github, Zap, Globe } from 'lucide-react';

const IconMap: any = {
  MessageSquare, Cpu, Layers, Github, Zap, Globe
};

const Pipeline: React.FC = () => {
  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-end justify-between border-b border-black/5 dark:border-white/10 pb-8 transition-colors"
      >
        <div className="space-y-2">
          <h2 className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.4em]">(01 / AI Pipeline)</h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-300 transition-colors">The Automation Workflow</p>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">Step-by-step logic</div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PIPELINE_STEPS.map((step, idx) => {
          const Icon = IconMap[step.icon];
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="p-10 rounded-[48px] bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm dark:shadow-none space-y-8 group transition-all"
            >
              <div className="w-14 h-14 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center text-black dark:text-white transition-all">
                <Icon size={24} strokeWidth={1} />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-gray-300 dark:text-gray-600 uppercase tracking-[0.3em]">Step 0{idx + 1}</span>
                <h4 className="text-2xl font-light tracking-tight text-black dark:text-white leading-none">{step.title}</h4>
                <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-light transition-colors">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Pipeline;
