import React, { useState } from 'react';

/**
 * HeroPromptEngine.jsx
 * Componente de Product-Led Growth (PLG) para el Hero de BluePixel 2026.
 * Inspirado en el benchmark de Vstorm.co y adaptado a los casos reales de BluePixel.
 */

export const PRESETS = [
  {
    id: 'cotizaciones',
    label: 'Cotizaciones lentas en Excel',
    prompt: 'Nuestros ejecutivos tardan hasta 48 horas en cotizar productos complejos en hojas de cálculo y se pierden ventas.',
    categoria: 'AUTOMATIZACIÓN COMERCIAL & PRICING',
    impacto: 'Pérdida de 35% de leads calificados por demora en respuesta. 120 horas hombre/mes consumidas.',
    arquitectura: [
      { paso: '01. Ingesta', desc: 'Agente Extractor captura requerimientos desde WhatsApp / Correo / Formulario.' },
      { paso: '02. MCP Grounding', desc: 'Servidor MCP consulta reglas de inventario, márgenes y tarifas en ERP (SAP/Salesforce).' },
      { paso: '03. Generación', desc: 'Agente cotizador genera PDF validado con firma digital en 90 segundos.' },
      { paso: '04. Human-in-the-loop', desc: 'Si el margen es < 18%, escala automáticamente a Director Comercial para visto bueno.' }
    ],
    casoAnalogo: 'Caso FR Medical / Bimbo: Reducción del tiempo de cotización de 48 hrs a 3 minutos con 0% de error de cálculo.',
    roiEstimado: 'Ahorro de $680,000 MXN anuales + incremento de 22% en win-rate comercial.',
    tiempoImplementacion: '4 a 6 semanas (Fase BUILD)'
  },
  {
    id: 'conciliacion',
    label: 'Conciliación contable & ERP',
    prompt: 'El equipo contable concilia manualmente miles de facturas y transferencias bancarias contra el ERP a fin de mes.',
    categoria: 'BACK-OFFICE FINANCIERO & COMPLIANCE',
    impacto: 'Demoras de 10 días en cierre mensual y multas por discrepancias fiscales ante el SAT.',
    arquitectura: [
      { paso: '01. Conexión Bancaria', desc: 'Agente Financiero conecta vía API a bancos y descarga estados de cuenta y XMLs del SAT.' },
      { paso: '02. Cruce Determinístico', desc: 'Lógica matemática estricta coteja RFC, montos y órdenes de compra en el ERP.' },
      { paso: '03. Reconciliación', desc: 'Asiento contable automático para el 94% de transacciones coincidentes.' },
      { paso: '04. Bandeja de Anomalías', desc: 'Solo el 6% de transacciones con discrepancia llega a revisión del contador jefe.' }
    ],
    casoAnalogo: 'Caso RadioShack / Retail: Cierre contable acelerado de 12 días a 18 horas continuas.',
    roiEstimado: 'Liberación de 160 hrs hombre mensuales de contadores senior.',
    tiempoImplementacion: '6 semanas'
  },
  {
    id: 'checkout',
    label: 'Fuga en checkout (IMPATH)',
    prompt: 'Nuestra plataforma digital tiene una tasa de abandono del 68% en el paso 3 del flujo de pago.',
    categoria: 'UX INTEL & CONVERSIÓN TRANSACCIONAL',
    impacto: '$1.4M MXN en ingresos perdidos cada trimestre por fricción cognitiva y errores de validación.',
    arquitectura: [
      { paso: '01. Detección IMPATH', desc: 'Gemelos digitales simulan la navegación y señalan fricción en formulario de dirección y token.' },
      { paso: '02. Rediseño UX', desc: 'Simplificación a checkout de 1 solo paso con guardado seguro de credenciales.' },
      { paso: '03. Agente de Rescate', desc: 'Agente de retención detecta abandono en tiempo real y activa recordatorio contextual vía WhatsApp.' },
      { paso: '04. Mixpanel Score', desc: 'Monitoreo de UX Health Score continuo para evitar regresiones de usabilidad.' }
    ],
    casoAnalogo: 'Caso LifeMiles / Loyalty LATAM: Aumento del 28% en tasa de conversión en pasarelas móviles.',
    roiEstimado: 'Recuperación de $3.8M MXN en facturación retenida el primer año.',
    tiempoImplementacion: '3 a 5 semanas'
  },
  {
    id: 'soporte',
    label: 'Atención 24/7 sin alucinaciones',
    prompt: 'Queremos automatizar el soporte y atención al cliente en WhatsApp sin que la IA invente datos falsos ni dañe la marca.',
    categoria: 'CUSTOMER EXPERIENCE & RAG BLINDADO',
    impacto: 'Pérdida de clientes en fines de semana y costos de call-center que crecen linealmente con el negocio.',
    arquitectura: [
      { paso: '01. RAG Seguro', desc: 'El agente responde estrictamente basado en la base de conocimiento oficial de la empresa.' },
      { paso: '02. Protocolo MCP', desc: 'El agente consulta el estado real de pedidos en base de datos sin inventar números.' },
      { paso: '03. Aislamiento', desc: 'Los datos de clientes nunca entrenan modelos públicos de terceros.' },
      { paso: '04. Traspaso Fluido', desc: 'Detección de sentimiento: si el cliente está molesto, transfiere al ejecutivo con resumen previo.' }
    ],
    casoAnalogo: 'Caso Avianca / DiDi: 78% de consultas de primer nivel resueltas de forma autónoma con 4.8/5 en CSAT.',
    roiEstimado: 'Reducción del 55% en costo operativo de atención a clientes.',
    tiempoImplementacion: '4 semanas'
  }
];

export const HeroPromptEngine = ({ onSelectSolution }) => {
  const [inputVal, setInputVal] = useState('');
  const [activePreset, setActivePreset] = useState(PRESETS[0]);

  const handleSelectPreset = (preset) => {
    setActivePreset(preset);
    setInputVal(preset.prompt);
    if (onSelectSolution) onSelectSolution(preset);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const solution = {
      ...activePreset,
      prompt: inputVal || activePreset.prompt
    };
    if (onSelectSolution) onSelectSolution(solution);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-[#0A0E1A]/95 border border-white/[0.12] rounded-2xl p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/15">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex items-center gap-3 flex-1 px-3">
            <span className="text-blue-400 text-lg">✦</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Describe un cuello de botella de tu empresa (o selecciona un ejemplo)..."
              className="w-full bg-transparent text-white placeholder-slate-500 text-sm md:text-base focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 flex-shrink-0 shadow-lg shadow-blue-600/30">
            <span>Ver Solución Técnica</span>
            <span className="text-base font-bold">↗</span>
          </button>
        </form>

        {/* Preset Chips */}
        <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-2 px-2 text-left">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mr-1">Casos Típicos:</span>
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => handleSelectPreset(p)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-150 flex items-center gap-1.5 ${
                activePreset.id === p.id && inputVal === p.prompt
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50'
                  : 'bg-[#131D35]/70 text-slate-400 hover:text-white border border-white/[0.05] hover:bg-[#1A2540]'
              }`}>
              <span>◈</span>
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-3 font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
        <span>Motor de diagnóstico en vivo · Basado en casos reales de BluePixel</span>
      </div>
    </div>
  );
};

export default HeroPromptEngine;
