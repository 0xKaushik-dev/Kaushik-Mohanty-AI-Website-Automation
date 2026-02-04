
import React from 'react';
import { motion } from 'framer-motion';
import { TextScramble } from './ui/text-scramble';
import { BlurredStagger } from './ui/blurred-stagger';

const Hero: React.FC = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center px-6 md:px-16">
      {/* Background Image with Dark Overlay - Static */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-portrait-blue.png"
          alt="Portrait"
          className="w-full h-full object-cover brightness-75 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      </div>

      {/* Large background "X" */}
      <div className="absolute bottom-20 left-10 md:left-20 z-1 select-none pointer-events-none">
        <span className="text-[15rem] md:text-[25rem] font-bold text-white/5 leading-none">X</span>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-2xl space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
          {/* Availability Status */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-3 w-fit"
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/70">
              Available for Work
            </span>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 animate-status-pulse"></span>
            </div>
          </motion.div>

          <BlurredStagger
            text={`Pick a plan, submit a job request,\nand your イメージ\nwill kickoff within 24 hours.`}
            className="text-2xl md:text-5xl font-light leading-tight tracking-tight text-white max-w-lg"
          />

          <motion.div
            variants={itemVariants}
            className="flex items-baseline space-x-1"
          >
            <a
              href="#projects"
              className="text-lg md:text-xl font-light text-white"
            >
              <TextScramble text="Explore Now" />
            </a>
            <span className="text-[10px] font-bold text-white/60 mb-4 self-start">1</span>
          </motion.div>
        </div>

        {/* Strategy List */}
        <motion.div
          variants={itemVariants}
          className="space-y-1 pt-8"
        >
          <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-3">01/ Strategy</p>
          <ul className="space-y-1">
            <li className="text-xs md:text-sm font-light uppercase tracking-widest text-white/80">Automation</li>
            <li className="text-xs md:text-sm font-light uppercase tracking-widest text-white/80">Deployment</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">SCROLL</span>
      </motion.div>
    </div>
  );
};

export default Hero;