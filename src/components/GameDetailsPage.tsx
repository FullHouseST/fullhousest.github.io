import React, { useState, useEffect } from 'react';
import { Game, Language, Theme } from '../types';
import { teams } from '../data';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Info, Download, Gamepad2, Layers, ExternalLink, Users } from 'lucide-react';

interface GameDetailsPageProps {
  game: Game;
  currentLang: Language;
  currentTheme: Theme;
  onBack: () => void;
}

export default function GameDetailsPage({
  game,
  currentLang,
  currentTheme,
  onBack,
}: GameDetailsPageProps) {
  const [activeImage, setActiveImage] = useState<string>(game.coverImage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImage(game.coverImage); 
  }, [game]);

  const studioInfo = teams.find((t) => t.key === game.studioKey);
  const teamMembers = studioInfo?.members || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="min-h-screen pt-28 pb-24 bg-white dark:bg-[#111111] text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-[#1c1c1e] dark:hover:bg-[#262628] text-slate-700 dark:text-slate-300 text-sm font-bold tracking-wide uppercase transition-all cursor-pointer shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>{currentLang === 'es' ? 'Volver a Proyectos' : 'Back to Games'}</span>
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Visual Carousel / Active Image */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200/40 dark:border-slate-800">
              <img
                src={activeImage}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white ${game.tagColor}`}>
                  {game.tag[currentLang]}
                </span>
              </div>
            </div>

            {/* Thumbnails Gallery */}
            {game.gallery && game.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {[game.coverImage, ...game.gallery.slice(1)].map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative aspect-video rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${
                      activeImage === img 
                        ? 'border-brand-pink scale-[1.02] shadow-md' 
                        : 'border-transparent opacity-70 hover:opacity-100 hover:scale-[1.01]'
                    }`}
                  >
                    <img src={img} alt={`${game.title} screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Core Sidebar Header */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-brand-pink font-heading">
                {game.studio}
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
                {game.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-brand-pink" />
                  {game.releaseYear}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300">
                  <Info className="w-3.5 h-3.5 text-brand-pink" />
                  {game.status[currentLang]}
                </span>
              </div>
            </div>

            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
              {game.shortDescription[currentLang]}
            </p>

            <div className="space-y-3 pt-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                {currentLang === 'es' ? 'Enlaces de Tienda' : 'Store Links'}
              </h3>
              <div className="flex flex-col gap-2">
                {game.steamLink && (
                  <a
                    href={game.steamLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#1b2838] hover:bg-[#2a475e] text-white text-sm font-bold tracking-wide uppercase transition-all shadow-md"
                  >
                    <span className="flex items-center gap-2.5">
                      <Gamepad2 className="w-4 h-4" />
                      <span>Steam Store</span>
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                )}
                {game.itchLink && (
                  <a
                    href={game.itchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#e40000] hover:bg-[#f41a1a] text-white text-sm font-bold tracking-wide uppercase transition-all shadow-md"
                  >
                    <span className="flex items-center gap-2.5">
                      <Gamepad2 className="w-4 h-4" />
                      <span>itch.io</span>
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                )}
                {game.discordLink && (
                  <a
                    href={game.discordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#5865f2] hover:bg-[#4752c4] text-white text-sm font-bold tracking-wide uppercase transition-all shadow-md"
                  >
                    <span className="flex items-center gap-2.5">
                      <Users className="w-4 h-4" />
                      <span>{currentLang === 'es' ? 'Comunidad de Discord' : 'Discord Community'}</span>
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Details Grid: Synopsis, Features, Team, Press kit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-slate-200/50 dark:border-slate-800">
          
          {/* Left Column: Synopsis & Team Members */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Synopsis */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black tracking-tight text-[#1A1A1A] dark:text-white font-heading flex items-center gap-2.5">
                <span className="h-6 w-1.5 bg-brand-red rounded-full" />
                {currentLang === 'es' ? 'Arquitectura y Sinopsis' : 'Architecture & Synopsis'}
              </h2>
              <div className="space-y-4">
                {game.longDescription[currentLang].map((paragraph, index) => (
                  <p key={index} className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Team Members */}
            {teamMembers.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white font-heading flex items-center gap-2.5">
                  <span className="h-6 w-1.5 bg-brand-pink rounded-full" />
                  {currentLang === 'es' ? 'Miembros del Equipo' : 'Team Members'}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {teamMembers.map((member, mIdx) => (
                    <div 
                      key={mIdx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1c] border border-slate-200/60 dark:border-slate-800/80 transition-colors"
                    >
                      <h4 className="text-sm font-black text-slate-900 dark:text-white">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-brand-pink uppercase tracking-wider mt-0.5">
                        {member.role[currentLang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Key Features & Press Kit */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Key Features */}
            <div className="space-y-4 p-6 rounded-3xl bg-slate-50 dark:bg-[#1a1a1c] border border-slate-200/60 dark:border-slate-800/80 transition-colors">
              <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white font-heading flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-pink" />
                {currentLang === 'es' ? 'Características Clave' : 'Key Features'}
              </h2>
              <ul className="space-y-3 pt-2">
                {game.features[currentLang].map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    <span className="text-brand-pink font-bold mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Press Kit section */}
            <div className="p-6 rounded-3xl bg-brand-pink/3 border border-brand-pink/15 space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-black text-slate-900 dark:text-white font-heading">
                  Press Kit
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  {currentLang === 'es' 
                    ? '¿Eres miembro de la prensa o creador de contenido? Descarga nuestro Press Kit.' 
                    : 'Are you a member of the press or a content creator? Download our Press Kit.'}
                </p>
              </div>
              <a
                href={game.pressKitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-brand-pink hover:bg-[#d6003c] text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>{currentLang === 'es' ? 'Descargar' : 'Download'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
