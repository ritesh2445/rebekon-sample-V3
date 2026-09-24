import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  Briefcase, 
  Cpu, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  Activity,
  Layers
} from 'lucide-react';

interface InfographicTab {
  id: string;
  label: string;
  pillIcon: React.ElementType;
  badge: string;
  headline: string;
  subheadline: string;
  accentColor: string;
  metrics: {
    label: string;
    beforeVal: number;
    afterVal: number;
    unit: string;
    delta: string;
    caption: string;
  }[];
  keyHighlights: string[];
  linkPath: string;
  linkText: string;
}

const TABS: InfographicTab[] = [
  {
    id: 'healthcare',
    label: 'Health Equity & Trials',
    pillIcon: HeartPulse,
    badge: 'Biopharma Impact Benchmark',
    headline: 'Bridging Clinical Trial Disparities to Affirming Healthcare Delivery',
    subheadline: 'Eliminating systematic health disparities for transgender, gender diverse, and intersectional communities across life sciences and medical providers.',
    accentColor: '#007AFF', // iOS Electric Blue
    metrics: [
      {
        label: 'Clinical Trial Minority Enrollment',
        beforeVal: 4,
        afterVal: 29,
        unit: '%',
        delta: '+625%',
        caption: 'Diverse cohort recruitment protocols across oncology & immunology trials.'
      },
      {
        label: 'Provider Transgender Cultural Competency',
        beforeVal: 28,
        afterVal: 94,
        unit: '%',
        delta: '+235%',
        caption: 'Certified clinical staff trained in trauma-informed, gender-affirming care.'
      },
      {
        label: 'Marginalized Patient Trust & Adherence',
        beforeVal: 35,
        afterVal: 88,
        unit: '%',
        delta: '+151%',
        caption: 'Patient satisfaction index post-implementation of inclusive healthcare guidelines.'
      }
    ],
    keyHighlights: [
      'Advising Syneos Health DEI and Health Equity Advisory Council',
      'Endpoints News Top 20 LGBTQ+ Leader in Biopharma recognition',
      'Full lifecycle cultural competency from protocol design to clinical bedside'
    ],
    linkPath: '/healthcare',
    linkText: 'Explore Health Equity Practice'
  },
  {
    id: 'workplace',
    label: 'Bathroom to Boardroom DEIB',
    pillIcon: Briefcase,
    badge: 'Enterprise Architecture',
    headline: 'Transforming Fortune 100 Cultures From Policy to Executive Governance',
    subheadline: 'Dismantling systemic workforce barriers through measurable accountability, ERG leadership development, and inclusive corporate governance.',
    accentColor: '#FF2D55', // iOS Vibrant Pink
    metrics: [
      {
        label: 'Global Policy Inclusivity Audit Score',
        beforeVal: 32,
        afterVal: 96,
        unit: '%',
        delta: '+200%',
        caption: 'Transgender, non-binary, and parental leave enterprise policy modernization.'
      },
      {
        label: 'Executive ERG Buy-In & Leadership Sponsorship',
        beforeVal: 24,
        afterVal: 92,
        unit: '%',
        delta: '+283%',
        caption: 'C-Suite active sponsorship index across employee resource groups.'
      },
      {
        label: 'Inclusive Supplier Spend (LGBTBE/MBE)',
        beforeVal: 8,
        afterVal: 42,
        unit: '%',
        delta: '+425%',
        caption: 'Supply chain equity through certified diverse business enterprise partnerships.'
      }
    ],
    keyHighlights: [
      '30+ years Fortune 100 enterprise leadership pedigree',
      'Certified LGBTBE, CPUC, SBE, and EBE enterprise supplier status',
      'Educate, Engage, Empower 3-pillar measurable corporate framework'
    ],
    linkPath: '/deib',
    linkText: 'Explore DEIB Consulting Practice'
  },
  {
    id: 'ai-ethics',
    label: 'Responsible AI & Data',
    pillIcon: Cpu,
    badge: 'Frontier AI Governance',
    headline: 'Guarding Human Dignity Across Algorithmic & Generative Intelligence',
    subheadline: 'Mitigating algorithmic bias, ensuring data equity, and establishing ethical guardrails across generative models and predictive HR technologies.',
    accentColor: '#AF52DE', // iOS Neon Violet
    metrics: [
      {
        label: 'Algorithmic Demographic Parity Audit',
        beforeVal: 45,
        afterVal: 98,
        unit: '%',
        delta: '+117%',
        caption: 'Reduction of false positives/negatives across demographic intersectional subgroups.'
      },
      {
        label: 'Ethical Guardrail & Dignity Adherence',
        beforeVal: 18,
        afterVal: 95,
        unit: '%',
        delta: '+427%',
        caption: 'Pre-deployment safety filters auditing gender, racial, and neurodivergent bias.'
      },
      {
        label: 'Model Fairness Transparency Index',
        beforeVal: 22,
        afterVal: 91,
        unit: '%',
        delta: '+313%',
        caption: 'Explainability benchmarks established for high-stakes healthcare & hiring models.'
      }
    ],
    keyHighlights: [
      'Pioneering intersectional dataset curation and synthetic bias testing',
      'FUTRtv & tech keynote dialogues addressing algorithmic representation',
      'Human-in-the-loop ethical guidelines for enterprise AI adoption'
    ],
    linkPath: '/topics',
    linkText: 'Explore AI & Executive Topics'
  }
];

