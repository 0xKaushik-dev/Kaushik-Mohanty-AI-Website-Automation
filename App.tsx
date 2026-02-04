
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pipeline from './components/Pipeline';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Testimonial } from './components/ui/design-testimonial';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#000';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f8f8f8';
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`relative min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black overflow-x-hidden ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground dark:bg-black dark:text-white transition-colors duration-500">

        {/* Custom Cursor */}
        <div
          className="custom-cursor hidden md:block z-[9999] opacity-50 dark:opacity-100"
          style={{ transform: `translate(${mousePos.x - 10}px, ${mousePos.y - 10}px)` }}
        />

        <Header
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          onNavClick={scrollTo}
        />

        <main className="relative">
          {/* Hero Section */}
          <section id="home" className="sticky top-0 z-0 h-screen w-full overflow-hidden">
            <Hero />
          </section>

          {/* Main content wrapper */}
          <div className="relative z-10 bg-background dark:bg-black rounded-t-[40px] md:rounded-t-[100px] transition-all duration-500">
            <div className="max-w-4xl mx-auto px-6 space-y-32 pt-32 pb-12 md:pt-48 md:pb-20">

              <section id="about">
                <About />
              </section>

              <section id="pipeline">
                <Pipeline />
              </section>

              <section id="tech">
                <TechStack />
              </section>

              <section id="projects">
                <Work />
              </section>

              <section id="testimonials" className="relative overflow-visible">
                <div className="flex items-center space-x-4 mb-12">
                  <h2 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] transition-colors">(03 / Recognition)</h2>
                  <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/10 transition-colors"></div>
                </div>
                <Testimonial />
              </section>

              <section id="services">
                <Services />
              </section>

              <section id="faq">
                <FAQ />
              </section>
            </div>
          </div>
        </main>

        <Footer onNavClick={scrollTo} />

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[120] bg-black text-white flex flex-col items-center justify-center space-y-8"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 p-2 text-white/50 hover:text-white transition-colors"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              {['Home', 'About', 'Pipeline', 'Projects', 'Services', 'Contact', 'FAQ'].map((item, idx) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-5xl font-extrabold tracking-tighter hover:text-gray-400 transition-all"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
