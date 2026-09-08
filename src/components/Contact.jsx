import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('zayray_');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 bg-[#0B0C0E] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        <div className="reveal-init">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#E03A3A] font-bold inline-block mb-1">
            COLLABORATION & CONTACT
          </span>
          
          <h2 className="font-serif italic text-4xl sm:text-6xl text-white mt-1 mb-6 font-normal leading-tight">
            Donnons vie à vos projets
          </h2>
          
          <p className="max-w-lg mx-auto text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-14">
            Vous avez une vidéo à monter, une idée en motion design ou un projet nécessitant un montage percutant ? Échangeons ensemble.
          </p>
        </div>

        {/* Contact Cards - Balanced 3-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
          
          {/* Email Card */}
          <a
            href="mailto:zayvisual.pro@gmail.com"
            className="p-7 rounded-2xl bg-[#121419] border border-white/10 hover:border-[#E03A3A]/50 transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_-10px_rgba(224,58,58,0.25)] group flex flex-col items-center justify-between shadow-xl reveal-init"
          >
            <div className="w-13 h-13 rounded-full bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#E03A3A] group-hover:scale-110 transition-all duration-300 mb-4 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h3 className="font-serif italic text-xl text-white mb-1">Email Direct</h3>
            <p className="text-[11px] text-white/50 mb-4 font-mono">zayvisual.pro@gmail.com</p>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E03A3A] group-hover:underline inline-flex items-center gap-1.5">
              Me contacter ↗
            </span>
          </a>

          {/* Discord Card with Click to Copy */}
          <button
            onClick={handleCopyDiscord}
            className="p-7 rounded-2xl bg-[#121419] border border-white/10 hover:border-[#5865F2]/60 transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_-10px_rgba(88,101,242,0.25)] group flex flex-col items-center justify-between shadow-xl reveal-init cursor-pointer text-center"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-13 h-13 rounded-full bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#5865F2] group-hover:scale-110 transition-all duration-300 mb-4 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            <h3 className="font-serif italic text-xl text-white mb-1">Discord</h3>
            <p className="text-[11px] text-white/50 mb-4 font-mono font-medium text-[#5865F2]">zayray_</p>
            <span className={`text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-1.5 transition-colors ${
              copied ? 'text-emerald-400' : 'text-[#5865F2] group-hover:underline'
            }`}>
              {copied ? '✓ Pseudo copié !' : 'Copier le pseudo ⎘'}
            </span>
          </button>

          {/* YouTube Portfolio Link */}
          <a
            href="https://www.youtube.com/playlist?list=PL6zcl_V6SX6pAC6WW5jwMEbRu0CLiV6nD"
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 rounded-2xl bg-[#121419] border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.1)] group flex flex-col items-center justify-between shadow-xl reveal-init"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-13 h-13 rounded-full bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#E03A3A] group-hover:scale-110 transition-all duration-300 mb-4 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h3 className="font-serif italic text-xl text-white mb-1">YouTube</h3>
            <p className="text-[11px] text-white/50 mb-4 font-light">Playlist de réalisations</p>
            <span className="text-xs uppercase tracking-widest font-semibold text-white/70 group-hover:text-white inline-flex items-center gap-1.5">
              Explorer les vidéos ↗
            </span>
          </a>

        </div>

        {/* Discreet Availability status */}
        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-6 py-2.5 bg-white/[0.02] text-xs text-white/60 reveal-init hover:border-[#E03A3A]/40 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Disponible pour nouveaux projets & collaborations</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;
