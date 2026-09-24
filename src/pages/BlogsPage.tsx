import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, Clock, ArrowRight, Share2, Plus, User, Tag, X, Check } from 'lucide-react';
import { BLOG_POSTS, SITE_CONFIG, BlogPost } from '../data/siteData';
import { GradientCTASection } from '../components/GradientCTASection';

export const BlogsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const getTagStyle = (category: string) => {
    switch (category) {
      case 'DEI':
        return 'bg-[#FCE4EF] text-[#F45B9C] border-[#FCE4EF]';
      case 'Health Equity':
        return 'bg-[#E6EEFF] text-[#3E6BE0] border-[#E6EEFF]';
      case 'Trans Advocacy':
        return 'bg-[#EDE9FE] text-[#7C6BE8] border-[#EDE9FE]';
      case 'AI & Technology':
        return 'bg-[#FCE4EF] text-[#3E6BE0] border-[#E6EEFF]';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 3000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-[#FCE4EF]/30 via-[#FAFAFC] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE4EF] text-[#F45B9C] text-xs font-bold tracking-wider uppercase mb-4">
              <Newspaper className="w-4 h-4" />
              <span>INSIGHTS & PERSPECTIVES</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              Blogs & Thought Leadership
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Perspectives by Celia Sandhya Daniels on health equity, algorithmic bias in clinical research, trans workplace inclusion, and executive allyship.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER TABS & BLOG INDEX */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Articles' },
              { id: 'Health Equity', label: 'Health Equity' },
              { id: 'DEI', label: 'Workplace DEI' },
              { id: 'AI & Technology', label: 'AI & Clinical Tech' },
              { id: 'Trans Advocacy', label: 'Trans Advocacy' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'brand-gradient text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${getTagStyle(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#3E6BE0] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <div className="text-xs text-slate-400 mb-4 flex items-center gap-2">
                    <span>By {SITE_CONFIG.founder}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setReadingPost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F45B9C] group-hover:text-[#3E6BE0] transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1">
                    {post.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            {/* Wix Blog Migration Placeholder Slot */}
            <div className="border-2 border-dashed border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 mb-4 shadow-xs">
                <Plus className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-[#F45B9C] bg-[#FCE4EF] px-3 py-1 rounded-full mb-2">
                [MIGRATE BLOG CONTENT FROM WIX]
              </span>
              <h4 className="font-bold text-slate-800 text-sm mb-1">
                Wix Blog Post Slot
              </h4>
              <p className="text-xs text-slate-500 max-w-xs">
                Structured schema ready to ingest past articles, interviews, and newsletters from the previous Wix website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDIVIDUAL BLOG POST READER MODAL */}
      {readingPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setReadingPost(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-8 py-5 border-b border-slate-100 flex items-center justify-between z-10">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getTagStyle(readingPost.category)}`}>
                {readingPost.category}
              </span>
              <button
                onClick={() => setReadingPost(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close reader"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Post Content */}
            <div className="p-8 sm:p-12 space-y-6">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-tight">
                {readingPost.title}
              </h2>

              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100 text-xs sm:text-sm text-slate-500">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/real/celia_headshot.jpg"
                    alt={SITE_CONFIG.founder}
                    className="w-10 h-10 rounded-full object-cover border border-[#F45B9C]"
                  />
                  <div>
                    <div className="font-bold text-slate-900">{SITE_CONFIG.founder} {SITE_CONFIG.pronouns}</div>
                    <div>Published on {readingPost.date} • {readingPost.readTime}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  {copiedShare ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedShare ? 'Link Copied!' : 'Share Article'}</span>
                </button>
              </div>

              {/* Rich Body */}
              <div className="prose prose-slate max-w-none space-y-4 text-slate-700 text-base leading-relaxed">
                {readingPost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Topic Tags:</div>
                <div className="flex flex-wrap gap-2">
                  {readingPost.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author bio snippet */}
              <div className="p-6 rounded-2xl bg-[#FCE4EF]/30 border border-[#FCE4EF] flex items-center gap-4">
                <img
                  src="/images/real/celia_headshot.jpg"
                  alt={SITE_CONFIG.founder}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#F45B9C] shrink-0"
                />
                <div className="text-xs sm:text-sm text-slate-700">
                  <div className="font-bold text-slate-900 text-sm sm:text-base">About Celia Sandhya Daniels</div>
                  <p className="mt-1">
                    Celia is a recognized LGBTQ+ leader in Biopharma and Top 10 LinkedIn Voice advising Fortune 100 enterprises on health equity and bathroom-to-boardroom inclusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CLOSING CTA */}
      <GradientCTASection
        title="Looking for a guest contributor or keynote speaker?"
        subtitle="Connect with Celia Sandhya Daniels for article contributions, podcast interviews, and symposium presentations."
        primaryCtaText="Book Online"
        primaryCtaLink="/book-online"
      />
    </div>
  );
};
