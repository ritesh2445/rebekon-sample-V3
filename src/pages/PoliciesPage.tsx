import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, CheckCircle2, ArrowRight, Shield, Calendar, Scale, Building, HeartHandshake } from 'lucide-react';
import { GradientCTASection } from '../components/GradientCTASection';

export const PoliciesPage: React.FC = () => {
  const policyFocusAreas = [
    {
      title: 'Workplace Gender Transition Roadmaps',
      description: 'Comprehensive, step-by-step guidance supporting transitioning employees, managers, HR partners, and peer teams with privacy, respect, and clear timelines.',
      icon: HeartHandshake,
      color: '#FF2D55'
    },
    {
      title: 'Restroom, Locker Room & Facilities Guidelines',
      description: 'Clear, compliant policies ensuring safe, non-discriminatory access to restrooms and gender-neutral facilities across multi-building campuses and plants.',
      icon: Building,
      color: '#007AFF'
    },
    {
      title: 'Name, Pronoun & HRIS Systems Governance',
      description: 'Auditing and reconfiguring enterprise IT directory systems, badges, email aliases, payroll, and background check protocols to protect chosen identities.',
      icon: FileCheck,
      color: '#AF52DE'
    },
    {
      title: 'Gender-Affirming Healthcare Benefits Review',
      description: 'Benchmarking employee medical, surgical, mental health, and pharmaceutical benefits to remove arbitrary exclusions for trans and intersex staff.',
      icon: Scale,
      color: '#00C7BE'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 select-none bg-[#080B11] text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-glass-pill text-xs font-bold text-white mb-4 shadow-xs">
              <Scale className="w-4 h-4 text-[#007AFF]" />
              <span className="ios-pink-blue-text font-black uppercase tracking-wider">POLICY & GUIDELINES</span>
            </div>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Inclusion Policies & Transition Guidelines
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Implementation of actionable policies and guidelines for Trans, Gender-diverse, and Intersex employees and job seekers — aligning legal compliance, operational safety, and human dignity.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                to="/book-online"
                className="ios-btn-primary px-7 py-3.5 text-sm flex items-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Policy Audit</span>
              </Link>
              <Link
                to="/contact"
                className="ios-btn-secondary px-6 py-3.5 text-sm"
              >
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE POLICY FOCUS AREAS */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#007AFF] uppercase">
              STRUCTURED ADVISORY
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-white mt-2 tracking-tight">
              Actionable Policy Architecture
            </h2>
            <p className="text-slate-300 text-base mt-2">
              Moving beyond performative declarations into robust, legally defensible, and humane enterprise guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policyFocusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-3xl ios-glass-card"
                >
                  <div 
                    className="w-13 h-13 rounded-2xl flex items-center justify-center mb-6 shadow-xs"
                    style={{ backgroundColor: `${area.color}15`, color: area.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POLICY CIVIC CREDIBILITY */}
      <section className="py-16 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="ios-glass-card p-8 sm:p-12 border border-white/12">
            <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
              PUBLIC POLICY IMPACT
            </span>
            <h3 className="font-extrabold text-2xl sm:text-3xl text-white mt-2 tracking-tight">
              Shaping State and Community Guidelines
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mt-3">
              Celia Sandhya Daniels has advised the Commission on Peace Officer Standards and Training (POST), contributed to policy changes alongside the TransLatino Coalition to recommend statewide California legislative updates, and serves on the Workforce Development Board of Ventura County.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <GradientCTASection
        title="Need to draft or audit your inclusion policies?"
        subtitle="Schedule a consultation with Rebekon Consulting for benchmarked transition guidelines and facility policies."
        primaryCtaText="Consult on Policies"
        primaryCtaLink="/book-online"
      />
    </div>
  );
};

export default PoliciesPage;


