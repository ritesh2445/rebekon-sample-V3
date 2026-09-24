import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, CheckCircle2, ShieldCheck, Award, Building, Sparkles, HeartPulse, Briefcase, FileText, ArrowUpRight } from 'lucide-react';
import { FRAMEWORK_STEPS, SERVICES_INCLUDE, CERTIFICATIONS, ESTABLISHED_STATS, NAICS_CODES, SITE_CONFIG } from '../data/siteData';
import { ClientMarquee } from '../components/ClientMarquee';
import { GradientCTASection } from '../components/GradientCTASection';
import { CapabilitiesModal } from '../components/CapabilitiesModal';

export const ServicesPage: React.FC = () => {
  const [capabilitiesModalOpen, setCapabilitiesModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="pt-24 sm:pt-28 pb-16 select-none">
      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full ios-glass-pill text-xs font-bold text-slate-800 mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#FF2D55]" />
                <span className="ios-pink-blue-text uppercase tracking-wider">STRATEGIC SOLUTIONS & EXPERTISE</span>
              </div>
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
                Our Services
              </h1>
              <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
                Comprehensive advisory, training, and strategic transformation designed to take your organizational change from the Bathroom to the Boardroom.
              </p>
            </div>

            {/* Download Capabilities Statement Button */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setCapabilitiesModalOpen(true)}
                className="ios-btn-primary px-6 py-3.5 text-xs sm:text-sm flex items-center gap-2.5 shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download Capabilities Statement</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION PULL-QUOTE */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="ios-glass-card p-8 sm:p-12 border border-white/90 shadow-[0_20px_50px_-15px_rgba(0,122,255,0.12)]">
            <span className="text-xs font-bold tracking-widest text-[#007AFF] uppercase">
              VISION AND MISSION
            </span>
            <blockquote className="font-medium text-2xl sm:text-3xl text-slate-900 leading-snug my-6 italic">
              "Transforming organizations to foster genuine inclusivity at all levels from the Bathroom to the Boardroom, unlocking the potential of employees to drive innovation, enhance productivity, and cultivate a profound sense of authenticity and belonging in the workplace."
            </blockquote>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#FF2D55] to-[#007AFF] mx-auto" />
          </div>
        </div>
      </section>

      {/* THREE-PART FRAMEWORK (EDUCATE -> ENGAGE -> EMPOWER) */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
              THE THREE-PART FRAMEWORK
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
              Educate · Engage · Empower
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
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
                className={`p-6 rounded-3xl text-left transition-all duration-300 border cursor-pointer ${
                  activeStep === idx
                    ? 'ios-glass-card border-[#FF2D55]/60 shadow-[0_16px_36px_-10px_rgba(255,45,85,0.25)] -translate-y-1'
                    : 'bg-white/60 backdrop-blur-md border-white/80 hover:bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold tracking-wider px-3 py-1 rounded-full ${
                    activeStep === idx ? 'ios-btn-primary text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    STEP {step.stepNumber}
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {step.stepName}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Click to inspect detailed workstreams & offerings
                </p>
              </button>
            ))}
          </div>

          {/* Active Framework Step Detail Card */}
          <div className="ios-glass-card p-8 sm:p-12 border border-white/95 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              <div className="space-y-6 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-4xl text-[#FF2D55]">
                    {FRAMEWORK_STEPS[activeStep].stepNumber}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                      {FRAMEWORK_STEPS[activeStep].stepName}
                    </span>
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-slate-900">
                      {FRAMEWORK_STEPS[activeStep].title}
                    </h3>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-4">
                  {FRAMEWORK_STEPS[activeStep].bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#FFEBF0] flex items-center justify-center text-[#FF2D55] shrink-0 mt-0.5">
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
                  className="ios-btn-primary text-center px-8 py-4 text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>More Info on {FRAMEWORK_STEPS[activeStep].stepName}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/book-online"
                  className="ios-btn-secondary text-center px-6 py-3 text-sm"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "SERVICES INCLUDE" DETAIL BLOCK */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#007AFF] uppercase">
              DEEP PRACTICE CAPABILITIES
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
              Services Include
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Actionable, bespoke engagements across healthcare, biopharma, HR, and enterprise compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1: Best Inclusive Healthcare and Clinical Practices */}
            <div className="p-8 sm:p-10 rounded-3xl ios-glass-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F2FF] flex items-center justify-center text-[#007AFF] mb-6 shadow-xs">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl text-slate-900 mb-6 italic">
                  Best Inclusive Healthcare and Clinical Practices:
                </h3>
                <ul className="space-y-4">
                  {SERVICES_INCLUDE.healthcare.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#007AFF] shrink-0 mt-2" />
                      <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60">
                <Link
                  to="/healthcare"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#007AFF] hover:underline"
                >
                  <span>Explore Healthcare & Clinical Trials Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Column 2: Inclusive Workplace Consultation */}
            <div className="p-8 sm:p-10 rounded-3xl ios-glass-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFEBF0] flex items-center justify-center text-[#FF2D55] mb-6 shadow-xs">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl text-slate-900 mb-6 italic">
                  Inclusive Workplace Consultation:
                </h3>
                <ul className="space-y-4">
                  {SERVICES_INCLUDE.workplace.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#FF2D55] shrink-0 mt-2" />
                      <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60">
                <Link
                  to="/deib"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FF2D55] hover:underline"
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
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
              CREDENTIALS & ENTERPRISE PEDIGREE
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
              Verified Certifications & Codes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Certifications */}
            <div className="ios-glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#007AFF]">
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
            <div className="ios-glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#FF2D55]">
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
            <div className="ios-glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#AF52DE]">
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
            <div className="ios-glass-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#007AFF]">
                <FileText className="w-5 h-5" />
                <h4 className="font-bold text-slate-900 text-base">NAICS Codes</h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <span className="font-mono font-bold text-slate-900 bg-white/80 px-1.5 py-0.5 rounded mr-1">611430</span>
                  Professional and Management Development Training
                </li>
                <li>
                  <span className="font-mono font-bold text-slate-900 bg-white/80 px-1.5 py-0.5 rounded mr-1">541612</span>
                  Human Resource Consulting Services
                </li>
                <li>
                  <span className="font-mono font-bold text-slate-900 bg-white/80 px-1.5 py-0.5 rounded mr-1">541512</span>
                  Computer Software Consulting Services
                </li>
                <li>
                  <span className="font-mono font-bold text-slate-900 bg-white/80 px-1.5 py-0.5 rounded mr-1">541611</span>
                  Administrative Management and General Consulting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS / PARTNERS STRIP */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            COLLABORATIONS
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1 tracking-tight">
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

export default ServicesPage;
