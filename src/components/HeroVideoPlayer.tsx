import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2, CheckCircle2 } from 'lucide-react';
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

  // Construct YouTube URL with 16:9 exact ratio, autoplay=1, mute=1, enablejsapi=1, loop=1
  const youtubeSrc = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&playsinline=1&controls=0&loop=1&playlist=${videoId}&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&showinfo=0`;

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg ring-1 ring-slate-900/10 group select-none">
      {/* 16:9 Native YouTube Video Embed - Scaled to fill frame cleanly */}
      <iframe
        ref={iframeRef}
        src={youtubeSrc}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute -top-[14%] -bottom-[14%] left-0 right-0 w-full h-[128%] object-cover pointer-events-none"
      />

      {/* Subtle top vignette for control button contrast */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Top Floating Controls Bar */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
        {/* Minimal Live Keynote Pill */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#F45B9C] animate-pulse" />
          <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-100">
            {badgeText}
          </span>
        </div>

        {/* Action Controls: Sound Button + Play/Pause + Expand */}
        <div className="flex items-center gap-1.5">
          {/* PRIMARY SOUND BUTTON */}
          <button
            type="button"
            onClick={toggleMute}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md font-medium text-xs transition-all shadow-md cursor-pointer ${
              isMuted
                ? 'bg-black/75 hover:bg-black/90 text-white border border-white/25 hover:border-white/50 ring-2 ring-[#3E6BE0]/60'
                : 'bg-[#3E6BE0] hover:bg-[#2F59C7] text-white border border-blue-400 shadow-blue-500/40'
            }`}
            title={isMuted ? 'Click to unmute audio' : 'Click to mute audio'}
            aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#F45B9C]" />
                <span className="font-semibold">Unmute</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-white" />
                <span className="font-semibold">Sound On</span>
                <span className="flex items-center gap-0.5 ml-0.5">
                  <span className="w-0.5 h-2.5 bg-white rounded-full animate-eq-1" />
                  <span className="w-0.5 h-1.5 bg-white rounded-full animate-eq-2" />
                  <span className="w-0.5 h-3 bg-white rounded-full animate-eq-3" />
                </span>
              </>
            )}
          </button>

          {/* Play/Pause Toggle */}
          <button
            type="button"
            onClick={togglePlay}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
            title={isPlaying ? 'Pause Preview' : 'Play Preview'}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-[#3E6BE0]" />
            )}
          </button>

          {/* Fullscreen Modal Watch Button */}
          <button
            type="button"
            onClick={onOpenModal}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
            title="Watch full keynote in HD"
            aria-label="Expand video"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
