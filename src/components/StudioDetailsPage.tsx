import React, { useState, useEffect } from 'react';
import { Team, Language, Theme } from '../types';
import { games } from '../data';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, MapPin, Download, ExternalLink, Globe, MessageSquare, ShoppingBag, Twitter, Youtube } from 'lucide-react';

interface StudioDetailsPageProps {
  studio: Team;
  currentLang: Language;
  currentTheme: Theme;
  onBack: () => void;
  onOpenGame: (gameId: string) => void;
}

export default function StudioDetailsPage({
  studio,
  currentLang,
  currentTheme,
  onBack,
  onOpenGame,
}: StudioDetailsPageProps) {
  const [activeImage, setActiveImage] = useState<string>(studio.gallery?.[0] || '');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (studio.gallery && studio.gallery.length > 0) {
      setActiveImage(studio.gallery[0]);
    }
  }, [studio]);

  // Find games made by this studio
  const studioGames = games.filter((g) => g.studioKey === studio.key);

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'twitter':
        return <Twitter className="w-4 h-4 text-[#1DA1F2]" />;
      case 'youtube':
        return <Youtube className="w-4 h-4 text-[#FF0000]" />;
      case 'discord':
        return <MessageSquare className="w-4 h-4 text-[#5865F2]" />;
      case 'merch':
        return <ShoppingBag className="w-4 h-4 text-brand-pink" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

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
          className="group inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-[#1c1c1e] dark:hover:bg-[#262628] text-slate-700 dark:text-slate-300 text-sm font-bold tracking-wide uppercase transition-all cursor-pointer shadow-sm hover:shadow-md border border-transparent dark:border-slate-800/50"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>{currentLang === 'es' ? 'Volver a Inicio' : 'Back to Home'}</span>
        </button>

        {/* Hero Banner Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Studio Brand Header Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-brand-pink font-heading flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
                {currentLang === 'es' ? 'Estudio de Desarrollo' : 'Development Studio'}
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
                {studio.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {studio.location && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-[#1c1c1e] rounded-full text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-slate-800/40">
                    <MapPin className="w-3.5 h-3.5 text-brand-pink" />
                    {studio.location}
                  </span>
                )}
                {studio.founded && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-[#1c1c1e] rounded-full text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-slate-800/40">
                    <Calendar className="w-3.5 h-3.5 text-brand-pink" />
                    {currentLang === 'es' ? `Fundado en ${studio.founded}` : `Founded in ${studio.founded}`}
                  </span>
                )}
              </div>
            </div>

            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
              {studio.tagline[currentLang]}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {studio.description[currentLang]}
            </p>

            {/* Social / External Links Module */}
            {studio.socialLinks && studio.socialLinks.length > 0 && (
              <div className="space-y-3 pt-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  {currentLang === 'es' ? 'Redes y Enlaces Oficiales' : 'Official Links & Socials'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {studio.socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-[#1c1c1e] dark:hover:bg-[#262628] text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider border border-slate-250/50 dark:border-slate-800/60 transition-all shadow-sm"
                    >
                      <span className="flex items-center gap-2">
                        {getSocialIcon(link.type)}
                        <span>{link.label}</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Studio Media/Event Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
              {currentLang === 'es' ? 'Galería del Estudio' : 'Studio Gallery'}
            </h3>
            
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200/40 dark:border-slate-800">
              <img
                src={activeImage}
                alt={`${studio.name} gallery`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {studio.gallery && studio.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {studio.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative aspect-video rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${
                      activeImage === img 
                        ? 'border-brand-pink scale-[1.02] shadow-md' 
                        : 'border-transparent opacity-75 hover:opacity-100 hover:scale-[1.01]'
                    }`}
                  >
                    <img src={img} alt={`${studio.name} photo ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Detailed Sections: Story, Creative/Engineering Members, Projects, PressKit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-slate-200/50 dark:border-slate-800">
          
          {/* Left Column: Who We Are & Team Members */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Extended About Section */}
            {studio.longDescription && (
              <div className="space-y-4">
                <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white font-heading flex items-center gap-2.5">
                  <span className="h-6 w-1.5 bg-brand-pink rounded-full" />
                  {currentLang === 'es' ? 'Nuestra Historia' : 'Our Story'}
                </h2>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {studio.longDescription[currentLang]}
                </p>
              </div>
            )}

            {/* Custom Studio Members with Avatars */}
            {studio.members && studio.members.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white font-heading flex items-center gap-2.5">
                  <span className="h-6 w-1.5 bg-brand-pink rounded-full" />
                  {currentLang === 'es' ? 'Equipo y Roles Creativos' : 'Team & Creative Roles'}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {studio.members.map((member, mIdx) => (
                    <div 
                      key={mIdx}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#161618] border border-slate-200/60 dark:border-slate-800/80 transition-all hover:border-slate-300 dark:hover:border-slate-700"
                    >
                      {member.photo ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-brand-pink/20">
                          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink text-sm font-black flex-shrink-0">
                          {member.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-black text-slate-900 dark:text-white">
                          {member.name}
                        </h4>
                        <p className="text-xs font-semibold text-brand-pink uppercase tracking-wider mt-0.5">
                          {member.role[currentLang]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Studio Active Projects */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white font-heading flex items-center gap-2.5">
                <span className="h-6 w-1.5 bg-brand-pink rounded-full" />
                {currentLang === 'es' ? 'Catálogo de Proyectos' : 'Project Catalog'}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {studioGames.map((game) => (
                  <div
                    key={game.id}
                    onClick={() => onOpenGame(game.id)}
                    className="group relative flex flex-col bg-white dark:bg-[#161618] border border-slate-200/60 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow hover:shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                      <img
                        src={game.coverImage}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-white ${game.tagColor}`}>
                        {game.tag[currentLang]}
                      </span>
                    </div>

                    <div className="p-4 space-y-2">
                      <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-brand-pink transition-colors">
                        {game.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 font-medium">
                        {game.shortDescription[currentLang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Press Kit & Community Drive */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Press Kit box */}
            {studio.pressKitUrl && (
              <div className="p-6 rounded-3xl bg-brand-pink/3 border border-brand-pink/15 space-y-4 lg:sticky lg:top-24">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white font-heading flex items-center gap-2">
                    <Download className="w-5 h-5 text-brand-pink" />
                    <span>Press Kit</span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {currentLang === 'es' 
                      ? 'Accede a nuestra carpeta oficial de Google Drive diseñada para la prensa y creadores de contenido. Encontrará logos vectoriales, capturas de pantalla de alta resolución y trailers de nuestros proyectos.' 
                      : 'Access our official Google Drive folder designed for press and content creators. You will find vector logos, high-resolution screenshots, and trailers of our projects.'}
                  </p>
                </div>
                
                <a
                  href={studio.pressKitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-brand-pink hover:bg-[#d6003c] text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:shadow-md text-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{currentLang === 'es' ? 'Ver Google Drive' : 'Open Google Drive'}</span>
                </a>
              </div>
            )}

            {/* Extra Info / Values Card */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#161618] border border-slate-200/50 dark:border-slate-800/80 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-pink">
                {currentLang === 'es' ? 'Nuestros Valores' : 'Our Values'}
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full" />
                  <span>{currentLang === 'es' ? 'Originalidad Cultural' : 'Cultural Originality'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full" />
                  <span>{currentLang === 'es' ? 'Calidad Técnica y Narrativa' : 'Technical & Narrative Quality'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-pink rounded-full" />
                  <span>{currentLang === 'es' ? 'Desarrollo Ético y Colaborativo' : 'Ethical & Collaborative Dev'}</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
