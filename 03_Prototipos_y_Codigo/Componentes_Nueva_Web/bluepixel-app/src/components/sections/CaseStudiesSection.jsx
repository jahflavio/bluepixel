import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const CaseStudiesSection = ({ onOpenCase }) => {
  const sliderRef = useRef(null);

  const cases = [
    {
      id: 'lifemiles',
      client: 'Avianca / LifeMiles',
      category: 'TRAVEL · LEALTAD · LATAM',
      headline: 'Plataforma de lealtad rediseñada para aumentar retención y descubrimiento de beneficios.',
      badge: '↑ Retención',
      badgeClass: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
      tags: ['UX/UI Design', 'Web Development'],
      image: `${import.meta.env.BASE_URL}assets/lifemiles.jpg`,
      fallbackImage: `${import.meta.env.BASE_URL}case2.jpg`
    },
    {
      id: 'bimbo-data',
      client: 'Bimbo',
      category: 'CONSUMO MASIVO · ENTERPRISE',
      headline: 'Arquitectura de datos que acelera la toma de decisiones a escala global.',
      badge: '↑ Eficiencia Operacional',
      badgeClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      tags: ['UX/UI Design', 'Data Visualization', 'Design Systems'],
      image: `${import.meta.env.BASE_URL}assets/bimbo.jpg`,
      fallbackImage: `${import.meta.env.BASE_URL}case4.jpg`
    },
    {
      id: 'radioshack',
      client: 'RadioShack',
      category: 'RETAIL · E-COMMERCE',
      headline: 'E-commerce de alta conversión con reducción radical de fricción en compras.',
      badge: '↑ Conversión E-com',
      badgeClass: 'text-orange-400 bg-orange-500/15 border-orange-500/30',
      tags: ['UX/UI Design', 'Mobile Apps', 'E-Commerce'],
      image: `${import.meta.env.BASE_URL}assets/radioshack.jpg`,
      fallbackImage: `${import.meta.env.BASE_URL}case1.jpg`
    },
    {
      id: 'fr-medical',
      client: 'FR Medical',
      category: 'LOGÍSTICA QUIRÚRGICA · HEALTHCARE B2B',
      headline: 'Sistema Operativo Quirúrgico: Triage en 1.8s y ERP Sync sin migración.',
      badge: '⚡ Triage 1.8s & ERP',
      badgeClass: 'text-purple-400 bg-purple-500/15 border-purple-500/30',
      tags: ['Agentic IA', 'Protocolo MCP', 'ERP Integration'],
      image: `${import.meta.env.BASE_URL}case4.jpg`,
      fallbackImage: `${import.meta.env.BASE_URL}assets/bimbo.jpg`
    },
    {
      id: 'iqos',
      client: 'IQOS',
      category: 'CONSUMER TECH · LATAM',
      headline: 'Experiencia digital que impulsa el descubrimiento y la adopción del producto.',
      badge: '✦ Adopción Digital',
      badgeClass: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
      tags: ['UX/UI Design', 'Web Development', 'Content Strategy'],
      image: `${import.meta.env.BASE_URL}assets/iqos.jpg`,
      fallbackImage: `${import.meta.env.BASE_URL}case3.jpg`
    },
    {
      id: 'didi',
      client: 'DiDi',
      category: 'LOGÍSTICA Y MOVILIDAD · HIGH TRAFFIC',
      headline: 'Estrategia de adopción digital y UX Research para millones de usuarios.',
      badge: '↑ 87.5% Adopción',
      badgeClass: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
      tags: ['UX Research', 'Usability Testing', 'Mobile Apps'],
      image: `${import.meta.env.BASE_URL}case2.jpg`,
      fallbackImage: `${import.meta.env.BASE_URL}case3.jpg`
    }
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 420;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleCardClick = (item) => {
    if (onOpenCase) {
      onOpenCase(`Caso de Estudio: ${item.client} (${item.headline})`);
    } else {
      window.location.hash = '#/casos-de-exito';
    }
  };

  return (
    <section id="casos" className="py-24 bg-[#02050A] border-t border-b border-white/[0.06] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header exact to reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block mb-3">
            CASOS DE ÉXITO
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-4">
            Resultados reales, plataformas que evolucionaron<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Cuatro plataformas que dejaron de estar estancadas y se convirtieron en ventaja competitiva medible.
          </p>
        </div>

        {/* Carousel Container with Side Navigation Buttons */}
        <div className="relative group/carousel">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Anterior"
            className="absolute -left-3 md:left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#060A14]/85 hover:bg-blue-600/30 border border-white/15 hover:border-blue-500/50 text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-slate-300 hover:text-white" strokeWidth={2.2} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Siguiente"
            className="absolute -right-3 md:right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#060A14]/85 hover:bg-blue-600/30 border border-white/15 hover:border-blue-500/50 text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-slate-300 hover:text-white" strokeWidth={2.2} />
          </button>

          {/* Horizontal Scrollable Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-2 md:px-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cases.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => handleCardClick(item)}
                className="w-[310px] sm:w-[360px] md:w-[390px] shrink-0 bg-[#060A14] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl hover:shadow-blue-500/15 group cursor-pointer snap-start"
              >
                {/* Top Mockup Image with Floating Badge */}
                <div className="h-56 md:h-64 w-full relative overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.client}
                    onError={(e) => {
                      if (item.fallbackImage && e.target.src !== item.fallbackImage) {
                        e.target.src = item.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060A14] via-transparent to-black/20 pointer-events-none" />

                  {/* Top Right Floating Metric Pill */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wide border backdrop-blur-md shadow-lg flex items-center gap-1.5 ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Client Name */}
                    <h3 className="text-2xl font-black text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
                      {item.client}
                    </h3>

                    {/* Sector / Industry */}
                    <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold mb-4">
                      {item.category}
                    </p>

                    {/* Headline Value Proposition */}
                    <p className="text-sm text-slate-300 font-medium leading-relaxed mb-6 min-h-[44px]">
                      {item.headline}
                    </p>

                    {/* Tags Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 group-hover:border-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Link */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                    <span>VER CASO</span>
                    <span className="font-mono text-sm group-hover:translate-x-1.5 transition-transform text-blue-400">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Helper Indicator for Mobile */}
        <div className="text-center mt-8 md:hidden text-xs font-mono text-slate-500">
          ← Desliza para ver más casos →
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;
