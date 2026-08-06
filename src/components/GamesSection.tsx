import React, { useState } from 'react';
import { Language } from '../types';
import { games } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface GamesSectionProps {
  currentLang: Language;
  t: (key: any) => string;
}

export default function GamesSection({
  currentLang,
  t,
}: GamesSectionProps) {
  const [filter, setFilter] = useState<'all' | 'calaka' | 'plush'>('all');

  const filteredGames = games.filter((game) => {
    if (filter === 'all') return true;
    return game.studioKey === filter;
  });

  const handleOpenGame = (gameId: string) => {
    window.location.hash = `#games/${gameId}`;
  };

  return (
    <section id="games" className="py-24 bg-[#f8f9fa] dark:bg-[#262626] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-brand-pink">
            Full House Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            {t('games_title')}
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-semibold max-w-xl mx-auto">
            {t('games_subtitle')}
          </p>
          <div className="h-1 w-16 bg-brand-pink rounded-full mx-auto mt-4" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filter === 'all'
                ? 'bg-brand-pink text-white shadow-md'
                : 'bg-white dark:bg-[#1c1c1e] text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-[#2c2c2e]'
            }`}
          >
            {t('games_all_filter')}
          </button>
          <button
            onClick={() => setFilter('calaka')}
            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filter === 'calaka'
                ? 'bg-[#f5004e] text-white shadow-md'
                : 'bg-white dark:bg-[#1c1c1e] text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-[#2c2c2e]'
            }`}
          >
            Calaka Studio
          </button>
          <button
            onClick={() => setFilter('plush')}
            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filter === 'plush'
                ? 'bg-[#00b4d8] text-white shadow-md'
                : 'bg-white dark:bg-[#1c1c1e] text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-[#2c2c2e]'
            }`}
          >
            PlushCraft Studios
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col h-full bg-white dark:bg-[#1c1c1c] border border-slate-200/60 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div 
                onClick={() => handleOpenGame(game.id)}
                className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
              >
                <img
                  src={game.coverImage}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <span className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white shadow ${
                  game.studioKey === 'calaka' ? 'bg-[#f5004e]' : 'bg-[#00b4d8]'
                }`}>
                  {game.studio}
                </span>

                <span className={`absolute bottom-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-lg text-white shadow ${game.tagColor}`}>
                  {game.status[currentLang]}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {game.tag[currentLang]}
                  </span>
                  <h3 
                    onClick={() => handleOpenGame(game.id)}
                    className="text-xl font-black text-slate-900 dark:text-white group-hover:text-brand-pink transition-colors cursor-pointer"
                  >
                    {game.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                    {game.shortDescription[currentLang]}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-2">
                  <span className="text-xs font-extrabold text-slate-400 dark:text-slate-500 font-mono">
                    {game.releaseYear}
                  </span>
                  <button
                    onClick={() => handleOpenGame(game.id)}
                    className="text-xs font-black uppercase tracking-wider text-brand-pink hover:text-[#d6003c] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    {t('explore_btn')}
                    <span className="transform group-hover:translate-x-1 transition-transform">❯</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
