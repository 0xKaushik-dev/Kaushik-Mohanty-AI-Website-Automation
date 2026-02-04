
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Intro Header */}
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-red-500 rounded-sm" />
        <h2 className="text-base md:text-lg font-medium text-black dark:text-white uppercase tracking-wider">
          Hey, Just An Intro
        </h2>
      </div>

      {/* Main Title Statement - Restored to 4xl/6xl */}
      <div className="max-w-4xl">
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-black dark:text-white">
          AI Automation Specialist building autonomous, scalable digital ecosystems.®
        </h3>
      </div>

      {/* Custom Button Component - Restored larger size */}
      <div className="pt-4">
        <a
          href="mailto:hello.kaushikmohanty@gmail.com"
          className="group inline-flex items-center"
        >
          <span className="text-lg md:text-xl font-medium text-black dark:text-white border-b border-black dark:border-white transition-all">
            Get in touch
          </span>
        </a>
      </div>

      {/* Horizontal Divider */}
      <div className="w-full h-px bg-black/5 dark:bg-white/10" />

      {/* Sub-Section 1 - Restored larger text sizes */}
      <div className="space-y-6 max-w-2xl">
        <h4 className="text-xl md:text-2xl font-bold text-black dark:text-white">
          Bringing Logic to Life
        </h4>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-normal leading-relaxed">
          I specialize in transforming manual development hurdles into streamlined AI workflows. Whether it's rapid prototyping, or full-scale automated deployments.
        </p>
      </div>


    </div>
  );
};

export default About;
