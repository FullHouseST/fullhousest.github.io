import React from 'react';

interface WavyDividerProps {
  className?: string;
  colorClass?: string; // fill color class, e.g., 'fill-slate-50'
  bgColorClass?: string; // background color class, e.g., 'bg-white'
  direction?: 'up' | 'down';
}

export default function WavyDivider({
  className = '',
  colorClass = 'fill-slate-50 dark:fill-[#1c1c1c]',
  bgColorClass = 'bg-white dark:bg-[#1c1c1c]',
  direction = 'down'
}: WavyDividerProps) {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] select-none pointer-events-none -mt-[1px] -mb-[1px] z-20 transition-colors duration-300 ${bgColorClass} ${className}`}>
      <svg
        viewBox="0 0 1200 40"
        className={`relative block w-full h-[32px] md:h-[40px] transition-transform duration-300 ${direction === 'up' ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C100,18 200,18 300,0 C400,18 500,18 600,0 C700,18 800,18 900,0 C1000,18 1100,18 1200,0 L1200,40 L0,40 Z"
          className={`${colorClass} transition-colors duration-300`}
        />
      </svg>
    </div>
  );
}
