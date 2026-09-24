import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  value: string;
  label: string;
  subtext?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, label, subtext }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`h-full min-h-[165px] flex flex-col justify-center items-center text-center p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-500 w-full ${
        hasAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
      }`}
    >
      <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl brand-gradient-text tracking-tight mb-2 shrink-0">
        {value}
      </div>
      <div className="font-semibold text-slate-800 text-xs sm:text-sm leading-snug min-h-[2.5rem] flex items-center justify-center">
        {label}
      </div>
      <div className="text-[11px] sm:text-xs text-slate-500 mt-1 min-h-[2.25rem] flex items-center justify-center max-w-[190px] mx-auto leading-tight">
        {subtext || ''}
      </div>
    </div>
  );
};

