import React from 'react';
import { Language } from '../types';
import { teams } from '../data';
import { motion } from 'motion/react';
import { Ghost, Puzzle, Gamepad2 } from 'lucide-react';

interface TeamsSectionProps {
  currentLang: Language;
  t: (key: any) => string;
}

export default function TeamsSection({ currentLang, t }: TeamsSectionProps) {
  const getIcon = (iconName: string, teamKey: string) => {
    const colorClass = teamKey === 'calaka' ? 'text-[#f5004e]' : 'text-[#00b4d8]';
    if (iconName === 'ghost') return <Ghost className={`w-8 h-8 ${colorClass}`} />;
    if (iconName === 'toy') return <Puzzle className={`w-8 h-8 ${colorClass}`} />;
    return <Gamepad2 className={`w-8 h-8 ${colorClass}`} />;
  };

  return (
    <section id="teams" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs font-black uppercase tracking-widest text-brand-pink">
          Creative Houses
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          {t('team_title')}
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-semibold max-w-xl mx-auto">
          {t('team_subtitle')}
        </p>
        <div className="h-1 w-16 bg-brand-pink rounded-full mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {teams.map((team) => (
          <motion.div
            key={team.id}
            whileHover={{ scale: 1.01, y: -2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`relative p-8 md:p-12 rounded-3xl border bg-white dark:bg-[#1a1a1c] text-slate-900 dark:text-white shadow-xl transition-colors duration-300 ${
              team.key === 'calaka' ? 'border-[#f5004e]/25 dark:border-[#f5004e]/40' : 'border-[#00b4d8]/25 dark:border-[#00b4d8]/40'
            }`}
          >
            <div className="relative z-10 space-y-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-sm border select-none ${
                team.key === 'calaka' 
                  ? 'bg-[#f5004e]/10 border-[#f5004e]/20' 
                  : 'bg-[#00b4d8]/10 border-[#00b4d8]/20'
              }`}>
                {getIcon(team.icon, team.key)}
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight font-heading text-slate-900 dark:text-white">
                  {team.name}
                </h3>
                <p className="text-xs font-bold tracking-wider uppercase text-brand-pink font-heading">
                  {team.tagline[currentLang]}
                </p>
              </div>

              <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {team.description[currentLang]}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 dark:text-white/40">
                  FULL HOUSE CREATIVE MEMBER
                </span>
                <button
                  onClick={() => window.location.hash = `#studios/${team.id}`}
                  className="text-xs font-black uppercase tracking-wider text-brand-pink hover:text-[#d6003c] flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  {currentLang === 'es' ? 'Ver Estudio' : 'View Studio'}
                  <span className="transform group-hover:translate-x-1 transition-transform">❯</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
