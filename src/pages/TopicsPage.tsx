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
      badge: 'ENTERPRISE & ERG',
      color: '#FF2D55'
    },
    {
      title: 'Humanizing Healthcare & Affirming Patient Care',
      audience: 'Healthcare Professionals, Medical Insurance, and Life Sciences Companies',
      description: 'Clinical and administrative workshops focused on Gender-Affirming Care, intersectional disparities, and HIV/AIDS care for LGBTQ+ patients across diverse racial and socio-economic backgrounds.',
      icon: Heart,
      badge: 'CLINICAL & PAYORS',
      color: '#007AFF'
    },
    {
      title: 'Inclusive Clinical Research & AI / ML Equity',
      audience: 'Clinical Trial Investigators, Biopharma Protocol Designers, Data Scientists & Regulators',
      description: 'Examines algorithmic bias, representation gaps in modern machine learning models, and actionable strategies for building diverse, trust-centered clinical trial patient cohorts.',
      icon: Cpu,
      badge: 'TECH & BIOPHARMA',
      color: '#AF52DE'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 select-none">
      {/* Hero */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-glass-pill text-xs font-bold text-slate-800 mb-4 shadow-xs">
              <GraduationCap className="w-4 h-4 text-[#FF2D55]" />
              <span className="ios-pink-blue-text font-black uppercase tracking-wider">EDUCATE — TRAININGS & WORKSHOPS</span>
            </div>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
              Trainings, Workshops & Keynotes
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Tailored learning experiences that dismantle stereotypes, empower employee resource groups (ERGs), and equip leaders with tactical allyship frameworks from the frontline to the boardroom.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                to="/book-online"
                className="ios-btn-primary px-7 py-3.5 text-sm flex items-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Workshop / Keynote</span>
              </Link>
              <Link
                to="/media"
                className="ios-btn-secondary px-6 py-3.5 text-sm"
              >
                Watch Speaking Clips
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THREE WORKSHOP TRACKS */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
              EDUCATE WORKSTREAMS
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
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
                  className="p-8 rounded-3xl ios-glass-card flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className="w-13 h-13 rounded-2xl flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: `${track.color}15`, color: track.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-full bg-white/90 text-slate-800 border border-slate-200/60 shadow-2xs">
                        {track.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-xl text-slate-900 mb-2">
                      {track.title}
                    </h3>

                    <div className="text-xs font-bold text-[#007AFF] mb-4">
                      Target: {track.audience}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {track.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60">
                    <Link
                      to="/book-online"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#FF2D55] hover:text-[#007AFF] transition-colors"
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
      <section className="py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-xs font-bold tracking-widest text-[#007AFF] uppercase">
            TRUSTED PARTNERSHIPS
          </span>
          <h3 className="font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1 tracking-tight">
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

export default TopicsPage;
