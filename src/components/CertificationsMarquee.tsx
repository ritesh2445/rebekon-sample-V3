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
  // Triplicate list to achieve continuous infinite marquee loop without any blank gaps
  const items = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <div className={`relative w-full overflow-hidden py-4 select-none ${className}`}>
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAFC] via-[#FAFAFC]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAFC] via-[#FAFAFC]/80 to-transparent z-10 pointer-events-none" />

      {/* Track */}
      <div className="animate-marquee flex items-center gap-5 sm:gap-6">
        {items.map((cert, index) => (
          <div
            key={`${cert.name}-${index}`}
            onClick={() => onCardClick?.(cert)}
            className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#3E6BE0] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 shrink-0 group ${
              onCardClick ? 'cursor-pointer' : 'cursor-default'
            }`}
            title={`${cert.name} • ${cert.issuer} (${cert.code})`}
          >
            {/* Logo Container with high visibility */}
            <div className="h-10 sm:h-12 w-auto min-w-[75px] max-w-[125px] flex items-center justify-center shrink-0 p-1 bg-white rounded-lg">
              <img
                src={cert.logoUrl}
                alt={cert.name}
                className="max-h-9 sm:max-h-11 w-auto max-w-[115px] object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Credential Details */}
            <div className="border-l border-slate-200/90 pl-3.5 text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#3E6BE0] transition-colors whitespace-nowrap">
                  {cert.name}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#3E6BE0] bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 whitespace-nowrap">
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
