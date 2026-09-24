import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight,
  Calendar, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Play, 
  ExternalLink, 
  Mic, 
  Users, 
  HeartHandshake, 
  Eye,
  Activity,
  Cpu,
  HeartPulse,
  Briefcase,
  Layers,
  TrendingUp,
  FileText
} from 'lucide-react';
import { SITE_CONFIG, SERVICE_PILLARS, CERTIFICATIONS, ESTABLISHED_STATS, MEDIA_ITEMS } from '../data/siteData';
import { ServiceCard } from '../components/ServiceCard';
import { ClientMarquee } from '../components/ClientMarquee';
import { CertificationsMarquee } from '../components/CertificationsMarquee';
import { GradientCTASection } from '../components/GradientCTASection';
import { VideoModal } from '../components/VideoModal';
import { HeroVideoPlayer } from '../components/HeroVideoPlayer';
import { CapabilitiesModal } from '../components/CapabilitiesModal';
import { IOSActivityRings } from '../components/IOSActivityRings';
import { IOSInfographicsSection } from '../components/IOSInfographicsSection';

// Practice modes for Apple iOS hero switcher
const HERO_MODES = {
  keynote: {
    id: 'keynote',
    pill: 'Keynote & Speaking',
    icon: Mic,
    badge: 'Flagship Keynote Experience',
    titleLead: 'Transforming organizations to be ',
    titleAccent: 'truly inclusive',
    titleEnd: ' — from the Bathroom to the Boardroom.',
    description: 'World-renowned motivational keynotes and executive fireside chats bridging Fortune 100 enterprise execution with authentic, courageous lived experience.',
    impactStat: '100+ Global Keynotes Delivered',
    primaryCta: { label: 'Book Keynote', link: '/book-online' },
    secondaryCta: { label: 'Explore Keynotes', link: '/media' },
    video: MEDIA_ITEMS[0], // Bathroom to Boardroom (41:26)
    audioTrackName: 'Keynote Spotlight: "From the Bathroom to the Boardroom"',
    trackDuration: '41:26',
    pillColor: '#FF2D55'
  },
  healthcare: {
    id: 'healthcare',
    pill: 'Health Equity & BioPharma',
    icon: HeartPulse,
    badge: 'Top 20 Biopharma Leader',
    titleLead: 'Eliminating disparities for ',
    titleAccent: 'marginalized patients',
    titleEnd: ' across clinical trials & care systems.',
    description: 'Advising healthcare systems, academic medical centers, and biopharma giants on cultural competency, transgender health equity, and diverse trial recruitment.',
    impactStat: 'Endpoints News Top 20 Biopharma Leader',
    primaryCta: { label: 'Health Equity Practice', link: '/healthcare' },
    secondaryCta: { label: 'View Case Studies', link: '/case-studies' },
    video: MEDIA_ITEMS[4], // Safe & Inclusive Workplaces
    audioTrackName: 'Healthcare Briefing: "Clinical Equity & Transgender Care Delivery"',
    trackDuration: '18:45',
    pillColor: '#007AFF'
  },
  deib: {
    id: 'deib',
    pill: 'Workplace DEIB Strategy',
    icon: Briefcase,
    badge: '30+ Years Enterprise Pedigree',
    titleLead: 'Architecting measurable equity across ',
    titleAccent: 'Fortune 100 workforces',
    titleEnd: ' and executive suites.',
    description: 'Proven enterprise transformation dismantling systemic bias, upgrading talent pipelines, and certifying inclusive supplier ecosystems with certified LGBTBE/MBE status.',
    impactStat: '30+ Years Fortune 100 Leadership Pedigree',
    primaryCta: { label: 'DEIB Advisory Practice', link: '/deib' },
    secondaryCta: { label: 'Enterprise Capabilities', link: '/services' },
    video: MEDIA_ITEMS[6], // #EquityMatters
    audioTrackName: 'Executive Briefing: "#EquityMatters: Systemic Policy Reform"',
    trackDuration: '24:10',
    pillColor: '#AF52DE'
  },
  ai: {
    id: 'ai',
    pill: 'Responsible & Inclusive AI',
    icon: Cpu,
    badge: 'Frontier AI & Algorithmic Ethics',
    titleLead: 'Mitigating algorithmic bias with ',
    titleAccent: 'human-centered AI governance',
    titleEnd: ' and ethical guardrails.',
    description: 'Ensuring generative models, predictive healthcare algorithms, and automated hiring systems preserve human dignity, data equity, and intersectional fairness.',
    impactStat: 'Ethical AI & Data Governance Pioneer',
    primaryCta: { label: 'AI Advisory Practice', link: '/services' },
    secondaryCta: { label: 'Read Perspectives', link: '/blogs' },
    video: MEDIA_ITEMS[1], // FUTRtv Challenge of Being Trans in Tech
    audioTrackName: 'FUTRtv Tech Dialogue: "Algorithmic Equity & Identity in Tech"',
    trackDuration: '14:22',
    pillColor: '#00C7BE'
  }
} as const;

