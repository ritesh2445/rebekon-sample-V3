import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { LinkedinIcon, YoutubeIcon, FacebookIcon, InstagramIcon } from './SocialIcons';
import { SITE_CONFIG } from '../data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block bg-white rounded-xl px-3 py-1.5 shadow-sm hover:opacity-95 transition-opacity">
              <img
                src="/images/real/rebekon_official_logo.jpg"
                alt={SITE_CONFIG.companyName}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              <strong className="text-white font-medium">{SITE_CONFIG.tagline}</strong>
              <br />
              {SITE_CONFIG.positioningLine}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>Founded by <span className="text-white font-medium">{SITE_CONFIG.founder}</span> {SITE_CONFIG.pronouns}</p>
              <p className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#F45B9C]" />
                {SITE_CONFIG.location}
              </p>
            </div>

            {/* Certifications Micro-Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] bg-slate-800 text-slate-300 border border-slate-700">
                <ShieldCheck className="w-3 h-3 text-[#3E6BE0]" />
                NGLCC Certified (30210)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] bg-slate-800 text-slate-300 border border-slate-700">
                <Award className="w-3 h-3 text-[#F45B9C]" />
                CPUC VON: 24000841
              </span>
            </div>
          </div>

          {/* Nav Column 1: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-[#F45B9C] transition-colors">
                  Overview & Framework
                </Link>
              </li>
              <li>
                <Link to="/healthcare" className="hover:text-[#F45B9C] transition-colors">
                  Healthcare & Clinical Trials
                </Link>
              </li>
              <li>
                <Link to="/topics" className="hover:text-[#F45B9C] transition-colors">
                  Trainings & Workshops
                </Link>
              </li>
              <li>
                <Link to="/deib" className="hover:text-[#F45B9C] transition-colors">
                  Diversity & Inclusion
                </Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-[#F45B9C] transition-colors">
                  Policy & Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#3E6BE0] transition-colors">
                  About Celia Daniels
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-[#3E6BE0] transition-colors">
                  Media & Podcasts
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-[#3E6BE0] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#3E6BE0] transition-colors">
                  Resources & Speaking
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-[#3E6BE0] transition-colors">
                  Insights & Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Connect & Book */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F45B9C]" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#3E6BE0]" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/book-online"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F45B9C] hover:text-[#FB7185] transition-colors"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link
                  to="/download"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3E6BE0] hover:text-blue-300 transition-colors"
                >
                  <span>Capabilities Statement</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#3E6BE0] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#F45B9C] transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#3E6BE0] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#F45B9C] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} {SITE_CONFIG.companyName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Thousand Oaks, CA</span>
            <Link to="/policies" className="hover:text-white transition-colors">
              Privacy & Inclusion Policy
            </Link>
            <Link to="/download" className="hover:text-white transition-colors">
              Capabilities (PDF)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
