import React, { useState, useRef } from 'react';
import { Play, ExternalLink, Radio, Award, Newspaper, Mic, Sparkles, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { YoutubeIcon } from '../components/SocialIcons';
import { MEDIA_ITEMS, SITE_CONFIG } from '../data/siteData';
import { VideoModal } from '../components/VideoModal';
import { GradientCTASection } from '../components/GradientCTASection';

export const MediaPage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<typeof MEDIA_ITEMS[0] | null>(null);
  const [filterType, setFilterType] = useState<string>('all');
  const mediaScrollRef = useRef<HTMLDivElement>(null);

  const scrollMedia = (direction: 'left' | 'right') => {
    if (mediaScrollRef.current) {
      const scrollAmount = mediaScrollRef.current.clientWidth * 0.88;
      mediaScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const pressItems = [
    {
      title: "Endpoints News: Top 20 LGBTQ+ Leaders in the Biopharma Industry",
      publication: "Endpoints News",
      type: "Editorial Feature",
      link: "https://endpts.com",
      description: "Honoring Celia Sandhya Daniels among the executive pioneers accelerating representation and diversity across biotechnology and life sciences."
    },
    {
      title: "LinkedIn Top Voices: LGBTQ+ Leadership in the U.S. and Canada",
      publication: "LinkedIn",
      type: "Top Voice",
      link: "https://www.linkedin.com/in/celiasdaniels",
      description: "Recognized as one of the 10 most influential executive voices discussing intersectionality, gender equity, and workplace inclusion."
    },
    {
      title: "Diversity Collective: 2024 Diversity Spotlight Award",
      publication: "Congressional & Community Recognition",
      type: "Award Profile",
      link: "#",
      description: "Presented by a Member of Congress for dedicated service uplifting the LGBTQ+ community in Southern California."
    },
    {
      title: "All American Speakers Bureau Keynote Profile",
      publication: "AASpeakers",
      type: "Speaker Roster",
      link: "#",
      description: "Official keynote speaker portfolio for conferences, corporate summits, and university commencements."
    }
  ];

  const filteredMedia = filterType === 'all'
    ? MEDIA_ITEMS
    : MEDIA_ITEMS.filter((item) => item.type.toLowerCase() === filterType.toLowerCase());

  const featuredVideo = MEDIA_ITEMS[0];

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-b from-[#FCE4EF]/40 via-[#FAFAFC] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE4EF] text-[#F45B9C] text-xs font-bold tracking-wider uppercase mb-4">
              <Radio className="w-4 h-4" />
              <span>MEDIA & THOUGHT LEADERSHIP</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              Podcasts, Webcasts & Keynotes
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Explore authentic keynote recordings, podcast interviews, and press features on health equity, transgender advocacy, and enterprise DEI transformation with Celia Sandhya Daniels.
            </p>
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-gradient text-white font-semibold px-6 py-3.5 rounded-full text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2"
              >
                <YoutubeIcon className="w-4 h-4" />
                <span>Visit Official YouTube Channel (@RebekonConsultingLLC)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SPOTLIGHT VIDEO BANNER */}
      {featuredVideo && (
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#F45B9C]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-7">
                  <div
                    className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group bg-black border border-slate-700"
                    onClick={() => setActiveVideo(featuredVideo)}
                  >
                    <img
                      src={featuredVideo.thumbnailUrl}
                      alt={featuredVideo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full brand-gradient text-white flex items-center justify-center shadow-xl group-hover:scale-115 transition-transform">
                        <Play className="w-6 sm:w-7 h-6 sm:h-7 ml-1 fill-current" />
                      </div>
                    </div>
                    {featuredVideo.duration && (
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded text-xs font-mono font-bold bg-black/85 text-white">
                        {featuredVideo.duration}
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F45B9C] text-white uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Keynote</span>
                  </span>
                  <div className="text-xs text-slate-400 font-medium">
                    {featuredVideo.source}
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white leading-snug">
                    {featuredVideo.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {featuredVideo.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(featuredVideo)}
                    className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 brand-gradient text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Watch Full Keynote (41 min)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FILTER TABS & MEDIA GRID */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-10">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                  All Podcasts, Webcasts & Keynotes ({MEDIA_ITEMS.length})
                </h2>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Click any real video card below to watch the authentic recording.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Filter pills: Smooth horizontal tab bar on mobile */}
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
                <span className="md:hidden text-xs text-slate-400 font-medium shrink-0 pr-1">Filter:</span>
                {['all', 'keynote', 'podcast', 'webcast'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFilterType(type)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold capitalize whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                      filterType === type
                        ? 'brand-gradient text-white shadow-xs'
                        : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {type === 'all' ? 'All Media' : type}
                  </button>
                ))}
              </div>

              {/* Left / Right Swipe Arrows */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => scrollMedia('left')}
                  aria-label="Previous media"
                  className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 active:scale-95 shadow-xs transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollMedia('right')}
                  aria-label="Next media"
                  className="w-9 h-9 rounded-full bg-[#3E6BE0] hover:bg-[#2F59C7] text-white flex items-center justify-center active:scale-95 shadow-xs transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Video Grid: Centered horizontal snap carousel on mobile with swipe arrows, responsive grid on desktop */}
          <div
            ref={mediaScrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto pb-6 pt-1 px-4 sm:px-0 snap-x snap-mandatory scrollbar-none scroll-smooth items-stretch"
          >
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className="w-[86vw] max-w-[360px] md:max-w-none md:w-auto shrink-0 snap-center group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
                onClick={() => setActiveVideo(item)}
              >
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full brand-gradient text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 sm:w-6 h-5 sm:h-6 ml-0.5 fill-current" />
                    </div>
                  </div>
                  {item.duration && (
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-black/80 text-white">
                      {item.duration}
                    </span>
                  )}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/90 text-[#F45B9C] uppercase tracking-wider backdrop-blur-xs">
                    {item.type}
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                      {item.source}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mt-1 mb-2 group-hover:text-[#3E6BE0] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#3E6BE0]">
                    <span>Watch in Player</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS & RECOGNITION STRIP */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold tracking-[0.2em] text-[#3E6BE0] uppercase">
              EDITORIAL PROFILES & HONORS
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 mt-2">
              Press Coverage & Industry Profiles
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              National biopharma editorial profiles, LinkedIn Top Voices awards, and speaker bureau representation.
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto pb-6 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none">
            {pressItems.map((press, idx) => (
              <div
                key={idx}
                className="w-[84vw] sm:w-[380px] md:w-auto shrink-0 snap-start snap-always p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-[#3E6BE0] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#3E6BE0] border border-slate-200">
                      {press.publication}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {press.type}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                    {press.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {press.description}
                  </p>
                </div>
                {press.link !== '#' && (
                  <div className="mt-6 pt-4 border-t border-slate-200/60">
                    <a
                      href={press.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3E6BE0] hover:text-[#2850B8] transition-colors"
                    >
                      <span>Read Feature</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <GradientCTASection
        title="Invite Celia Sandhya Daniels to Speak"
        subtitle="Book keynotes, panel discussions, or executive workshops for your enterprise, healthcare system, or conference."
        primaryCtaText="Book a Speaking Engagement"
        primaryCtaLink="/book-online"
      />

      {/* Video Modal Player */}
      <VideoModal item={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
};
