import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  HeartPulse, 
  Layers,
  Sparkles,
  Calendar,
  Briefcase,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { 
      title: 'Executive Services & Framework', 
      path: '/services', 
      desc: 'Educate, Engage, Empower 3-pillar consulting model',
      icon: Layers,
      color: '#FF2D55'
    },
    { 
      title: 'Healthcare Equity & Clinical Trials', 
      path: '/healthcare', 
      desc: 'Bridging protocol disparities and gender-affirming care',
      icon: HeartPulse,
      color: '#007AFF'
    },
    { 
      title: 'Keynotes & Masterclasses', 
      path: '/topics', 
      desc: 'High-energy keynotes on equity and intersectionality',
      icon: Sparkles,
      color: '#AF52DE'
    },
    { 
      title: 'Bathroom to Boardroom DEIB', 
      path: '/deib', 
      desc: 'Workplace policy audits and executive ERG governance',
      icon: Briefcase,
      color: '#FF2D55'
    },
    { 
      title: 'Responsible AI & Data Dignity', 
      path: '/topics#ai', 
      desc: 'Algorithmic bias audits and ethical guardrails',
      icon: Cpu,
      color: '#007AFF'
    },
    { 
      title: 'Corporate Policies & Guidelines', 
      path: '/policies', 
      desc: 'Standardized transgender transition guidelines',
      icon: ShieldCheck,
      color: '#AF52DE'
    }
  ];

  const isCurrent = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isServiceActive = 
    location.pathname.startsWith('/services') ||
    location.pathname.startsWith('/healthcare') ||
    location.pathname.startsWith('/topics') ||
    location.pathname.startsWith('/deib') ||
    location.pathname.startsWith('/policies');

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      {/* Floating Capsule matching Template */}
      <div
        className={`pointer-events-auto max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0F19]/90 backdrop-blur-2xl py-2.5 px-4 sm:px-6 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(0,122,255,0.15)] text-white'
            : 'bg-[#0B0F19]/75 backdrop-blur-xl py-3 px-4 sm:px-7 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] text-white'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo Only (no repeated text) */}
          <Link
            to="/"
            className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/40 rounded-full p-0.5 group"
            aria-label={SITE_CONFIG.companyName}
          >
            <div className="relative">
              <img
                src="/images/real/rebekon_official_logo.jpg"
                alt={SITE_CONFIG.companyName}
                className="h-8 sm:h-9 w-auto object-contain rounded-lg ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-r from-[#FF2D55] to-[#007AFF] rounded-full ring-2 ring-[#0B0F19]" />
            </div>
          </Link>

          {/* Desktop Navigation Links (Home, About, Services, Success Stories, Blog) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
            <Link
              to="/"
              className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                isCurrent('/') && location.pathname === '/'
                  ? 'bg-white/15 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                isCurrent('/about')
                  ? 'bg-white/15 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isServiceActive
                    ? 'bg-white/15 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#007AFF]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-88 bg-[#0E1320] border border-white/15 p-3 rounded-2xl z-50 animate-in fade-in zoom-in-95 duration-200 shadow-[0_24px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,122,255,0.15)] backdrop-blur-2xl">
                  <div className="space-y-1">
                    {serviceLinks.map((item) => {
                      const Icon = item.icon;
                      const active = isCurrent(item.path);

                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                            active
                              ? 'bg-white/10 text-white'
                              : 'hover:bg-white/5 text-slate-300 hover:text-white'
                          }`}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-xs mt-0.5"
                            style={{ 
                              backgroundColor: `${item.color}20`,
                              color: item.color 
                            }}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-xs xl:text-sm text-white">{item.title}</div>
                            <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/case-studies"
              className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                isCurrent('/case-studies')
                  ? 'bg-white/15 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Success Stories
            </Link>

            <Link
              to="/media"
              className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                isCurrent('/media')
                  ? 'bg-white/15 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Media
            </Link>

            <Link
              to="/blogs"
              className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                isCurrent('/blogs')
                  ? 'bg-white/15 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Right Action: Pill Button "Book a Consultation" */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/book-online"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 transition-all duration-300 shadow-sm hover:scale-102"
            >
              <Calendar className="w-3.5 h-3.5 text-[#FF2D55]" />
              <span>Book a Consultation</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/book-online"
              className="px-3 py-1.5 rounded-full text-[11px] font-bold text-white bg-gradient-to-r from-[#FF2D55] to-[#007AFF] shadow-sm"
            >
              Book
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto fixed inset-0 z-40 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 flex flex-col justify-between p-6 pt-24 text-white">
          <div className="space-y-3 overflow-y-auto max-h-[75vh]">
            <Link
              to="/"
              className="block p-3 rounded-2xl bg-white/5 hover:bg-white/10 font-bold text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block p-3 rounded-2xl bg-white/5 hover:bg-white/10 font-bold text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Celia Daniels
            </Link>
            <Link
              to="/services"
              className="block p-3 rounded-2xl bg-white/5 hover:bg-white/10 font-bold text-base text-[#007AFF]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services Overview
            </Link>
            <Link
              to="/healthcare"
              className="block p-3 rounded-2xl bg-white/5 hover:bg-white/10 font-bold text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Health Equity & Trials
            </Link>
            <Link
              to="/case-studies"
              className="block p-3 rounded-2xl bg-white/5 hover:bg-white/10 font-bold text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Success Stories & Case Studies
            </Link>
            <Link
              to="/media"
              className="block p-3 rounded-2xl bg-white/5 hover:bg-white/10 font-bold text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Media & Keynotes
            </Link>
            <Link
              to="/blogs"
              className="block p-3 rounded-2xl bg-white/5 hover:bg-white/10 font-bold text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights & Blog
            </Link>
            <Link
              to="/contact"
              className="block p-3 rounded-2xl bg-white/5 hover:bg-white/10 font-bold text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10">
            <Link
              to="/book-online"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-white bg-gradient-to-r from-[#FF2D55] to-[#007AFF] shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
