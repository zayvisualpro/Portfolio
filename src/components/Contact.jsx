import React, { useState } from 'react';

const Contact = () => {
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('zayray_');
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('06 20 53 14 69');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0B0C0E] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        <div className="reveal-init">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#E03A3A] font-bold inline-block mb-2">
            RECRUTEMENT & CONTACT DIRECT
          </span>
          
          <h2 className="font-serif italic text-4xl sm:text-6xl text-white mt-1 mb-6 font-normal leading-tight">
            Recruter Antony en Alternance
          </h2>
          
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-12">
            Vous recherchez un alternant rigoureux, créatif et immédiatement opérationnel pour renforcer vos productions vidéo ? Contactez-moi par email ou par téléphone pour échanger ou convenir d'un entretien.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          
          {/* Email Card */}
          <a
            href="mailto:antony.raimbault@outlook.com"
            className="p-7 rounded-2xl bg-[#121419] border border-white/10 hover:border-[#E03A3A]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(224,58,58,0.25)] group flex flex-col items-center justify-between shadow-xl reveal-init"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#E03A3A] group-hover:scale-110 transition-all duration-300 mb-4 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h3 className="font-serif italic text-xl text-white mb-1">Email Professionnel</h3>
            <p className="text-xs text-white/80 mb-3 font-mono font-medium">antony.raimbault@outlook.com</p>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E03A3A] group-hover:underline inline-flex items-center gap-1">
              Envoyer un email ↗
            </span>
          </a>

          {/* Phone Card */}
          <div
            className="p-7 rounded-2xl bg-[#121419] border border-white/10 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(16,185,129,0.2)] group flex flex-col items-center justify-between shadow-xl reveal-init"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300 mb-4 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="font-serif italic text-xl text-white mb-1">Téléphone Direct</h3>
            <a href="tel:0620531469" className="text-xs text-white/90 mb-3 font-mono font-medium hover:text-emerald-400 transition-colors">
              06 20 53 14 69
            </a>
            <div className="flex items-center gap-3">
              <a href="tel:0620531469" className="text-xs uppercase tracking-wider font-semibold text-emerald-400 hover:underline">
                Appeler ↗
              </a>
              <span className="text-white/20">•</span>
              <button onClick={handleCopyPhone} className="text-xs uppercase tracking-wider font-semibold text-white/50 hover:text-white cursor-pointer">
                {copiedPhone ? 'Copié !' : 'Copier'}
              </button>
            </div>
          </div>

          {/* CV Download Card */}
          <a
            href={`${import.meta.env.BASE_URL}CV_Antony_Raimbault.pdf`}
            target="_blank"
            rel="noreferrer"
            className="p-7 rounded-2xl bg-[#121419] border border-white/10 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.15)] group flex flex-col items-center justify-between shadow-xl reveal-init sm:col-span-2 lg:col-span-1"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300 mb-4 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
            <h3 className="font-serif italic text-xl text-white mb-1">Curriculum Vitae</h3>
            <p className="text-[11px] text-white/50 mb-3 font-mono">Format PDF imprimable</p>
            <span className="text-xs uppercase tracking-widest font-semibold text-white/80 group-hover:text-white inline-flex items-center gap-1.5">
              Télécharger le CV ↗
            </span>
          </a>

        </div>

        {/* Secondary Links: Discord & YouTube */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto mb-10 reveal-init">
          <button
            onClick={handleCopyDiscord}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white/80 transition-colors cursor-pointer"
          >
            <span className="text-[#5865F2]">Discord :</span>
            <span className="font-mono font-medium">zayray_</span>
            <span className="text-[10px] text-white/40">{copiedDiscord ? '(Copié !)' : '(clic pour copier)'}</span>
          </button>

          <a
            href="https://www.youtube.com/playlist?list=PL6zcl_V6SX6pAC6WW5jwMEbRu0CLiV6nD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white/80 hover:text-white transition-colors"
          >
            <span className="text-[#E03A3A]">YouTube :</span>
            <span>Playlist de Réalisations ↗</span>
          </a>
        </div>

        {/* Location & Status Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 border border-white/10 rounded-full px-6 py-3 bg-white/[0.02] text-xs text-white/70 reveal-init">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Disponible pour la rentrée 2026 / Entretiens immédiats</span>
          </span>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="text-white/60">
            📍 78200 Magnanville / Mobilité Île-de-France
          </span>
        </div>

      </div>
    </section>
  );
};

export default Contact;