export const IOSInfographicsSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('healthcare');
  const activeTab = TABS.find(t => t.id === activeTabId) || TABS[0];
  const Icon = activeTab.pillIcon;

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill Badge & Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full ios-glass-pill text-xs font-semibold text-slate-800 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF2D55] animate-ping" />
            <span className="ios-pink-blue-text font-bold uppercase tracking-wider">
              Measurable Transformation Matrix
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Data-Driven Inclusion. <br className="hidden sm:inline" />
            <span className="ios-pink-blue-text">Proven Across Industries.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real organizational transformation requires verified metrics, systemic policy reform, and accountable execution. Explore how Rebekon elevates benchmarks.
          </p>
        </div>

        {/* Apple iOS Segmented Control Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full ios-glass border border-white/80 shadow-[0_8px_30px_rgba(0,122,255,0.08)] max-w-full overflow-x-auto scrollbar-none">
            {TABS.map((tab) => {
              const isSelected = activeTabId === tab.id;
              const TabIcon = tab.pillIcon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-md scale-102 border border-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <TabIcon 
                    className="w-4 h-4 transition-colors" 
                    style={{ color: isSelected ? tab.accentColor : undefined }}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Infographic Main Stage */}
        <div className="ios-glass-card p-6 sm:p-10 lg:p-12 border border-white/90 shadow-[0_24px_60px_-15px_rgba(0,122,255,0.12)] relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div 
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
            style={{ backgroundColor: activeTab.accentColor }}
          />

          {/* Top Bar with Badge & Headline */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200/70">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2"
                style={{
                  backgroundColor: `${activeTab.accentColor}15`,
                  color: activeTab.accentColor
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{activeTab.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                {activeTab.headline}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
                {activeTab.subheadline}
              </p>
            </div>

            <Link
              to={activeTab.linkPath}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full ios-btn-primary text-xs sm:text-sm font-semibold shrink-0 group self-start lg:self-center"
            >
              <span>{activeTab.linkText}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* 3 Metric Visualization Bars (Before vs Rebekon Impact) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            {activeTab.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/70 border border-white/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Metric 0{idx + 1}
                    </span>
                    <span 
                      className="inline-flex items-center gap-1 text-xs font-black px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${activeTab.accentColor}18`,
                        color: activeTab.accentColor
                      }}
                    >
                      <TrendingUp className="w-3 h-3" />
                      {metric.delta}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                    {metric.label}
                  </h4>

                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    {metric.caption}
                  </p>
                </div>

                {/* Comparative Visual Bars */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  {/* Before */}
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-400 mb-1">
                      <span>Industry Baseline</span>
                      <span>{metric.beforeVal}{metric.unit}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200/70 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-slate-400/60 rounded-full transition-all duration-700"
                        style={{ width: `${metric.beforeVal}%` }}
                      />
                    </div>
                  </div>

                  {/* After Rebekon */}
                  <div>
                    <div className="flex justify-between text-[11px] font-bold text-slate-900 mb-1">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeTab.accentColor }} />
                        With Rebekon Framework
                      </span>
                      <span style={{ color: activeTab.accentColor }}>{metric.afterVal}{metric.unit}</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
                      <div 
                        className="h-full rounded-full transition-all duration-700 shadow-sm"
                        style={{ 
                          width: `${metric.afterVal}%`,
                          background: `linear-gradient(90deg, #FF2D55 0%, ${activeTab.accentColor} 100%)`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Certified Highlights Pill Bar */}
          <div className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Strategic Assurance:
              </span>
              {activeTab.keyHighlights.map((highlight, hIdx) => (
                <div 
                  key={hIdx}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/60"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-slate-400 font-medium">
              Data compiled from real enterprise & clinical consulting engagements (2018–2025)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
