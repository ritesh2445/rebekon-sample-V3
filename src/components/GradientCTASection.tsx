import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, FileText, Sparkles } from 'lucide-react';

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
    <section className="relative overflow-hidden pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-6 sm:p-12 lg:p-16 brand-gradient text-white overflow-hidden shadow-2xl">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Pill tag */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Partner With Rebekon Consulting</span>
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6 leading-tight">
              {title}
            </h2>

            {/* Subhead */}
            <p className="text-white/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {onOpenCapabilities ? (
                <button
                  type="button"
                  onClick={onOpenCapabilities}
                  className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-50 font-bold px-8 py-4 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5 text-[#F45B9C]" />
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-[#3E6BE0]" />
                </button>
              ) : (
                <Link
                  to={primaryCtaLink}
                  className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-50 font-bold px-8 py-4 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5 text-[#F45B9C]" />
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-[#3E6BE0]" />
                </Link>
              )}

              <Link
                to={secondaryCtaLink}
                className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full text-base border border-white/30 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>{secondaryCtaText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
