import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Calendar, Activity, Users, Award } from 'lucide-react';
import { SERVICES_INCLUDE, SITE_CONFIG } from '../data/siteData';
import { GradientCTASection } from '../components/GradientCTASection';
import { ClientMarquee } from '../components/ClientMarquee';

export const HealthcarePage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Sub-Service Hero */}
      <section className="py-16 bg-gradient-to-b from-[#E6EEFF]/60 via-[#FAFAFC] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6EEFF] text-[#3E6BE0] text-xs font-bold tracking-wider uppercase mb-4">
              <HeartPulse className="w-4 h-4" />
              <span>HUMANIZING HEALTHCARE</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              Health Equity & Inclusive Clinical Trials
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Healthcare organizations require expertise in developing and executing strategic plans to address challenges faced by underrepresented communities like racial, sexual, gender minorities including people with disabilities. We provide inclusive healthcare and clinical trials consulting services based on market analysis, strategic planning, and implementation support.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                to="/book-online"
                className="brand-gradient text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Healthcare Consultation</span>
              </Link>
              <Link
                to="/download"
                className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-full text-sm border border-slate-300 transition-colors"
              >
                Capabilities Statement (PDF)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED BREAKDOWN & CLINICAL FOCUS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
                <img
                  src="/images/real/healthcare_workshop.jpeg"
                  alt="Inclusive Healthcare & Clinical Collaboration"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6 bg-white border-t border-slate-100">
                  <span className="text-xs font-bold text-[#3E6BE0] uppercase tracking-wider">
                    SYNEOS HEALTH ADVISORY COUNCIL MEMBER
                  </span>
                  <h4 className="font-display font-bold text-slate-900 text-base mt-1">
                    Bridging Clinical Protocol & Patient Trust
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Celia Sandhya Daniels serves on the Syneos DEI and Health Equity Advisory Council.
                  </p>
                </div>
              </div>
            </div>

            {/* Bullets content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#F45B9C] uppercase">
                CORE CLINICAL DELIVERABLES
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
                Best Inclusive Healthcare and Clinical Practices
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We work directly with medical providers, payors, biopharma developers, and clinical trial sites to eliminate structural barriers to affirming care:
              </p>

              <div className="space-y-4">
                {SERVICES_INCLUDE.healthcare.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-[#E6EEFF] flex items-center justify-center text-[#3E6BE0] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS (4Ps) OF HEALTHCARE ECOSYSTEM - AUTHENTIC REBEKON FRAMEWORK */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Authentic Rebekon 4Ps Banner */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <img
              src="/images/real/screenshot_40735.png"
              alt="Educate Engage Empower — The Four Pillars (4Ps) of the Healthcare Ecosystem"
              className="h-10 sm:h-12 w-auto mx-auto object-contain mb-4"
            />
            <p className="text-slate-600 text-base leading-relaxed">
              Rebekon Consulting’s foundational framework aligning all four health ecosystem sectors around the dignity and clinical safety of LGBTQ+ and marginalized patients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Real 4Ps Diagram Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-slate-200/80 max-w-md w-full">
                <img
                  src="/images/real/screenshot_40601.png"
                  alt="Rebekon 4Ps: Pharmaceuticals, Payers, Policymakers, Providers centered on LGBTQ+ Patients"
                  className="w-full h-auto object-contain rounded-2xl"
                />
                <div className="mt-3 text-center text-xs text-slate-500 font-medium">
                  Official Rebekon 4Ps Healthcare Ecosystem Architecture
                </div>
              </div>
            </div>

            {/* 4 Pillars Breakdown Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F45B9C] block mb-1">Pillar 1</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">Pharmaceuticals</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Research, develop, and distribute medicines, therapeutics, and clinical trials that represent diverse patient populations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#3E6BE0] block mb-1">Pillar 2</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">Providers</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Physicians, nurses, clinicians, and medical staff delivering culturally affirming, trauma-informed patient care.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7C6BE8] block mb-1">Pillar 3</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">Payers</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Insurance policies, healthcare service contractors, Medicare, Medicaid, and affirming transition coverage.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] block mb-1">Pillar 4</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">Policymakers</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Legislative and regulatory branches advancing healthcare equity, civil rights, and non-discrimination mandates.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HEALTHCARE & BIOPHARMA COLLABORATIONS */}
      <section className="py-14 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#3E6BE0] uppercase">
            LIFE SCIENCES & HEALTH SYSTEMS
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
            Biopharma, Payer & Clinical Research Collaborations
          </h3>
        </div>
        <ClientMarquee />
      </section>

      {/* CLOSING CTA */}
      <GradientCTASection
        title="Ready to humanize your healthcare organization?"
        subtitle="Let us help you design affirming patient pathways and diverse clinical trials protocols."
        primaryCtaText="Contact Healthcare Practice"
        primaryCtaLink="/contact"
      />
    </div>
  );
};
