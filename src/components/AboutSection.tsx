import React from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';
import { Heart, Compass, MapPin } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  t: (key: any) => string;
}

export default function AboutSection({ currentLang, t }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-brand-pink">
              {t('about_subtitle')}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
              {t('about_title')}
            </h2>
          </div>

          <div className="h-1.5 w-20 bg-brand-pink rounded-full" />

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {t('about_p1')}
          </p>

          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {t('about_p2')}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-[#262626] rounded-2xl border border-slate-200/60 dark:border-slate-800">
              <div className="p-2.5 bg-brand-pink/10 rounded-xl text-brand-pink shrink-0">
                <Heart className="w-5 h-5 fill-brand-pink/20" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t('about_badge1_title')}</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">{t('about_badge1_body')}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-[#262626] rounded-2xl border border-slate-200/60 dark:border-slate-800">
              <div className="p-2.5 bg-brand-blue-light/10 rounded-xl text-brand-blue-light shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t('about_badge2_title')}</h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold font-medium">{t('about_badge2_body')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center w-full">
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative w-full max-w-sm aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 dark:bg-[#262626] border border-slate-200/60 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between p-8 group"
          >
            <div className="absolute inset-0 opacity-15 dark:opacity-20 pointer-events-none flex">
              <div className="flex-1 bg-green-600 blur-2xl" />
              <div className="flex-1 bg-white blur-2xl" />
              <div className="flex-1 bg-red-600 blur-2xl" />
            </div>

            <div className="flex items-center gap-2 self-start bg-slate-200/60 dark:bg-slate-800/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-300/50 dark:border-slate-700">
              <MapPin className="w-3.5 h-3.5 text-brand-pink" />
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                SLP, México
              </span>
            </div>

            <div className="text-center py-6 flex justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className="w-24 h-24 rounded-full border-4 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400"
              >
                <Compass className="w-12 h-12" />
              </motion.div>
            </div>

            <div className="space-y-1.5 relative z-10">
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-heading">
                {t('about_accent_title')}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                {t('about_accent_body')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}