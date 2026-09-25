import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, ShieldCheck, Award } from 'lucide-react';
import { LinkedinIcon, YoutubeIcon, FacebookIcon, InstagramIcon } from './SocialIcons';
import { SITE_CONFIG } from '../data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070A11] text-slate-300 pt-20 pb-12 overflow-hidden border-t border-white/10">
      {/* Subtle Aurora Ambient Reflection */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[250px] bg-[#FF2D55]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[450px] h-[250px] bg-[#007AFF]/10 blur-[130px] pointer-events-none" />

      {/* GIANT WATERMARK TEXT (MATCHING TEMPLATE REFERENCE) */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center items-center pointer-events-none select-none overflow-hidden z-0">
        <span className="text-[14vw] font-black tracking-tight text-white/[0.04] leading-none whitespace-nowrap uppercase">
          REBEKON
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Row with Logo & Email Pill */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-9 sm:h-10 max-w-[150px] sm:max-w-[170px] flex items-center">
              <img
                src="/images/real/rebekon_official_logo.jpg"
                alt={SITE_CONFIG.companyName}
                className="h-full w-auto object-contain rounded-md ring-1 ring-white/15 transition-transform duration-300 transform-gpu group-hover:scale-105"
                loading="lazy" decoding="async" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-tight block">
                Rebekon<span className="text-[#007AFF]">.</span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                Health Equity & DEIB Advisory
              </span>
            </div>
          </Link>

          {/* Nav Links in Center/Right */}
          <nav className="flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/healthcare" className="hover:text-white transition-colors">Health Equity</Link>
            <Link to="/case-studies" className="hover:text-white transition-colors">Success Stories</Link>
            <Link to="/blogs" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* Email Pill Button (Matching Template) */}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 shadow-sm"
          >
            <Mail className="w-4 h-4 text-[#FF2D55]" />
            <span>{SITE_CONFIG.email}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Certifications and Enterprise Badges */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
              Certifications:
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#007AFF]" />
              NGLCC Certified LGBTBE (#30210)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              <Award className="w-3.5 h-3.5 text-[#FF2D55]" />
              CPUC VON: 24000841
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              SBE / EBE Certified
            </span>
          </div>

          <div className="text-slate-400">
            Founded by <span className="text-white font-semibold">{SITE_CONFIG.founder}</span> ({SITE_CONFIG.pronouns}) • {SITE_CONFIG.location}
          </div>
        </div>

        {/* Bottom Bar (Socials, Copyright, Legal) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-slate-400">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rebekon on LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rebekon on YouTube"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rebekon on Instagram"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rebekon on Facebook"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Legal / Copyright */}
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/policies" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/policies" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>
              All rights reserved © {currentYear} {SITE_CONFIG.companyName}.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};


