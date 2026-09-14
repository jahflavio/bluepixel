import React, { useState, useEffect } from 'react';

const AgentTerminalDemo = () => {
      const [activeStep, setActiveStep] = useState(0);
      const [terminalLines, setTerminalLines] = useState([]);
      
      const steps = [
        {
          id: '01',
          title: 'Ingesta Multicanal',
          desc: 'La solicitud de cotización llega por correo con contexto disperso y PDFs adjuntos.',
          logs: [
            '[00:00] task received - quote_request_#992',
            '[00:01] parse - extract text from attached PDF',
            '[00:03] identify - customer ID and 14 requested SKUs'
          ]
        },
        {
          id: '02',
          title: 'Retrieve (MCP)',
          desc: 'El agente consulta el ERP (SAP) en tiempo real para verificar stock y precios.',
          logs: [
            '[00:04] tool_call - mcp_query_sap (stock, pricing)',
            '[00:07] mcp_response - 12 SKUs in stock, 2 backordered',
            '[00:08] tool_call - mcp_query_crm (customer_tier)',
            '[00:10] mcp_response - tier: enterprise (15% volume discount)'
          ]
        },
        {
          id: '03',
          title: 'Verify',
          desc: 'Se cruzan los datos generados contra las reglas de negocio y márgenes operativos.',
          logs: [
            '[00:11] verify - cross-check pricing against min_margin_policy',
            '[00:14] verify - policy passed (margin at 22%)',
            '[00:15] draft - generate verified quote structure'
          ]
        },
        {
          id: '04',
          title: 'Gate & Output',
          desc: 'Se genera el PDF formal. Si hay excepciones, se rutea a un humano para aprobación.',
          logs: [
            '[00:17] tool_call - generate_pdf (quote_#992)',
            '[00:20] routing - standard parameters met -> dispatch to client',
            '[00:21] dispatch - email sent to customer',
            '[00:21] process_complete - awaiting client signature'
          ]
        }
      ];

      useEffect(() => {
        let currentStep = 0;
        let currentLine = 0;
        let isRunning = true;

        const processNextLog = () => {
          if (!isRunning) return;

          if (currentStep < steps.length) {
            setActiveStep(currentStep);
            
            if (currentLine < steps[currentStep].logs.length) {
              setTerminalLines(prev => [...prev, {
                text: steps[currentStep].logs[currentLine],
                step: currentStep
              }]);
              currentLine++;
              setTimeout(processNextLog, 150 + Math.random() * 200); // Random typing delay
            } else {
              currentStep++;
              currentLine = 0;
              setTimeout(processNextLog, 400); // Wait before next step
            }
          }
        };

        const timer = setTimeout(processNextLog, 1000);
        return () => {
          isRunning = false;
          clearTimeout(timer);
        };
      }, []);

      return (
        <section className="py-24 px-6 md:px-12 bg-navy-950 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-red-500 font-bold mb-4 block">
                UNDER THE HOOD
              </span>
              <h2 className="md: mb-6 md: lg: font-black font-display md: lg: tracking-tight leading-[1.15] text-2xl md:text-3xl lg:text-4xl">
                Lo que hace un agente en producción<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl">
                Extrae, verifica, ejecuta herramientas y enruta casos límite a un humano cuando las políticas lo requieren. Cada paso queda registrado en la bitácora de auditoría.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              
              {/* Left Column: Timeline */}
              <div className="lg:col-span-4 relative pl-4 md:pl-0">
                <div className="relative z-10">
                  {steps.map((step, idx) => {
                    const isActive = idx === activeStep;
                    const isPast = idx < activeStep;
                    
                    return (
                      <div key={idx} className="flex gap-6 relative">
                        
                        {/* Timeline Node & Line Segment */}
                        <div className="flex flex-col items-center shrink-0 w-6">
                          {/* Node */}
                          <div className={`w-6 h-6 shrink-0 mt-1 rounded-full flex items-center justify-center border-2 transition-colors duration-500 shadow-[0_0_0_4px_rgb(10,14,28)] z-10 relative ${isActive ? 'border-red-500 bg-[#0A0E1C]' : isPast ? 'border-red-500 bg-red-500' : 'border-white/[0.2] bg-[#0A0E1C]'}`}>
                            {isActive && (
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                            )}
                          </div>
                          
                          {/* Segment Line */}
                          {idx !== steps.length - 1 && (
                            <div className="w-[2px] flex-grow bg-white/[0.05] my-2 rounded-full overflow-hidden min-h-[48px]">
                              <div className={`w-full bg-red-500 transition-all duration-1000 ease-in-out ${isPast ? 'h-full' : 'h-0'}`}></div>
                            </div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className={`transition-opacity duration-500 flex-1 ${idx !== steps.length - 1 ? 'pb-12' : ''} ${isActive || isPast ? 'opacity-100' : 'opacity-40'}`}>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-mono text-red-400 font-bold">{step.id}</span>
                            <h4 className="text-white font-bold text-lg">{step.title}</h4>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Terminal & Metrics */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                
                {/* Terminal Window */}
                <div className="bg-navy-900 border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Window Chrome */}
                  <div className="bg-navy-950 border-b border-white/[0.08] px-4 py-3 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 flex items-center gap-4">
                      <span>agent · quote-generator</span>
                      <div className="flex items-center gap-1.5 border border-white/[0.05] bg-white/[0.02] px-2 py-0.5 rounded-full">
                        <span>PRODUCTION SHAPE</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-white font-bold">DEMO</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Terminal Content */}
                  <div className="p-6 h-[320px] overflow-y-auto font-mono text-xs md:text-sm leading-relaxed flex flex-col">
                    {terminalLines.map((line, idx) => (
                      <div key={idx} className="mb-2 animate-fadeIn flex">
                        <span className="text-slate-500 w-16 shrink-0">{line.text?.substring(0, 7)}</span>
                        <span className={
                          line.text?.includes('task received') ? 'text-white font-bold' :
                          line.text?.includes('tool_call') ? 'text-blue-400' :
                          line.text?.includes('mcp_response') ? 'text-emerald-400' :
                          line.text?.includes('verify') ? 'text-purple-400' :
                          line.text?.includes('routing') || line.text?.includes('dispatch') ? 'text-amber-400' :
                          'text-slate-300'
                        }>
                          {line.text?.substring(7)}
                        </span>
                      </div>
                    ))}
                    {activeStep < steps.length && (
                      <div className="flex mt-2">
                        <span className="w-2 h-4 bg-slate-400 animate-pulse"></span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-navy-900 border border-white/[0.06] rounded-xl p-5 flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">TIEMPO DE RESOLUCIÓN</span>
                    <span className="text-2xl font-black text-white">21s</span>
                  </div>
                  <div className="bg-navy-900 border border-white/[0.06] rounded-xl p-5 flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">LLAMADAS MCP (ERP)</span>
                    <span className="text-2xl font-black text-white">2</span>
                  </div>
                  <div className="bg-navy-900 border border-white/[0.06] rounded-xl p-5 flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">AUDIT COVERAGE</span>
                    <span className="text-2xl font-black text-white">100%</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 mt-2 px-2">
                  Walkthrough ilustrativo de un agente cotizador — el registro de bitácora está basado en telemetría real (anonimizada) de un sistema de cotización B2B integrado con SAP y Salesforce.
                </p>
              </div>

            </div>
          </div>
        </section>
      );
    };

export default AgentTerminalDemo;
