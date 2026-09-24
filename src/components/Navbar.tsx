import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  HeartPulse, 
  Users, 
  ShieldCheck, 
  Calendar,
  Layers,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hiddenOnDesktop, setHiddenOnDesktop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Auto-hide on desktop only when scrolling down
      if (window.innerWidth >= 1024) {
        if (currentScrollY > 90 && currentScrollY > lastScrollY.current + 8) {
          setHiddenOnDesktop(true);
          setServicesDropdownOpen(false);
        } else if (currentScrollY < lastScrollY.current - 6 || currentScrollY <= 90) {
          setHiddenOnDesktop(false);
        }
      } else {
        setHiddenOnDesktop(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [mobileMenuOpen]);

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
      title: 'All Services & Framework', 
      path: '/services', 
      desc: 'Educate, Engage, Empower 3-pillar framework',
      icon: Layers,
      color: '#FF2D55'
    },
    { 
      title: 'Healthcare Equity & Clinical Trials', 
      path: '/healthcare', 
      desc: 'Humanizing healthcare & affirming care systems',
      icon: HeartPulse,
      color: '#007AFF'
    },
    { 
      title: 'Trainings & Workshops', 
      path: '/topics', 
      desc: 'ERG, allyship & corporate keynote workshops',
      icon: BookOpen,
      color: '#AF52DE'
    },
    { 
      title: 'Diversity & Inclusion Consulting', 
      path: '/deib', 
      desc: 'Bathroom to the Boardroom cultural transformation',
      icon: Users,
      color: '#FF2D55'
    },
    { 
      title: 'Policy & Guidelines', 
      path: '/policies', 
      desc: 'Trans, gender-diverse & intersex enterprise policies',
      icon: ShieldCheck,
      color: '#007AFF'
    },
  ];

  const navLinks = [
    { title: 'Media', path: '/media' },
    { title: 'Case Studies', path: '/case-studies' },
    { title: 'Resources', path: '/resources' },
    { title: 'About Us', path: '/about' },
    { title: 'Blogs', path: '/blogs' },
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
    <header
      className={`fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none transition-transform duration-300 ease-in-out ${
        hiddenOnDesktop ? 'lg:-translate-y-28 lg:opacity-0 pointer-events-none' : 'lg:translate-y-0 lg:opacity-100'
      }`}
    >
      {/* Floating Apple iOS Glass Capsule */}
      <div
        className={`pointer-events-auto max-w-6xl 2xl:max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'ios-glass py-2 sm:py-2.5 px-4 sm:px-6 shadow-[0_16px_40px_-10px_rgba(0,122,255,0.12),0_8px_20px_-6px_rgba(255,45,85,0.1)]'
            : 'bg-white/80 backdrop-blur-2xl py-2.5 sm:py-3 px-4 sm:px-6 border border-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)]'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo with specular micro-scale effect */}
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/40 rounded-full p-0.5 group"
          >
            <div className="relative">
              <img
                src="/images/real/rebekon_official_logo.jpg"
                alt={SITE_CONFIG.companyName}
                className="h-8 sm:h-9 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-gradient-to-r from-[#FF2D55] to-[#007AFF] rounded-full ring-2 ring-white" />
            </div>
          </Link>

          {/* Desktop Navigation Segmented Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 p-1 rounded-full border border-slate-200/50 backdrop-blur-md">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isServiceActive
                    ? 'text-slate-900 bg-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
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

              {/* iOS Control Center Styled Dropdown Sheet */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-88 ios-glass-card p-3 z-50 animate-in fade-in zoom-in-95 duration-200 border border-white/90 shadow-[0_24px_60px_-10px_rgba(0,122,255,0.18)]">
                  <div className="space-y-1">
                    {serviceLinks.map((item) => {
                      const Icon = item.icon;
                      const active = isCurrent(item.path);

                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-start gap-3 p-2.5 rounded-2xl transition-all ${
                            active
                              ? 'bg-gradient-to-r from-[#FFEBF0] to-[#E8F2FF] text-slate-900 shadow-2xs'
                              : 'hover:bg-white/80 text-slate-800'
                          }`}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <div 
                            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-2xs mt-0.5"
                            style={{ 
                              backgroundColor: `${item.color}15`,
                              color: item.color 
                            }}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-xs xl:text-sm text-slate-900">{item.title}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Dropdown Footer */}
                  <div className="mt-2 pt-2 border-t border-slate-200/60 px-3 py-2 flex items-center justify-between text-xs text-slate-500 bg-white/50 rounded-2xl">
                    <span className="font-medium text-[11px] text-slate-500">Bathroom to the Boardroom</span>
                    <Link
                      to="/services"
                      className="text-[#007AFF] font-bold hover:underline flex items-center gap-1 text-[11px]"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      Overview <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {navLinks.map((link) => {
              const active = isCurrent(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 ${
                    active
                      ? 'text-slate-900 bg-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Capsule */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <Link
              to="/contact"
              className="text-xs xl:text-sm font-semibold text-slate-600 hover:text-slate-900 px-3.5 py-1.5 rounded-full hover:bg-white/70 transition-colors"
            >
              Contact
            </Link>

            <Link
              to="/book-online"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs xl:text-sm font-bold ios-btn-primary shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Online</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/book-online"
              className="px-3 py-1.5 rounded-full text-xs font-bold ios-btn-primary"
            >
              Book
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/80 border border-slate-200/60 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF2D55]" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile iOS Control Center Fullscreen Frosted Sheet */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-0 top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-3xl p-4 sm:p-6 overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="max-w-md mx-auto space-y-5 pb-12">
            {/* Quick Status Pill */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-[#FFEBF0] to-[#E8F2FF] border border-white">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2D55] animate-ping" />
                <span className="text-xs font-bold text-slate-800">2025–2026 Keynotes & Advisory</span>
              </div>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/80 text-[#007AFF]">
                Open
              </span>
            </div>

            {/* Service Pillars Card Grid */}
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                Advisory & Keynote Practices
              </span>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {serviceLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 border border-slate-200/60 shadow-2xs hover:bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div 
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${item.color}15`, color: item.color }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-xs text-slate-900">{item.title}</div>
                        <div className="text-[10px] text-slate-500 truncate">{item.desc}</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* General Navigation Links */}
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                Explore Rebekon
              </span>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="p-3 rounded-2xl bg-white/70 border border-slate-200/60 text-xs font-bold text-slate-800 hover:bg-white text-center shadow-2xs"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="p-3 rounded-2xl bg-white/70 border border-slate-200/60 text-xs font-bold text-slate-800 hover:bg-white text-center shadow-2xs col-span-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact & Inquiry
                </Link>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="pt-2">
              <Link
                to="/book-online"
                className="w-full py-3.5 rounded-full ios-btn-primary flex items-center justify-center gap-2 text-sm font-bold shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation / Keynote</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
