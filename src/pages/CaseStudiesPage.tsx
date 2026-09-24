import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FolderGit2, CheckCircle2, ArrowRight, Quote, Plus, Building2, TrendingUp, X } from 'lucide-react';
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
        return 'bg-[#E8F2FF] text-[#007AFF] border-blue-200/60';
      case 'Workplace DEI':
        return 'bg-[#FFEBF0] text-[#FF2D55] border-pink-200/60';
      default:
        return 'bg-[#F3EEFE] text-[#AF52DE] border-purple-200/60';
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 select-none">
      {/* Hero */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-glass-pill text-xs font-bold text-slate-800 mb-4 shadow-xs">
              <FolderGit2 className="w-4 h-4 text-[#007AFF]" />
              <span className="ios-pink-blue-text font-black uppercase tracking-wider">IMPACT & RESULTS</span>
            </div>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
              Case Studies
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Real-world transformations across Fortune 100 biotechnology, healthcare systems, and corporate workplace culture.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & CASE STUDIES GRID */}
      <section className="py-20 relative">
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
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'ios-btn-primary text-white shadow-md'
                    : 'ios-glass text-slate-700 hover:bg-white border border-white/80'
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
                className="group p-8 rounded-3xl ios-glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border shadow-2xs ${getTagStyle(study.category)}`}>
                      {study.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono font-bold">
                      Case #{study.id.toUpperCase()}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-slate-500 mb-2">
                    Client: {study.clientType}
                  </div>

                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-[#007AFF] transition-colors mb-4 leading-snug">
                    {study.title}
                  </h3>

                  <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-600">
                    <div>
                      <strong className="text-slate-900 block text-xs uppercase tracking-wider mb-1 font-bold">Challenge:</strong>
                      <p className="line-clamp-3 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-xs uppercase tracking-wider mb-1 font-bold">Solution:</strong>
                      <p className="line-clamp-3 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-200/60 mb-6">
                    {study.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-white/80 border border-white/90 shadow-2xs">
                        <div className="font-extrabold text-base text-[#007AFF]">{m.value}</div>
                        <div className="text-[10px] text-slate-500 font-semibold">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalStudy(study)}
                  className="w-full py-3 rounded-full ios-btn-secondary text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <span>View Complete Case Report</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#007AFF]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS STRIP */}
      <section className="py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-xs font-bold tracking-widest text-[#007AFF] uppercase">
            TRUSTED PARTNERSHIPS
          </span>
          <h3 className="font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1 tracking-tight">
            Transformed Organizations & Healthcare Systems
          </h3>
        </div>
        <ClientMarquee />
      </section>

      {/* CLOSING CTA */}
      <GradientCTASection
        title="Ready to achieve similar measurable outcomes?"
        subtitle="Contact Rebekon Consulting to discuss tailored enterprise benchmarking for your organization."
        primaryCtaText="Consult on Case Studies"
        primaryCtaLink="/contact"
      />

      {/* CASE STUDY DETAIL MODAL */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="ios-glass-card bg-white/95 max-w-2xl w-full p-6 sm:p-10 max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl border border-white relative">
            <button
              type="button"
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-3 ${getTagStyle(activeModalStudy.category)}`}>
              {activeModalStudy.category} • Client: {activeModalStudy.clientType}
            </span>

            <h3 className="font-extrabold text-2xl sm:text-3xl text-slate-900 mb-6 leading-tight">
              {activeModalStudy.title}
            </h3>

            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">The Challenge</h4>
                <p>{activeModalStudy.challenge}</p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">Our Solution & Intervention</h4>
                <p>{activeModalStudy.solution}</p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">Key Results & Metrics</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {activeModalStudy.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                      <div className="font-extrabold text-xl text-[#007AFF]">{m.value}</div>
                      <div className="text-xs text-slate-500 font-medium mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {activeModalStudy.quote && (
                <div className="p-6 rounded-2xl ios-glass border border-white/80 italic text-slate-800">
                  <p>"{activeModalStudy.quote}"</p>
                  {activeModalStudy.author && (
                    <span className="block text-xs font-bold not-italic text-slate-500 mt-2">
                      — {activeModalStudy.author}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <Link
                to="/book-online"
                className="ios-btn-primary px-6 py-3 text-sm font-bold shadow-md"
                onClick={() => setActiveModalStudy(null)}
              >
                Inquire About Similar Engagement
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesPage;
