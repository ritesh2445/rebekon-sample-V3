import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, CheckCircle2, ArrowRight, HeartHandshake, Mic, ShieldAlert, Sparkles, Briefcase, FileCheck } from 'lucide-react';
import { GradientCTASection } from '../components/GradientCTASection';

export const ResourcesPage: React.FC = () => {
  const empowermentPrograms = [
    {
      title: 'Resume Building & Personal Branding',
      description: 'One-on-one and cohort sessions tailored for transgender, non-binary, and intersectional job seekers navigating career transitions and legal name updates.',
      icon: FileCheck
    },
    {
      title: 'Job Readiness & Interview Coaching',
      description: 'Preparing candidates with confidence, interviewing strategies, negotiating affirming benefits, and evaluating prospective employer safety.',
      icon: Briefcase
    },
    {
      title: 'Diverse Job Fairs & Corporate Matchmaking',
      description: 'Partnering with certified diversity employers, NGLCC affiliates, and Fortune 100 enterprise ERGs seeking qualified underrepresented talent.',
      icon: HeartHandshake
    },
    {
      title: 'Mentorship & Wrap-Around Services',
      description: 'Connecting community members with holistic support networks, legal aid referrals, mental health professionals, and gender-affirming healthcare guidance.',
      icon: Sparkles
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#FCE4EF]/40 via-[#FAFAFC] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE4EF] text-[#F45B9C] text-xs font-bold tracking-wider uppercase mb-4">
              <Sparkles className="w-4 h-4" />
              <span>EMPOWER — COMMUNITY ENGAGEMENT</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              Resources & Advocacy
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Advancing human dignity through public speaking, community advocacy with policymakers, and grassroots empowerment events that open doors to economic self-sufficiency.
            </p>
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/book-online"
                className="brand-gradient text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Keynote / Speaking Event</span>
              </Link>
              <Link
                to="/blogs"
                className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-full text-sm border border-slate-300 transition-colors"
              >
                Read Insights & Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEYNOTE & PUBLIC SPEAKING OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#3E6BE0] uppercase">
                KEYNOTES & PANELS
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
                Community Awareness & Public Speaking
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Celia Sandhya Daniels delivers inspiring keynote presentations, moderates high-stakes executive panels, and speaks at global corporate conferences, universities, and healthcare symposia.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-700 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#F45B9C] shrink-0" />
                  <span>"From the Bathroom to the Boardroom: Building Genuine Belonging"</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#3E6BE0] shrink-0" />
                  <span>"Health Equity & Intersectionality in Clinical Research"</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#7C6BE8] shrink-0" />
                  <span>"Courageous Allyship: Moving Beyond Performative Corporate Gestures"</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/book-online"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E6BE0] hover:underline"
                >
                  <span>Check Celia's speaking calendar</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-6">
                <div className="w-12 h-12 rounded-2xl brand-gradient flex items-center justify-center text-white">
                  <Mic className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  Advocacy With Policymakers & Agencies
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Promoting awareness, policy recommendations, and legal protections alongside government agencies, local municipalities, and policymakers in Race, Sexual and Gender minorities.
                </p>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600">
                  Active contributions to POST (Peace Officer Standards and Training), TransLatino Coalition, and the Workforce Development Board of Ventura County.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY EMPOWERMENT PROGRAMS */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#F45B9C] uppercase">
              GRASSROOTS INITIATIVES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-2">
              Community Empowerment Programs
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Investing in workforce development, economic mobility, and dignified employment for marginalized communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {empowermentPrograms.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FCE4EF] flex items-center justify-center text-[#F45B9C] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {prog.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <GradientCTASection
        title="Want to collaborate on community empowerment or invite Celia to speak?"
        subtitle="Connect with Rebekon Consulting to explore keynotes, workshops, or community partnership initiatives."
        primaryCtaText="Book a Speaker / Consultation"
        primaryCtaLink="/book-online"
        secondaryCtaText="Read Blog Insights"
        secondaryCtaLink="/blogs"
      />
    </div>
  );
};
