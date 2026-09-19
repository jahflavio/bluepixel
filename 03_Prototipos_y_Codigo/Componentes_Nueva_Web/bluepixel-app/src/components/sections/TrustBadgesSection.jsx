import React, { useState } from 'react';

const TrustBadgesSection = () => {
  // Default active card is 'iso27001' as in the reference design, 
  // but hovering over any card shifts the focus dynamically
  const [activeCard, setActiveCard] = useState('iso27001');

  const badges = [
    {
      id: 'designrush',
      pill: '#1',
      category: 'FIRMA UX/UI #1 EN MÉXICO',
      desc: 'Reconocidos como la firma líder de diseño de experiencia de usuario en México por el directorio de referencia de la industria global.',
      logoRender: () => (
        <div className="flex items-center gap-2.5">
          {/* DesignRush flame icon with 3 dots */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
              <path 
                d="M12 2C12 7.5 17.5 9.5 17.5 14C17.5 17 15 19.5 12 19.5C9 19.5 6.5 17 6.5 14C6.5 9.5 12 7.5 12 2Z" 
                fill="currentColor" 
              />
            </svg>
            <div className="flex gap-1 mt-1">
              <span className="w-1 h-1 rounded-full bg-white"></span>
              <span className="w-1 h-1 rounded-full bg-white"></span>
              <span className="w-1 h-1 rounded-full bg-white"></span>
            </div>
          </div>
          <span className="text-base md:text-lg font-black tracking-widest text-white font-sans uppercase">
            DESIGNRUSH
          </span>
        </div>
      )
    },
    {
      id: 'clutch',
      pill: 'VERIFICADO',
      category: 'REVIEWS VERIFICADOS DE CLIENTES',
      desc: 'Evaluaciones reales de clientes enterprise que documentan calidad de entrega, comunicación e impacto en el negocio.',
      logoRender: () => (
        <div className="flex items-baseline">
          <span className="text-2xl md:text-3xl font-black tracking-tight text-white font-serif">
            Clutch
          </span>
        </div>
      )
    },
    {
      id: 'aws',
      pill: 'PARTNER',
      category: 'CLOUD PARTNER',
      desc: 'Infraestructura cloud certificada en la plataforma más confiable del mundo.',
      logoRender: () => (
        <div className="flex flex-col items-start leading-none select-none">
          <span className="text-2xl md:text-3xl font-black tracking-tight text-white lowercase font-sans">
            aws
          </span>
          <svg className="w-11 h-3 text-white -mt-0.5" viewBox="0 0 50 14" fill="none">
            <path d="M2 3C14 12 36 12 48 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M43 2L48 3L46 8" fill="currentColor" />
          </svg>
        </div>
      )
    },
    {
      id: 'cybervadis',
      pill: 'AUDITADO',
      category: 'SEGURIDAD CERTIFICADA',
      desc: 'Buenas prácticas de seguridad verificadas por auditoría independiente.',
      logoRender: () => (
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white lowercase font-sans">
            cybervadis
          </span>
        </div>
      )
    },
    {
      id: 'scrumstudy',
      pill: 'CERTIFICADOS',
      category: 'METODOLOGÍA ÁGIL',
      desc: 'Equipos certificados en metodologías ágiles de desarrollo y producto.',
      logoRender: () => (
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-5 h-5 rounded-full border border-white/70 flex items-center justify-center text-[10px] font-bold text-white">
              ✓
            </div>
            <div className="flex gap-1 -mt-0.5">
              <div className="w-0.5 h-1.5 bg-white/70 -rotate-12"></div>
              <div className="w-0.5 h-1.5 bg-white/70 rotate-12"></div>
            </div>
          </div>
          <div className="text-sm md:text-base font-bold text-white tracking-tight">
            SCRUM<span className="font-light text-slate-300">study</span>
          </div>
        </div>
      )
    },
    {
      id: 'iso27001',
      pill: 'PRÓXIMAMENTE',
      category: 'SEGURIDAD DE DATOS',
      desc: 'Cumplimiento del estándar internacional de gestión de seguridad de la información.',
      logoRender: () => (
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold tracking-wider text-white font-sans">
            ISO 27001
          </span>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#02050E] relative overflow-hidden">
      {/* Ambient Blue Backlight Glow matching reference image */}
      <div 
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[160px] pointer-events-none rounded-full" 
      />
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight leading-tight">
            Respaldados por estándares líderes de la industria
          </h2>
        </div>

        {/* Unified 3x2 Matrix Grid */}
        <div 
          onMouseLeave={() => setActiveCard('iso27001')}
          className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#030712]/50 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {badges.map((item, idx) => {
              const isActive = activeCard === item.id;
              
              // Grid border divider classes:
              // Desktop (lg): 3 cols -> col 0,1 get right border; row 0,1,2 get bottom border
              const lgBorderRight = (idx % 3 !== 2) ? 'lg:border-r border-white/[0.08]' : '';
              const lgBorderBottom = (idx < 3) ? 'lg:border-b border-white/[0.08]' : '';
              
              // Tablet (md): 2 cols -> even index gets right border; first 4 get bottom border
              const mdBorderRight = (idx % 2 === 0) ? 'md:border-r md:border-white/[0.08]' : '';
              const mdBorderBottom = (idx < 4) ? 'md:border-b md:border-white/[0.08]' : '';

              // Mobile: all but last get bottom border
              const smBorderBottom = (idx < 5) ? 'border-b border-white/[0.08]' : '';

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveCard(item.id)}
                  className={`relative p-8 md:p-10 flex flex-col justify-between min-h-[250px] transition-all duration-300 cursor-default ${lgBorderRight} ${lgBorderBottom} ${mdBorderRight} ${mdBorderBottom} ${smBorderBottom}`}
                >
                  {/* Active Card Glowing Overlay & Border */}
                  {isActive && (
                    <div 
                      className="absolute inset-1.5 md:inset-2 rounded-xl border border-blue-500/90 bg-[#060D22] shadow-[0_0_40px_rgba(37,99,235,0.38)] z-0 pointer-events-none transition-all duration-300"
                    />
                  )}

                  {/* Top Row: Brand Logo + Verified/Status Pill */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="h-8 flex items-center">
                      {item.logoRender()}
                    </div>
                    <span 
                      className={`text-[10px] md:text-[11px] font-mono tracking-wider px-3 py-0.5 rounded-full border transition-colors ${
                        isActive
                          ? 'border-blue-400/50 text-blue-300 bg-blue-500/15'
                          : 'border-white/20 text-slate-300 bg-white/[0.03]'
                      }`}
                    >
                      {item.pill}
                    </span>
                  </div>

                  {/* Content Section: Category Subtitle + Description */}
                  <div className="relative z-10 flex-1 flex flex-col justify-end">
                    <div className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold mb-3">
                      {item.category}
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBadgesSection;
