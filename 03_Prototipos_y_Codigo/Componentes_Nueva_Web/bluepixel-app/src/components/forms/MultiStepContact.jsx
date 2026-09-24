import React, { useState } from 'react';

const MultiStepContact = ({ preselectedPackage }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    role: '',
    phone: '',
    industry: '',
    urgency: '',
    budget: '',
    workflow: '',
    consentData: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmitFinal = (e) => {
    e.preventDefault();
    console.log('Submitting:', { ...formData, preselectedPackage });
    setSubmitted(true);
  };

  const inputClass = 'w-full bg-[#040811]/80 border border-white/[0.08] rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-slate-600';
  const labelClass = 'block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 font-bold';

  return (
    <div className="w-full">
      {/* Context Banner */}
      {preselectedPackage && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-blue-600/10 border border-blue-500/25 flex items-center gap-3">
          <span className="text-blue-400 text-lg">🎯</span>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">Servicio seleccionado</div>
            <div className="text-sm font-semibold text-white">{preselectedPackage}</div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-2 block">
          ✦ DIAGNÓSTICO TÉCNICO — RESPUESTA &lt; 24 HRS
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-2">
          Cuéntanos tu reto<span className="text-blue-500">.</span>
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Un arquitecto senior de BluePixel revisará tu caso y te enviará un diagnóstico de viabilidad técnica en menos de 24 horas.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest mb-2">
          <span className={`transition-colors ${step >= 1 ? 'text-blue-400 font-bold' : 'text-slate-600'}`}>01 · Tú</span>
          <span className={`transition-colors ${step >= 2 ? 'text-blue-400 font-bold' : 'text-slate-600'}`}>02 · Empresa</span>
          <span className={`transition-colors ${step === 3 ? 'text-blue-400 font-bold' : 'text-slate-600'}`}>03 · Necesidad</span>
        </div>
        <div className="flex gap-1.5 w-full h-1 rounded-full overflow-hidden">
          {[1, 2, 3].map(s => (
            <div key={s} className={`h-full flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-white/[0.06]'}`} />
          ))}
        </div>
      </div>

      {/* Trust chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['NDA desde el primer día', 'Arquitectos, no vendedores', 'Sin costo ni compromiso'].map((item, i) => (
          <span key={i} className="text-[10px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            ✔ {item}
          </span>
        ))}
      </div>

      {!submitted ? (
        <div>
          {/* STEP 1 */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Tus datos de contacto<span className="text-blue-500">.</span></h3>
                <p className="text-slate-400 text-xs mb-4">Para saber con quién nos comunicamos directamente.</p>
              </div>
              <div>
                <label className={labelClass}>Nombre completo</label>
                <input required type="text" value={formData.fullName} onChange={e => handleChange('fullName', e.target.value)} placeholder="Ej. Roberto García" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Correo corporativo</label>
                <input required type="email" value={formData.workEmail} onChange={e => handleChange('workEmail', e.target.value)} placeholder="roberto@empresa.com" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Teléfono (opcional)</label>
                <input type="tel" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} placeholder="+52 55 1234 5678" className={inputClass} />
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 group">
                  <span>Siguiente Paso</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Datos de tu empresa<span className="text-blue-500">.</span></h3>
                <p className="text-slate-400 text-xs mb-4">Para asignar al arquitecto ideal a tu sector operativo.</p>
              </div>
              <div>
                <label className={labelClass}>Nombre de la empresa</label>
                <input required type="text" value={formData.company} onChange={e => handleChange('company', e.target.value)} placeholder="Ej. Grupo Industrial X" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Tu cargo</label>
                <input required type="text" value={formData.role} onChange={e => handleChange('role', e.target.value)} placeholder="Ej. Director de Operaciones" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Industria</label>
                <div className="flex flex-wrap gap-2">
                  {['Manufactura', 'Retail B2C', 'Logística', 'Fin. & Seguros', 'Salud', 'Gobierno', 'Otro'].map(ind => (
                    <button type="button" key={ind} onClick={() => handleChange('industry', ind)}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${formData.industry === ind ? 'bg-blue-600 text-white border-blue-500' : 'bg-white/[0.04] text-slate-400 border-white/[0.08] hover:text-white hover:border-white/20'}`}>
                      {ind}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <button type="button" onClick={handleBack} className="flex-none px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white text-sm font-semibold transition-all">← Atrás</button>
                <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 group">
                  <span>Continuar</span><span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmitFinal} className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {preselectedPackage ? `Tu necesidad en: ${preselectedPackage}` : 'Describe tu reto técnico'}
                  <span className="text-blue-500">.</span>
                </h3>
                <p className="text-slate-400 text-xs mb-4">Describe la fricción que deseas resolver.</p>
              </div>
              <div>
                <label className={labelClass}>¿Qué proceso o fricción quieres resolver?</label>
                <textarea required rows="4" value={formData.workflow} onChange={e => handleChange('workflow', e.target.value)}
                  placeholder={preselectedPackage
                    ? `¿Cuál es el impacto actual en tu operación relacionado con "${preselectedPackage}"?`
                    : 'Ej. Queremos automatizar la conciliación bancaria entre SAP y el SAT...'}
                  className={`${inputClass} resize-none`} />
              </div>
              <div>
                <label className={labelClass}>Urgencia del proyecto</label>
                <div className="flex gap-2 flex-wrap">
                  {['ASAP', 'Este trimestre', '6 meses', 'Explorando'].map(u => (
                    <button type="button" key={u} onClick={() => handleChange('urgency', u)}
                      className={`flex-1 text-[11px] px-2 py-2 rounded-lg border font-medium transition-all text-center ${formData.urgency === u ? 'bg-blue-600 text-white border-blue-500' : 'bg-white/[0.04] text-slate-400 border-white/[0.08] hover:text-white'}`}>
                      {u}
                    </button>
                  ))}
                </div>
              </div>
              {/* Rango de inversion: califica al prospecto y ancla la
                  conversacion antes de la primera llamada. Opcional a
                  proposito, para no frenar el envio de quien aun no lo sabe. */}
              <div>
                <label className={labelClass}>Rango de inversión considerado (opcional)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['$300K – $800K', '$800K – $2M', '$2M – $5M', '$5M+'].map(b => (
                    <button type="button" key={b} onClick={() => handleChange('budget', formData.budget === b ? '' : b)}
                      className={`text-[11px] px-2 py-2 rounded-lg border font-medium transition-all text-center ${formData.budget === b ? 'bg-blue-600 text-white border-blue-500' : 'bg-white/[0.04] text-slate-400 border-white/[0.08] hover:text-white'}`}>
                      {b}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-slate-500 mt-1.5 font-mono">Pesos mexicanos. Nos ayuda a proponerte el alcance correcto desde la primera sesión.</p>
              </div>
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="relative mt-0.5 flex-shrink-0" onClick={() => handleChange('consentData', !formData.consentData)}>
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${formData.consentData ? 'bg-blue-600 border-blue-500' : 'bg-white/[0.04] border-white/20'}`}>
                      {formData.consentData && <span className="text-white text-[10px] font-bold leading-none">✓</span>}
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 leading-relaxed">
                    Acepto el tratamiento de mis datos bajo la <span className="text-blue-400 underline">Política de Privacidad</span> de BluePixel y la LFPDPPP. No compartimos información con terceros.
                  </span>
                </label>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <button type="button" onClick={handleBack} className="flex-none px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white text-sm font-semibold transition-all">← Atrás</button>
                <button type="submit" disabled={!formData.consentData}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 group">
                  <span>Solicitar Diagnóstico Técnico</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        /* SUCCESS STATE */
        <div className="text-center py-10">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl shadow-emerald-500/10">✓</div>
          <h4 className="text-2xl font-black text-white mb-3">Diagnóstico Recibido</h4>
          <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed mb-2">
            Gracias <strong className="text-white">{formData.fullName || 'por escribirnos'}</strong>. Un arquitecto te contactará en menos de{' '}
            <span className="text-emerald-400 font-mono font-bold">24 horas hábiles</span>.
          </p>
          {preselectedPackage && (
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-300 text-xs font-mono">
              🎯 {preselectedPackage}
            </div>
          )}
          <div className="mt-8">
            <button
              onClick={() => { setSubmitted(false); setStep(1); setFormData({ fullName: '', workEmail: '', company: '', role: '', phone: '', industry: '', urgency: '', workflow: '', consentData: false }); }}
              className="px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white text-xs font-semibold transition-all"
            >
              Enviar otra consulta
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepContact;
