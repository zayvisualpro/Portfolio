import React, { useState, useEffect } from 'react';

const Preloader = ({ onFinish }) => {
  const [frame, setFrame] = useState('00:00:01 : 04');
  const [phase, setPhase] = useState('loading'); // 'loading' -> 'exit' -> 'done'

  useEffect(() => {
    // Animate timecode frames
    const frames = [
      '00:00:01 : 04',
      '00:00:01 : 12',
      '00:00:01 : 18',
      '00:00:01 : 24',
      'SEQUENCE READY'
    ];
    
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < frames.length) {
        setFrame(frames[current]);
      } else {
        clearInterval(interval);
      }
    }, 180);

    // Trigger exit animation after ~1.1s
    const exitTimer = setTimeout(() => {
      setPhase('exit');
    }, 1200);

    // Complete and unmount after curtain animation finishes
    const finishTimer = setTimeout(() => {
      setPhase('done');
      if (onFinish) onFinish();
    }, 1900);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  if (phase === 'done') return null;

  return (
    <div 
      className={`fixed inset-0 z-[1000] bg-[#07080A] flex flex-col justify-between p-8 sm:p-12 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        phase === 'exit' ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
    >
      {/* Top Bar: Film Meta */}
      <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.25em] text-white/40 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E03A3A] animate-ping"></span>
          <span className="text-white/70">REC // 24 FPS</span>
        </div>
        <div>
          <span>ALTERNANCE 2026</span>
        </div>
      </div>

      {/* Center: Brand Typography Reveal */}
      <div className="text-center relative my-auto">
        <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-[#E03A3A] font-semibold block mb-3 animate-pulse">
          BTS AUDIOVISUEL • RECHERCHE D'ALTERNANCE
        </span>

        <h1 className="font-serif italic text-4xl sm:text-7xl md:text-8xl text-white tracking-tight leading-none mb-4">
          ANTONY RAIMBAULT
        </h1>

        <p className="text-xs uppercase font-mono tracking-[0.25em] text-white/60 mb-5">
          MONTAGE & POST-PRODUCTION
        </p>

        {/* Expanding Red Accent Line */}
        <div className="w-32 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-[#E03A3A] to-transparent mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-white/80 animate-[shimmer_1.5s_infinite] w-full"></div>
        </div>
      </div>

      {/* Bottom Bar: Ticking Timecode & Status */}
      <div className="flex items-end justify-between text-[11px] font-mono tracking-[0.25em] text-white/40">
        <div>
          <span className="text-white/20 block text-[9px] mb-0.5">TIMECODE</span>
          <span className="text-white/80">{frame}</span>
        </div>
        <div className="text-right">
          <span className="text-white/20 block text-[9px] mb-0.5">AUDIO SYNC</span>
          <span className="text-[#E03A3A]">48 kHz 24-BIT</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
