import React from 'react';

const About = () => {
  const alternanceInfo = [
    { label: "Formation préparée", value: "BTS Audiovisuel (Montage & Post-production)", icon: "🎓" },
    { label: "Rythme d'alternance", value: "2 jours école / 3 jours en entreprise", icon: "📅", highlight: true },
    { label: "Type de contrat", value: "Apprentissage ou Professionnalisation", icon: "📝" },
    { label: "Zone géographique", value: "Île-de-France (78 / Paris & environs)", icon: "📍" },
    { label: "Disponibilité", value: "Rentrée 2026 / Entretiens dès maintenant", icon: "⚡" },
    { label: "Âge & Statut", value: "18 ans / Étudiant motivé & rigoureux", icon: "👤" },
  ];

  const education = [
    {
      period: "2026 - Présent",
      status: "En cours",
      title: "BTS Audiovisuel (Option Montage & Post-production)",
      institution: "Formation supérieure audiovisuelle",
      description: "Apprentissage approfondi des techniques de montage, de la dramaturgie visuelle, des workflows numériques, de l'étalonnage et du mixage sonore."
    },
    {
      period: "2025 - 2026",
      status: "Formation universitaire",
      title: "Licence Mathématiques & Informatique",
      institution: "UVSQ de Versailles",
      description: "Développement d'une forte rigueur logique, d'une aisance avec les systèmes informatiques, le traitement de données et l'optimisation technique."
    },
    {
      period: "2021 - 2025",
      status: "Diplômé",
      title: "Baccalauréat Général",
      institution: "Lycée Léopold Sédar Senghor",
      description: "Formation secondaire solide favorisant l'analyse critique, la culture générale et les compétences rédactionnelles."
    }
  ];

  const professionalExperiences = [
    {
      period: "Depuis 2025",
      role: "Monteur Vidéo & Post-Production",
      company: "Auto-entreprise",
      tag: "Post-Production",
      description: "Prestations complètes de montage vidéo et post-production. Collaboration suivie avec des créateurs de contenu YouTube sur différents formats (vidéos longues rythmées, formats courts type Shorts/Reels, habillage graphique et sound design immersif)."
    },
    {
      period: "Mars - Mai 2026",
      role: "Équipier Drive",
      company: "Auchan Buchelay",
      tag: "Organisation & Rigueur",
      description: "Préparation rapide et minutieuse des commandes clients à l'aide d'un terminal mobile (picking). Accueil courtois de la clientèle, chargement des véhicules et respect rigoureux des délais et cadences soutenues."
    },
    {
      period: "Juillet 2023",
      role: "Agent Polyvalent",
      company: "Mairie de Magnanville",
      tag: "Travail d'Équipe",
      description: "Entretien des espaces et locaux communaux, collaboration étroite avec les équipes municipales et respect strict des règles de sécurité."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0B0C0E] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal-init">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#E03A3A] font-bold inline-block mb-2">
            PROFIL & RECHERCHE D'ALTERNANCE
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Antony Raimbault <span className="text-white/40 text-2xl sm:text-3xl not-italic font-sans">/ 18 ans</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/60 leading-relaxed font-light">
            Étudiant en BTS Audiovisuel option Montage et Post-production. Passionné par l'art du montage, le rythme visuel et le storytelling.
          </p>
        </div>

        {/* Profile Grid: Photo + Bio & Alternance Modalités */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-24">

          {/* Column 1: Portrait Photo Card */}
          <div className="lg:col-span-5 relative reveal-init">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#121419] group hover:border-[#E03A3A]/50 transition-all duration-500">
              
              {/* Antony Photo */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={`${import.meta.env.BASE_URL}antony-photo.jpg`}
                  alt="Antony Raimbault - Monteur Vidéo"
                  className="w-full h-full object-cover object-[center_26%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-80"></div>
                
                {/* Viewfinder corner brackets */}
                <div className="absolute inset-4 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white"></div>
                </div>

                {/* Status Badge floating on photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[11px] text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="font-medium">Candidat Alternance 2026-2028</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/60 bg-black/70 px-2 py-1 rounded">
                    IDF (78)
                  </span>
                </div>
              </div>

              {/* Photo Card Footer */}
              <div className="p-5 border-t border-white/10 bg-[#121419]/90">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white text-sm">Antony Raimbault</h3>
                    <p className="text-[11px] text-white/50 font-mono">Monteur Vidéo / Post-Producteur</p>
                  </div>
                  <a
                    href={`${import.meta.env.BASE_URL}CV_Antony_Raimbault.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#E03A3A] hover:underline font-semibold"
                  >
                    <span>Voir le CV</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Bio & Key Alternance Parameters */}
          <div className="lg:col-span-7 reveal-init" style={{ transitionDelay: '150ms' }}>
            
            <div className="space-y-4 text-sm sm:text-base text-white/75 font-light leading-relaxed mb-8">
              <p>
                Actuellement en <strong className="text-white font-medium">BTS Audiovisuel option Montage et Post-production</strong>, je suis à la recherche d'une entreprise pour m'accueillir en alternance à raison de <strong className="text-white font-medium">2 jours d'école et 3 jours en entreprise</strong>.
              </p>
              <p>
                Organisé, rigoureux et courtois, je possède un fort sens du travail en équipe et une grande adaptabilité. Dès 2025, j'ai lancé mon activité en auto-entreprise pour collaborer avec des créateurs YouTube, ce qui m'a permis de développer une réelle autonomie de dérushage, de narration rythmée et de motion design sous <strong className="text-white font-medium">Adobe Premiere Pro</strong> et <strong className="text-white font-medium">After Effects</strong>.
              </p>
              <p>
                Mon parcours initial en <strong className="text-white font-medium">Licence Mathématiques & Informatique</strong> m'apporte également une rigueur logique essentielle pour la gestion des workflows numériques, la résolution de problèmes techniques et l'optimisation des flux de post-production.
              </p>
            </div>

            {/* Alternance Quick Facts Card */}
            <div className="bg-[#121419] border border-white/10 rounded-2xl p-6 shadow-xl mb-8">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#E03A3A] font-bold mb-4 flex items-center gap-2">
                <span>FICHE DE SYNTHÈSE ALTERNANCE</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {alternanceInfo.map((info, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3 rounded-xl border transition-colors ${
                      info.highlight 
                        ? 'bg-[#E03A3A]/10 border-[#E03A3A]/40' 
                        : 'bg-black/30 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[10px] text-white/50 uppercase tracking-wider mb-0.5">
                      <span>{info.icon}</span>
                      <span>{info.label}</span>
                    </div>
                    <div className={`text-xs font-medium ${info.highlight ? 'text-white font-bold' : 'text-white/90'}`}>
                      {info.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`${import.meta.env.BASE_URL}CV_Antony_Raimbault.pdf`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-[#E03A3A] hover:text-white px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105 shadow-md group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Télécharger mon CV (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/15 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 hover:scale-105"
              >
                <span>Proposer une Alternance</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

          </div>

        </div>

        {/* PARCOURS SECTION (School + Professional) */}
        <div id="parcours" className="pt-12 border-t border-white/10">
          
          <div className="text-center max-w-2xl mx-auto mb-14 reveal-init">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E03A3A] font-bold inline-block mb-1">
              TRAJECTOIRE & EXPÉRIENCES
            </span>
            <h3 className="font-serif italic text-3xl sm:text-4xl text-white font-normal">
              Parcours Scolaire & Professionnel
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-white/50 leading-relaxed font-light">
              La combinaison d'une formation audiovisuelle ciblée, d'une expérience concrète en montage et d'expériences terrain formatrices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Column A: Parcours Scolaire */}
            <div className="p-7 rounded-2xl bg-[#121419] border border-white/10 shadow-xl reveal-init">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="w-8 h-8 rounded-lg bg-[#E03A3A]/20 text-[#E03A3A] flex items-center justify-center font-bold text-sm">
                  📚
                </span>
                <div>
                  <h4 className="font-serif italic text-xl text-white">Parcours Scolaire</h4>
                  <p className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Formations & Diplômes</p>
                </div>
              </div>

              <div className="space-y-6">
                {education.map((item, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-white/10 group hover:border-[#E03A3A] transition-colors">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white/30 group-hover:bg-[#E03A3A] group-hover:scale-125 transition-all"></span>
                    
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <span className="text-[11px] font-mono text-[#E03A3A] font-semibold">
                        {item.period}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-white/40 bg-white/5 px-2 py-0.5 rounded">
                        {item.status}
                      </span>
                    </div>

                    <h5 className="text-sm font-semibold text-white group-hover:text-white/95 transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-xs text-white/50 font-medium mb-1.5">{item.institution}</p>
                    <p className="text-xs text-white/60 leading-relaxed font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column B: Expériences Professionnelles */}
            <div className="p-7 rounded-2xl bg-[#121419] border border-white/10 shadow-xl reveal-init" style={{ transitionDelay: '150ms' }}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-sm">
                  💼
                </span>
                <div>
                  <h4 className="font-serif italic text-xl text-white">Expériences Professionnelles</h4>
                  <p className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Montage vidéo & Expérience terrain</p>
                </div>
              </div>

              <div className="space-y-6">
                {professionalExperiences.map((item, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-white/10 group hover:border-white/50 transition-colors">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white/30 group-hover:bg-[#E03A3A] group-hover:scale-125 transition-all"></span>
                    
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <span className="text-[11px] font-mono text-[#E03A3A] font-semibold">
                        {item.period}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-white/40 bg-white/5 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>

                    <h5 className="text-sm font-semibold text-white group-hover:text-white/95 transition-colors">
                      {item.role}
                    </h5>
                    <p className="text-xs text-white/50 font-medium mb-1.5">{item.company}</p>
                    <p className="text-xs text-white/60 leading-relaxed font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
