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
      tag: "Édition Maîtresse", 
      desc: "Dérushage intensif, montage narratif, multicam, synchronisation audio, transitions cut & rythmées, gestion de proxies et exports optimisés pour tous supports.",
      level: "95%",
      accentColor: "#9999FF"
    },
    { 
      name: "Adobe After Effects", 
      icon: <AfterEffectsIcon />,
      tag: "Motion & Compositing", 
      desc: "Animations vectorielles 2D/3D, titrage cinématique, incrustations sur fond vert, motion tracking, habillage graphique et vulgarisation visuelle.",
      level: "90%",
      accentColor: "#CF96FD"
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

  const itAndWorkflow = [
    {
      title: "Dépannage & Maintenance Informatique",
      desc: "Diagnostique matériel et logiciel, optimisation des performances de stations de montage, gestion du stockage SSD/NVMe et des sauvegardes.",
      icon: "💻"
    },
    {
      title: "Suite Office & Bureautique",
      desc: "Maîtrise des outils bureautiques (Word, Excel, PowerPoint) pour les feuilles de suivi de production, dépouillement et documentation.",
      icon: "📊"
    },
    {
      title: "Codecs & Export Numérique",
      desc: "Maîtrise des normes d'encodage (ProRes, DNxHD, H.264, HEVC), débits de diffusion, résolutions et calibrage des métadonnées.",
      icon: "⚙️"
    }
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
              className="p-8 rounded-2xl bg-[#121419] border border-white/10 hover:border-white/30 transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-[0_10px_35px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden group reveal-init"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#E03A3A] px-2.5 py-1 rounded bg-[#E03A3A]/10 border border-[#E03A3A]/20">
                  {sw.tag}
                </span>
                <span className="text-xs font-mono text-white/40 group-hover:text-white transition-colors">{sw.level}</span>
              </div>
              
              {/* Logo + Software Title */}
              <div className="flex items-center gap-4 mb-4">
                {sw.icon}
                <h3 className="font-serif italic text-2xl sm:text-3xl text-white group-hover:text-white/90 transition-colors">
                  {sw.name}
                </h3>
              </div>

              <p className="text-xs text-white/60 leading-relaxed font-light mb-6">
                {sw.desc}
              </p>
              
              {/* Animated Progress Line with Keyframe Diamond Marker */}
              <div className="relative w-full bg-white/5 h-1.5 rounded-full">
                <div 
                  className="h-full rounded-full transition-all duration-1000 group-hover:brightness-125 relative"
                  style={{ 
                    width: sw.level,
                    backgroundColor: sw.accentColor 
                  }}
                >
                  <span 
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 rotate-45 border border-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    style={{ backgroundColor: sw.accentColor }}
                    title="Point clé d'animation"
                  ></span>
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

        {/* IT & Workflow + Soft Skills & Languages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal-init">
          
          {/* IT & Technical Support */}
          <div className="lg:col-span-7 p-7 rounded-2xl bg-[#121419] border border-white/10 shadow-xl">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold mb-5 flex items-center gap-2">
              <span>WORKFLOW & ENVIRONNEMENT TECHNIQUE</span>
            </h4>
            
            <div className="space-y-4">
              {itAndWorkflow.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/30 border border-white/5 flex items-start gap-4">
                  <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-1">{item.title}</h5>
                    <p className="text-xs text-white/60 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-[#121419] border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold mb-5">
                QUALITÉS & SAVOIR-ÊTRE
              </h4>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {softSkills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80 font-light"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages & Interests */}
            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase font-mono tracking-wider mb-1">
                    Langues
                  </span>
                  <p className="text-white font-medium">Français : Natif</p>
                  <p className="text-white/70 font-light">Anglais : Niveau B2</p>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase font-mono tracking-wider mb-1">
                    Centres d'intérêt
                  </span>
                  <p className="text-white font-medium">Cinéma & Réalisation</p>
                  <p className="text-white/70 font-light">Pratique Sportive</p>
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
