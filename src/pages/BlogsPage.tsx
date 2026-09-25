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
        return 'bg-[#FF2D55]/20 text-[#FF2D55] border-[#FF2D55]/30';
      case 'Health Equity':
        return 'bg-[#007AFF]/20 text-[#007AFF] border-[#007AFF]/30';
      case 'Trans Advocacy':
        return 'bg-[#AF52DE]/20 text-[#AF52DE] border-[#AF52DE]/30';
      case 'AI & Technology':
        return 'bg-[#00C7BE]/20 text-[#00C7BE] border-[#00C7BE]/30';
      default:
        return 'bg-white/10 text-slate-300 border-white/20';
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 3000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-[#080B11] text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-glass-pill text-xs font-bold text-white mb-4 shadow-xs">
              <Newspaper className="w-4 h-4 text-[#FF2D55]" />
              <span className="ios-pink-blue-text font-black uppercase tracking-wider">INSIGHTS & PERSPECTIVES</span>
            </div>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Blogs & Thought Leadership
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              Perspectives by Celia Sandhya Daniels on health equity, algorithmic bias in clinical research, trans workplace inclusion, and executive allyship.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER TABS & BLOG INDEX */}
      <section className="py-20 relative">
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
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'ios-btn-primary text-white shadow-md'
                    : 'ios-glass text-slate-200 hover:bg-white border border-white/12'
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
                className="group ios-glass-card p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border  ${getTagStyle(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl sm:text-2xl text-white group-hover:text-[#007AFF] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <div className="text-xs text-slate-400 mb-4 flex items-center gap-2 font-medium">
                    <span>By {SITE_CONFIG.founder}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setReadingPost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2D55] group-hover:text-[#007AFF] transition-colors cursor-pointer"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1">
                    {post.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-slate-400 bg-white/80 px-2 py-0.5 rounded-full border border-slate-100">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            {/* Wix Blog Migration Placeholder Slot */}
            <div className="ios-glass border-2 border-dashed border-slate-300/80 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-slate-400 mb-4 shadow-xs">
                <Plus className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold text-[#FF2D55] bg-[#FFEBF0] px-3 py-1 rounded-full mb-2">
                [MIGRATE BLOG CONTENT FROM WIX]
              </span>
              <h4 className="font-bold text-white text-sm mb-1">
                Wix Blog Post Slot
              </h4>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed font-medium">
                Structured schema ready to ingest past articles, interviews, and newsletters from the previous Wix website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDIVIDUAL BLOG POST READER MODAL */}
      {readingPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xl animate-in fade-in"
          onClick={() => setReadingPost(null)}
        >
          <div
            className="ios-glass-card bg-[#0E1424] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white rounded-[2.5rem] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="sticky top-0 bg-[#0E1424]/95 backdrop-blur-md px-6 sm:px-8 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between z-10">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getTagStyle(readingPost.category)}`}>
                {readingPost.category}
              </span>
              <button
                onClick={() => setReadingPost(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close reader"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Post Content */}
            <div className="p-6 sm:p-12 space-y-6">
              <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                {readingPost.title}
              </h2>

              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/real/celia_headshot.jpg"
                    alt={SITE_CONFIG.founder}
                    className="w-10 h-10 rounded-full object-cover border border-[#FF2D55]"
                   loading="lazy" decoding="async" />
                  <div>
                    <div className="font-bold text-white">{SITE_CONFIG.founder} {SITE_CONFIG.pronouns}</div>
                    <div>Published on {readingPost.date} • {readingPost.readTime}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer border border-white/10"
                >
                  {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedShare ? 'Link Copied!' : 'Share Article'}</span>
                </button>
              </div>

              {/* Rich Body */}
              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                {readingPost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Topic Tags:</div>
                <div className="flex flex-wrap gap-2">
                  {readingPost.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-semibold bg-white/10 text-slate-200 px-3 py-1 rounded-full border border-white/10">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author bio snippet */}
              <div className="p-6 rounded-2xl ios-glass border border-white/12 flex items-center gap-4">
                <img
                  src="/images/real/celia_headshot.jpg"
                  alt={SITE_CONFIG.founder}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#FF2D55] shrink-0"
                 loading="lazy" decoding="async" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <div className="font-bold text-white text-sm sm:text-base">About Celia Sandhya Daniels</div>
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

export default BlogsPage;




