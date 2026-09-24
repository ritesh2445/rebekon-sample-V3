import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle2, ArrowRight, ShieldCheck, Calendar, Briefcase, Building2, LineChart } from 'lucide-react';
import { SERVICES_INCLUDE, SITE_CONFIG } from '../data/siteData';
import { GradientCTASection } from '../components/GradientCTASection';
import { ClientMarquee } from '../components/ClientMarquee';

export const DeibPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Sub-Service Hero */}
      <section className="py-16 bg-gradient-to-b from-[#FCE4EF]/40 via-[#FAFAFC] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE4EF] text-[#F45B9C] text-xs font-bold tracking-wider uppercase mb-4">
              <Users className="w-4 h-4" />
              <span>HUMANIZING WORKPLACE</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              Diversity and Inclusion Consulting
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              With years of experience, we have the capabilities and expertise to take your organizational change from the Bathroom to the Boardroom. We combine our insights and skills to transform your People, Processes, and IT strategies, into an inclusive company. With lived experiences, we are proud to help shape and improve your organizational outcome.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                to="/book-online"
                className="brand-gradient text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule DEIB Consultation</span>
              </Link>
              <Link
                to="/case-studies"
                className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-full text-sm border border-slate-300 transition-colors"
              >
                Read Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL BREAKDOWN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#3E6BE0] uppercase">
                STRATEGIC WORKPLACE INTERVENTIONS
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
                Inclusive Workplace Consultation
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We assess, design, and implement holistic organizational change across business and operational units:
              </p>

              <div className="space-y-4">
                {SERVICES_INCLUDE.workplace.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
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

            {/* Right Card: Transformation Pillars */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <span className="text-xs font-bold tracking-widest text-[#F45B9C] uppercase">
                    3-TIER TRANSFORMATION
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    People, Processes, and IT Strategies
                  </h3>
                  <div className="space-y-3 pt-2 text-sm text-slate-300">
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                      <strong className="text-white block">People</strong>
                      Cultivating psychological safety, empathetic leadership, and active allyship.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                      <strong className="text-white block">Processes</strong>
                      Recruiting audits, bathroom policies, healthcare benefits, and complaint resolution.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                      <strong className="text-white block">IT Strategies</strong>
                      Self-ID systems, email aliases, CRM/HRIS name fields, and gender-inclusive data architecture.
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Photo Card */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <div className="aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src="/images/real/corporate_training.jpeg"
                    alt="Corporate Workplace DEI Training in Progress"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs font-bold text-[#F45B9C] uppercase tracking-wider">
                    Interactive Workshops
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    Engaging Corporate Teams & Leadership
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS & PARTNERS STRIP */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F45B9C] uppercase">
            ENTERPRISE TRUST
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
            Collaborating With Leading Global Organizations
          </h3>
        </div>
        <ClientMarquee />
      </section>

      {/* CLOSING CTA */}
      <GradientCTASection
        title="Ready to transform your workplace from Bathroom to Boardroom?"
        subtitle="Contact Rebekon Consulting to conduct a comprehensive behavioral and operational gap assessment."
        primaryCtaText="Contact DEIB Practice"
        primaryCtaLink="/contact"
      />
    </div>
  );
};
