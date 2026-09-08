import React, { useState, useEffect } from 'react';

const TimelineScrubber = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timecode, setTimecode] = useState('00:00:00:00');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      
      const currentProgress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollProgress(currentProgress);

      // Convert scroll progress (0-100%) into realistic cinema timecode (e.g. 0 to 4 minutes at 24fps)
      const totalFrames = Math.floor((currentProgress / 100) * (4 * 60 * 24)); // 4 mins @ 24fps
      const mins = String(Math.floor(totalFrames / (60 * 24))).padStart(2, '0');
      const secs = String(Math.floor((totalFrames % (60 * 24)) / 24)).padStart(2, '0');
      const frames = String(totalFrames % 24).padStart(2, '0');
      setTimecode(`00:${mins}:${secs}:${frames}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-7 bg-[#0B0C0E]/95 backdrop-blur-md border-b border-white/10 select-none hidden sm:flex items-center justify-between px-6 font-mono text-[10px] text-white/40">
      
      {/* Track info & In/Out markers */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="px-1.5 py-0.2 rounded bg-white/10 text-white/70 font-semibold text-[9px]">V1</span>
          <span className="px-1.5 py-0.2 rounded bg-white/10 text-white/70 font-semibold text-[9px]">A1</span>
          <span className="text-white/20">|</span>
          <span className="text-[#E03A3A] font-semibold tracking-wider">SEQUENCE_01</span>
        </div>
        <span className="hidden md:inline text-white/25">• 24.00 FPS • PRORES 422 HQ</span>
      </div>

      {/* Center: Interactive Timeline Track with Moving Playhead */}
      <div className="relative flex-1 max-w-xl mx-8 h-3.5 bg-black/40 rounded border border-white/10 overflow-hidden flex items-center">
        {/* Timeline tick marks */}
        <div className="absolute inset-0 flex justify-between px-2 opacity-30 pointer-events-none">
          {Array.from({ length: 19 }).map((_, i) => (
            <span key={i} className={`w-[1px] bg-white ${i % 3 === 0 ? 'h-3' : 'h-1.5'} self-center`}></span>
          ))}
        </div>

        {/* Rendered cached timeline track (colored clips representation) */}
        <div className="absolute inset-y-0.5 left-1 right-1 flex gap-1 opacity-40">
          <div className="w-[30%] bg-blue-500/40 rounded-sm"></div>
          <div className="w-[20%] bg-purple-500/40 rounded-sm"></div>
          <div className="w-[35%] bg-amber-500/40 rounded-sm"></div>
          <div className="w-[15%] bg-emerald-500/40 rounded-sm"></div>
        </div>

        {/* The Red Cinema Playhead needle */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-[#E03A3A] shadow-[0_0_8px_#E03A3A] z-10 transition-all duration-75"
          style={{ left: `${scrollProgress}%` }}
        >
          {/* Playhead marker head */}
          <div className="w-2.5 h-2 -ml-[4px] bg-[#E03A3A] rounded-t-sm"></div>
        </div>
      </div>

      {/* Right: Live Scrubbed Timecode */}
      <div className="flex items-center gap-2">
        <span className="text-white/25">TC:</span>
        <span className="text-white font-semibold tracking-widest text-[11px] text-[#EDEDED]">
          {timecode}
        </span>
      </div>

    </div>
  );
};

export default TimelineScrubber;
