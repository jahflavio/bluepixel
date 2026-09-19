import React, { useState } from 'react';

const TrustBadgesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const badges = [
    {
      id: 'designrush',
      name: 'DesignRush',
      pill: '#1',
      pillColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      category: 'FIRMA UX/UI #1 EN MÉXICO',
      desc: 'Reconocidos como la firma líder de diseño de experiencia de usuario en México por el directorio de referencia de la industria global.',
      link: 'https://www.designrush.com',
      logoRender: () => (
        <div className="flex items-center gap-2">
          {/* DesignRush stylized emblem */}
          <div className="flex flex-col items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 7 17 9 17 13C17 15.8 14.8 18 12 18C9.2 18 7 15.8 7 13C7 9 12 7 12 2Z" fill="currentColor" />
            </svg>
            <div className="flex gap-0.5 mt-0.5">
              <span className="w-0.5 h-0.5 rounded-full bg-blue-400"></span>
              <span className="w-0.5 h-0.5 rounded-full bg-blue-400"></span>
              <span className="w-0.5 h-0.5 rounded-full bg-blue-400"></span>
            </div>
          </div>
          <span className="text-base font-black tracking-wider text-white font-sans">DESIGNRUSH</span>
        </div>
      )
    },
    {
      id: 'clutch',
      name: 'Clutch',
      pill: 'VERIFICADO',
      pillColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      category: 'REVIEWS VERIFICADOS DE CLIENTES',
      desc: 'Evaluaciones reales de clientes enterprise que documentan calidad de entrega, comunicación e impacto en el negocio.',
      link: 'https://clutch.co',
      logoRender: () => (
        <div className="flex items-baseline">
          <span className="text-2xl font-black tracking-tight text-white font-display">Clutch</span>
        </div>
      )
    },
    {
      id: 'aws',
      name: 'AWS',
      pill: 'PARTNER',
      pillColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      category: 'CLOUD PARTNER',
      desc: 'Infraestructura cloud certificada en la plataforma más confiable del mundo.',
      link: 'https://aws.amazon.com/partners/',
      logoRender: () => (
        <div className="flex flex-col items-start leading-none">
          <span className="text-2xl font-black tracking-tight text-white lowercase">aws</span>
          <svg className="w-9 h-2.5 text-amber-400 -mt-0.5" viewBox="0 0 50 14" fill="none">
            <path d="M2 3C14 12 36 12 48 3" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M43 2L48 3L46 7.5" fill="#F59E0B" />
          </svg>
        </div>
      )
    },
    {
      id: 'cybervadis',
      name: 'CyberVadis',
      pill: 'AUDITADO',
      pillColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      category: 'SEGURIDAD CERTIFICADA',
      desc: 'Buenas prácticas de seguridad verificadas por auditoría independiente.',
      link: 'https://cybervadis.com',
      logoRender: () => (
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-tight text-white lowercase font-sans">cybervadis</span>
        </div>
      )
    },
    {
      id: 'scrumstudy',
      name: 'SCRUMstudy',
      pill: 'CERTIFICADOS',
      pillColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      category: 'METODOLOGÍA ÁGIL',
      desc: 'Equipos certificados en metodologías ágiles de desarrollo y producto.',
      link: 'https://www.scrumstudy.com',
      logoRender: () => (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
            ✓
          </div>
          <div className="leading-tight">
            <span className="text-sm font-extrabold text-white tracking-tight">SCRUM<span className="font-normal text-slate-300">study</span></span>
          </div>
        </div>
      )
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      pill: 'PRÓXIMAMENTE',
      pillColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      category: 'SEGURIDAD DE DATOS',
      desc: 'Cumplimiento del estándar internacional de gestión de seguridad de la información.',
      link: null,
      isHighlighted: true,
      logoRender: () => (
        <div className="flex items-center">
          <span className="text-xl font-black tracking-wider text-white">ISO 27001</span>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#02050A] border-t border-b border-white/[0.06] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Respaldados por estándares líderes de la industria<span className="text-blue-500">.</span>
          </h2>
        </div>

        {/* 6 Cards Grid (3x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((item) => {
            const isHovered = hoveredCard === item.id;
            const highlighted = item.isHighlighted;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                  highlighted
                    ? 'bg-[#060B18] border border-blue-500/70 shadow-[0_0_35px_rgba(59,130,246,0.22)]'
                    : 'bg-[#060A14] border border-white/[0.08] hover:border-blue-500/50 hover:bg-[#070D1C] shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1'
                }`}
              >
                {/* Background glow accent on hover */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none ${
                    isHovered || highlighted ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Top Row: Brand Logo + Status Pill */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="h-8 flex items-center">
                    {item.logoRender()}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border font-bold ${item.pillColor}`}>
                    {item.pill}
                  </span>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex-1 flex flex-col justify-end">
                  {/* Category / Subtitle */}
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-3">
                    {item.category}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrustBadgesSection;
