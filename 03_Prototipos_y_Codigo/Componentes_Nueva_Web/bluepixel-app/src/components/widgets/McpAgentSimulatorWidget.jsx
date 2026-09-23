import React, { useState, useEffect } from 'react';

const McpAgentSimulatorWidget = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      title: 'Quirófano 24/7 (logística quirúrgica)',
      event: 'Urgencia 2:14 AM: Solicitud Kit Fijación Cirugía de Columna vía WhatsApp',
      agentStep: 'RAG Privado: Validación COFEPRIS y cruce con stock de guardia en 0.4s',
      mcpStep: 'Protocolo MCP: POST /erp/v1/orders - Reserva y despacho GPS en 0.5s',
      result: 'Cotización membretada emitida en 1.8s. 0 llamadas perdidas.',
      tag: 'Operativo Quirúrgico'
    },
    {
      title: 'Conciliación SAP + SAT',
      event: 'Cierre de mes: 1,420 facturas con discrepancia en portal bancario',
      agentStep: 'RAG Privado: Matching determinístico de UUIDs y órdenes de compra',
      mcpStep: 'Protocolo MCP: PUT /sap/accounting/reconciliation con token auditado',
      result: 'Conciliación de 40 horas reducida a 14 segundos sin error humano.',
      tag: 'Finanzas & Compliance'
    },
    {
      title: 'Cotización B2B Salesforce',
      event: 'Lead Enterprise solicita RFP de 50 licencias personalizadas',
      agentStep: 'RAG Privado: Consulta matriz de descuentos por volumen y márgenes',
      mcpStep: 'Protocolo MCP: POST /salesforce/opportunity + generación PDF',
      result: 'Propuesta formal entregada en 2.3s con seguimiento automático.',
      tag: 'Ventas Enterprise'
    }
  ];

  const current = scenarios[activeScenario];

  return (
    <div className="bg-[#050A19] border border-purple-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden text-left max-w-xl mx-auto mt-10">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500"></div>

      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-purple-300 font-bold">
            Simulador Agéntico · Protocolo MCP en Vivo
          </span>
        </div>
        <span className="text-xs font-mono font-bold text-purple-300">
          Cero Alucinaciones
        </span>
      </div>

      <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1">
        {scenarios.map((s, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveScenario(idx)}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all ${activeScenario === idx ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/30' : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'}`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="space-y-2.5 mb-4">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>1. Trigger de Entrada</span>
          </div>
          <div className="font-mono text-slate-200">{current.event}</div>
        </div>

        <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-xs">
          <div className="text-[10px] font-mono uppercase tracking-wider text-purple-300 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            <span>2. Agente Autónomo + RAG Privado</span>
          </div>
          <div className="font-mono text-slate-200">{current.agentStep}</div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs">
          <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>3. Conexión Determinística MCP (Zero Lock-In)</span>
          </div>
          <div className="font-mono text-emerald-200 font-semibold">{current.mcpStep}</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-[#02050E] border border-purple-500/30 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-mono text-slate-400 uppercase">Resultado en Producción:</div>
          <div className="text-xs font-mono font-bold text-white mt-0.5">{current.result}</div>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-1 rounded">
          {current.tag}
        </span>
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>Despliegue en 2 a 4 semanas</span>
        </div>
        <span className="text-purple-400 font-semibold">Sin tocar código legado</span>
      </div>
    </div>
  );
};


export default McpAgentSimulatorWidget;