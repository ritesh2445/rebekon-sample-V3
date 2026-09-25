import React from 'react';
import { CLIENT_PARTNERS } from '../data/siteData';

export const ClientMarquee: React.FC = () => {
  const marqueeItems = [...CLIENT_PARTNERS, ...CLIENT_PARTNERS];

  return (
    <div className="relative w-full overflow-hidden py-6 select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#080B11] via-[#080B11]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#080B11] via-[#080B11]/90 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-4 sm:gap-6">
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-[#0E1424] border border-white/10 shadow-sm transition-all duration-300 hover:border-[#007AFF]/40 hover:bg-[#131B30] cursor-default group shrink-0"
          >
            <div className="h-7 sm:h-8 w-auto min-w-[70px] max-w-[120px] flex items-center justify-center shrink-0">
              <img
                src={item.logoUrl}
                alt={item.name}
                className="max-h-6 sm:max-h-7 w-auto max-w-[110px] object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
                loading="lazy"
              />
            </div>
            <div className="border-l border-white/10 pl-3">
              <div className="font-bold text-xs sm:text-sm text-slate-200 tracking-tight whitespace-nowrap group-hover:text-[#007AFF] transition-colors">
                {item.name}
              </div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                {item.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

