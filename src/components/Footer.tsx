import React from 'react';
import { Language } from '../types';
import { Twitter, Facebook, Instagram, Tv, ArrowUp, Home } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  t: (key: any) => string;
}

export default function Footer({ currentLang, t }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1c1c1c] dark:bg-[#111111] text-white py-16 px-6 md:px-12 border-t border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow overflow-hidden p-1">
              <img 
                src="/FH_Ico.png" 
                alt="Full House Studio Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-heading tracking-wider font-bold">
              FULL HOUSE STUDIO
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/FullHouseST"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-pink text-white flex items-center justify-center transition-all shadow-md hover:-translate-y-0.5"
              aria-label="X / Twitter"
            >
              <Twitter className="w-4 h-4 fill-current" />
            </a>           
            <a
              href="https://www.instagram.com/fullhousest/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-pink text-white flex items-center justify-center transition-all shadow-md hover:-translate-y-0.5"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://fullhousest.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-pink text-white flex items-center justify-center transition-all shadow-md hover:-translate-y-0.5"
              aria-label="Itch.io"
            >
              <Tv className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[10px] tracking-widest font-black uppercase text-white/40">
            CONNECT WITH THE COMMUNITY
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-pink text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-white/50 font-mono font-bold tracking-tight">
            {t('footer_rights')}
          </p>
        </div>

      </div>
    </footer>
  );
}
