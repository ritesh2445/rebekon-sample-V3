import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, CheckCircle2, ShieldCheck, Award, Building, Sparkles, HeartPulse, Briefcase, FileText } from 'lucide-react';
import { FRAMEWORK_STEPS, SERVICES_INCLUDE, CERTIFICATIONS, ESTABLISHED_STATS, NAICS_CODES, SITE_CONFIG } from '../data/siteData';
import { ClientMarquee } from '../components/ClientMarquee';
import { GradientCTASection } from '../components/GradientCTASection';
import { CapabilitiesModal } from '../components/CapabilitiesModal';

export const ServicesPage: React.FC = () => {
  const [capabilitiesModalOpen, setCapabilitiesModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* HERO SECTION */}
      <section className="relative py-16 bg-gradient-to-b from-[#FCE4EF]/40 via-[#FAFAFC] to-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.2em] text-[#F45B9C] uppercase">
                STRATEGIC SOLUTIONS & EXPERTISE
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 mt-2 tracking-tight">
                Our Services
              </h1>
              <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
                Comprehensive advisory, training, and strategic transformation designed to take your organizational change from the Bathroom to the Boardroom.
              </p>
            </div>

            {/* Download Capabilities Statement Button (Outline style) */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setCapabilitiesModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold text-sm transition-all duration-200 shadow-xs hover:shadow-md group"
              >
                <Download className="w-4 h-4 text-[#F45B9C] group-hover:text-white transition-colors" />
                <span>Download Capabilities Statement</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION PULL-QUOTE */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
          <div className="w-[500px] h-[300px] rounded-full bg-[#FCE4EF] opacity-40 blur-3xl animate-blob-1" />
          <div className="w-[500px] h-[300px] rounded-full bg-[#E6EEFF] opacity-40 blur-3xl animate-blob-2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest text-[#3E6BE0] uppercase">
            VISION AND MISSION
          </span>
          <blockquote className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-snug my-8 italic">
            "Transforming organizations to foster genuine inclusivity at all levels from the Bathroom to the Boardroom, unlocking the potential of employees to drive innovation, enhance productivity, and cultivate a profound sense of authenticity and belonging in the workplace."
          </blockquote>
          <div className="w-16 h-1 rounded-full brand-gradient mx-auto" />
        </div>
      </section>

      {/* THREE-PART FRAMEWORK (EDUCATE -> ENGAGE -> EMPOWER) */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.2em] text-[#F45B9C] uppercase">
              THE THREE-PART FRAMEWORK
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-2">
              Educate · Engage · Empower
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              A systematic, phased methodology designed to move organizations from foundational awareness to enterprise-level equity.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {FRAMEWORK_STEPS.map((step, idx) => (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 border ${
                  activeStep === idx
                    ? 'bg-white border-[#F45B9C] shadow-lg -translate-y-1'
                    : 'bg-white/60 border-slate-200/80 hover:bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold tracking-wider px-3 py-1 rounded-full ${
                    activeStep === idx ? 'brand-gradient text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    STEP {step.stepNumber}
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {step.stepName}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Click to inspect detailed workstreams & offerings
                </p>
              </button>
            ))}
          </div>

          {/* Active Framework Step Detail Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              <div className="space-y-6 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-3xl text-[#F45B9C]">
                    {FRAMEWORK_STEPS[activeStep].stepNumber}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                      {FRAMEWORK_STEPS[activeStep].stepName}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                      {FRAMEWORK_STEPS[activeStep].title}
                    </h3>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-4">
                  {FRAMEWORK_STEPS[activeStep].bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#FCE4EF] flex items-center justify-center text-[#F45B9C] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 flex flex-col gap-3 w-full lg:w-auto">
                <Link
                  to={FRAMEWORK_STEPS[activeStep].link}
                  className="brand-gradient text-white text-center font-semibold px-8 py-4 rounded-full text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <span>More Info on {FRAMEWORK_STEPS[activeStep].stepName}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/book-online"
                  className="text-center font-semibold px-6 py-3 rounded-full text-sm border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "SERVICES INCLUDE" DETAIL BLOCK (Two-Column Layout) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#3E6BE0] uppercase">
              DEEP PRACTICE CAPABILITIES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-2">
              Services Include
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Actionable, bespoke engagements across healthcare, biopharma, HR, and enterprise compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1: Best Inclusive Healthcare and Clinical Practices */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-[#3E6BE0]/50 transition-all duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E6EEFF] flex items-center justify-center text-[#3E6BE0] mb-6">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-6 italic">
                  Best Inclusive Healthcare and Clinical Practices:
                </h3>
                <ul className="space-y-4">
                  {SERVICES_INCLUDE.healthcare.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#3E6BE0] shrink-0 mt-2" />
                      <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80">
                <Link
                  to="/healthcare"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E6BE0] hover:text-[#2850B8] transition-colors"
                >
                  <span>Explore Healthcare & Clinical Trials Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Column 2: Inclusive Workplace Consultation */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-[#F45B9C]/50 transition-all duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FCE4EF] flex items-center justify-center text-[#F45B9C] mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-6 italic">
                  Inclusive Workplace Consultation:
                </h3>
                <ul className="space-y-4">
                  {SERVICES_INCLUDE.workplace.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#F45B9C] shrink-0 mt-2" />
                      <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80">
                <Link
                  to="/deib"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F45B9C] hover:text-[#E04386] transition-colors"
                >
                  <span>Explore Diversity & Inclusion (DEIB) Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS GRID */}
      <section className="py-20 bg-slate-50/80 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#F45B9C] uppercase">
              CREDENTIALS & ENTERPRISE PEDIGREE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-2">
              Verified Certifications & Codes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Certifications */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#3E6BE0]">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-bold text-slate-900 text-base">Certifications</h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="font-medium">• CA/LA SBE (Proprietary) — <strong className="text-slate-900 font-mono">2034333</strong></li>
                <li className="font-medium">• EBE – <strong className="text-slate-900 font-mono">203433</strong></li>
                <li className="font-medium">• VSBE (Harbor) — <strong className="text-slate-900 font-mono">2034333</strong></li>
                <li className="font-medium">• NGLCC (<strong className="text-slate-900 font-mono">30210</strong>)</li>
                <li className="font-medium">• D&B D-U-N-S (<strong className="text-slate-900 font-mono">010274745</strong>)</li>
                <li className="font-medium">• California Public Utilities Commission (<strong className="text-slate-900 font-mono">VON: 24000841</strong>)</li>
              </ul>
            </div>

            {/* Box 2: Established */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#F45B9C]">
                <Building className="w-5 h-5" />
                <h4 className="font-bold text-slate-900 text-base">Established</h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li>• Built on 30+ Years of experience with F100 companies.</li>
                <li>• Focus on IT, DEI, Healthcare and Life Science.</li>
                <li>• Founded in 2018, based out of Thousand Oaks, California.</li>
              </ul>
            </div>

            {/* Box 3: Differentiator */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#7C6BE8]">
                <Award className="w-5 h-5" />
                <h4 className="font-bold text-slate-900 text-base">Differentiator</h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li>• Top 10 LGBTQ+ Voices on LinkedIn in the U.S. and Canada.</li>
                <li>• Endpoints News's Top 20 LGBTQ+ Leaders in the Biopharma Industry.</li>
                <li>• Top 100 trailblazing LGBTQ+ women making a difference in DEI.</li>
              </ul>
            </div>

            {/* Box 4: NAICS Codes */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#3E6BE0]">
                <FileText className="w-5 h-5" />
                <h4 className="font-bold text-slate-900 text-base">NAICS Codes</h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded mr-1">611430</span>
                  Professional and Management Development Training
                </li>
                <li>
                  <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded mr-1">541612</span>
                  Human Resource Consulting Services
                </li>
                <li>
                  <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded mr-1">541512</span>
                  Computer Software Consulting Services
                </li>
                <li>
                  <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded mr-1">541611</span>
                  Administrative Management and General Consulting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS / PARTNERS STRIP */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
            COLLABORATIONS
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
            Working With the Best Clients and Partners
          </h2>
        </div>
        <ClientMarquee />
      </section>

      {/* CLOSING CTA */}
      <GradientCTASection onOpenCapabilities={() => setCapabilitiesModalOpen(true)} />

      {/* Capabilities Modal */}
      <CapabilitiesModal
        isOpen={capabilitiesModalOpen}
        onClose={() => setCapabilitiesModalOpen(false)}
      />
    </div>
  );
};
