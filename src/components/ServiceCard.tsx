import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, Users, Sparkles, Shield, ArrowUpRight } from 'lucide-react';
import { ServicePillar } from '../data/siteData';

interface ServiceCardProps {
  pillar: ServicePillar;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ pillar, index }) => {
  const isExternal = pillar.link.startsWith('mailto:') || pillar.link.startsWith('http');

  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#FF2D55]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#007AFF]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#AF52DE]" />;
      default:
        return <Shield className="w-6 h-6 text-[#FF2D55]" />;
    }
  };

  const getPillStyle = (index: number) => {
    switch (index) {
      case 0:
        return {
          bg: 'rgba(255, 45, 85, 0.1)',
          text: '#FF2D55',
          border: 'rgba(255, 45, 85, 0.2)'
        };
      case 1:
        return {
          bg: 'rgba(0, 122, 255, 0.1)',
          text: '#007AFF',
          border: 'rgba(0, 122, 255, 0.2)'
        };
      case 2:
        return {
          bg: 'rgba(175, 82, 222, 0.1)',
          text: '#AF52DE',
          border: 'rgba(175, 82, 222, 0.2)'
        };
      default:
        return {
          bg: 'rgba(255, 45, 85, 0.1)',
          text: '#FF2D55',
          border: 'rgba(255, 45, 85, 0.2)'
        };
    }
  };

  const pillStyle = getPillStyle(index);

  return (
    <div className="h-full group relative ios-glass-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
      {/* Specular Edge Glow on Hover */}
      <div 
        className="absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: pillStyle.text }}
      />

      <div>
        {/* Top Bar with Icon and iOS Pill Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-13 h-13 rounded-2xl bg-white/90 border border-white flex items-center justify-center shadow-xs group-hover:scale-108 transition-transform duration-300">
            {getIcon(pillar.iconName)}
          </div>
          <span 
            className="text-[11px] font-extrabold tracking-wider px-3.5 py-1 rounded-full border shadow-2xs"
            style={{
              backgroundColor: pillStyle.bg,
              color: pillStyle.text,
              borderColor: pillStyle.border
            }}
          >
            {pillar.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#007AFF] transition-colors mb-3 leading-snug">
          {pillar.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {pillar.description}
        </p>
      </div>

      {/* Action CTA Pill */}
      <div className="pt-4 border-t border-slate-200/60 mt-auto">
        {isExternal ? (
          <a
            href={pillar.link}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#007AFF] transition-colors"
          >
            <span>{pillar.ctaText}</span>
            <div className="w-6 h-6 rounded-full bg-white/80 border border-slate-200/60 flex items-center justify-center group-hover:bg-[#007AFF] group-hover:text-white transition-all">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        ) : (
          <Link
            to={pillar.link}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#007AFF] transition-colors"
          >
            <span>{pillar.ctaText}</span>
            <div className="w-6 h-6 rounded-full bg-white/80 border border-slate-200/60 flex items-center justify-center group-hover:bg-[#007AFF] group-hover:text-white transition-all">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

