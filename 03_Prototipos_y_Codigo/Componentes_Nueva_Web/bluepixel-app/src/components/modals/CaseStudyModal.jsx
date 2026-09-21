import React, { useEffect } from 'react';
import { X, ArrowRight, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

const CaseStudyModal = ({ caseStudy, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#040816] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"></div>

        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-white/[0.08] flex items-start justify-between gap-4 bg-[#050B1F]/60">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                {caseStudy.industry}
              </span>
              <a
                href={`#/${caseStudy.pillarRoute}`}
                onClick={onClose}
                className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors flex items-center gap-1"
              >
                <span>{caseStudy.pillarName}</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
              {caseStudy.client}
            </h2>
            <p className="text-slate-300 text-sm md:text-base mt-2 leading-relaxed">
              {caseStudy.headline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-left">
          {/* Metrics Strip */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Resultados de Negocio Cuantificados</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.results.map((res, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#02050E] border border-white/[0.08] flex flex-col justify-between">
                  <div className="text-3xl md:text-4xl font-black text-emerald-400 font-mono tracking-tight">
                    {res.value}
                  </div>
                  <div className="text-xs text-slate-300 mt-2 leading-snug">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/15">
              <div className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold mb-2 flex items-center gap-1.5">
                <span>✕</span>
                <span>El Reto Operativo Previo</span>
              </div>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/15">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>La Solución Técnica BluePixel</span>
              </div>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Stack Tecnológico & Estándares Empleados</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          {caseStudy.quote && (
            <div className="p-5 rounded-2xl bg-[#060D24] border border-white/10 relative overflow-hidden">
              <div className="text-4xl font-serif text-slate-600 absolute top-2 right-4 pointer-events-none select-none">“</div>
              <p className="text-sm md:text-base italic text-slate-200 leading-relaxed relative z-10 mb-3">
                "{caseStudy.quote}"
              </p>
              <div className="text-xs font-mono text-cyan-400 font-bold">
                — {caseStudy.author}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 border-t border-white/[0.08] bg-[#02050E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs text-slate-400 font-mono block">¿Tu empresa tiene un desafío similar?</span>
            <span className="text-sm font-bold text-white">Disponible bajo {caseStudy.pillarName}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                if (onOpenContact) {
                  onOpenContact(`Caso de Éxito: ${caseStudy.client} (${caseStudy.pillarName})`);
                }
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Cotizar proyecto con este modelo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
