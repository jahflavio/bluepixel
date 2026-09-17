import React, { useState, useEffect } from 'react';
import MultiStepContact from '../../forms/MultiStepContact';

const ServiceLandingTemplate = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Quiz State
  const [quizScores, setQuizScores] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleQuizPick = (qIndex, score) => {
    const newScores = { ...quizScores, [qIndex]: score };
    setQuizScores(newScores);
    
    // Check if all 4 questions answered
    if (Object.keys(newScores).length === 4) {
      setShowResult(true);
    }
  };

  const getQuizResult = () => {
    const total = Object.values(quizScores).reduce((a, b) => a + b, 0);
    if (total >= 10) return { band: 'Madurez Avanzada', desc: 'Tu operación tiene bases sólidas. El siguiente paso es escalar agresivamente con arquitecturas nativas de IA para multiplicar márgenes.' };
    if (total >= 6) return { band: 'Madurez Intermedia', desc: 'Tienes partes automatizadas, pero hay cuellos de botella críticos. Necesitamos integrar tus sistemas y estandarizar procesos para evitar deuda técnica.' };
    return { band: 'Madurez Temprana', desc: 'Tu operación depende fuertemente de intervención manual. El ROI de automatizar y rediseñar tus procesos clave será masivo e inmediato.' };
  };

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-purple-500/30 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pb-24 overflow-hidden border-b border-white/[0.08]">
        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-12 items-center text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-widest text-purple-400 font-bold border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              {data.eyebrow}
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 font-display">
              {data.title}
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              {data.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] flex items-center gap-2"
              >
                <span>Agenda tu Diagnóstico</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <div className="border-b border-white/[0.08] bg-[#060A14]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          <div className="flex flex-col items-center text-center pt-8 md:pt-0">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">10+</div>
            <div className="text-sm text-slate-400">años construyendo<br/>plataformas</div>
          </div>
          <div className="flex flex-col items-center text-center pt-8 md:pt-0">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-2 tracking-tighter">200+</div>
            <div className="text-sm text-slate-400">proyectos corporativos<br/>desplegados</div>
          </div>
          <div className="flex flex-col items-center text-center pt-8 md:pt-0">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">#1</div>
            <div className="text-sm text-slate-400 mb-1">Top Agencia en México</div>
            <div className="text-[10px] font-mono text-purple-400 tracking-widest uppercase">DesignRush</div>
          </div>
        </div>
      </div>

      {/* 3. PAIN POINTS */}
      {data.painPoints && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-7xl mx-auto px-6">
            <span className="block text-xs font-mono uppercase tracking-widest text-purple-400 mb-4">{data.painPoints.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12 max-w-3xl">{data.painPoints.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.painPoints.items.map((item, idx) => (
                <div key={idx} className="bg-[#060A14] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xl font-black">
                    ✕
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. MATRIX / EVOLUTION */}
      {data.matrix && (
        <section className="py-24 border-b border-white/[0.08] bg-[#060A14]">
          <div className="max-w-7xl mx-auto px-6">
            <span className="block text-xs font-mono uppercase tracking-widest text-purple-400 mb-4">{data.matrix.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl">{data.matrix.title}</h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-12">{data.matrix.subtitle}</p>

            <div className="overflow-x-auto border border-white/[0.08] rounded-2xl bg-[#02040A]">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    {data.matrix.headers.map((h, idx) => (
                      <th key={idx} className={`p-5 text-xs font-mono tracking-widest uppercase border-b border-white/[0.08] ${idx === data.matrix.headers.length - 1 ? 'text-purple-400 font-bold' : 'text-slate-400'}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.08]">
                  {data.matrix.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-5 font-bold text-white text-sm bg-[#060A14] whitespace-nowrap">{row.label}</td>
                      {row.cols.map((col, cIdx) => (
                        <td key={cIdx} className={`p-5 text-sm ${cIdx === row.cols.length - 1 ? 'text-purple-400 font-semibold bg-purple-500/5' : 'text-slate-300'}`}>
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {data.callout1 && (
              <div className="mt-12 p-8 md:p-10 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                <p className="text-lg md:text-xl text-purple-100 leading-relaxed font-medium">
                  {data.callout1}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. SPECS / SOLUTIONS */}
      {data.specs && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-7xl mx-auto px-6">
            <span className="block text-xs font-mono uppercase tracking-widest text-purple-400 mb-4">{data.specs.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl">{data.specs.title}</h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-12">{data.specs.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.specs.items.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-b from-[#060A14] to-[#02040A] border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl font-black">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. QUIZ INTERACTIVO */}
      {data.quiz && (
        <section className="py-24 border-b border-white/[0.08] bg-[#060A14]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">{data.quiz.title}</h2>
              <p className="text-slate-400 text-lg">{data.quiz.subtitle}</p>
            </div>

            <div className="bg-[#02040A] border border-white/[0.08] rounded-3xl p-6 md:p-12 shadow-2xl">
              <div className="space-y-12">
                {data.quiz.questions.map((q, qIdx) => (
                  <div key={qIdx}>
                    <h3 className="text-sm font-bold text-white mb-4">{q.q}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {q.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleQuizPick(qIdx, opt.score)}
                          className={`text-left p-4 rounded-xl border text-sm transition-all duration-200 leading-relaxed ${quizScores[qIdx] === opt.score ? 'bg-purple-600/20 border-purple-500 text-white font-semibold shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'bg-[#060A14] border-white/[0.08] text-slate-400 hover:border-white/[0.2] hover:text-slate-200'}`}
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quiz Result */}
              {showResult && (
                <div className="mt-12 pt-10 border-t border-white/[0.08] text-center animate-[fadeIn_0.5s_ease-out]">
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
                    {getQuizResult().band}
                  </h3>
                  <p className="text-slate-300 leading-relaxed max-w-lg mx-auto mb-8">
                    {getQuizResult().desc}
                  </p>
                  <button 
                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]"
                  >
                    Diagnosticar mi Operación →
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 7. DELIVERABLES */}
      {data.deliverables && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-7xl mx-auto px-6">
            <span className="block text-xs font-mono uppercase tracking-widest text-purple-400 mb-4">{data.deliverables.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12 max-w-3xl">{data.deliverables.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.deliverables.items.map((item, idx) => (
                <div key={idx} className="bg-[#060A14] border border-white/[0.08] rounded-xl p-6 flex gap-4 items-start hover:border-purple-500/30 transition-colors">
                  <span className="text-xs font-black text-purple-400/50 font-mono mt-1">{item.num}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. TIMELINE */}
      {data.timeline && (
        <section className="py-24 border-b border-white/[0.08] bg-[#060A14]">
          <div className="max-w-5xl mx-auto px-6">
            <span className="block text-xs font-mono uppercase tracking-widest text-purple-400 mb-4">{data.timeline.eyebrow}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl">{data.timeline.title}</h2>
            <p className="text-slate-400 text-lg max-w-2xl mb-16">{data.timeline.subtitle}</p>

            <div className="relative border-l border-white/[0.1] ml-4 md:ml-6 space-y-12 pb-8">
              {data.timeline.steps.map((step, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#02040A] border border-purple-500 text-purple-400 flex items-center justify-center text-xs font-bold font-mono">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-2xl">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full uppercase tracking-wider">
                        Entregable: {del}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. FAQs */}
      {data.faqs && (
        <section className="py-24 border-b border-white/[0.08] bg-[#02040A]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-12 text-center">Preguntas Frecuentes</h2>
            
            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className={`border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-200 ${openFaq === idx ? 'bg-purple-500/5 border-purple-500/30' : 'bg-[#060A14]'}`}>
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-sm md:text-base text-white">{faq.q}</span>
                    <span className={`text-purple-400 text-xl transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span>
                  </button>
                  <div className={`px-6 pb-6 text-sm text-slate-400 leading-relaxed ${openFaq === idx ? 'block' : 'hidden'}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. CTA / FORM */}
      <section id="contact-form" className="py-24 relative overflow-hidden bg-[#060A14]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">¿Listo para transformar tu operación?</h2>
            <p className="text-slate-400 text-lg">Solicita tu diagnóstico técnico y de negocio. Recibirás respuesta en menos de 2 horas.</p>
          </div>
          
          <div className="bg-[#02040A] border border-white/[0.1] rounded-3xl p-4 md:p-8 shadow-2xl">
            <MultiStepContact hideCloseButton={true} preselectedPackage="Diagnóstico Operativo" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceLandingTemplate;
