import React, { useState } from 'react';
import { Award, Mic, Briefcase, HeartPulse, ChevronRight, Sparkles, TrendingUp } from 'lucide-react';

interface MetricDetail {
  id: string;
  label: string;
  stat: string;
  badge: string;
  description: string;
  ringColor: string;
  glowColor: string;
  percentage: number;
  icon: React.ElementType;
}

const METRICS: MetricDetail[] = [
  {
    id: 'keynotes',
    label: 'Global Keynotes',
    stat: '100+',
    badge: 'Worldwide Stages',
    description: 'Transformative keynotes and fireside chats delivered to Fortune 100 summits, academic medical conferences, and global DEI symposiums.',
    ringColor: '#FF2D55',
    glowColor: 'rgba(255, 45, 85, 0.45)',
    percentage: 96,
    icon: Mic
  },
  {
    id: 'leadership',
    label: 'Enterprise Pedigree',
    stat: '30+ Yrs',
    badge: 'Fortune 100 Track Record',
    description: 'Executive management consulting pedigree driving organizational change, supplier diversity (LGBTBE/MBE), and systemic workplace policy reform.',
    ringColor: '#AF52DE',
    glowColor: 'rgba(175, 82, 222, 0.45)',
    percentage: 92,
    icon: Briefcase
  },
  {
    id: 'healthcare',
    label: 'Health Equity Impact',
    stat: 'Top 20',
    badge: 'Biopharma Leadership',
    description: 'Recognized by Endpoints News among the Top 20 LGBTQ+ Leaders in Biopharma for pioneering transgender clinical trial diversity and healthcare equity.',
    ringColor: '#007AFF',
    glowColor: 'rgba(0, 122, 255, 0.45)',
    percentage: 88,
    icon: HeartPulse
  }
];

