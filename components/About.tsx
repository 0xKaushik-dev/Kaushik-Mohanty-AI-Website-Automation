
import React from 'react';
import { motion } from 'framer-motion';

import { MagicText } from './ui/magic-text';

const About: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Intro Header */}
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-red-500 rounded-sm" />
        <h2 className="text-base md:text-lg font-medium text-black dark:text-white uppercase tracking-wider">
          Hey, Just An Intro
        </h2>
      </div>

      {/* Main Title Statement - Using MagicText */}
      <div className="max-w-4xl">
        <div className="text-black dark:text-white">
          <MagicText text="An AI Automation Specialist focused on building scalable, autonomous digital systems—transforming manual development challenges into intelligent AI workflows. From rapid prototyping to full-scale automated deployments, solutions are designed with smart automation pipelines, intuitive interfaces, and reliable cloud infrastructure to bring logic to life through efficient, self-running systems. ®" />
        </div>
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




    </div>
  );
};

export default About;
