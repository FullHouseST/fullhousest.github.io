import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { Moon, Sun, Globe, Users, Menu, X, Gamepad2 } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  currentTheme: Theme;
  toggleTheme: () => void;
  t: (key: any) => string;
}

export default function Navbar({
  currentLang,
  setLang,
  currentTheme,
  toggleTheme,
  t,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="relative bg-brand-pink h-[70px] flex items-center justify-between px-6 md:px-12 shadow-lg text-white">
        <a href="#" className="flex items-center gap-3 z-50 group font-bold tracking-tight text-lg">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-105 transition-all duration-200 overflow-hidden p-1.5">
            <img 
              src="/FH_Ico.png" 
              alt="Full House Studio Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-heading tracking-wider hidden sm:inline">
            FULL HOUSE STUDIO
          </span>
          <span className="font-heading tracking-wider sm:hidden">
            FULL HOUSE
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-semibold tracking-wide uppercase hover:text-gray-200 transition-colors duration-200"
          >
            {t('nav_about')}
          </a>
          <a
            href="#games"
            className="text-sm font-semibold tracking-wide uppercase hover:text-gray-200 transition-colors duration-200"
          >
            {t('nav_games')}
          </a>
          <a
            href="#teams"
            className="text-sm font-semibold tracking-wide uppercase hover:text-gray-200 transition-colors duration-200"
          >
            {t('nav_team')}
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5865f2] hover:bg-[#4752c4] px-5 py-2.5 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-200 shadow-md flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <Users className="w-4 h-4" />
            {t('nav_community')}
          </a>

          <div className="flex items-center gap-3 border-l border-white/20 pl-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 cursor-pointer transition-colors"
              title={currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setLang(currentLang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 cursor-pointer text-xs font-bold uppercase transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentLang === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-3 z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 cursor-pointer"
          >
            {currentTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setLang(currentLang === 'es' ? 'en' : 'es')}
            className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 cursor-pointer text-xs font-bold uppercase"
          >
            {currentLang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-white/15 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div 
          className="absolute left-0 bottom-[-35px] w-[320px] h-[40px] bg-brand-pink navbar-cutout-path pointer-events-none hidden md:block" 
          aria-hidden="true"
        />
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-brand-blue-dark/95 backdrop-blur-md pt-[90px] px-6 z-40 flex flex-col gap-6 text-center animate-fade-in">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold tracking-wide uppercase text-white hover:text-brand-pink transition-colors"
          >
            {t('nav_about')}
          </a>
          <a
            href="#games"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold tracking-wide uppercase text-white hover:text-brand-pink transition-colors"
          >
            {t('nav_games')}
          </a>
          <a
            href="#teams"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold tracking-wide uppercase text-white hover:text-brand-pink transition-colors"
          >
            {t('nav_team')}
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto bg-brand-pink hover:bg-brand-pink/90 text-white px-8 py-3.5 rounded-full font-bold uppercase transition-transform transform active:scale-95 flex items-center gap-2 mt-4 shadow-lg"
          >
            <Users className="w-5 h-5" />
            {t('nav_community')}
          </a>
        </div>
      )}
    </header>
  );
}
