import React from 'react';

const PremiereIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-[#00005B] border-2 border-[#9999FF]/80 flex items-center justify-center text-[#9999FF] font-black text-xl tracking-tight shadow-[0_0_20px_rgba(153,153,255,0.25)] group-hover:scale-110 group-hover:border-[#9999FF] group-hover:shadow-[0_0_25px_rgba(153,153,255,0.45)] transition-all duration-300 shrink-0 select-none">
    Pr
  </div>
);

const AfterEffectsIcon = () => (
  <div className="w-12 h-12 rounded-xl bg-[#00005B] border-2 border-[#CF96FD]/80 flex items-center justify-center text-[#CF96FD] font-black text-xl tracking-tight shadow-[0_0_20px_rgba(207,150,253,0.25)] group-hover:scale-110 group-hover:border-[#CF96FD] group-hover:shadow-[0_0_25px_rgba(207,150,253,0.45)] transition-all duration-300 shrink-0 select-none">
    Ae
  </div>
);

const Skills = () => {
  const mainSoftwares = [
    { 
      name: "Adobe Premiere Pro", 
      icon: <PremiereIcon />,
      tag: "Montage & Post-Production",
      badge: "Très Bonne Maîtrise",
      badgeIcon: "●",
      statusNote: "Workflow fluide en production",
      masteryTitle: "Très Bonne Maîtrise",
      desc: "Dérushage intensif, montage narratif cut & rythmé, gestion multicam, synchronisation audio, transitions soignées, gestion de proxies et exports optimisés pour tous supports.",
      capabilities: [
        "Montage cut & narratif",
        "Multicam & Mixage audio",
        "Workflow Proxies légers",
        "Exports tous formats"
      ],
      barFill: "85%",
      accentColor: "#9999FF",
      borderHover: "hover:border-[#9999FF]/50 hover:shadow-[0_10px_35px_-10px_rgba(153,153,255,0.25)]"
    },
    { 
      name: "Adobe After Effects", 
      icon: <AfterEffectsIcon />,
      tag: "Motion & Compositing",
      badge: "Très Haute Maîtrise",
      badgeIcon: "★",
      badgeHighlight: "Outil de prédilection",
      statusNote: "Outil N°1 • Cœur d'expertise",
      masteryTitle: "Très Haute Maîtrise (Prédilection)",
      desc: "Animations vectorielles 2D/3D, titrage cinématique, incrustations sur fond vert, motion tracking, habillage graphique et vulgarisation visuelle percutante.",
      capabilities: [
        "Motion Design 2D / 3D",
        "Tracking & Incrustation",
        "Typographie & Habillage",
        "Compositing avancé"
      ],
      barFill: "100%",
      accentColor: "#CF96FD",
      borderHover: "hover:border-[#CF96FD]/50 hover:shadow-[0_10px_35px_-10px_rgba(207,150,253,0.25)]"
    },
  ];

  const expertises = [
    "Montage Rythmique & Storytelling",
    "Color Grading & Étalonnage Cinéma",
    "Sound Design & Mixage Audio",
    "Motion Design & Typographie Animée",
    "Formats Courts (Reels, TikTok, Shorts)",
    "Rétention d'Attention & Hook Visuel",
    "Organisation des Chutes & Gestion des Rushs",
    "Workflow Proxy & Optimisation Rendu"
  ];


  const softSkills = [
    "Organisé & Minutieux",
    "Sens des responsabilités",
    "Esprit d'équipe & Courtoisie",
    "Bienveillant & À l'écoute",
    "Grande adaptabilité",
    "Curieux & Force de proposition"
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#0D0F13] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 reveal-init">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#E03A3A] font-bold inline-block mb-1">
            STACK TECHNIQUE & QUALITÉS
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl text-white mt-1 font-normal">
            Compétences & Outils de Production
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/50 leading-relaxed font-light">
            Une solide maîtrise logicielle enrichie d'une rigueur informatique et d'un savoir-être adapté aux exigences d'une équipe de production.
          </p>
        </div>

        {/* Logiciels Phares */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainSoftwares.map((sw, index) => (
            <div 
              key={sw.name}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`p-8 rounded-2xl bg-[#121419] border border-white/10 ${sw.borderHover} transition-all duration-500 shadow-xl hover:-translate-y-2 relative overflow-hidden group reveal-init flex flex-col justify-between`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#E03A3A] px-2.5 py-1 rounded bg-[#E03A3A]/10 border border-[#E03A3A]/20">
                      {sw.tag}
                    </span>
                    {sw.badgeHighlight && (
                      <span className="text-[10px] font-mono tracking-wider text-[#CF96FD] px-2 py-0.5 rounded-full bg-[#CF96FD]/15 border border-[#CF96FD]/30">
                        ★ {sw.badgeHighlight}
                      </span>
                    )}
                  </div>
                  <span 
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: `${sw.accentColor}18`,
                      color: sw.accentColor,
                      border: `1px solid ${sw.accentColor}40`
                    }}
                  >
                    <span>{sw.badgeIcon}</span>
                    <span>{sw.badge}</span>
                  </span>
                </div>
                
                {/* Logo + Software Title */}
                <div className="flex items-center gap-4 mb-4">
                  {sw.icon}
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-white group-hover:text-white/90 transition-colors">
                    {sw.name}
                  </h3>
                </div>

                <p className="text-xs text-white/60 leading-relaxed font-light mb-5">
                  {sw.desc}
                </p>

                {/* Concrete Capabilities */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {sw.capabilities.map((cap, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/75"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Tangible Mastery Indicator */}
              <div className="pt-5 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/50 text-[11px] font-mono">{sw.statusNote}</span>
                  <span 
                    className="font-mono text-xs font-semibold"
                    style={{ color: sw.accentColor }}
                  >
                    {sw.masteryTitle}
                  </span>
                </div>

                {/* Timeline Track with Keyframe Diamond Marker */}
                <div className="relative w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 group-hover:brightness-125 relative"
                    style={{ 
                      width: sw.barFill,
                      backgroundColor: sw.accentColor 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Domaines d'expertise pills */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#121419]/50 border border-white/5 reveal-init mb-12">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold mb-6 text-center">
            SAVOIR-FAIRE EN POST-PRODUCTION
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {expertises.map((item, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-xs text-white/80 font-light hover:border-[#E03A3A] hover:bg-[#E03A3A]/10 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills & Languages */}
        <div className="p-7 sm:p-9 rounded-2xl bg-[#121419] border border-white/10 shadow-xl reveal-init">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Soft Skills */}
            <div className="md:col-span-7">
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold mb-4">
                QUALITÉS & SAVOIR-ÊTRE
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {softSkills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80 font-light hover:border-white/20 transition-colors"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages & Interests */}
            <div className="md:col-span-5 md:border-l md:border-white/10 md:pl-8">
              <div className="grid grid-cols-2 gap-6 text-xs">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase font-mono tracking-wider mb-1.5">
                    Langues
                  </span>
                  <p className="text-white font-medium">Français : Natif</p>
                  <p className="text-white/70 font-light mt-0.5">Anglais : Niveau B2</p>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase font-mono tracking-wider mb-1.5">
                    Centres d'intérêt
                  </span>
                  <p className="text-white font-medium">Cinéma & Réalisation</p>
                  <p className="text-white/70 font-light mt-0.5">Pratique Sportive</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
