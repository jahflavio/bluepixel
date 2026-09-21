import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { caseStudiesData } from '../../data/caseStudiesData';
import CaseStudyModal from '../modals/CaseStudyModal';

const CaseStudiesSection = ({ onOpenCase }) => {
  const sliderRef = useRef(null);
  const [selectedCase, setSelectedCase] = useState(null);

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
    setSelectedCase(item);
  };

  return (
    <section id="casos" className="py-24 bg-[#02050A] border-t border-b border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block mb-3">
            ✦ CASOS DE ÉXITO ENTERPRISE
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-4">
            Resultados reales, plataformas que evolucionaron<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Explora cómo ayudamos a marcas líderes de LATAM a transformar cuellos de botella en ventaja competitiva y retorno financiero demostrable.
          </p>
        </div>

        {/* Carousel Container with Side Navigation Buttons */}
        <div className="relative group/carousel">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Anterior"
            className="absolute -left-3 md:left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#060A14]/90 hover:bg-blue-600/30 border border-white/15 hover:border-blue-500/50 text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-slate-300 hover:text-white" strokeWidth={2.2} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Siguiente"
            className="absolute -right-3 md:right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#060A14]/90 hover:bg-blue-600/30 border border-white/15 hover:border-blue-500/50 text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-slate-300 hover:text-white" strokeWidth={2.2} />
          </button>

          {/* Horizontal Scrollable Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-2 md:px-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {caseStudiesData.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => handleCardClick(item)}
                className="w-[310px] sm:w-[360px] md:w-[390px] shrink-0 bg-[#060A14] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl hover:shadow-blue-500/15 group cursor-pointer snap-start text-left"
              >
                {/* Top Mockup Image with Floating Badges */}
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
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060A14] via-transparent to-black/30 pointer-events-none" />

                  {/* Top Left Pillar Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide border border-white/20 bg-black/60 text-slate-300 backdrop-blur-md shadow-lg">
                      {item.pillarName.split('·')[0].trim()}
                    </span>
                  </div>

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
                      {item.industry}
                    </p>

                    {/* Headline Value Proposition */}
                    <p className="text-sm text-slate-300 font-medium leading-relaxed mb-5 min-h-[44px]">
                      {item.headline}
                    </p>

                    {/* Tags Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-400 group-hover:border-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Link */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                    <span>EXPLORAR CASO A FONDO</span>
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

      {/* Deep-Dive Case Study Modal */}
      {selectedCase && (
        <CaseStudyModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
          onOpenContact={onOpenCase}
        />
      )}
    </section>
  );
};

export default CaseStudiesSection;
