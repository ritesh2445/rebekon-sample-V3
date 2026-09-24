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
        return <HeartHandshake className="w-6 h-6 text-[#F45B9C]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#3E6BE0]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#7C6BE8]" />;
      default:
        return <Shield className="w-6 h-6 text-[#F45B9C]" />;
    }
  };

  const getBadgeStyle = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-[#FCE4EF] text-[#F45B9C] border-[#FCE4EF]';
      case 1:
        return 'bg-[#E6EEFF] text-[#3E6BE0] border-[#E6EEFF]';
      case 2:
        return 'bg-[#EDE9FE] text-[#7C6BE8] border-[#EDE9FE]';
      default:
        return 'bg-[#FCE4EF] text-[#F45B9C] border-[#FCE4EF]';
    }
  };

  return (
    <div
      className="h-full group relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
      style={{
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div>
        {/* Top bar with icon and badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-300">
            {getIcon(pillar.iconName)}
          </div>
          <span className={`text-[11px] font-bold tracking-wider px-3 py-1 rounded-full border ${getBadgeStyle(index)}`}>
            {pillar.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#3E6BE0] transition-colors mb-4 leading-snug">
          {pillar.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {pillar.description}
        </p>
      </div>

      {/* Action CTA link */}
      <div className="pt-4 border-t border-slate-100 mt-auto">
        {isExternal ? (
          <a
            href={pillar.link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F45B9C] group-hover:text-[#3E6BE0] transition-colors"
          >
            <span>{pillar.ctaText}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <Link
            to={pillar.link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F45B9C] group-hover:text-[#3E6BE0] transition-colors"
          >
            <span>{pillar.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};
