import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, CheckCircle2, ArrowRight, Shield, Calendar, Scale, Building, HeartHandshake } from 'lucide-react';
import { GradientCTASection } from '../components/GradientCTASection';

export const PoliciesPage: React.FC = () => {
  const policyFocusAreas = [
    {
      title: 'Workplace Gender Transition Roadmaps',
      description: 'Comprehensive, step-by-step guidance supporting transitioning employees, managers, HR partners, and peer teams with privacy, respect, and clear timelines.',
      icon: HeartHandshake
    },
    {
      title: 'Restroom, Locker Room & Facilities Guidelines',
      description: 'Clear, compliant policies ensuring safe, non-discriminatory access to restrooms and gender-neutral facilities across multi-building campuses and plants.',
      icon: Building
    },
    {
      title: 'Name, Pronoun & HRIS Systems Governance',
      description: 'Auditing and reconfiguring enterprise IT directory systems, badges, email aliases, payroll, and background check protocols to protect chosen identities.',
      icon: FileCheck
    },
    {
      title: 'Gender-Affirming Healthcare Benefits Review',
      description: 'Benchmarking employee medical, surgical, mental health, and pharmaceutical benefits to remove arbitrary exclusions for trans and intersex staff.',
      icon: Scale
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#EDE9FE]/50 via-[#FAFAFC] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE9FE] text-[#7C6BE8] text-xs font-bold tracking-wider uppercase mb-4">
              <Scale className="w-4 h-4" />
              <span>POLICY & GUIDELINES</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              Inclusion Policies & Transition Guidelines
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Implementation of actionable policies and guidelines for Trans, Gender-diverse, and Intersex employees and job seekers — aligning legal compliance, operational safety, and human dignity.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                to="/book-online"
                className="brand-gradient text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Policy Audit</span>
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-full text-sm border border-slate-300 transition-colors"
              >
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE POLICY FOCUS AREAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#7C6BE8] uppercase">
              STRUCTURED ADVISORY
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-2">
              Actionable Policy Architecture
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Moving beyond performative declarations into robust, legally defensible, and humane enterprise guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policyFocusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#7C6BE8]/40 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#7C6BE8] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POLICY CIVIC CREDIBILITY */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#F45B9C] uppercase">
            PUBLIC POLICY IMPACT
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            Shaping State and Community Guidelines
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Celia Sandhya Daniels has advised the Commission on Peace Officer Standards and Training (POST), contributed to policy changes alongside the TransLatino Coalition to recommend statewide California legislative updates, and serves on the Workforce Development Board of Ventura County.
          </p>
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
