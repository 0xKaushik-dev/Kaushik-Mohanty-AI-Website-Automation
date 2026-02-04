
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  onNavClick: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme, isMenuOpen, setIsMenuOpen, onNavClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[110] mix-blend-difference">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <button 
          onClick={() => onNavClick('home')}
          className="flex items-center space-x-3"
        >
          <div className="w-3.5 h-3.5 bg-white rounded-[1px]"></div>
          <span className="text-lg font-black tracking-tighter uppercase text-white">KAUSHIK®</span>
        </button>
        
        <div className="flex items-center space-x-8">
          {/* Subtle vertical separator as seen in some high-end layouts */}
          <div className="h-6 w-px bg-white/20 hidden md:block"></div>

          <button 
            onClick={toggleTheme}
            className="p-2 text-white hover:opacity-50 transition-opacity"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -mr-2 flex flex-col items-end space-y-2 group"
          >
            <div className="w-8 h-[1px] bg-white transition-all group-hover:w-10"></div>
            <div className="w-8 h-[1px] bg-white transition-all group-hover:w-6"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
