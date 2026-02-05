
import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const techs = [
    { cat: 'AI & Logic', items: ['Google AI Studio', 'Prompt Engineering'] },
    { cat: 'Development', items: ['HTML5 / CSS3', 'JavaScript ES6+', 'React Components'] },
    { cat: 'Deployment', items: ['Vercel Cloud', 'GitHub Actions'] },
    { cat: 'Hosting', items: ['GoDaddy', 'Hostinger', 'Vercel'] }
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center space-x-4"
      >
        <h2 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] transition-colors">(Technology Stack)</h2>
        <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/10 transition-colors"></div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {techs.map((t, idx) => (
          <motion.div
            key={t.cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-600">{t.cat}</h4>
            <ul className="space-y-3">
              {t.items.map(item => (
                <li key={item} className="text-sm font-bold tracking-tight text-black dark:text-white border-b border-black/5 dark:border-white/5 pb-1 w-fit transition-all">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
