import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2, Sparkles } from 'lucide-react';
import { MediaItem } from '../data/siteData';

interface HeroVideoPlayerProps {
  video: MediaItem;
  onOpenModal: () => void;
  badgeText?: string;
}

export const HeroVideoPlayer: React.FC<HeroVideoPlayerProps> = ({
  video,
  onOpenModal,
  badgeText = 'FEATURED KEYNOTE'
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Extract YouTube ID from embedUrl
  const videoId = video.embedUrl.split('/embed/')[1]?.split('?')[0] || 'HqiyBdBoM-Y';

  // Send postMessage to YouTube iframe
  const sendCommand = (command: string, args: unknown[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args }),
        '*'
      );
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMuted) {
      sendCommand('unMute');
      sendCommand('setVolume', [100]);
      setIsMuted(false);
    } else {
      sendCommand('mute');
      setIsMuted(true);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      sendCommand('pauseVideo');
      setIsPlaying(false);
    } else {
      sendCommand('playVideo');
      setIsPlaying(true);
    }
  };

  // Reset to muted autoplay whenever video changes
  useEffect(() => {
    setIsMuted(true);
    setIsPlaying(true);
  }, [video.id]);

  const youtubeSrc = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&playsinline=1&controls=0&loop=1&playlist=${videoId}&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&showinfo=0`;

  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-slate-950 shadow-[0_25px_60px_-15px_rgba(0,122,255,0.25)] border border-white/20 group select-none">
      {/* 16:9 YouTube Video Embed */}
      <iframe
        ref={iframeRef}
        src={youtubeSrc}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute -top-[14%] -bottom-[14%] left-0 right-0 w-full h-[128%] object-cover pointer-events-none"
      />

      {/* Apple Glass Top & Bottom Vignettes */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Top Floating Controls Bar */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-auto">
        {/* Apple Dynamic Island Live Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-white shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#FF2D55] animate-ping" />
          <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-100">
            {badgeText}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Audio Unmute Button */}
          <button
            type="button"
            onClick={toggleMute}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-xl font-bold text-xs transition-all shadow-md cursor-pointer ${
              isMuted
                ? 'bg-black/70 hover:bg-black/85 text-white border border-white/30 hover:border-white/60'
                : 'bg-gradient-to-r from-[#FF2D55] to-[#007AFF] text-white border border-white/40 shadow-[0_0_20px_rgba(255,45,85,0.5)]'
            }`}
            title={isMuted ? 'Click to unmute' : 'Click to mute'}
            aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#FF2D55]" />
                <span>Unmute</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-white" />
                <span>Live Audio</span>
                <span className="flex items-center gap-0.5 ml-1">
                  <span className="w-0.5 h-3 bg-white rounded-full animate-eq-1" />
                  <span className="w-0.5 h-1.5 bg-white rounded-full animate-eq-2" />
                  <span className="w-0.5 h-3.5 bg-white rounded-full animate-eq-3" />
                  <span className="w-0.5 h-2 bg-white rounded-full animate-eq-4" />
                </span>
              </>
            )}
          </button>

          {/* Play/Pause */}
          <button
            type="button"
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center backdrop-blur-xl transition-all cursor-pointer shadow-sm"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-[#007AFF]" />
            )}
          </button>

          {/* Fullscreen Modal Watch */}
          <button
            type="button"
            onClick={onOpenModal}
            className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center backdrop-blur-xl transition-all cursor-pointer shadow-sm"
            title="Watch full presentation"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom Track Title Overlay */}
      <div className="absolute bottom-3 left-3.5 right-3.5 z-20 flex items-center justify-between text-white pointer-events-none">
        <p className="text-xs font-semibold text-white/90 truncate drop-shadow-md">
          {video.title}
        </p>
        {video.duration && (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/80 shrink-0 ml-2">
            {video.duration}
          </span>
        )}
      </div>
    </div>
  );
};

