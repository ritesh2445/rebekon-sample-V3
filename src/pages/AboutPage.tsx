import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Calendar, CheckCircle2, ExternalLink, Heart, Sparkles, GraduationCap, ArrowRight, Mic, ShieldCheck, MapPin } from 'lucide-react';
import { SITE_CONFIG, ACHIEVEMENTS, CERTIFICATIONS } from '../data/siteData';
import { GradientCTASection } from '../components/GradientCTASection';
import { ClientMarquee } from '../components/ClientMarquee';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 select-none">
      {/* HERO SPLIT LAYOUT */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Portrait in Apple Vision Glass Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative ios-glass-card p-3 shadow-2xl border border-white/95 overflow-hidden">
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-900">
                    <img
                      src="/images/real/celia_official_speaker.jpg"
                      alt="Celia Sandhya Daniels — Founder & CEO of Rebekon Consulting LLC"
                      className="w-full h-full object-cover object-[75%_25%] hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Floating identity glass pill */}
                <div className="absolute -bottom-5 right-4 ios-glass rounded-2xl p-4 shadow-xl border border-white/90 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF2D55] to-[#007AFF] flex items-center justify-center text-white shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{SITE_CONFIG.founder}</div>
                    <div className="text-xs text-[#FF2D55] font-bold">{SITE_CONFIG.pronouns}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Name, Pronouns & Introduction */}
            <div className="lg:col-span-7 space-y-6 text-slate-700">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full ios-glass-pill text-xs font-bold text-slate-800 shadow-2xs">
                <Heart className="w-4 h-4 text-[#FF2D55]" />
                <span className="ios-pink-blue-text font-black uppercase tracking-wider">FOUNDER & PRINCIPAL CONSULTANT</span>
              </div>

              <div className="space-y-2">
                <h1 className="font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
                  {SITE_CONFIG.founder}{' '}
                  <span className="text-2xl sm:text-3xl text-slate-400 font-normal">
                    {SITE_CONFIG.pronouns}
                  </span>
                </h1>
                <p className="text-sm font-bold text-[#007AFF] tracking-wide">
                  Entrepreneur • Keynote Speaker • DEIB Champion • Composer & Musician • Hiker & Filmmaker
                </p>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Celia is an entrepreneur, motivational speaker, DEI champion, blogger, composer, musician, photographer, hiker, and filmmaker. She currently resides in Southern California with her family. She is an Asian Indian who identifies as gender non-binary, trans femme.
                </p>

                <div className="p-5 rounded-2xl ios-glass border border-white/90 text-slate-800 font-medium text-base shadow-xs">
                  <p>
                    She is recognized as one of the <strong>Top 20 LGBTQ leaders in Biopharma</strong> and the <strong>Top 10 LGBTQ+ Voices on LinkedIn</strong> in the US and Canada, and <strong>Top 100 LGBTQ+ Women in DEI</strong> worldwide — alongside Laverne Cox, Wanda Sykes, Lily Tomlin, and others.
                  </p>
                </div>

                <p>
                  Growing up as a lonely closeted trans child in a conservative middle-class Christian home in Southern India, Celia writes and speaks passionately about her mental health, gender incongruence, and social challenges that she faced in her family, work, school, and community both in the US and India.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/book-online"
                  className="ios-btn-primary px-7 py-3.5 text-sm flex items-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Free Consultation</span>
                </Link>
                <a
                  href={SITE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ios-btn-secondary px-6 py-3.5 text-sm flex items-center gap-2"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2024 CONGRESSIONAL HONORS SPOTLIGHT WITH REAL PHOTO */}
      <section className="py-12 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl ios-glass-card-dark text-white shadow-2xl relative overflow-hidden border border-white/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF2D55]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl bg-slate-950">
                  <img
                    src="/images/real/award_congressional.png"
                    alt="Celia Sandhya Daniels receiving 2024 Congressional Diversity Spotlight Award"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2D55] text-white text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>2024 Congressional Honors</span>
                </div>
                <h3 className="font-extrabold text-2xl sm:text-3xl text-white">
                  Diversity Spotlight Award
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Presented to Celia Sandhya Daniels by a Member of Congress from Diversity Collective for exemplary, tireless service uplifting the LGBTQ+ and transgender community across Southern California and beyond.
                </p>
                <div className="text-xs text-slate-300 pt-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF2D55]" />
                  <span>Recognized by US Congress & California Public Leaders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL BACKGROUND SECTION */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-l-4 border-[#007AFF] pl-6 space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#007AFF] uppercase">
              EXECUTIVE CREDIBILITY
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Professional Background
            </h2>
          </div>

          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              She is a management consultant with over <strong>25+ years of demonstrated success</strong> in operating, growing, and spearheading media, healthcare, and life sciences engagements for Fortune 100 companies like <strong>Amgen, Genentech, United Health, BlueCross, and Americhoice</strong>. As a senior regional executive with companies like <strong>IQVIA, Capgemini, Cognizant, and Dun & Bradstreet</strong>, she has managed global cross-functional teams, and implemented enterprise strategies, maximizing ROI for multi-billion dollar clients. She has been consistently recognized for customer satisfaction and employee empowerment. She has a Bachelor's and Master's degree in computer science.
            </p>

            <blockquote className="ios-glass p-6 rounded-3xl border border-white/90 text-xl sm:text-2xl text-slate-900 italic my-6 shadow-sm">
              "She advocates for the LGBTQ+ community with Providers, Payers, Pharmaceuticals, and Policymakers in the U.S. and South Asia. She strives to make LGBTQ+ communities, particularly the trans community, feel welcomed and accepted in all facets of society, from the bathroom to the boardroom."
            </blockquote>

            <p>
              She reaches across divides to navigate fraught and divisive topics to build consensus among various groups — from Legal, ERGs, DEI council, IT, HR, and Corporate Communications to Senior leadership. She courageously uses her personal story to build bridges, challenging her clients to go beyond mere performative gestures.
            </p>

            <p>
              Celia advises on global strategies and workshops to implement <strong>Leadership Trust, Inclusive hiring practices, Allyship programs, DEI Metric reporting, Pronouns, and Self-ID</strong>. She addresses the current challenges in health equity and clinical trials for transgender and gender-expansive patients within Black, Asian, Hispanic, Native American, Caucasian, and LGBTQ+ intersections.
            </p>
          </div>

          {/* COMMUNITY ADVOCATE SECTION */}
          <div className="pt-8 border-t border-slate-200/60">
            <div className="border-l-4 border-[#FF2D55] pl-6 space-y-2 mb-6">
              <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
                COMMUNITY ADVOCACY & GRASSROOTS IMPACT
              </span>
              <h3 className="font-extrabold text-3xl text-slate-900 tracking-tight">
                Community Advocate
              </h3>
            </div>

            <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Celia brings an intersectional blend of ethnicity, creativity, religion, and corporate experience in her <em>'trans-evangelism,'</em> as she likes to call it. She offers freelance consulting for small to large-size companies and volunteers for several non-profit organizations, churches, institutions, and community resource groups in the United States and India. She is passionate about supporting marginalized communities and individuals by providing them with a safe space to address various issues relating to bullying, gender discrimination, medical, behavioral, mental health, and suicidal ideation.
              </p>

              <p>
                She is currently focused on writing policies, educating, and building allies with local communities, businesses, churches, police departments, therapists, doctors, and organizations that fight for civil rights and economic empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL PHOTOGRAPHY GALLERY */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
              PHOTO GALLERY
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
              Celia Daniels in Action
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Keynotes, panel discussions, award banquets, and executive education.
            </p>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-none">
            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start group ios-glass-card rounded-3xl overflow-hidden shadow-md flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/real/yt_thumb_outburo.jpg"
                  alt="Celia Daniels OutBüro Voices Spotlight"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white/90">
                <div className="font-bold text-slate-900 text-sm">Executive Spotlight</div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">OutBüro LGBTQ+ Leadership</div>
              </div>
            </div>

            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start group ios-glass-card rounded-3xl overflow-hidden shadow-md flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/real/yt_thumb_bathroom_boardroom.jpg"
                  alt="Bathroom to Boardroom Keynote"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white/90">
                <div className="font-bold text-slate-900 text-sm">Keynote Address</div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">Bathroom to Boardroom</div>
              </div>
            </div>

            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start group ios-glass-card rounded-3xl overflow-hidden shadow-md flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/real/yt_thumb_workplace_pride.jpg"
                  alt="Workplace Pride Keynote at Amplify DEI"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white/90">
                <div className="font-bold text-slate-900 text-sm">Global Summit</div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">Amplify DEI Workplace Pride</div>
              </div>
            </div>

            <div className="w-[78vw] max-w-[320px] sm:max-w-none sm:w-auto shrink-0 snap-start group ios-glass-card rounded-3xl overflow-hidden shadow-md flex flex-col justify-between">
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/images/real/award_congressional.png"
                  alt="Featured on 12+ Leading Podcasts"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white/90">
                <div className="font-bold text-slate-900 text-sm">Media Roster</div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">12+ Top Industry Podcasts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS & ENTERPRISE COLLABORATIONS */}
      <section className="py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-xs font-bold tracking-widest text-[#007AFF] uppercase">
            COLLABORATIVE REACH
          </span>
          <h3 className="font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1 tracking-tight">
            Trusted by Global Enterprise Leaders & Diverse Organizations
          </h3>
        </div>
        <ClientMarquee />
      </section>

      {/* ACHIEVEMENTS & ENGAGEMENTS TIMELINE */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#FF2D55] uppercase">
              TRACK RECORD & HONORS
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
              Achievements & Engagements
            </h2>
            <p className="text-slate-600 text-base mt-2">
              A comprehensive chronicle of civic appointments, congressional recognition, and biopharma leadership.
            </p>
          </div>

          {/* Timeline List */}
          <div className="relative border-l-2 border-[#FF2D55]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
            {ACHIEVEMENTS.map((item, idx) => (
              <div
                key={idx}
                className="relative group transition-all duration-300"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-5 h-5 rounded-full bg-white border-4 border-[#FF2D55] group-hover:scale-125 group-hover:border-[#007AFF] transition-all" />

                <div className="p-6 rounded-3xl ios-glass-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {item.year && (
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-white">
                        {item.year}
                      </span>
                    )}
                    {item.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFEBF0] text-[#FF2D55]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-slate-600 text-xs sm:text-sm mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/book-online"
              className="ios-btn-primary px-8 py-4 text-base shadow-lg inline-flex items-center gap-2"
            >
              <span>Schedule a Free Consultation with Celia</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <GradientCTASection
        title="Ready to work with Celia Sandhya Daniels?"
        subtitle="Book a consultation or speaking engagement for your organization, conference, or executive council."
        primaryCtaText="Book Online"
        primaryCtaLink="/book-online"
      />
    </div>
  );
};

export default AboutPage;
