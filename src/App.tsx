import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Immediate load for Homepage for maximum initial performance
import { HomePage } from './pages/HomePage';

// Code-split all other routes for instantaneous initial bundle delivery
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const HealthcarePage = lazy(() => import('./pages/HealthcarePage').then(m => ({ default: m.HealthcarePage })));
const TopicsPage = lazy(() => import('./pages/TopicsPage').then(m => ({ default: m.TopicsPage })));
const DeibPage = lazy(() => import('./pages/DeibPage').then(m => ({ default: m.DeibPage })));
const PoliciesPage = lazy(() => import('./pages/PoliciesPage').then(m => ({ default: m.PoliciesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const MediaPage = lazy(() => import('./pages/MediaPage').then(m => ({ default: m.MediaPage })));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then(m => ({ default: m.CaseStudiesPage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then(m => ({ default: m.ResourcesPage })));
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(m => ({ default: m.BlogsPage })));
const BookOnlinePage = lazy(() => import('./pages/BookOnlinePage').then(m => ({ default: m.BookOnlinePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

// Sleek, minimal loading fallback for smooth transitions
const PageLoader = () => (
  <div className="min-h-[55vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-9 h-9 rounded-full border-2 border-slate-200 border-t-[#3E6BE0] animate-spin" />
      <span className="text-[11px] font-medium text-slate-400 tracking-wider uppercase">Loading experience...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-[#0F172A] selection:bg-[#FCE4EF] selection:text-[#F45B9C]">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/healthcare" element={<HealthcarePage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/deib" element={<DeibPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/media" element={<MediaPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/book-online" element={<BookOnlinePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/download" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
