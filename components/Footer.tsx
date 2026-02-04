
import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Music } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const socialLinks = [
    { Icon: Twitter, label: 'X', url: '#' },
    { 
      Icon: Instagram, 
      label: 'Instagram', 
      url: 'https://www.instagram.com/kaushik_mohanty_?igsh=c3JhZ2h1dXZ3MHJz' 
    },
    { 
      Icon: Music, 
      label: 'YouTube Music', 
      url: 'https://music.youtube.com/playlist?list=PLqOKtncJnpXkpIynPxxzcIfga93GC0BmT&si=NXV9CCfKeGjAEAXc' 
    }
  ];

  return (
    <footer className="mt-20 px-4 md:px-6 pb-6">
      <div className="bg-black text-white rounded-[48px] md:rounded-[80px] p-8 md:p-24 space-y-24">
        {/* Top Section: CTA */}
        <div className="space-y-14">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-8xl font-light tracking-tight leading-[1.05]">
              Ready to work with a<br />
              <span className="text-white/30 italic font-serif">professional creative?</span>
            </h2>
          </div>

          <div className="space-y-8">
            <a 
              href="mailto:hello.kaushikmohanty@gmail.com"
              className="group flex items-center space-x-3 text-2xl md:text-3xl font-light hover:opacity-70 transition-opacity"
            >
              <span className="border-b border-white/20 pb-1">Get in touch</span>
              <span className="inline-block transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-white/40">↗</span>
            </a>
            
            <p className="text-white/30 font-light text-lg tracking-tight">
              // Available for global remote 2026
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors border border-white/10"
              aria-label={social.label}
            >
              <social.Icon size={22} strokeWidth={1} />
            </motion.a>
          ))}
        </div>

        {/* Bottom Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
          <div className="space-y-8">
            <h4 className="text-white/30 font-bold uppercase tracking-[0.4em] text-[10px]">Menu</h4>
            <nav className="flex flex-col space-y-5">
              {['Home', 'Work', 'About', 'Services', 'Contact', 'FAQ'].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavClick(item.toLowerCase())}
                  className="text-left text-xl font-light text-white hover:text-white/50 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-8">
            <h4 className="text-white/30 font-bold uppercase tracking-[0.4em] text-[10px]">Legal</h4>
            <nav className="flex flex-col space-y-5">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xl font-light text-white hover:text-white/50 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Branding/Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 pt-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
          <div className="space-y-2">
            <p>Kaushik Mohanty</p>
            <p>AI Website Automation Pipeline</p>
          </div>
          <p>© 2026 Kaushik Mohanty</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