type FocusModeKey = keyof typeof HERO_MODES;

export const HomePage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<typeof MEDIA_ITEMS[0] | null>(null);
  const [capabilitiesModalOpen, setCapabilitiesModalOpen] = useState(false);
  const [activeFocus, setActiveFocus] = useState<FocusModeKey>('keynote');

  const [activeKeynoteIdx, setActiveKeynoteIdx] = useState(0);
  const [activeMediaIdx, setActiveMediaIdx] = useState(0);

  const keynoteScrollRef = useRef<HTMLDivElement>(null);
  const mediaScrollRef = useRef<HTMLDivElement>(null);

  const scrollToKeynote = (idx: number) => {
    const clamped = Math.max(0, Math.min(2, idx));
    setActiveKeynoteIdx(clamped);
    if (keynoteScrollRef.current) {
      const cards = keynoteScrollRef.current.children;
      if (cards[clamped]) {
        (cards[clamped] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  const scrollToMedia = (idx: number) => {
    const clamped = Math.max(0, Math.min(5, idx));
    setActiveMediaIdx(clamped);
    if (mediaScrollRef.current) {
      const cards = mediaScrollRef.current.children;
      if (cards[clamped]) {
        (cards[clamped] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  const handleKeynoteScroll = () => {
    if (keynoteScrollRef.current) {
      const scrollLeft = keynoteScrollRef.current.scrollLeft;
      const cardWidth = keynoteScrollRef.current.clientWidth * 0.84;
      const newIdx = Math.round(scrollLeft / cardWidth);
      if (newIdx !== activeKeynoteIdx && newIdx >= 0 && newIdx < 3) {
        setActiveKeynoteIdx(newIdx);
      }
    }
  };

  const handleMediaScroll = () => {
    if (mediaScrollRef.current) {
      const scrollLeft = mediaScrollRef.current.scrollLeft;
      const cardWidth = mediaScrollRef.current.clientWidth * 0.84;
      const newIdx = Math.round(scrollLeft / cardWidth);
      if (newIdx !== activeMediaIdx && newIdx >= 0 && newIdx < 6) {
        setActiveMediaIdx(newIdx);
      }
    }
  };

  const currentMode = HERO_MODES[activeFocus];

  return (
    <div className="relative pt-20 sm:pt-28 lg:pt-32 overflow-hidden select-none">
      
      {/* =========================================================================
          HERO SECTION: APPLE iOS GLASS STAGE & INTERACTIVE FOCUS SWITCHER
         ========================================================================= */}
      <section className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-2 sm:pt-4 pb-12 sm:pb-20">
        
        {/* Apple Dynamic Island Live Activity Pill */}
        <div className="flex justify-center sm:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full ios-glass text-xs font-semibold shadow-sm border border-white/80">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF2D55] animate-ping" />
            <span className="text-slate-800 font-bold">2025–2026 Keynote & Health Equity Booking</span>
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-gradient-to-r from-[#FF2D55] to-[#007AFF] text-white">
              Active
            </span>
          </div>
        </div>

        {/* Apple iOS Segmented Practice Switcher */}
        <div className="mb-8 flex items-center justify-start w-full overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full ios-glass border border-white/80 shadow-[0_10px_30px_rgba(0,122,255,0.06)] shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold tracking-wider text-slate-400 uppercase shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[#007AFF]" />
              Practice:
            </span>
            {(Object.keys(HERO_MODES) as FocusModeKey[]).map((key) => {
              const mode = HERO_MODES[key];
              const Icon = mode.icon;
              const isActive = activeFocus === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveFocus(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-md scale-102 border border-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Icon 
                    className="w-3.5 h-3.5 transition-colors" 
                    style={{ color: isActive ? mode.pillColor : '#94A3B8' }}
                  />
                  <span>{mode.pill}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Main Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Glass Headline & Telemetry */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-left">
            {/* Multi-badge Kicker Strip */}
            <div className="inline-flex flex-wrap items-center justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-glass-pill text-xs font-bold text-slate-800 shadow-xs">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentMode.pillColor }} />
                <span>{currentMode.badge}</span>
              </div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-white shadow-xs">
                {currentMode.impactStat}
              </span>
            </div>

            {/* Apple Dynamic Headline with Pink & Blue Fluid Gradient */}
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] text-slate-900 tracking-[-0.035em] leading-[1.15]">
              {currentMode.titleLead}
              <span className="ios-pink-blue-text font-black">
                {currentMode.titleAccent}
              </span>{' '}
              {currentMode.titleEnd}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {currentMode.description}{' '}
              Led by <span className="font-bold text-slate-900">{SITE_CONFIG.founder}</span> <span className="text-slate-400 font-medium">{SITE_CONFIG.pronouns}</span>, Founder & CEO.
            </p>

            {/* Apple Music / Podcast Frosted Preview Bar */}
            <div className="p-3.5 rounded-2xl ios-glass-card-dark text-white border border-white/15 shadow-xl text-left">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center gap-1 shrink-0 px-1.5">
                    <div className="w-1 bg-[#FF2D55] rounded-full animate-eq-1" />
                    <div className="w-1 bg-[#AF52DE] rounded-full animate-eq-2" />
                    <div className="w-1 bg-[#007AFF] rounded-full animate-eq-3" />
                    <div className="w-1 bg-[#FF2D55] rounded-full animate-eq-4" />
                  </div>
                  <div className="text-left overflow-hidden min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold text-[#FF2D55] tracking-wider uppercase">
                        SPOTLIGHT · {currentMode.trackDuration}
                      </span>
                    </div>
                    <div className="font-semibold text-xs sm:text-sm text-slate-100 truncate">
                      {currentMode.audioTrackName}
                    </div>
                  </div>
                </div>

                {/* Instant Play Button */}
                <button
                  type="button"
                  onClick={() => setActiveVideo(currentMode.video)}
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full ios-btn-primary text-xs font-bold shadow-md cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Presentation</span>
                </button>
              </div>
            </div>

            {/* Apple iOS Button Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 pt-2">
              <Link
                to={currentMode.primaryCta.link}
                className="ios-btn-primary px-7 py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 group shadow-lg"
              >
                <span>{currentMode.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/book-online"
                className="ios-btn-secondary px-6 py-3.5 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#007AFF]" />
                <span>Book Online</span>
              </Link>

              <button
                type="button"
                onClick={() => setCapabilitiesModalOpen(true)}
                className="px-5 py-3.5 rounded-full ios-glass-pill text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#FF2D55]" />
                <span>Capabilities Statement</span>
              </button>
            </div>

            {/* Official Diverse Supplier Trust Strip */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E8F2FF] text-[#007AFF] border border-blue-200/70 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Diverse Supplier
              </span>
              <span className="text-xs text-slate-600 font-semibold">
                NGLCC (30210) • CPUC VON: 24000841 • SBE • D-U-N-S Registered
              </span>
            </div>
          </div>

          {/* Right Column: Apple Vision Frosted Media Deck */}
          <div className="lg:col-span-5 xl:col-span-6">
            <div className="ios-glass-card p-4 sm:p-5 border border-white/90 shadow-[0_25px_65px_-15px_rgba(0,122,255,0.2)]">
              {/* Autoplaying 16:9 Video Player */}
              <HeroVideoPlayer
                video={currentMode.video}
                onOpenModal={() => setActiveVideo(currentMode.video)}
                badgeText={currentMode.badge}
              />

              {/* Speaker Metadata & Telemetry Cards */}
              <div className="pt-4 px-1">
                <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-slate-200/60">
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5 truncate">
                      <span>{SITE_CONFIG.founder}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#007AFF] shrink-0" />
                    </div>
                    <p className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                      {currentMode.audioTrackName}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(currentMode.video)}
                    className="shrink-0 text-xs font-bold text-[#007AFF] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Expand Video</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Micro Metric Pills */}
                <div className="grid grid-cols-3 gap-2.5 pt-3 text-center">
                  <div className="p-2.5 rounded-2xl bg-white/70 border border-white shadow-2xs">
                    <div className="font-black text-slate-900 text-xs sm:text-sm">12+ Podcasts</div>
                    <div className="text-[10px] text-slate-500 font-semibold">Featured Voice</div>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-white/70 border border-white shadow-2xs">
                    <div className="font-black text-slate-900 text-xs sm:text-sm">Top 20 Leader</div>
                    <div className="text-[10px] text-slate-500 font-semibold">Endpoints News</div>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-white/70 border border-white shadow-2xs">
                    <div className="font-black text-slate-900 text-xs sm:text-sm">30+ Years</div>
                    <div className="text-[10px] text-slate-500 font-semibold">Fortune 100 Pedigree</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Certifications Rolling Marquee Strip */}
        <div className="w-full max-w-[1600px] mx-auto mt-8 sm:mt-12 pt-6 border-t border-slate-200/70 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 px-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#FF2D55] to-[#007AFF] p-0.5 shrink-0 shadow-md">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#007AFF]" />
                </div>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                  OFFICIAL GOVERNMENT & DIVERSE SUPPLIER ACCREDITATIONS
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Certified by NGLCC National LGBT Chamber, California Public Utilities Commission (CPUC), CA/LA SBE, and Dun & Bradstreet Registered
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCapabilitiesModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007AFF] hover:underline cursor-pointer self-start sm:self-auto"
            >
              <span>View Full Capabilities & Codes</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <CertificationsMarquee onCardClick={() => setCapabilitiesModalOpen(true)} />
        </div>
      </section>

      {/* =========================================================================
          APPLE ACTIVITY RINGS TELEMETRY & SMOOTH INFOGRAPHICS
         ========================================================================= */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IOSActivityRings />
      </section>

      {/* =========================================================================
          DATA-DRIVEN INCLUSION INFOGRAPHIC DASHBOARD (MEASURABLE MATRIX)
         ========================================================================= */}
      <IOSInfographicsSection />

      {/* =========================================================================
          KEYNOTE VIDEO CAROUSEL WITH GLASS PLAYERS
         ========================================================================= */}
      <section className="py-16 bg-slate-950/85 text-white relative overflow-hidden backdrop-blur-2xl border-y border-white/10">
        {/* Ambient Pink and Blue Glows */}
        <div className="absolute top-0 left-10 w-96 h-96 bg-[#FF2D55]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#007AFF]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FF2D55] text-xs font-bold tracking-wider uppercase mb-2 border border-white/15">
                <Mic className="w-3.5 h-3.5" />
                <span>WATCH CELIA IN ACTION</span>
              </div>
              <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                Featured Keynotes, Interviews & Thought Leadership
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Real video recordings covering enterprise inclusion, trans rights, and healthcare equity.
              </p>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-3">
              <Link
                to="/media"
                className="text-xs sm:text-sm font-bold text-[#FF2D55] hover:text-pink-300 flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>Explore All 10 Video Appearances</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Keynotes Carousel */}
          <div className="relative group">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={() => scrollToKeynote(activeKeynoteIdx - 1)}
              disabled={activeKeynoteIdx === 0}
              aria-label="Previous keynote"
              className={`absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/90 text-white border border-white/20 shadow-2xl flex items-center justify-center transition-all cursor-pointer backdrop-blur-xl ${
                activeKeynoteIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={() => scrollToKeynote(activeKeynoteIdx + 1)}
              disabled={activeKeynoteIdx === 2}
              aria-label="Next keynote"
              className={`absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-gradient-to-r from-[#FF2D55] to-[#007AFF] text-white shadow-2xl flex items-center justify-center transition-all cursor-pointer ${
                activeKeynoteIdx === 2 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* 3 Featured Video Cards */}
            <div
              ref={keynoteScrollRef}
              onScroll={handleKeynoteScroll}
              className="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 px-[7vw] sm:px-0 snap-x snap-mandatory scrollbar-none scroll-smooth items-stretch"
            >
              {MEDIA_ITEMS.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveVideo(item)}
                  className="w-[86vw] max-w-[360px] md:max-w-none md:w-auto shrink-0 snap-center group relative ios-glass-card-dark rounded-3xl overflow-hidden border border-white/15 hover:border-[#FF2D55]/60 shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
                >
                  {/* YouTube Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF2D55] to-[#007AFF] text-white flex items-center justify-center shadow-2xl group-hover:scale-115 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                    {item.duration && (
                      <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-black/80 text-white backdrop-blur-md">
                        {item.duration}
                      </span>
                    )}
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/80 text-[#FF2D55] uppercase tracking-wider backdrop-blur-md border border-white/10">
                      {item.type}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                        {item.source}
                      </span>
                      <h3 className="font-bold text-white text-base group-hover:text-[#FF2D55] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#007AFF]">
                      <span className="group-hover:translate-x-0.5 transition-transform">Play in Apple Player</span>
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Indicators */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-2">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToKeynote(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeKeynoteIdx === idx ? 'w-6 bg-[#FF2D55]' : 'w-2 bg-slate-700'
                  }`}
                  aria-label={`Go to video ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          REAL PHOTO GALLERY: LEADERSHIP & ADVOCACY IN ACTION
         ========================================================================= */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
              LEADERSHIP IN ACTION
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
              On Stage, in the Boardroom, and in the Community
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Witness Celia Sandhya Daniels keynoting national healthcare conferences, addressing industry delegations, and receiving bipartisan congressional honors.
            </p>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none">
            {/* Photo 1: OutBuro Spotlight */}
            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start group relative rounded-3xl overflow-hidden ios-glass-card shadow-md flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/real/yt_thumb_outburo.jpg"
                  alt="Celia Daniels OutBüro Voices Spotlight"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white/90">
                <span className="text-[10px] font-bold text-[#FF2D55] uppercase tracking-wider block">
                  Executive Spotlight
                </span>
                <div className="font-bold text-slate-900 text-sm mt-0.5">
                  LGBT Professional & Activist
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  OutBüro LGBTQ+ community executive dialogue on inclusive corporate leadership.
                </p>
              </div>
            </div>

            {/* Photo 2: Bathroom to Boardroom Keynote */}
            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start group relative rounded-3xl overflow-hidden ios-glass-card shadow-md flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/real/yt_thumb_bathroom_boardroom.jpg"
                  alt="Bathroom to Boardroom Keynote"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white/90">
                <span className="text-[10px] font-bold text-[#007AFF] uppercase tracking-wider block">
                  Keynote Address
                </span>
                <div className="font-bold text-slate-900 text-sm mt-0.5">
                  Bathroom to Boardroom
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Actionable roadmap from frontline dignity to C-suite governance.
                </p>
              </div>
            </div>

            {/* Photo 3: Workplace Pride */}
            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start group relative rounded-3xl overflow-hidden ios-glass-card shadow-md flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/real/yt_thumb_workplace_pride.jpg"
                  alt="Amplify DEI Workplace Pride Keynote"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white/90">
                <span className="text-[10px] font-bold text-[#AF52DE] uppercase tracking-wider block">
                  Global Summit
                </span>
                <div className="font-bold text-slate-900 text-sm mt-0.5">
                  Workplace Pride Summit
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Amplify DEI keynote on transforming enterprise culture into genuine allyship.
                </p>
              </div>
            </div>

            {/* Photo 4: 12+ Featured Podcast Networks */}
            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start group relative rounded-3xl overflow-hidden ios-glass-card shadow-md flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/real/award_congressional.png"
                  alt="12+ Featured Podcast Appearances"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white/90">
                <span className="text-[10px] font-bold text-[#FF2D55] uppercase tracking-wider block">
                  Media Roster
                </span>
                <div className="font-bold text-slate-900 text-sm mt-0.5">
                  12+ Podcast Networks
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Featured across FUTRtv, The Transgender Show, Leading People First, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE THREE PILLARS: APPLE GLASS BENTO GRID
         ========================================================================= */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
              CORE PRACTICE AREAS
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
              Humanizing Healthcare, Workplace & Business
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Strategic advisory grounded in lived experience and over 30 years of corporate Fortune 100 enterprise execution.
            </p>
          </div>

          {/* 3 Pillars Grid with Apple Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_PILLARS.map((pillar, idx) => (
              <ServiceCard key={pillar.id} pillar={pillar} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#007AFF] hover:underline"
            >
              <span>Explore the complete Educate · Engage · Empower framework</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT PARTNERS MARQUEE
         ========================================================================= */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            TRUSTED PARTNERSHIPS & CLIENT EXPERIENCE
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2 tracking-tight">
            Working With the Best Clients and Partners
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Proven collaboration across Fortune 100 biopharma, health systems, and diversity advocacy organizations.
          </p>
        </div>

        <ClientMarquee />
      </section>

      {/* =========================================================================
          FOUNDER VISION STATEMENT: APPLE FROSTED GLASS CALLOUT
         ========================================================================= */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="ios-glass-card p-8 sm:p-14 text-center border border-white/95 shadow-[0_20px_60px_-15px_rgba(255,45,85,0.12)]">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF2D55] via-[#AF52DE] to-[#007AFF] flex items-center justify-center text-white mx-auto mb-6 shadow-md">
              <Sparkles className="w-7 h-7" />
            </div>

            <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
              OUR CORE VISION & MISSION
            </span>

            <blockquote className="font-medium text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-snug my-8 italic">
              "Transforming organizations to foster genuine inclusivity at all levels from the Bathroom to the Boardroom, unlocking the potential of employees to drive innovation, enhance productivity, and cultivate a profound sense of authenticity and belonging in the workplace."
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <img
                src="/images/real/celia_official_speaker.jpg"
                alt="Celia Sandhya Daniels"
                className="w-14 h-14 rounded-full object-cover object-[75%_25%] border-2 border-[#FF2D55] shadow-md"
              />
              <div className="text-left">
                <div className="font-bold text-slate-900 text-base">{SITE_CONFIG.founder}</div>
                <div className="text-xs text-slate-500 font-medium">Founder & CEO, Rebekon Consulting LLC • {SITE_CONFIG.pronouns}</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#007AFF] hover:underline"
              >
                <span>Read Celia's Full Biography & 16+ Civic Honors</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED VOICES & INTERVIEWS REEL
         ========================================================================= */}
      <section className="pt-8 sm:pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
                PODCASTS · WEBCASTS · KEYNOTES
              </span>
              <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 mt-1 tracking-tight">
                Featured Voices & Thought Leadership
              </h2>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-3">
              <Link
                to="/media"
                className="text-sm font-bold text-[#007AFF] hover:underline flex items-center gap-1.5 shrink-0"
              >
                <span>View All 10 Interviews</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Podcasts and Videos */}
          <div className="relative group">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={() => scrollToMedia(activeMediaIdx - 1)}
              disabled={activeMediaIdx === 0}
              aria-label="Previous podcast"
              className={`absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full ios-glass text-slate-800 shadow-2xl flex items-center justify-center transition-all cursor-pointer ${
                activeMediaIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={() => scrollToMedia(activeMediaIdx + 1)}
              disabled={activeMediaIdx === 5}
              aria-label="Next podcast"
              className={`absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full ios-btn-primary text-white shadow-2xl flex items-center justify-center transition-all cursor-pointer ${
                activeMediaIdx === 5 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              ref={mediaScrollRef}
              onScroll={handleMediaScroll}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto pb-4 pt-1 px-[7vw] sm:px-0 snap-x snap-mandatory scrollbar-none scroll-smooth items-stretch"
            >
              {MEDIA_ITEMS.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="w-[86vw] max-w-[360px] md:max-w-none md:w-auto shrink-0 snap-center group ios-glass-card rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
                  onClick={() => setActiveVideo(item)}
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF2D55] to-[#007AFF] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-black/75 text-white backdrop-blur-md">
                      {item.duration || 'Watch'}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[11px] font-extrabold text-[#FF2D55] uppercase tracking-wider">
                        {item.type} • {item.source}
                      </span>
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 mt-1 mb-2 group-hover:text-[#007AFF] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#007AFF]">
                      <span>Watch Full Recording</span>
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Indicators */}
            <div className="flex md:hidden items-center justify-center gap-1.5 mt-2">
              {MEDIA_ITEMS.slice(0, 6).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToMedia(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeMediaIdx === idx ? 'w-6 bg-[#007AFF]' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to podcast ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING APPLE AURORA CTA BAND
         ========================================================================= */}
      <GradientCTASection onOpenCapabilities={() => setCapabilitiesModalOpen(true)} />

      {/* Video Modal Player */}
      <VideoModal item={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* Capabilities Statement Modal */}
      <CapabilitiesModal
        isOpen={capabilitiesModalOpen}
        onClose={() => setCapabilitiesModalOpen(false)}
      />
    </div>
  );
};

export default HomePage;
