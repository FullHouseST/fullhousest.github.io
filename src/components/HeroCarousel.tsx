import React, { useState, useEffect, useRef } from 'react';
import { Game, Language } from '../types';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroCarouselProps {
  currentLang: Language;
  t: (key: any) => string;
  onOpenGame: (gameId: string) => void;
}

export default function HeroCarousel({ currentLang, t, onOpenGame }: HeroCarouselProps) {
  const slides = [
    {
      id: "none-left-to-hear-it",
      title: "None Left to Hear It",
      studio: "Calaka Studio",
      badge: t('hero_new_release'),
      badgeColor: "bg-brand-red",
      description: currentLang === 'es' 
        ? "Un thriller psicológico de suspenso centrado en la observación." 
        : "A psychological suspense thriller focusing on observation.",
      image: "https://img.itch.zone/aW1nLzI4NDYyMzg0LnBuZw==/315x250%23c/5qaB0R.png", // Replace with actual image URL
    },
    {
      id: "magical-flavour",
      title: "Magical Flavour",
      studio: "PlushCraft Studios",
      badge: t('hero_coop_fun'),
      badgeColor: "bg-brand-blue-light",
      description: currentLang === 'es' 
        ? "Los jugadores actúan como alquimistas coordinándose para preparar y entregar órdenes mágicas antes de que el tiempo se agote.." 
        : "Players act as alchemists coordinating to prepare and deliver magical orders before time runs out.",
      image: "/assets/cover-images/MagicalFlavour.png",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden select-none">
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[activeIndex].image}
              alt={slides[activeIndex].title}
              className="w-full h-full object-cover opacity-65 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-brand-pink/90 text-white border border-white/20 hover:border-transparent flex items-center justify-center cursor-pointer transition-all duration-300 transform active:scale-95 z-30"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-brand-pink/90 text-white border border-white/20 hover:border-transparent flex items-center justify-center cursor-pointer transition-all duration-300 transform active:scale-95 z-30"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-[10%] left-6 md:left-[8%] right-6 md:right-auto z-25 max-w-2xl text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest text-white uppercase shadow-md ${slides[activeIndex].badgeColor}`}>
                {slides[activeIndex].badge}
              </span>
              <span className="text-xs font-semibold tracking-wider text-white/70 uppercase">
                {slides[activeIndex].studio}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight leading-none text-white drop-shadow-md">
              {slides[activeIndex].title}
            </h1>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed font-medium max-w-xl">
              {slides[activeIndex].description}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenGame(slides[activeIndex].id)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-pink hover:bg-white hover:text-black font-extrabold tracking-wide uppercase text-sm shadow-xl transform active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Eye className="w-4.5 h-4.5" />
                {t('explore_btn')}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 bg-black/30 backdrop-blur-sm py-2 px-4 rounded-full border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === activeIndex ? 'w-8 bg-brand-pink' : 'w-3 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
