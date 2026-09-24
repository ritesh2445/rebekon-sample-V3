import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, CheckCircle2, Calendar, Users, Cpu, Heart, ArrowRight } from 'lucide-react';
import { GradientCTASection } from '../components/GradientCTASection';
import { ClientMarquee } from '../components/ClientMarquee';

export const TopicsPage: React.FC = () => {
  const workshopTracks = [
    {
      title: 'Inclusive Workplace & Enterprise Allyship',
      audience: 'ERGs, HR, DEI Councils, Recruiters, IT, Corporate Communications & Diverse Suppliers',
      description: 'Interactive workshops moving teams from passive awareness to courageous, active allyship. Addresses workplace pronouns, micro-behaviors, safe bathroom and facility norms, and executive sponsorship.',
      icon: Users,
      badge: 'ENTERPRISE & ERG'
    },
    {
      title: 'Humanizing Healthcare & Affirming Patient Care',
      audience: 'Healthcare Professionals, Medical Insurance, and Life Sciences Companies',
      description: 'Clinical and administrative workshops focused on Gender-Affirming Care, intersectional disparities, and HIV/AIDS care for LGBTQ+ patients across diverse racial and socio-economic backgrounds.',
      icon: Heart,
      badge: 'CLINICAL & PAYORS'
    },
    {
      title: 'Inclusive Clinical Research & AI / ML Equity',
      audience: 'Clinical Trial Investigators, Biopharma Protocol Designers, Data Scientists & Regulators',
      description: 'Examines algorithmic bias, representation gaps in modern machine learning models, and actionable strategies for building diverse, trust-centered clinical trial patient cohorts.',
      icon: Cpu,
      badge: 'TECH & BIOPHARMA'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#FCE4EF]/50 via-[#FAFAFC] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE4EF] text-[#F45B9C] text-xs font-bold tracking-wider uppercase mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATE — TRAININGS & WORKSHOPS</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              Trainings, Workshops & Keynotes
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Tailored learning experiences that dismantle stereotypes, empower employee resource groups (ERGs), and equip leaders with tactical allyship frameworks from the frontline to the boardroom.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                to="/book-online"
                className="brand-gradient text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Workshop / Keynote</span>
              </Link>
              <Link
                to="/media"
                className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-full text-sm border border-slate-300 transition-colors"
              >
                Watch Speaking Clips
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THREE WORKSHOP TRACKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#F45B9C] uppercase">
              EDUCATE WORKSTREAMS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-2">
              Transformative Learning for Every Function
            </h2>
            <p className="text-slate-600 text-base mt-2">
              All sessions are customized to your organizational maturity, industry compliance, and participant roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshopTracks.map((track, idx) => {
              const Icon = track.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-[#F45B9C]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#F45B9C]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200">
                        {track.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                      {track.title}
                    </h3>

                    <div className="text-xs font-semibold text-[#3E6BE0] mb-4">
                      Target: {track.audience}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {track.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80">
                    <Link
                      to="/book-online"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#F45B9C] hover:text-[#3E6BE0] transition-colors"
                    >
                      <span>Inquire for Your Team</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKSHOP SPONSORS & CORPORATE CLIENTS */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#3E6BE0] uppercase">
            TRUSTED PARTNERSHIPS
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
            Workshops Delivered for Leading Enterprises & Health Systems
          </h3>
        </div>
        <ClientMarquee />
      </section>

      {/* CLOSING CTA */}
      <GradientCTASection
        title="Ready to educate and inspire your teams?"
        subtitle="Bring Celia Sandhya Daniels to your organization for an unforgettable keynote or intensive workshop."
        primaryCtaText="Book Workshop Consultation"
        primaryCtaLink="/book-online"
      />
    </div>
  );
};
