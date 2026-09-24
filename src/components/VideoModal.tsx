import React from 'react';
import { X, Play } from 'lucide-react';
import { MediaItem } from '../data/siteData';

interface VideoModalProps {
  item: MediaItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl ios-glass-card rounded-[32px] overflow-hidden shadow-[0_30px_70px_rgba(0,122,255,0.25)] border border-white/20 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.08] dark:border-white/10 bg-white/40 dark:bg-slate-900/60 backdrop-blur-md">
          <div>
            <span className="text-xs font-bold text-[#FF2D55] uppercase tracking-wider">{item.type}</span>
            <h3 className="text-slate-900 dark:text-white font-semibold text-base sm:text-lg line-clamp-1">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Embed / Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          {item.embedUrl ? (
            <iframe
              src={`${item.embedUrl}?autoplay=1`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="text-center p-8 text-slate-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF2D55] to-[#007AFF] flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-pink-500/25">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">{item.description}</p>
              <div className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-[#FF2D55] border border-white/10 backdrop-blur-md">
                [ADD VIDEO EMBED / PODCAST STREAM]
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-6 bg-white/40 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 border-t border-black/[0.08] dark:border-white/10">
          <p className="text-sm leading-relaxed">{item.description}</p>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Source: <strong className="text-slate-900 dark:text-white">{item.source}</strong></span>
            {item.duration && <span>Duration: {item.duration}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
