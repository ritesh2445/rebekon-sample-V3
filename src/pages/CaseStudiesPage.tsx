import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FolderGit2, CheckCircle2, ArrowRight, Quote, Plus, Building2, TrendingUp } from 'lucide-react';
import { CASE_STUDIES } from '../data/siteData';
import { GradientCTASection } from '../components/GradientCTASection';
import { ClientMarquee } from '../components/ClientMarquee';

export const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalStudy, setActiveModalStudy] = useState<typeof CASE_STUDIES[0] | null>(null);

  const filteredStudies = selectedCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const getTagStyle = (category: string) => {
    switch (category) {
      case 'Healthcare':
        return 'bg-[#E6EEFF] text-[#3E6BE0] border-[#E6EEFF]';
      case 'Workplace DEI':
        return 'bg-[#FCE4EF] text-[#F45B9C] border-[#FCE4EF]';
      default:
        return 'bg-[#EDE9FE] text-[#7C6BE8] border-[#EDE9FE]';
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#E6EEFF]/40 via-[#FAFAFC] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6EEFF] text-[#3E6BE0] text-xs font-bold tracking-wider uppercase mb-4">
              <FolderGit2 className="w-4 h-4" />
              <span>IMPACT & RESULTS</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              Case Studies
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Real-world transformations across Fortune 100 biotechnology, healthcare systems, and corporate workplace culture.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & CASE STUDIES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Engagements' },
              { id: 'healthcare', label: 'Healthcare & Clinical' },
              { id: 'workplace', label: 'Workplace DEI' },
              { id: 'policy', label: 'Policy & Guidelines' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'brand-gradient text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="group p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${getTagStyle(study.category)}`}>
                      {study.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Case #{study.id.toUpperCase()}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-slate-500 mb-2">
                    Client: {study.clientType}
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-[#3E6BE0] transition-colors mb-4 leading-snug">
                    {study.title}
                  </h3>

                  <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-600">
                    <div>
                      <strong className="text-slate-800 block text-xs uppercase tracking-wider mb-1">Challenge:</strong>
                      <p className="line-clamp-3">{study.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-slate-800 block text-xs uppercase tracking-wider mb-1">Solution:</strong>
                      <p className="line-clamp-3">{study.solution}</p>
                    </div>
                  </div>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 mb-6 bg-slate-50/60 rounded-xl px-2">
                    {study.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-display font-bold text-base brand-gradient-text">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalStudy(study)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#F45B9C] group-hover:text-[#3E6BE0] transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Structured CMS Placeholder Slot for Wix Migration */}
            <div className="border-2 border-dashed border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 mb-4 shadow-xs">
                <Plus className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-[#7C6BE8] bg-[#EDE9FE] px-3 py-1 rounded-full mb-2">
                [ADD CASE STUDY CONTENT]
              </span>
              <h4 className="font-bold text-slate-800 text-sm mb-1">
                Client Case Study Slot
              </h4>
              <p className="text-xs text-slate-500 max-w-xs">
                Ready to drop your confidential or anonymized client results from Wix directly into the case studies system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {activeModalStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveModalStudy(null)}
        >
          <div
            className="bg-white rounded-3xl p-8 sm:p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 relative border border-slate-100 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getTagStyle(activeModalStudy.category)}`}>
                {activeModalStudy.category}
              </span>
              <button
                onClick={() => setActiveModalStudy(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-semibold"
              >
                Close ✕
              </button>
            </div>

            <h3 className="font-display font-bold text-2xl text-slate-900">
              {activeModalStudy.title}
            </h3>

            <div className="text-xs text-slate-500">
              Client Engagement: <strong className="text-slate-800">{activeModalStudy.clientType}</strong>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1 text-[#F45B9C]">
                  The Challenge
                </h4>
                <p className="leading-relaxed bg-slate-50 p-4 rounded-2xl">{activeModalStudy.challenge}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1 text-[#3E6BE0]">
                  The Rebekon Solution
                </h4>
                <p className="leading-relaxed bg-slate-50 p-4 rounded-2xl">{activeModalStudy.solution}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2">
                  Key Metrics & Impact
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {activeModalStudy.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-2xl brand-gradient-soft text-center border border-slate-100">
                      <div className="font-display font-bold text-xl brand-gradient-text">{m.value}</div>
                      <div className="text-xs text-slate-600 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {activeModalStudy.quote && (
                <div className="p-4 rounded-2xl bg-[#FCE4EF]/30 border border-[#FCE4EF] italic text-slate-800">
                  "{activeModalStudy.quote}"
                  {activeModalStudy.author && (
                    <div className="text-xs font-semibold text-slate-600 mt-1 not-italic">
                      — {activeModalStudy.author}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <Link
                to="/book-online"
                className="brand-gradient text-white text-xs font-semibold px-6 py-3 rounded-full"
              >
                Inquire About Similar Engagement
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CLIENTS & PARTNERS STRIP */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#3E6BE0] uppercase">
            TRUSTED PARTNERSHIPS
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
            Proven Results Across Fortune 100 Clients
          </h3>
        </div>
        <ClientMarquee />
      </section>

      {/* CLOSING CTA */}
      <GradientCTASection
        title="Ready to achieve measurable DEI and health equity outcomes?"
        subtitle="Schedule a strategic consultation to discuss your organization's unique challenges and KPIs."
        primaryCtaText="Book Free Consultation"
        primaryCtaLink="/book-online"
      />
    </div>
  );
};
