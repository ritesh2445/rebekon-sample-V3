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
  Radio,
  Flame,
  Activity,
  Cpu,
  HeartPulse,
  Briefcase
} from 'lucide-react';
import { SITE_CONFIG, SERVICE_PILLARS, CERTIFICATIONS, ESTABLISHED_STATS, MEDIA_ITEMS } from '../data/siteData';
import { ServiceCard } from '../components/ServiceCard';
import { StatCounter } from '../components/StatCounter';
import { ClientMarquee } from '../components/ClientMarquee';
import { CertificationsMarquee } from '../components/CertificationsMarquee';
import { GradientCTASection } from '../components/GradientCTASection';
import { VideoModal } from '../components/VideoModal';
import { HeroVideoPlayer } from '../components/HeroVideoPlayer';
import { CapabilitiesModal } from '../components/CapabilitiesModal';

// Focus modes for interactive hero practice switcher
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
    pillColor: 'from-[#F45B9C] to-[#7C6BE8]'
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
    pillColor: 'from-[#3E6BE0] to-[#7C6BE8]'
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
    pillColor: 'from-[#7C6BE8] to-[#F45B9C]'
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
    pillColor: 'from-[#F45B9C] to-[#3E6BE0]'
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
    <div className="relative pt-16 sm:pt-24 lg:pt-28 overflow-hidden">
      {/* Subtle, Clean Ambient Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      {/* =========================================================================
          HERO SECTION: CLEAN, EXECUTIVE & PROFESSIONAL (FULL-SCREEN EXPANDED)
         ========================================================================= */}
      <section className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-2 sm:pt-4 pb-12 sm:pb-16">
        
        {/* Interactive Practice Matrix Pills: Clean Top Navigator */}
        <div className="mb-5 sm:mb-7 flex items-center justify-start lg:justify-start w-full overflow-x-auto scrollbar-none pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-100/90 border border-slate-200/90 shadow-2xs shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium tracking-wider text-slate-500 uppercase shrink-0">
              <Sparkles className="w-3 h-3 text-[#3E6BE0]" />
              Focus Area:
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
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F45B9C]' : 'text-slate-400'}`} />
                  <span>{mode.pill}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Value Proposition & Dynamic Content (Smooth Entrance) */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-5 text-left animate-fade-in-up">
            {/* Multi-badge Kicker Strip */}
            <div className="inline-flex flex-wrap items-center justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#3E6BE0]" />
                <span className="text-xs font-medium tracking-wide text-slate-800 uppercase">
                  {currentMode.badge}
                </span>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-white shadow-2xs">
                {currentMode.impactStat}
              </span>
            </div>

            {/* Dynamic H1 Headline - Clean, Executive Sans-Serif Typography */}
            <h1 className="font-sans font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] text-slate-900 tracking-[-0.03em] leading-[1.18] transition-all duration-200">
              {currentMode.titleLead}
              <span className="text-[#3E6BE0]">
                {currentMode.titleAccent}
              </span>{' '}
              {currentMode.titleEnd}
            </h1>

            {/* Authentic Subhead */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal transition-all duration-200">
              {currentMode.description}{' '}
              Led by <span className="font-semibold text-slate-900">{SITE_CONFIG.founder}</span> <span className="text-slate-500 font-normal">{SITE_CONFIG.pronouns}</span>, Founder & CEO.
            </p>

            {/* Clean Keynote Preview Strip */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-sm text-left">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center gap-1 shrink-0 px-1.5">
                    <div className="w-1 bg-[#F45B9C] rounded-full animate-eq-1" />
                    <div className="w-1 bg-[#7C6BE8] rounded-full animate-eq-2" />
                    <div className="w-1 bg-[#3E6BE0] rounded-full animate-eq-3" />
                    <div className="w-1 bg-[#F45B9C] rounded-full animate-eq-4" />
                  </div>
                  <div className="text-left overflow-hidden min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-[#F45B9C] tracking-wider uppercase">
                        KEYNOTE SPOTLIGHT · {currentMode.trackDuration}
                      </span>
                    </div>
                    <div className="font-medium text-xs sm:text-sm text-slate-200 truncate">
                      {currentMode.audioTrackName}
                    </div>
                  </div>
                </div>

                {/* Instant Play Button */}
                <button
                  type="button"
                  onClick={() => setActiveVideo(currentMode.video)}
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-xl bg-[#3E6BE0] hover:bg-[#2F59C7] text-white text-xs font-semibold shadow-xs hover:scale-102 active:scale-98 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Keynote</span>
                </button>
              </div>
            </div>

            {/* Primary Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2.5 sm:gap-3 pt-1">
              <Link
                to={currentMode.primaryCta.link}
                className="bg-[#3E6BE0] hover:bg-[#2F59C7] text-white font-medium px-7 py-3.5 rounded-full text-base shadow-sm hover:shadow-md hover:scale-102 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>{currentMode.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/book-online"
                className="bg-white hover:bg-slate-50 text-slate-800 font-medium px-6 py-3.5 rounded-full text-sm sm:text-base border border-slate-300 shadow-2xs hover:border-[#3E6BE0] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#3E6BE0]" />
                <span>Book Online</span>
              </Link>

              <button
                type="button"
                onClick={() => setCapabilitiesModalOpen(true)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-5 py-3.5 rounded-full text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-slate-500" />
                <span>Capabilities Statement</span>
              </button>
            </div>

            {/* Official Diverse Supplier Trust Strip */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#3E6BE0] border border-blue-200/60 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Diverse Supplier
              </span>
              <span className="text-xs text-slate-600 font-medium">
                NGLCC (30210) • CPUC VON: 24000841 • SBE • D-U-N-S Registered
              </span>
            </div>
          </div>

          {/* Right Column: 16:9 Executive Keynote Theater Card (Smooth Scale-In) */}
          <div className="lg:col-span-5 xl:col-span-6 animate-scale-in">
            <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
              
              {/* Autoplaying 16:9 Hero Keynote Video with Native Ratio & Sound Toggle Button */}
              <HeroVideoPlayer
                video={currentMode.video}
                onOpenModal={() => setActiveVideo(currentMode.video)}
                badgeText={currentMode.badge}
              />

              {/* Under-Video Speaker Bar & Credential Stats */}
              <div className="pt-3.5 px-1">
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-slate-900 flex items-center gap-1.5 truncate">
                      <span>{SITE_CONFIG.founder}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#3E6BE0] shrink-0" />
                    </div>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {currentMode.audioTrackName}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(currentMode.video)}
                    className="shrink-0 text-xs font-semibold text-[#3E6BE0] hover:text-[#2550C0] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Full Keynote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-2 pt-3 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="font-semibold text-slate-900 text-xs">12+ Podcasts</div>
                    <div className="text-[10px] text-slate-500 font-normal">Featured Voice</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="font-semibold text-slate-900 text-xs">Top 20 Leader</div>
                    <div className="text-[10px] text-slate-500 font-normal">Endpoints News</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="font-semibold text-slate-900 text-xs">30+ Years</div>
                    <div className="text-[10px] text-slate-500 font-normal">Fortune 100 Pedigree</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
            PROMINENT ROLLING CERTIFICATIONS & ACCREDITATIONS MARQUEE
           ========================================================================= */}
        <div className="w-full max-w-[1600px] mx-auto mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-slate-200/90 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2 px-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-[#3E6BE0] shrink-0 shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                    OFFICIAL GOVERNMENT & DIVERSE SUPPLIER ACCREDITATIONS
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified & Active
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Certified by NGLCC National LGBT Chamber, California Public Utilities Commission (CPUC), CA/LA SBE, and Dun & Bradstreet Registered
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCapabilitiesModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3E6BE0] hover:text-[#2550C0] transition-colors cursor-pointer self-start sm:self-auto group"
            >
              <span>View Full Capabilities & Codes</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <CertificationsMarquee onCardClick={() => setCapabilitiesModalOpen(true)} />
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE KEYNOTE VIDEO STRIP: IMMEDIATE VISUAL & AUDIO PROOF
         ========================================================================= */}
      <section className="py-8 sm:py-12 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F45B9C]/10 via-transparent to-[#3E6BE0]/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F45B9C] text-xs font-bold tracking-wider uppercase mb-2">
                <Mic className="w-3.5 h-3.5" />
                <span>WATCH CELIA IN ACTION</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Featured Keynotes, Interviews & Thought Leadership
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Real video recordings covering enterprise inclusion, trans rights, and healthcare equity.
              </p>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-3">
              <Link
                to="/media"
                className="text-xs sm:text-sm font-semibold text-[#F45B9C] hover:text-[#ff7bb5] flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>Explore All 10 Video Appearances</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Keynotes Carousel Wrapper with Floating Navigation Arrows */}
          <div className="relative group">
            {/* Floating Left Arrow */}
            <button
              type="button"
              onClick={() => scrollToKeynote(activeKeynoteIdx - 1)}
              disabled={activeKeynoteIdx === 0}
              aria-label="Previous keynote"
              className={`absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/95 text-white border border-slate-700 shadow-2xl flex items-center justify-center transition-all cursor-pointer ${
                activeKeynoteIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Floating Right Arrow */}
            <button
              type="button"
              onClick={() => scrollToKeynote(activeKeynoteIdx + 1)}
              disabled={activeKeynoteIdx === 2}
              aria-label="Next keynote"
              className={`absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#F45B9C] text-white shadow-2xl flex items-center justify-center transition-all cursor-pointer ${
                activeKeynoteIdx === 2 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110 active:scale-95'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* 3 Real Featured Video Cards: Centered on mobile with px-[7vw], Desktop 3-Col Grid */}
            <div
              ref={keynoteScrollRef}
              onScroll={handleKeynoteScroll}
              className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 px-[7vw] sm:px-0 snap-x snap-mandatory scrollbar-none scroll-smooth items-stretch"
            >
              {MEDIA_ITEMS.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveVideo(item)}
                  className="w-[86vw] max-w-[360px] md:max-w-none md:w-auto shrink-0 snap-center group relative bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-[#F45B9C] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
                >
                  {/* Real YouTube Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full brand-gradient text-white flex items-center justify-center shadow-xl group-hover:scale-115 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                    {item.duration && (
                      <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-black/85 text-white">
                        {item.duration}
                      </span>
                    )}
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-[#F45B9C] uppercase tracking-wider backdrop-blur-xs">
                      {item.type}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                        {item.source}
                      </span>
                      <h3 className="font-display font-bold text-white text-base group-hover:text-[#F45B9C] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold text-[#3E6BE0]">
                      <span className="group-hover:translate-x-0.5 transition-transform">Play Video in Player</span>
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Dot Indicators */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-2">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToKeynote(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeKeynoteIdx === idx ? 'w-6 bg-[#F45B9C]' : 'w-2 bg-slate-700'
                  }`}
                  aria-label={`Go to video ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ESTABLISHED STATS STRIP: Equal Box Sizes Across All 5 Stats
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-stretch">
          {ESTABLISHED_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={
                idx === 4
                  ? "col-span-2 flex justify-center md:col-span-1 h-full"
                  : "h-full"
              }
            >
              <div className={idx === 4 ? "w-full max-w-[calc(50%-0.375rem)] md:max-w-none h-full" : "h-full w-full"}>
                <StatCounter
                  value={stat.value}
                  label={stat.label}
                  subtext={stat.subtext}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          REAL PHOTO GALLERY: LEADERSHIP & ADVOCACY IN ACTION
         ========================================================================= */}
      <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-[#F45B9C] uppercase">
              LEADERSHIP IN ACTION
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
              On Stage, in the Boardroom, and in the Community
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Witness Celia Sandhya Daniels keynoting national healthcare conferences, addressing industry delegations, and receiving bipartisan congressional honors.
            </p>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none">
            {/* Photo 1: OutBuro Spotlight */}
            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start snap-always group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900 border border-slate-200/80">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/real/yt_thumb_outburo.jpg"
                  alt="Celia Daniels OutBüro Voices Spotlight"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <span className="text-[10px] font-bold text-[#F45B9C] uppercase tracking-wider block">
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
            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start snap-always group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900 border border-slate-200/80">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/real/yt_thumb_bathroom_boardroom.jpg"
                  alt="Bathroom to Boardroom Keynote"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <span className="text-[10px] font-bold text-[#3E6BE0] uppercase tracking-wider block">
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
            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start snap-always group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900 border border-slate-200/80">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/real/yt_thumb_workplace_pride.jpg"
                  alt="Amplify DEI Workplace Pride Keynote"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <span className="text-[10px] font-bold text-[#7C6BE8] uppercase tracking-wider block">
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
            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start snap-always group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900 border border-slate-200/80">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/real/award_congressional.png"
                  alt="12+ Featured Podcast Appearances"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <span className="text-[10px] font-bold text-[#F45B9C] uppercase tracking-wider block">
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
          THREE SERVICE PILLARS
         ========================================================================= */}
      <section className="py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#F45B9C] uppercase">
              CORE PRACTICE AREAS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
              Humanizing Healthcare, Workplace & Business
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4">
              Strategic advisory grounded in lived experience and over 30 years of corporate Fortune 100 enterprise execution.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_PILLARS.map((pillar, idx) => (
              <ServiceCard key={pillar.id} pillar={pillar} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E6BE0] hover:text-[#2850B8] transition-colors"
            >
              <span>Explore the complete Educate · Engage · Empower framework</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENTS / PARTNERS AUTO-SCROLLING MARQUEE
         ========================================================================= */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
            TRUSTED PARTNERSHIPS & CLIENT EXPERIENCE
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-2">
            Working With the Best Clients and Partners
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Proven collaboration across Fortune 100 biopharma, health systems, and diversity advocacy organizations.
          </p>
        </div>

        <ClientMarquee />
      </section>

      {/* =========================================================================
          FOUNDER HIGHLIGHT / VISION STATEMENT WITH REAL PORTRAIT
         ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center text-white mx-auto mb-6 shadow-md">
            <Sparkles className="w-7 h-7" />
          </div>

          <span className="text-xs font-bold tracking-widest text-[#F45B9C] uppercase">
            OUR CORE VISION & MISSION
          </span>

          <blockquote className="font-display font-normal text-2xl sm:text-3xl lg:text-4xl text-slate-800 leading-snug my-8 italic">
            "Transforming organizations to foster genuine inclusivity at all levels from the Bathroom to the Boardroom, unlocking the potential of employees to drive innovation, enhance productivity, and cultivate a profound sense of authenticity and belonging in the workplace."
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <img
              src="/images/real/celia_official_speaker.jpg"
              alt="Celia Sandhya Daniels"
              className="w-14 h-14 rounded-full object-cover object-[75%_25%] border-2 border-[#F45B9C] shadow-md"
            />
            <div className="text-left">
              <div className="font-bold text-slate-900 text-base">{SITE_CONFIG.founder}</div>
              <div className="text-xs text-slate-500">Founder & CEO, Rebekon Consulting LLC • {SITE_CONFIG.pronouns}</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E6BE0] hover:text-[#2850B8] transition-colors"
            >
              <span>Read Celia's Full Biography & 16+ Civic Honors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED MEDIA SECTION WITH REAL THUMBNAILS & PLAY MODALS
         ========================================================================= */}
      <section className="pt-8 sm:pt-12 pb-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#F45B9C] uppercase">
                PODCASTS · WEBCASTS · KEYNOTES
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 mt-1">
                Featured Voices & Thought Leadership
              </h2>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-3">
              <Link
                to="/media"
                className="text-sm font-semibold text-[#3E6BE0] hover:text-[#2850B8] flex items-center gap-1.5 shrink-0"
              >
                <span>View All 10 Interviews</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Podcasts and Videos: Centered horizontal snap carousel on mobile with swipe arrows, responsive grid on desktop */}
          <div className="relative group">
            {/* Floating Left Arrow */}
            <button
              type="button"
              onClick={() => scrollToMedia(activeMediaIdx - 1)}
              disabled={activeMediaIdx === 0}
              aria-label="Previous podcast"
              className={`absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 text-slate-800 border border-slate-200 shadow-2xl flex items-center justify-center transition-all cursor-pointer ${
                activeMediaIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Floating Right Arrow */}
            <button
              type="button"
              onClick={() => scrollToMedia(activeMediaIdx + 1)}
              disabled={activeMediaIdx === 5}
              aria-label="Next podcast"
              className={`absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#3E6BE0] text-white shadow-2xl flex items-center justify-center transition-all cursor-pointer ${
                activeMediaIdx === 5 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-110 active:scale-95'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              ref={mediaScrollRef}
              onScroll={handleMediaScroll}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 overflow-x-auto pb-4 pt-1 px-[7vw] sm:px-0 snap-x snap-mandatory scrollbar-none scroll-smooth items-stretch"
            >
              {MEDIA_ITEMS.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="w-[86vw] max-w-[360px] md:max-w-none md:w-auto shrink-0 snap-center group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
                  onClick={() => setActiveVideo(item)}
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full brand-gradient text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-black/75 text-white">
                      {item.duration || 'Watch'}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#F45B9C] uppercase tracking-wider">
                        {item.type} • {item.source}
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mt-1 mb-2 group-hover:text-[#3E6BE0] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#3E6BE0]">
                      <span>Watch Full Recording</span>
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Dot Indicators */}
            <div className="flex md:hidden items-center justify-center gap-1.5 mt-2">
              {MEDIA_ITEMS.slice(0, 6).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToMedia(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeMediaIdx === idx ? 'w-6 bg-[#3E6BE0]' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to podcast ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING GRADIENT CTA BAND
         ========================================================================= */}
      <GradientCTASection onOpenCapabilities={() => setCapabilitiesModalOpen(true)} />

      {/* Interactive Video Modal Player */}
      <VideoModal item={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* Capabilities Statement Modal */}
      <CapabilitiesModal
        isOpen={capabilitiesModalOpen}
        onClose={() => setCapabilitiesModalOpen(false)}
      />
    </div>
  );
};
