
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center space-x-4"
      >
        <h2 className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.4em] transition-colors">(FAQ)</h2>
        <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/10 transition-colors"></div>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-6">
        {FAQS.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
            className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[40px] overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-10 py-10 flex items-center justify-between text-left group"
            >
              <span className="text-xl font-light tracking-tight text-gray-900 dark:text-white transition-colors">{faq.question}</span>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-gray-50 dark:bg-white/10 text-gray-400 dark:text-gray-500'}`}>
                {openIndex === idx ? (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                )}
              </div>
            </button>
            <div className={`px-10 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-64 pb-10' : 'max-h-0'}`}>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-light transition-colors">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
