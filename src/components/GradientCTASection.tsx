import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, FileText, Sparkles, ArrowUpRight } from 'lucide-react';

interface GradientCTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  onOpenCapabilities?: () => void;
}

export const GradientCTASection: React.FC<GradientCTASectionProps> = ({
  title = "Ready to humanize your organization?",
  subtitle = "Transform your workplace culture, healthcare practices, and executive leadership from the Bathroom to the Boardroom.",
  primaryCtaText = "Contact Us",
  primaryCtaLink = "/download",
  secondaryCtaText = "Book Free Consultation",
  secondaryCtaLink = "/book-online",
  onOpenCapabilities
}) => {
  return (
    <section className="relative overflow-hidden pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] p-8 sm:p-14 lg:p-20 text-white overflow-hidden shadow-[0_30px_80px_-15px_rgba(0,122,255,0.35)] border border-white/30"
          style={{
            background: 'linear-gradient(135deg, #FF2D55 0%, #AF52DE 45%, #007AFF 100%)'
          }}
        >
          {/* Internal Apple Fluid Blurs */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-white/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#007AFF]/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xl text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-pink-200" />
              <span>Partner With Rebekon Consulting</span>
            </div>

            {/* Title */}
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-white/95 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-2xs">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {onOpenCapabilities ? (
                <button
                  type="button"
                  onClick={onOpenCapabilities}
                  className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-50 font-bold px-8 py-4 rounded-full text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-5 h-5 text-[#FF2D55]" />
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-[#007AFF]" />
                </button>
              ) : (
                <Link
                  to={primaryCtaLink}
                  className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-50 font-bold px-8 py-4 rounded-full text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5 text-[#FF2D55]" />
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-[#007AFF]" />
                </Link>
              )}

              <Link
                to={secondaryCtaLink}
                className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full text-base border border-white/40 backdrop-blur-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>{secondaryCtaText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