export const IOSActivityRings: React.FC = () => {
  const [activeMetricId, setActiveMetricId] = useState<string>('keynotes');
  const activeMetric = METRICS.find(m => m.id === activeMetricId) || METRICS[0];

  // SVG Geometry for 3 Rings
  const size = 260;
  const strokeWidth = 16;
  const center = size / 2;

  // Ring 1 (Outer - Pink)
  const r1 = 110;
  const circ1 = 2 * Math.PI * r1;
  const offset1 = circ1 - (circ1 * (METRICS[0].percentage / 100));

  // Ring 2 (Middle - Purple)
  const r2 = 88;
  const circ2 = 2 * Math.PI * r2;
  const offset2 = circ2 - (circ2 * (METRICS[1].percentage / 100));

  // Ring 3 (Inner - Blue)
  const r3 = 66;
  const circ3 = 2 * Math.PI * r3;
  const offset3 = circ3 - (circ3 * (METRICS[2].percentage / 100));

  return (
    <div className="ios-glass-card p-6 sm:p-8 relative overflow-hidden border border-white/80 shadow-[0_20px_60px_-15px_rgba(0,122,255,0.12)]">
      {/* Subtle background glow */}
      <div 
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: activeMetric.glowColor }}
      />

      {/* Header telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF2D55] via-[#AF52DE] to-[#007AFF] p-0.5 shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#007AFF]" />
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Apple Activity Metrics</h4>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">Rebekon Executive Telemetry</h3>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/80 border border-slate-200/80 text-slate-700 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Verified Track Record</span>
        </div>
      </div>

      {/* Main Infographic Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Triple Concentric Rings */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative group cursor-pointer">
            <svg 
              width={size} 
              height={size} 
              viewBox={`0 0 ${size} ${size}`}
              className="transform -rotate-90 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
            >
              <defs>
                {/* Outer Ring Gradient (Pink) */}
                <linearGradient id="ringGradPink" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF2D55" />
                  <stop offset="100%" stopColor="#FF6482" />
                </linearGradient>
                {/* Middle Ring Gradient (Purple) */}
                <linearGradient id="ringGradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#AF52DE" />
                  <stop offset="100%" stopColor="#D946EF" />
                </linearGradient>
                {/* Inner Ring Gradient (Blue) */}
                <linearGradient id="ringGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#007AFF" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>

              {/* Track Backgrounds */}
              <circle
                cx={center}
                cy={center}
                r={r1}
                stroke="#FF2D55"
                strokeWidth={strokeWidth}
                strokeOpacity="0.15"
                fill="none"
              />
              <circle
                cx={center}
                cy={center}
                r={r2}
                stroke="#AF52DE"
                strokeWidth={strokeWidth}
                strokeOpacity="0.15"
                fill="none"
              />
              <circle
                cx={center}
                cy={center}
                r={r3}
                stroke="#007AFF"
                strokeWidth={strokeWidth}
                strokeOpacity="0.15"
                fill="none"
              />

              {/* Animated Progress Rings */}
              {/* Ring 1 - Pink */}
              <circle
                cx={center}
                cy={center}
                r={r1}
                stroke="url(#ringGradPink)"
                strokeWidth={strokeWidth}
                strokeDasharray={circ1}
                strokeDashoffset={offset1}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-700 ease-out"
                style={{
                  filter: activeMetricId === 'keynotes' ? 'drop-shadow(0 0 8px rgba(255, 45, 85, 0.7))' : 'none',
                  opacity: activeMetricId === 'keynotes' ? 1 : 0.8
                }}
              />

              {/* Ring 2 - Purple */}
              <circle
                cx={center}
                cy={center}
                r={r2}
                stroke="url(#ringGradPurple)"
                strokeWidth={strokeWidth}
                strokeDasharray={circ2}
                strokeDashoffset={offset2}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-700 ease-out"
                style={{
                  filter: activeMetricId === 'leadership' ? 'drop-shadow(0 0 8px rgba(175, 82, 222, 0.7))' : 'none',
                  opacity: activeMetricId === 'leadership' ? 1 : 0.8
                }}
              />

              {/* Ring 3 - Blue */}
              <circle
                cx={center}
                cy={center}
                r={r3}
                stroke="url(#ringGradBlue)"
                strokeWidth={strokeWidth}
                strokeDasharray={circ3}
                strokeDashoffset={offset3}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-700 ease-out"
                style={{
                  filter: activeMetricId === 'healthcare' ? 'drop-shadow(0 0 8px rgba(0, 122, 255, 0.7))' : 'none',
                  opacity: activeMetricId === 'healthcare' ? 1 : 0.8
                }}
              />
            </svg>

            {/* Central Icon Badge inside Rings */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                {activeMetric.stat}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {activeMetric.label}
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 font-medium text-center mt-3">
            Tap or hover metric cards to inspect ring progress
          </p>
        </div>

        {/* Right: Interactive Telemetry Cards */}
        <div className="lg:col-span-7 space-y-3">
          {METRICS.map((metric) => {
            const isSelected = activeMetricId === metric.id;
            const Icon = metric.icon;

            return (
              <div
                key={metric.id}
                onMouseEnter={() => setActiveMetricId(metric.id)}
                onClick={() => setActiveMetricId(metric.id)}
                className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'bg-white/95 border-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] scale-[1.02]'
                    : 'bg-white/50 border-slate-200/60 hover:bg-white/80 hover:border-slate-300/80'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center shadow-xs transition-colors"
                      style={{ 
                        backgroundColor: `${metric.ringColor}15`,
                        color: metric.ringColor 
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-slate-900">{metric.stat}</span>
                        <span className="text-xs font-semibold text-slate-600">{metric.label}</span>
                        <span 
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${metric.ringColor}18`,
                            color: metric.ringColor
                          }}
                        >
                          {metric.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {metric.description}
                      </p>
                    </div>
                  </div>

                  {/* Ring Completion Pill */}
                  <div className="shrink-0 text-right">
                    <span 
                      className="text-xs font-black tracking-tight"
                      style={{ color: metric.ringColor }}
                    >
                      {metric.percentage}%
                    </span>
                    <div className="w-14 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${metric.percentage}%`,
                          backgroundColor: metric.ringColor 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

