import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Users, 
  HeartPulse, 
  Award, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Quote,
  ExternalLink
} from 'lucide-react';
import { VideoModal } from '../components/VideoModal';
import { CapabilitiesModal } from '../components/CapabilitiesModal';
import { SITE_CONFIG, MediaItem } from '../data/siteData';

export const HomePage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [capabilitiesModalOpen, setCapabilitiesModalOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const featuredVideo: MediaItem = {
    id: 'bathroom-to-boardroom',
    title: 'Bathroom to Boardroom: Transforming Healthcare & Corporate Inclusion',
    source: 'Rebekon Keynote Series',
    type: 'Keynote',
    embedUrl: 'https://www.youtube.com/embed/5a4G3p08f3Y',
    thumbnailUrl: '/images/real/yt_thumb_bathroom_boardroom.jpg',
    description: 'Celia Sandhya Daniels on dismantling systemic barriers and fostering intersectional equity.'
  };

  // Real partner & client brand logos
  const partnerLogos = [
    { name: 'Syneos Health', src: '/images/logos/syneos.svg', category: 'Biopharma' },
    { name: 'Genentech', src: '/images/logos/genentech.svg', category: 'Biotechnology' },
    { name: 'Stanford Medicine', src: '/images/logos/stanford.svg', category: 'Academic Health' },
    { name: 'UnitedHealth Group', src: '/images/logos/unitedhealth.svg', category: 'Healthcare' },
    { name: 'Amgen', src: '/images/logos/amgen.svg', category: 'Life Sciences' },
    { name: 'Amazon', src: '/images/logos/amazon.svg', category: 'Enterprise Tech' },
    { name: 'Capgemini', src: '/images/logos/capgemini.svg', category: 'Global Consulting' },
    { name: 'Cognizant', src: '/images/logos/cognizant.svg', category: 'Digital Solutions' },
    { name: 'IQVIA', src: '/images/logos/iqvia.svg', category: 'Clinical Research' },
    { name: 'Dun & Bradstreet', src: '/images/logos/dnb.svg', category: 'Data & Analytics' },
    { name: 'Blue Cross Blue Shield', src: '/images/logos/bcbs.svg', category: 'Healthcare' },
    { name: 'NGLCC Certified', src: '/images/real/cert_nglcc.png', category: 'Supplier Diversity' }
  ];

  // Testimonials with executive initials and real company associations
  const testimonials = [
    {
      id: 1,
      quote: "Celia's keynote at our global health equity summit was truly transformative. She bridges complex clinical trial disparities with vulnerable, unforgettable storytelling that mobilized our entire leadership team.",
      author: "Dr. Evelyn Vance",
      title: "VP of Clinical Strategy & Health Equity",
      organization: "Syneos Health Advisory Council",
      initials: "EV",
      color: "#007AFF"
    },
    {
      id: 2,
      quote: "Thanks to Celia's 'Bathroom to Boardroom' framework, our organization modernized transgender workplace guidelines and established active executive ERG sponsorship across 14 global offices.",
      author: "Marcus Davenport",
      title: "Chief Diversity Officer",
      organization: "Fortune 100 Enterprise Sponsor",
      initials: "MD",
      color: "#FF2D55"
    },
    {
      id: 3,
      quote: "I used to feel that corporate diversity conversations were stuck in performative theory. Celia brings 30 years of enterprise operational rigor that turns ideals into measurable policy and genuine belonging.",
      author: "Nadia Solis",
      title: "Senior Director of People & Culture",
      organization: "Biopharma Innovation Group",
      initials: "NS",
      color: "#AF52DE"
    }
  ];

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#080B11] text-slate-100 min-h-screen">
      {/* =========================================================================
          1. DARK HERO SECTION CONTAINER (MATCHING TEMPLATE HERO CARD)
         ========================================================================= */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="relative template-hero-card text-white p-6 sm:p-10 lg:p-16 overflow-hidden">
          {/* Ambient Radial Glowing Orbs */}
          <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-[#FF2D55]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-[#007AFF]/25 rounded-full blur-[140px] pointer-events-none" />

          {/* Grid Layout: Left Headline & CTA, Right Real Keynote Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column: Big Typography & Request a Call CTA */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                You're More Than <br className="hidden sm:inline" />
                an Organization. <br />
                You're a{' '}
                <span className="bg-gradient-to-r from-[#FF2D55] via-[#C084FC] to-[#007AFF] bg-clip-text text-transparent">
                  Movement.
                </span>
              </h1>

              {/* Sub-headline CTA Row (Matching Template) */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
                <Link
                  to="/book-online"
                  className="template-pill-primary self-start group shadow-[0_12px_30px_rgba(0,122,255,0.4)]"
                >
                  <span className="tracking-wide">Request a Call</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </Link>

                <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed font-normal">
                  Helping you turn inclusion into enterprise impact through authentic leadership and clinical trial equity.
                </p>
              </div>

              {/* Watch Video Link Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedVideo(featuredVideo)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer group"
                >
                  <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#FF2D55] flex items-center justify-center transition-colors">
                    <Play className="w-3.5 h-3.5 ml-0.5 fill-white text-white" />
                  </span>
                  <span>Watch Celia's Keynote Reel (Bathroom to Boardroom)</span>
                </button>
              </div>
            </div>

            {/* Right Column: Real Hero Portrait (Clean, Unobstructed, No Floating Tabs) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-gradient-to-b from-white/10 to-transparent">
                <img
                  src="/images/real/celia_hero.jpg"
                  alt="Celia Sandhya Daniels — Keynote Speaker & Health Equity Champion"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top transition-transform duration-500 hover:scale-103"
                />
              </div>
            </div>
          </div>

          {/* Hero Bottom Bar: 4 Pill Stat Chips in a Row (Matching Template) */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {/* Stat 1 */}
            <div className="template-stat-chip p-4 sm:p-5 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#007AFF]/20 text-[#007AFF] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">200+</div>
                <div className="text-xs text-slate-400 font-medium">Enterprise Engagements</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="template-stat-chip p-4 sm:p-5 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FF2D55]/20 text-[#FF2D55] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">6M+</div>
                <div className="text-xs text-slate-400 font-medium">Audience & Media Reach</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="template-stat-chip p-4 sm:p-5 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#AF52DE]/20 text-[#AF52DE] flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">3k+</div>
                <div className="text-xs text-slate-400 font-medium">Clinicians & Leaders Trained</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="template-stat-chip p-4 sm:p-5 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#007AFF]/20 text-[#007AFF] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">500+</div>
                <div className="text-xs text-slate-400 font-medium">DEIB & Clinical Audits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PARTNERS AND CLIENTS SECTION (DARK THEMED LOGO CHIPS)
         ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#080B11] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#FF2D55] via-[#A855F7] to-[#007AFF] bg-clip-text text-transparent">
              Partners and Clients
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 font-medium">
              Trusted by Fortune 100 leaders, biopharma titans, and national health equity coalitions
            </p>
          </div>

          {/* Logo Chips Grid (2 Rows on Dark Glass Backgrounds) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="bg-[#0E1424] rounded-2xl p-4 sm:p-5 border border-white/10 shadow-xs hover:border-[#007AFF]/40 hover:bg-[#131B30] transition-all duration-300 flex flex-col items-center justify-center gap-2 group hover:-translate-y-1"
              >
                <div className="h-8 flex items-center justify-center w-full">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-h-7 max-w-[110px] object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="text-xs font-bold text-slate-200 text-center line-clamp-1 group-hover:text-[#007AFF]">
                    {partner.name}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>

          {/* Capabilities Modal Trigger */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setCapabilitiesModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#007AFF] hover:text-[#3B82F6] transition-colors cursor-pointer"
            >
              <span>View Certified Codes & Government Capabilities (NAICS, NIGP, CPUC)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. "ABOUT ME" STORY SECTION (CLEAN DARK PRESENTATION, NO FLOATING TABS)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#0B0F19] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF2D55] uppercase tracking-wider">
                <span>— About me</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Meet Celia Sandhya Daniels Your{' '}
                <span className="bg-gradient-to-r from-[#FF2D55] to-[#007AFF] bg-clip-text text-transparent">
                  DEIB Champion
                </span>
              </h2>

              {/* Recognition Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#007AFF]" />
                <span>Top 20 LGBTQ+ Leader in Biopharma • Top 10 LinkedIn Voice</span>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                With over 30 years helping Fortune 100 leaders and biopharma innovators stand out in competitive markets, I specialize in crafting authentic, systemic equity that aligns with your mission, people, and healthcare outcomes.
              </p>

              <p className="text-base text-slate-300 leading-relaxed">
                Whether you're a corporate executive, healthcare provider, or research leader—I'll guide you to discover your organization's true potential and communicate it with unwavering confidence.
              </p>

              <div className="pt-2">
                <Link
                  to="/book-online"
                  className="template-pill-primary group shadow-[0_10px_25px_rgba(0,122,255,0.35)]"
                >
                  <span>Request a Call</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: Real Photograph Cleanly Presented (No Floating Tabs) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900">
                <img
                  src="/images/real/celia_speaking_award.jpg"
                  alt="Celia Sandhya Daniels on stage"
                  className="w-full h-[440px] sm:h-[500px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. "OUR SERVICES" SECTION (DARK CARDS + HIGHLIGHTED ACTIVE CARD)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#080B11] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row: Left Title, Right Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF2D55] uppercase tracking-wider mb-2">
                <span>— Our Services</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Executive & Advisory Services{' '}
                <span className="bg-gradient-to-r from-[#FF2D55] to-[#007AFF] bg-clip-text text-transparent">
                  Tailored for You
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-400 max-w-md">
              A range of 1:1 and enterprise advisory packages to help you <strong className="text-white">elevate your organizational equity</strong>.
            </p>
          </div>

          {/* 4 Cards Grid (First card is highlighted in rich gradient background) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD 1: ACTIVE / HIGHLIGHTED CARD */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-[#FF2D55]/90 via-[#7C3AED] to-[#007AFF]/90 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group hover:scale-102 transition-all duration-300 border border-white/20">
              <div className="space-y-4">
                {/* Top Badge & Arrow Circle */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/20 text-white backdrop-blur-xs">
                    KEYNOTE SPEAKING
                  </span>
                  <Link
                    to="/topics"
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 flex items-center justify-center transition-colors shadow-xs"
                    aria-label="Explore Keynotes"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white pt-2">
                  Keynote Speaking & Masterclasses
                </h3>

                <p className="text-xs text-white/90 leading-relaxed">
                  High-energy, transformative keynotes on healthcare equity, lived-experience storytelling, and inclusive leadership.
                </p>
              </div>

              {/* Bottom Real Image Thumbnail */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-white/20">
                <img
                  src="/images/real/conference_stage.jpg"
                  alt="Keynote Speaking"
                  className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* CARD 2: Clinical Trial Diversity */}
            <div className="rounded-3xl p-6 bg-[#0E1424] text-white border border-white/10 shadow-sm flex flex-col justify-between group hover:border-[#007AFF]/50 transition-all duration-300 hover:-translate-y-1.5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 text-[#007AFF]">
                    HEALTH EQUITY
                  </span>
                  <Link
                    to="/healthcare"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#007AFF] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Explore Health Equity"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white pt-2">
                  Clinical Trial Diversity Program
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Eliminating systematic barriers in biopharma trial recruitment and implementing patient-centric protocols.
                </p>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/real/healthcare_workshop.jpeg"
                  alt="Clinical Trials Diversity"
                  className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* CARD 3: Bathroom to Boardroom DEIB */}
            <div className="rounded-3xl p-6 bg-[#0E1424] text-white border border-white/10 shadow-sm flex flex-col justify-between group hover:border-[#FF2D55]/50 transition-all duration-300 hover:-translate-y-1.5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 text-[#FF2D55]">
                    DEIB ARCHITECTURE
                  </span>
                  <Link
                    to="/deib"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF2D55] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Explore DEIB Architecture"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white pt-2">
                  Bathroom to Boardroom DEIB Strategy
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Comprehensive workplace policy modernization, ERG executive buy-in, and measurable culture reform.
                </p>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/real/corporate_training.jpeg"
                  alt="Bathroom to Boardroom"
                  className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* CARD 4: Responsible AI & Data */}
            <div className="rounded-3xl p-6 bg-[#0E1424] text-white border border-white/10 shadow-sm flex flex-col justify-between group hover:border-[#AF52DE]/50 transition-all duration-300 hover:-translate-y-1.5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 text-[#AF52DE]">
                    AI & TECH ETHICS
                  </span>
                  <Link
                    to="/topics"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#AF52DE] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Explore AI Ethics"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white pt-2">
                  Responsible AI & Algorithmic Dignity
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Auditing generative models for demographic bias, ensuring fairness and ethical dignity across technologies.
                </p>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/real/panel_discussion.jpg"
                  alt="Responsible AI"
                  className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. VIDEO / MEDIA SPOTLIGHT SECTION
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#06080E] text-white relative overflow-hidden border-b border-white/10">
        {/* Glows */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#007AFF]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FF2D55]/20 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold text-[#FF2D55] uppercase tracking-wider mb-4 border border-white/10">
            <span>Watch Celia In Action</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-8">
            Experience the Energy of a Rebekon Keynote
          </h2>

          {/* Large Video Player Card */}
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black group">
            <img
              src="/images/real/yt_thumb_bathroom_boardroom.jpg"
              alt="Celia Daniels Keynote Video"
              className="w-full h-[320px] sm:h-[460px] object-cover opacity-80 group-hover:opacity-90 transition-opacity"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
              <button
                type="button"
                onClick={() => setSelectedVideo(featuredVideo)}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#FF2D55] to-[#007AFF] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer group-hover:shadow-[0_0_50px_rgba(0,122,255,0.6)]"
                aria-label="Play Featured Video"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white" />
              </button>

              <span className="mt-4 text-xs sm:text-sm font-bold text-white tracking-wider uppercase bg-black/60 px-4 py-1.5 rounded-full border border-white/20">
                Watch all my activities
              </span>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/media"
              className="template-pill-primary"
            >
              <span>Explore All Media & Interviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. "OUR BLOG" & INSIGHTS (3-CARD DARK GRID)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#080B11] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">
              Our Blog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Insights & Strategies for Building Your{' '}
              <span className="bg-gradient-to-r from-[#FF2D55] to-[#007AFF] bg-clip-text text-transparent">
                Equitable Leadership
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400">
              Actionable tips, expert advice, and real-life lessons to help you grow your influence, authority, and systemic impact.
            </p>
          </div>

          {/* 3 Dark Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="group bg-[#0E1424] rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5">
              <div>
                <div className="rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-white/10">
                  <img
                    src="/images/real/healthcare_workshop.jpeg"
                    alt="Clinical Trial Diversity"
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-xs font-semibold text-[#007AFF] mb-2">
                  June 20, 2025
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#007AFF] transition-colors leading-snug">
                  Bridging Clinical Trial Disparities for Diverse Patient Cohorts
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  How biopharma sponsors can implement trauma-informed protocols and diverse recruitment pipelines that build enduring community trust.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007AFF] hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group bg-[#0E1424] rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5">
              <div>
                <div className="rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-white/10">
                  <img
                    src="/images/real/corporate_training.jpeg"
                    alt="Corporate Equity"
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-xs font-semibold text-[#FF2D55] mb-2">
                  July 14, 2025
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#FF2D55] transition-colors leading-snug">
                  Bathroom to Boardroom: Dismantling Hidden Corporate Barriers
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Why corporate equity must move beyond performative statements into structural policy overhaul and executive sponsorship.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2D55] hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>

            {/* Article 3 */}
            <article className="group bg-[#0E1424] rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5">
              <div>
                <div className="rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-white/10">
                  <img
                    src="/images/real/conference_stage.jpg"
                    alt="Responsible AI"
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-xs font-semibold text-[#AF52DE] mb-2">
                  August 02, 2025
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#AF52DE] transition-colors leading-snug">
                  Why Content & Ethics are the Currency of Modern Inclusion
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Auditing algorithmic systems and establishing human dignity standards across healthcare AI and corporate talent models.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#AF52DE] hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          </div>

          {/* Button: See All Articles */}
          <div className="mt-12 text-center">
            <Link
              to="/blogs"
              className="template-pill-primary group shadow-md"
            >
              <span>See All Articles</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-3 h-3 text-white" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. TESTIMONIALS SECTION (DARK CARDS + EXECUTIVE BADGES)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#0B0F19] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              What{' '}
              <span className="bg-gradient-to-r from-[#FF2D55] to-[#007AFF] bg-clip-text text-transparent">
                My Clients
              </span>{' '}
              Are Saying
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400">
              Hear from leaders who transformed their healthcare protocols, corporate culture, and workforce confidence.
            </p>
          </div>

          {/* 3 Dark Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className={`bg-[#0E1424] rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                  idx === testimonialIndex
                    ? 'border-[#007AFF] shadow-[0_10px_35px_rgba(0,122,255,0.2)] scale-102'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Top Quote Icon */}
                  <div className="w-10 h-10 rounded-full bg-white/5 text-[#007AFF] flex items-center justify-center mb-6 border border-white/10">
                    <Quote className="w-5 h-5 text-[#007AFF]" />
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info with Clean Initials Pill */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">{t.author}</div>
                    <div className="text-[11px] text-slate-400">{t.title}</div>
                    <div className="text-[10px] font-semibold text-[#007AFF]">{t.organization}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Prev/Next Controls */}
          <div className="mt-10 flex justify-center items-center gap-3">
            <button
              type="button"
              onClick={handlePrevTestimonial}
              className="w-11 h-11 rounded-full bg-white/10 border border-white/15 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNextTestimonial}
              className="w-11 h-11 rounded-full bg-[#007AFF] text-white flex items-center justify-center shadow-md hover:bg-[#0066D6] transition-colors cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CALL TO ACTION SECTION BEFORE FOOTER
         ========================================================================= */}
      <section className="py-20 bg-[#080B11]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-14 rounded-[2.5rem] bg-gradient-to-r from-[#FF2D55]/15 via-[#AF52DE]/15 to-[#007AFF]/15 border border-white/15 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Turn Your Organization into a{' '}
              <span className="bg-gradient-to-r from-[#FF2D55] to-[#007AFF] bg-clip-text text-transparent">
                Movement?
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Schedule an executive consultation with Celia Sandhya Daniels to architect sustainable health equity and inclusive leadership.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/book-online"
                className="template-pill-primary shadow-lg"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all shadow-xs"
              >
                <span>Contact Our Office</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Capabilities Modals */}
      <VideoModal
        item={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <CapabilitiesModal
        isOpen={capabilitiesModalOpen}
        onClose={() => setCapabilitiesModalOpen(false)}
      />
    </div>
  );
};
