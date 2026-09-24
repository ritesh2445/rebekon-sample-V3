import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, CheckCircle2, ArrowRight, HeartHandshake, Mic, ShieldAlert, Sparkles, Briefcase, FileCheck } from 'lucide-react';
import { GradientCTASection } from '../components/GradientCTASection';

export const ResourcesPage: React.FC = () => {
  const empowermentPrograms = [
    {
      title: 'Resume Building & Personal Branding',
      description: 'One-on-one and cohort sessions tailored for transgender, non-binary, and intersectional job seekers navigating career transitions and legal name updates.',
      icon: FileCheck,
      color: '#FF2D55'
    },
    {
      title: 'Job Readiness & Interview Coaching',
      description: 'Preparing candidates with confidence, interviewing strategies, negotiating affirming benefits, and evaluating prospective employer safety.',
      icon: Briefcase,
      color: '#007AFF'
    },
    {
      title: 'Diverse Job Fairs & Corporate Matchmaking',
      description: 'Partnering with certified diversity employers, NGLCC affiliates, and Fortune 100 enterprise ERGs seeking qualified underrepresented talent.',
      icon: HeartHandshake,
      color: '#AF52DE'
    },
    {
      title: 'Mentorship & Wrap-Around Services',
      description: 'Connecting community members with holistic support networks, legal aid referrals, mental health professionals, and gender-affirming healthcare guidance.',
      icon: Sparkles,
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
              <Sparkles className="w-4 h-4 text-[#FF2D55]" />
              <span className="ios-pink-blue-text font-black uppercase tracking-wider">EMPOWER — COMMUNITY ENGAGEMENT</span>
            </div>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Resources & Advocacy
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Advancing human dignity through public speaking, community advocacy with policymakers, and grassroots empowerment events that open doors to economic self-sufficiency.
            </p>
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/book-online"
                className="ios-btn-primary px-7 py-3.5 text-sm flex items-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Keynote / Speaking Event</span>
              </Link>
              <Link
                to="/blogs"
                className="ios-btn-secondary px-6 py-3.5 text-sm"
              >
                Read Insights & Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEYNOTE & PUBLIC SPEAKING OVERVIEW */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#007AFF] uppercase">
                KEYNOTES & PANELS
              </span>
              <h2 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Community Awareness & Public Speaking
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Celia Sandhya Daniels delivers inspiring keynote presentations, moderates high-stakes executive panels, and speaks at global corporate conferences, universities, and healthcare symposia.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-100 text-sm font-medium p-3.5 rounded-2xl ios-glass border border-white/15">
                  <CheckCircle2 className="w-5 h-5 text-[#FF2D55] shrink-0" />
                  <span>"From the Bathroom to the Boardroom: Building Genuine Belonging"</span>
                </div>
                <div className="flex items-center gap-3 text-slate-100 text-sm font-medium p-3.5 rounded-2xl ios-glass border border-white/15">
                  <CheckCircle2 className="w-5 h-5 text-[#007AFF] shrink-0" />
                  <span>"Health Equity & Intersectionality in Clinical Research"</span>
                </div>
                <div className="flex items-center gap-3 text-slate-100 text-sm font-medium p-3.5 rounded-2xl ios-glass border border-white/15">
                  <CheckCircle2 className="w-5 h-5 text-[#AF52DE] shrink-0" />
                  <span>"Courageous Allyship: Moving Beyond Performative Corporate Gestures"</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/book-online"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#007AFF] hover:underline"
                >
                  <span>Check Celia's speaking calendar</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl ios-glass-card shadow-lg space-y-6">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#FF2D55] to-[#007AFF] flex items-center justify-center text-white shadow-md">
                  <Mic className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl text-white tracking-tight">
                  Advocacy With Policymakers & Agencies
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Promoting awareness, policy recommendations, and legal protections alongside government agencies, local municipalities, and policymakers in Race, Sexual and Gender minorities.
                </p>
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/60 text-xs text-slate-200 font-medium">
                  Active contributions to POST (Peace Officer Standards and Training), TransLatino Coalition, and the Workforce Development Board of Ventura County.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY EMPOWERMENT PROGRAMS */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
              GRASSROOTS INITIATIVES
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-white mt-2 tracking-tight">
              Community Empowerment Programs
            </h2>
            <p className="text-slate-300 text-base mt-2">
              Investing in workforce development, economic mobility, and dignified employment for marginalized communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {empowermentPrograms.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl ios-glass-card shadow-xs"
                >
                  <div 
                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 "
                    style={{ backgroundColor: `${prog.color}15`, color: prog.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base mb-2">
                    {prog.title}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
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

export default ResourcesPage;


