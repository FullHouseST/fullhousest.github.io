import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import AboutSection from './components/AboutSection';
import GamesSection from './components/GamesSection';
import TeamsSection from './components/TeamsSection';
import WavyDivider from './components/WavyDivider';
import Footer from './components/Footer';
import GameDetailsPage from './components/GameDetailsPage';
import StudioDetailsPage from './components/StudioDetailsPage';
import { Language, Theme, Game, Team } from './types';
import { translations, games, teams } from './data';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [theme, setTheme] = useState<Theme>('light');
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [activeStudio, setActiveStudio] = useState<Team | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#games/')) {
        const gameId = hash.replace('#games/', '');
        const foundGame = games.find((g) => g.id === gameId);
        if (foundGame) {
          setActiveGame(foundGame);
          setActiveStudio(null);
          return;
        }
      } else if (hash.startsWith('#studios/')) {
        const studioId = hash.replace('#studios/', '');
        const foundStudio = teams.find((t) => t.id === studioId);
        if (foundStudio) {
          setActiveStudio(foundStudio);
          setActiveGame(null);
          return;
        }
      }
      setActiveGame(null);
      setActiveStudio(null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (!activeGame && !activeStudio) {
      const hash = window.location.hash;
      if (hash && !hash.startsWith('#games/') && !hash.startsWith('#studios/')) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [activeGame, activeStudio]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const t = (key: keyof typeof translations['es']) => {
    return translations[lang][key] || translations['en'][key] || '';
  };

  const handleOpenGame = (gameId: string) => {
    window.location.hash = `#games/${gameId}`;
  };

  const handleBackToGames = () => {
    window.location.hash = '#games';
  };

  const handleBackToTeams = () => {
    window.location.hash = '#studios';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased overflow-x-hidden">
      <Navbar
        currentLang={lang}
        setLang={setLang}
        currentTheme={theme}
        toggleTheme={toggleTheme}
        t={t}
      />

      {activeGame ? (
        <GameDetailsPage
          game={activeGame}
          currentLang={lang}
          currentTheme={theme}
          onBack={handleBackToGames}
        />
      ) : activeStudio ? (
        <StudioDetailsPage
          studio={activeStudio}
          currentLang={lang}
          currentTheme={theme}
          onBack={handleBackToTeams}
          onOpenGame={handleOpenGame}
        />
      ) : (
        <>
          <HeroCarousel currentLang={lang} t={t} onOpenGame={handleOpenGame} />

          <WavyDivider
            colorClass="fill-white dark:fill-[#111111]"
            bgColorClass="bg-black"
            direction="down"
          />

          <main className="relative z-10">
            <AboutSection currentLang={lang} t={t} />

            <WavyDivider
              colorClass="fill-[#f8f9fa] dark:fill-[#262626]"
              bgColorClass="bg-white dark:bg-[#111111]"
              direction="down"
            />

            <div className="bg-[#f8f9fa] dark:bg-[#262626] transition-colors duration-300">
              <GamesSection
                currentLang={lang}
                t={t}
              />
            </div>

            <WavyDivider
              colorClass="fill-white dark:fill-[#1c1c1c]"
              bgColorClass="bg-[#f8f9fa] dark:bg-[#262626]"
              direction="down"
            />

            <div className="bg-white dark:bg-[#1c1c1c] text-slate-800 dark:text-white transition-colors duration-300">
              <TeamsSection currentLang={lang} t={t} />
            </div>
          </main>
        </>
      )}

      <Footer currentLang={lang} t={t} />
    </div>
  );
}
