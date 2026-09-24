import React from 'react';
import { CLIENT_PARTNERS } from '../data/siteData';

export const ClientMarquee: React.FC = () => {
  // Duplicate list to achieve continuous infinite marquee loop
  const marqueeItems = [...CLIENT_PARTNERS, ...CLIENT_PARTNERS];

  return (
    <div className="relative w-full overflow-hidden py-6 select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAFC] to-transparent z-10 pointer-events-none" />

      {/* Track */}
      <div className="animate-marquee flex items-center gap-6 sm:gap-8">
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:scale-105 hover:border-slate-300 hover:shadow-md cursor-default group shrink-0"
          >
            <div className="h-7 sm:h-8 w-auto min-w-[70px] max-w-[120px] flex items-center justify-center shrink-0">
              <img
                src={item.logoUrl}
                alt={item.name}
                className="max-h-6 sm:max-h-7 w-auto max-w-[110px] object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
            <div className="border-l border-slate-200 pl-3">
              <div className="font-bold text-xs sm:text-sm text-slate-800 transition-colors tracking-tight whitespace-nowrap">
                {item.name}
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                {item.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
