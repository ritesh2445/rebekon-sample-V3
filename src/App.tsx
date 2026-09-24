import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { AmbientMesh } from './components/AmbientMesh';

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

// Apple iOS Frosted Loading Fallback
const PageLoader = () => (
  <div className="min-h-[55vh] flex items-center justify-center">
    <div className="ios-glass p-6 rounded-3xl flex flex-col items-center gap-3 shadow-lg">
      <div className="w-10 h-10 rounded-full border-3 border-slate-200/80 border-t-[#FF2D55] border-r-[#007AFF] animate-spin" />
      <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">Loading experience...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* Dynamic Ambient Apple Pink & Blue Aurora Mesh */}
      <AmbientMesh />
      
      <div className="min-h-screen flex flex-col bg-[#080B11] text-slate-100 selection:bg-[#FF2D55]/30 selection:text-white relative">
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
