import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Heart, Users, Sparkles, ShieldCheck, Calendar } from 'lucide-react';
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

      // Auto-hide on desktop only (viewport >= 1024px) when scrolling down
      if (window.innerWidth >= 1024) {
        if (currentScrollY > 80 && currentScrollY > lastScrollY.current + 8) {
          setHiddenOnDesktop(true);
          setServicesDropdownOpen(false);
        } else if (currentScrollY < lastScrollY.current - 5 || currentScrollY <= 80) {
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
    { title: 'All Services & Framework', path: '/services', desc: 'Educate, Engage, Empower framework' },
    { title: 'Healthcare Equity & Clinical Trials', path: '/healthcare', desc: 'Humanizing healthcare & affirming care' },
    { title: 'Trainings & Workshops', path: '/topics', desc: 'ERG, allyship & corporate workshops' },
    { title: 'Diversity & Inclusion Consulting', path: '/deib', desc: 'From the Bathroom to the Boardroom' },
    { title: 'Policy & Guidelines', path: '/policies', desc: 'Trans, gender-diverse & intersex policies' },
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

  return (
    <header
      className={`fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none transition-transform duration-300 ease-in-out ${
        hiddenOnDesktop ? 'lg:-translate-y-28 lg:opacity-0 pointer-events-none' : 'lg:translate-y-0 lg:opacity-100'
      }`}
    >
      {/* Floating Capsule Bar */}
      <div
        className={`pointer-events-auto max-w-6xl 2xl:max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(15,23,42,0.12)] border border-slate-200/90 py-2 sm:py-2.5 px-4 sm:px-6'
            : 'bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-white/80 py-2.5 sm:py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#3E6BE0]/40 rounded-full p-0.5 group"
          >
            <img
              src="/images/real/rebekon_official_logo.jpg"
              alt={SITE_CONFIG.companyName}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation Capsule Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/50">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  location.pathname.startsWith('/services') ||
                  location.pathname.startsWith('/healthcare') ||
                  location.pathname.startsWith('/topics') ||
                  location.pathname.startsWith('/deib') ||
                  location.pathname.startsWith('/policies')
                    ? 'text-slate-900 bg-white shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#3E6BE0]' : 'text-slate-400'
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/80 p-3 z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="space-y-1">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block p-2.5 rounded-2xl transition-all ${
                          isCurrent(item.path)
                            ? 'bg-[#FCE4EF]/60 text-[#F45B9C]'
                            : 'hover:bg-slate-50 text-slate-800'
                        }`}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <div className="font-semibold text-xs xl:text-sm">{item.title}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-2 flex items-center justify-between text-xs text-slate-500 bg-slate-50/80 rounded-2xl">
                    <span>From Bathroom to Boardroom</span>
                    <Link
                      to="/download"
                      className="text-[#3E6BE0] font-semibold hover:underline flex items-center gap-1"
                    >
                      Capabilities <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                  isCurrent(link.path)
                    ? 'text-slate-900 bg-white shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA Capsule */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className="text-xs xl:text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full hover:bg-slate-100/70 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/book-online"
              className="brand-gradient text-white text-xs xl:text-sm font-semibold px-4.5 py-2 rounded-full shadow-xs hover:shadow-md hover:scale-102 active:scale-98 transition-all flex items-center gap-1.5 group"
            >
              <Calendar className="w-3.5 h-3.5 text-white/90 group-hover:rotate-12 transition-transform" />
              <span>Book Online</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <Link
              to="/book-online"
              className="brand-gradient text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs"
            >
              Book
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop Dimmer for Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden pointer-events-auto transition-opacity animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Floating Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-3 sm:inset-x-6 top-[72px] sm:top-[78px] max-w-lg mx-auto z-50 pointer-events-auto bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/90 p-5 max-h-[calc(100dvh-88px)] overflow-y-auto scrollbar-none overscroll-contain animate-in fade-in zoom-in-95 duration-200">
          <div className="space-y-4">
            <div className="pb-3 border-b border-slate-100">
              <span className="text-xs font-bold tracking-widest text-[#F45B9C] uppercase">Services</span>
              <div className="mt-2 space-y-1 pl-2">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 text-sm font-medium text-slate-800 hover:text-[#3E6BE0]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-2 text-base font-semibold text-slate-800 hover:text-[#F45B9C]"
                >
                  {link.title}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block py-2 text-base font-semibold text-slate-800 hover:text-[#3E6BE0]"
              >
                Contact & Capabilities
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                to="/book-online"
                className="w-full brand-gradient text-white text-center py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Consultation</span>
              </Link>
              <div className="text-center text-xs text-slate-500">
                Call: <a href="tel:8052220502" className="text-[#3E6BE0] font-semibold">805 222 0502</a> | <a href="mailto:info@rebekon.com" className="text-[#F45B9C] font-semibold">info@rebekon.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
