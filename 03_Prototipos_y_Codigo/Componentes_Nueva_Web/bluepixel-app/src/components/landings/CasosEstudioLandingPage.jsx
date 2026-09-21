import React, { useState, useEffect } from 'react';
import { caseStudiesData } from '../../data/caseStudiesData';
import CaseStudyModal from '../modals/CaseStudyModal';
import MultiStepContact from '../forms/MultiStepContact';
import LeadMagnetSection from '../sections/LeadMagnetSection';
import IndustriesImpactSection from '../sections/IndustriesImpactSection';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

const FILTER_PILLARS = [
  { id: 'todos', label: 'Todos los Casos (6)' },
  { id: 'consultoria-digital', label: '01 · Consultoría & ROI' },
  { id: 'agentes-automatizacion', label: '02 · Agentes & IA' },
  { id: 'plataformas-digitales', label: '03 · Plataformas 90 Días' },
  { id: 'evolucion-digital', label: '04 · Squad Continuo & CRO' }
];

const CasosEstudioLandingPage = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedCase, setSelectedCase] = useState(null);
  const [contactPackage, setContactPackage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCases = activeFilter === 'todos' 
    ? caseStudiesData 
    : caseStudiesData.filter(c => c.pillarId === activeFilter);

  const handleOpenContact = (pkg) => {
    setContactPackage(pkg);
    const formEl = document.getElementById('contact-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#02040A] text-white text-left">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/20 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 mt-6">
          <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 rounded-full mb-6">
            ✦ WORK & PORTAFOLIO CORPORATIVO
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
            Ingeniería probada en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">producción</span>.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Resultados medibles, adopción real y fricción cero. Casos corporativos reales ejecutados bajo nuestros 4 Pilares de servicio.
          </p>
        </div>
      </section>

      {/* Aggregate Impact Section */}
      <section className="py-12 border-y border-white/[0.05] bg-[#040711]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/[0.05]">
            <div className="text-center px-4">
              <div className="text-4xl font-black text-white mb-2">+500K</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Usuarios Impactados</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-emerald-400 font-mono mb-2">99.99%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Uptime Histórico</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-cyan-400 font-mono mb-2">&gt;50</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Sistemas Integrados</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-black text-white mb-2">SOC2</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Seguridad Auditada</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs by Pillar */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block mb-2">
              ✦ FILTRAR POR PILAR DE CONTRATACIÓN
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Explora Casos por Forma de Trabajo
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTER_PILLARS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveFilter(p.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${activeFilter === p.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400' : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/20'}`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className="bg-[#050A19] border border-white/[0.08] hover:border-blue-500/40 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/15 group cursor-pointer"
            >
              {/* Image & Floating Tags */}
              <div className="h-56 w-full relative overflow-hidden bg-black/50">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A19] via-transparent to-black/30 pointer-events-none" />

                {/* Pillar Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide border border-white/20 bg-black/70 text-slate-300 backdrop-blur-md">
                    {item.pillarName.split('·')[0].trim()}
                  </span>
                </div>

                {/* Metric Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wide border backdrop-blur-md shadow-lg ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
                    {item.client}
                  </h3>
                  <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold mb-4">
                    {item.industry}
                  </p>
                  <p className="text-sm text-slate-300 font-medium leading-relaxed mb-6">
                    {item.headline}
                  </p>

                  {/* 3 Metric Preview Chips */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#02050E] border border-white/[0.06] mb-6">
                    {item.results.map((res, rIdx) => (
                      <div key={rIdx} className="text-center">
                        <div className="text-sm md:text-base font-black text-emerald-400 font-mono">{res.value}</div>
                        <div className="text-[9px] font-mono text-slate-400 truncate mt-0.5" title={res.label}>
                          {res.label.split(' ')[0]} {res.label.split(' ')[1] || ''}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                  <span>Ver Estudio Completo</span>
                  <span className="font-mono text-sm group-hover:translate-x-1.5 transition-transform text-blue-400">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Impact Breakdown */}
      <IndustriesImpactSection onSelectIndustryCase={(client) => handleOpenContact(`Interés en Industria: ${client}`)} />

      {/* Lead Magnet */}
      <LeadMagnetSection />

      {/* Direct Contact Form Section */}
      <section id="contact-form-section" className="py-24 px-6 relative border-t border-white/[0.05] bg-[#040711]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              ¿Listo para ser nuestro próximo caso de éxito?
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Comienza evaluando tu proyecto con certidumbre técnica y financiera previa.
            </p>
          </div>
          <div className="bg-[#060A14] border border-white/[0.08] rounded-3xl p-2 md:p-6 shadow-2xl relative">
            <MultiStepContact 
              hideCloseButton={true} 
              preselectedPackage={contactPackage || 'Diagnóstico FutureProof (IMPATH)'} 
            />
          </div>
        </div>
      </section>

      {/* Deep-Dive Case Study Modal */}
      {selectedCase && (
        <CaseStudyModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
          onOpenContact={handleOpenContact}
        />
      )}
    </div>
  );
};

export default CasosEstudioLandingPage;
