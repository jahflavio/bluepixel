import React, { useState } from 'react';

// Official SVG vector logos from the Lovable application
import designrushSvg from '../../assets/logos/designrush.svg';
import clutchSvg from '../../assets/logos/clutch.svg';
import awsSvg from '../../assets/logos/aws.svg';
import cybervadisSvg from '../../assets/logos/cybervadis.svg';
import scrumstudySvg from '../../assets/logos/scrumstudy.svg';

const TrustBadgesSection = () => {
  // ISO 27001 is the default highlighted card as in the reference design;
  // hovering over any card dynamically shifts the blue neon glow
  const [activeCard, setActiveCard] = useState('iso27001');

  const badges = [
    {
      id: 'designrush',
      name: 'DesignRush',
      pill: '#1',
      category: 'Firma UX/UI #1 en México',
      desc: 'Reconocidos como la firma líder de diseño de experiencia de usuario en México por el directorio de referencia de la industria global.',
      logoSrc: designrushSvg,
    },
    {
      id: 'clutch',
      name: 'Clutch',
      pill: 'Verificado',
      category: 'Reviews verificados de clientes',
      desc: 'Evaluaciones reales de clientes enterprise que documentan calidad de entrega, comunicación e impacto en el negocio.',
      logoSrc: clutchSvg,
    },
    {
      id: 'aws',
      name: 'AWS',
      pill: 'Partner',
      category: 'Cloud Partner',
      desc: 'Infraestructura cloud certificada en la plataforma más confiable del mundo.',
      logoSrc: awsSvg,
    },
    {
      id: 'cybervadis',
      name: 'CyberVadis',
      pill: 'Auditado',
      category: 'Seguridad Certificada',
      desc: 'Buenas prácticas de seguridad verificadas por auditoría independiente.',
      logoSrc: cybervadisSvg,
    },
    {
      id: 'scrumstudy',
      name: 'SCRUMstudy',
      pill: 'Certificados',
      category: 'Metodología Ágil',
      desc: 'Equipos certificados en metodologías ágiles de desarrollo y producto.',
      logoSrc: scrumstudySvg,
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      pill: 'Próximamente',
      category: 'Seguridad de Datos',
      desc: 'Cumplimiento del estándar internacional de gestión de seguridad de la información.',
      logoSrc: null, // Renders as typographic titlemark per official design
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#02050E] relative overflow-hidden">
      {/* Ambient Blue Backlight Glow */}
      <div 
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 blur-[160px] pointer-events-none rounded-full" 
      />
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light text-white tracking-tight leading-tight">
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

                  {/* Top Row: Official SVG Brand Logo + Status Pill */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="h-7 flex items-center">
                      {item.logoSrc ? (
                        <img 
                          src={item.logoSrc} 
                          alt={`${item.name} logo`} 
                          className="h-full w-auto max-w-[132px] object-contain select-none opacity-90 group-hover:opacity-100 transition-opacity"
                          loading="eager"
                        />
                      ) : (
                        <span className="font-display font-light text-white text-xl sm:text-2xl tracking-tight">
                          {item.name}
                        </span>
                      )}
                    </div>
                    <span 
                      className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] rounded-full px-2.5 py-0.5 border transition-colors ${
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
                    <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-400 font-semibold mb-2.5">
                      {item.category}
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
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
