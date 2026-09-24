import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/siteData';

interface CertificationsMarqueeProps {
  onCardClick?: (cert: (typeof CERTIFICATIONS)[number]) => void;
  className?: string;
}

export const CertificationsMarquee: React.FC<CertificationsMarqueeProps> = ({
  onCardClick,
  className = ''
}) => {
  const items = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <div className={`relative w-full overflow-hidden py-4 select-none ${className}`}>
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10 pointer-events-none" />

      {/* Track */}
      <div className="animate-marquee flex items-center gap-5 sm:gap-6">
        {items.map((cert, index) => (
          <div
            key={`${cert.name}-${index}`}
            onClick={() => onCardClick?.(cert)}
            className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl ios-glass border border-white/90 shadow-sm hover:border-[#007AFF]/60 hover:shadow-[0_12px_30px_-6px_rgba(0,122,255,0.2)] hover:-translate-y-0.5 transition-all duration-300 shrink-0 group ${
              onCardClick ? 'cursor-pointer' : 'cursor-default'
            }`}
            title={`${cert.name} • ${cert.issuer} (${cert.code})`}
          >
            {/* Logo Container */}
            <div className="h-10 sm:h-12 w-auto min-w-[75px] max-w-[125px] flex items-center justify-center shrink-0 p-1 bg-white/90 rounded-xl shadow-2xs">
              <img
                src={cert.logoUrl}
                alt={cert.name}
                className="max-h-9 sm:max-h-11 w-auto max-w-[115px] object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Credential Details */}
            <div className="border-l border-slate-200/70 pl-3.5 text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#007AFF] transition-colors whitespace-nowrap">
                  {cert.name}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#007AFF] bg-[#E8F2FF] px-2 py-0.5 rounded-md border border-blue-200/60 whitespace-nowrap">
                  {cert.code}
                </span>
                <span className="text-[10px] text-slate-500 whitespace-nowrap hidden sm:inline">
                  {cert.issuer}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
