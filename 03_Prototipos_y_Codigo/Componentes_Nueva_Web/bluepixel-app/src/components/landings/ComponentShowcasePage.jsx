import React, { useState } from 'react';
import ThreeWaysToWork from '../sections/ThreeWaysToWork';
import SixCapabilitiesGrid from '../sections/SixCapabilitiesGrid';
import TechnicalSovereignty from '../sections/TechnicalSovereignty';
import ImpathFrictionSection from '../sections/ImpathFrictionSection';
import AgentTerminalDemo from '../sections/AgentTerminalDemo';
import WorkflowTeardown from '../sections/WorkflowTeardown';
import AgenticTechStack from '../sections/AgenticTechStack';
import ThreeClustersOverview from '../sections/ThreeClustersOverview';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import TrustBadgesSection from '../sections/TrustBadgesSection';
import SocialProofSection from '../sections/SocialProofSection';
import IndustriesImpactSection from '../sections/IndustriesImpactSection';
import EngineeringLeadership from '../sections/EngineeringLeadership';
import FAQSection from '../sections/FAQSection';
import LeadMagnetSection from '../sections/LeadMagnetSection';
import PostContactSLA from '../sections/PostContactSLA';
import HomeDirectorySection from '../sections/HomeDirectorySection';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../layout/Footer';

const ComponentWrapper = ({ id, number, name, filePath, status, statusColor, desc, targetUse, children }) => {
  return (
    <div id={id} className="scroll-mt-24 mb-20">
      {/* Component Header / Meta Toolbar */}
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <div className="bg-[#0B101D] border border-white/10 rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 font-mono text-xs font-bold text-blue-400 flex items-center justify-center">
              {number}
            </span>
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-white font-bold text-base md:text-lg font-mono">
                  &lt;{name} /&gt;
                </h3>
                <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border font-semibold ${statusColor}`}>
                  {status}
                </span>
              </div>
              <p className="text-slate-400 text-xs mt-0.5">
                {desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 shrink-0">
            <span className="text-slate-400">📁</span>
            <span className="text-slate-300">{filePath}</span>
          </div>
        </div>
        {targetUse && (
          <div className="text-[11px] text-slate-400 px-2 pt-2 flex items-center gap-2">
            <span className="text-blue-400 font-bold font-mono">💡 DESTINO RECOMENDADO:</span>
            <span>{targetUse}</span>
          </div>
        )}
      </div>

      {/* Rendered Live Component */}
      <div className="border-t border-b border-white/5 bg-[#030610]">
        {children}
      </div>
    </div>
  );
};

const ComponentShowcasePage = ({ onNavigateCluster, onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const componentsIndex = [
    { id: 'sec-pillars', num: '01', name: 'ThreeWaysToWork', label: '4 Pilares de Servicio', cat: 'core' },
    { id: 'sec-capabilities', num: '02', name: 'SixCapabilitiesGrid', label: '6 Capacidades Corporativas', cat: 'core' },
    { id: 'sec-sovereignty', num: '03', name: 'TechnicalSovereignty', label: 'Soberanía Técnica & VPC', cat: 'reserve' },
    { id: 'sec-impath', num: '04', name: 'ImpathFrictionSection', label: 'Fricción Operativa IMPATH', cat: 'reserve' },
    { id: 'sec-terminal', num: '05', name: 'AgentTerminalDemo', label: 'Terminal Agéntica Interactiva', cat: 'interactive' },
    { id: 'sec-teardown', num: '06', name: 'WorkflowTeardown', label: 'Desglose Forense Workflow', cat: 'interactive' },
    { id: 'sec-stack', num: '07', name: 'AgenticTechStack', label: 'Stack Tecnológico Agéntico', cat: 'tech' },
    { id: 'sec-clusters', num: '08', name: 'ThreeClustersOverview', label: 'Resumen de 3 Clusters', cat: 'core' },
    { id: 'sec-cases', num: '09', name: 'CaseStudiesSection', label: 'Casos de Éxito & ROI', cat: 'social' },
    { id: 'sec-trust', num: '10', name: 'TrustBadgesSection', label: 'Garantías & Certificaciones', cat: 'social' },
    { id: 'sec-social', num: '11', name: 'SocialProofSection', label: 'Social Proof & Clientes', cat: 'social' },
    { id: 'sec-industries', num: '12', name: 'IndustriesImpactSection', label: 'Impacto por Industria', cat: 'interactive' },
    { id: 'sec-leadership', num: '13', name: 'EngineeringLeadership', label: 'Liderazgo de Ingeniería', cat: 'social' },
    { id: 'sec-faq', num: '14', name: 'FAQSection', label: 'Preguntas Frecuentes', cat: 'core' },
    { id: 'sec-leadmagnet', num: '15', name: 'LeadMagnetSection', label: 'Lead Magnet / Auditoría', cat: 'conversion' },
    { id: 'sec-sla', num: '16', name: 'PostContactSLA', label: 'SLA de Respuesta', cat: 'conversion' },
    { id: 'sec-directory', num: '17', name: 'HomeDirectorySection', label: 'Directorio Estructura', cat: 'reserve' },
    { id: 'sec-cta', num: '18', name: 'FinalCTA', label: 'Call to Action Final', cat: 'conversion' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#02040A] text-white pt-8">
      {/* Showroom Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 font-bold mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          BLUEPIXEL COMPONENT DESIGN SYSTEM & SHOWROOM
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
          Galería Maestra de Componentes<span className="text-blue-500">.</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
          Catálogo visual de todas las piezas, módulos interactivos y secciones construidas para la plataforma. Diseñadas para preservar memoria técnica, facilitar pruebas y ensamblar nuevas páginas en minutos.
        </p>

        {/* Metric Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-[#080D1A] border border-white/10 rounded-xl p-4">
            <div className="text-2xl font-black text-white font-mono">18</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Componentes Vivos</div>
          </div>
          <div className="bg-[#080D1A] border border-white/10 rounded-xl p-4">
            <div className="text-2xl font-black text-blue-400 font-mono">04</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Pilares de Servicio</div>
          </div>
          <div className="bg-[#080D1A] border border-white/10 rounded-xl p-4">
            <div className="text-2xl font-black text-purple-400 font-mono">06</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Capacidades Mapeadas</div>
          </div>
          <div className="bg-[#080D1A] border border-white/10 rounded-xl p-4">
            <div className="text-2xl font-black text-emerald-400 font-mono">100%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Tailwind & React</div>
          </div>
        </div>

        {/* Quick Jump Index Sticky Bar */}
        <div className="mt-10 p-5 bg-[#060A14] border border-white/10 rounded-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center gap-2">
            <span>⚡ NAVEGACIÓN RÁPIDA DE COMPONENTES:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {componentsIndex.map((c) => (
              <button
                key={c.id}
                onClick={() => scrollToSection(c.id)}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <span className="text-blue-400 font-bold">{c.num}.</span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 01 · THREE WAYS TO WORK (4 PILARES) */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-pillars"
        number="01"
        name="ThreeWaysToWork"
        filePath="src/components/sections/ThreeWaysToWork.jsx"
        status="✦ ACTIVO EN HOME"
        statusColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        desc="Los 4 Pilares Oficiales de BluePixel (Consultoría Digital, Agentes & Automatización, Plataformas Digitales, Evolución Digital) con toggle ES | EN y min-height uniforme."
        targetUse="Home principal (#how-we-work) y landing /como-trabajamos."
      >
        <ThreeWaysToWork />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 02 · SIX CAPABILITIES GRID */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-capabilities"
        number="02"
        name="SixCapabilitiesGrid"
        filePath="src/components/sections/SixCapabilitiesGrid.jsx"
        status="✦ ACTIVO EN SERVICIOS"
        statusColor="text-blue-400 bg-blue-500/10 border-blue-500/20"
        desc="Malla oficial de las 6 Capacidades Técnicas: UX/UI & PS, Software Engineering, IA & Automatización, Data & Analytics, Security & Reliability, Digital Consulting."
        targetUse="Página de Servicios (/servicios) y sub-landings de ingeniería."
      >
        <SixCapabilitiesGrid onOpenContact={onOpenContact} onNavigateCluster={onNavigateCluster} />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 03 · TECHNICAL SOVEREIGNTY (RESERVA) */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-sovereignty"
        number="03"
        name="TechnicalSovereignty"
        filePath="src/components/sections/TechnicalSovereignty.jsx"
        status="📦 EN RESERVA"
        statusColor="text-amber-400 bg-amber-500/10 border-amber-500/20"
        desc="Sección 'Tu infraestructura. Tus datos. Tu código fuente.' con Bento Grid y terminal animada VPC_DEPLOYMENT_STATUS. Cero lock-in y soberanía de IP."
        targetUse="Landing de Seguridad (/servicio/security), Automatización (/automatizacion) y propuestas Enterprise."
      >
        <TechnicalSovereignty />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 04 · IMPATH FRICTION SECTION (RESERVA) */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-impath"
        number="04"
        name="ImpathFrictionSection"
        filePath="src/components/sections/ImpathFrictionSection.jsx"
        status="📦 EN RESERVA"
        statusColor="text-amber-400 bg-amber-500/10 border-amber-500/20"
        desc="Módulo de fricción operativa con simulador de personas (Power User vs Casual), Mixpanel Health Score y Vault Security Impact en pesos."
        targetUse="Landing de Consultoría Tecnológica (/consultoria-tecnologica) y propuestas de Auditoría FutureProof."
      >
        <ImpathFrictionSection onOpenContact={onOpenContact} />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 05 · AGENT TERMINAL DEMO */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-terminal"
        number="05"
        name="AgentTerminalDemo"
        filePath="src/components/sections/AgentTerminalDemo.jsx"
        status="🚀 INTERACTIVO"
        statusColor="text-purple-400 bg-purple-500/10 border-purple-500/20"
        desc="Terminal simulada que ejecuta en vivo la ingesta multicanal, llamadas a herramientas MCP (SAP/CRM) y orquestación agéntica paso a paso."
        targetUse="Landing de Agentización (/agentizacion) y demostraciones comerciales."
      >
        <AgentTerminalDemo />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 06 · WORKFLOW TEARDOWN */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-teardown"
        number="06"
        name="WorkflowTeardown"
        filePath="src/components/sections/WorkflowTeardown.jsx"
        status="🚀 INTERACTIVO"
        statusColor="text-purple-400 bg-purple-500/10 border-purple-500/20"
        desc="Comparativa interactiva antes vs. después de la automatización agéntica: proceso manual fragmentado vs flujo unificado en segundos."
        targetUse="Landing de Automatización (/automatizacion) y presentación a directores de operaciones."
      >
        <WorkflowTeardown />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 07 · AGENTIC TECH STACK */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-stack"
        number="07"
        name="AgenticTechStack"
        filePath="src/components/sections/AgenticTechStack.jsx"
        status="🛠️ TECNOLOGÍA"
        statusColor="text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
        desc="Arquitectura de stack por capas: Modelos Fundacionales (OpenAI, Anthropic), Orquestación MCP, Bases Vectoriales y Despliegue Cloud-Native."
        targetUse="Landing de Software Engineering y propuestas técnicas para CTOs."
      >
        <AgenticTechStack />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 08 · THREE CLUSTERS OVERVIEW */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-clusters"
        number="08"
        name="ThreeClustersOverview"
        filePath="src/components/sections/ThreeClustersOverview.jsx"
        status="✦ PILAR DE DEMANDA"
        statusColor="text-blue-400 bg-blue-500/10 border-blue-500/20"
        desc="Las 3 Puertas de Demanda B2B: Apps & Plataformas, Automatización Operativa y Agentización & IA Corporativa."
        targetUse="Landing de Pilares (/pilares) y campañas de Google Ads segmentadas."
      >
        <ThreeClustersOverview onNavigateCluster={onNavigateCluster} />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 09 · CASE STUDIES SECTION */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-cases"
        number="09"
        name="CaseStudiesSection"
        filePath="src/components/sections/CaseStudiesSection.jsx"
        status="✦ ACTIVO EN HOME"
        statusColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        desc="Casos de éxito corporativos reales con métricas de ROI demostradas (Bimbo, DiDi, Oxxo, Prosa, FR Medical)."
        targetUse="Home principal y landing de Casos de Éxito (/casos-de-exito)."
      >
        <CaseStudiesSection onOpenCase={onOpenContact} />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 10 · TRUST BADGES SECTION */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-trust"
        number="10"
        name="TrustBadgesSection"
        filePath="src/components/sections/TrustBadgesSection.jsx"
        status="✦ ACTIVO EN HOME"
        statusColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        desc="Indicadores de confiabilidad: 99.9% SLA, SOC2 Type II Ready, Estándar ISO 27001 y Mitigación OWASP Top 10."
        targetUse="Home principal y pie de página de propuestas enterprise."
      >
        <TrustBadgesSection />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 11 · SOCIAL PROOF SECTION */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-social"
        number="11"
        name="SocialProofSection"
        filePath="src/components/sections/SocialProofSection.jsx"
        status="✦ ACTIVO EN HOME"
        statusColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        desc="Logos corporativos de clientes que confían en BluePixel y validación social B2B."
        targetUse="Directamente debajo del Hero en todas las páginas clave."
      >
        <SocialProofSection />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 12 · INDUSTRIES IMPACT SECTION */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-industries"
        number="12"
        name="IndustriesImpactSection"
        filePath="src/components/sections/IndustriesImpactSection.jsx"
        status="🚀 INTERACTIVO"
        statusColor="text-purple-400 bg-purple-500/10 border-purple-500/20"
        desc="Selector interactivo por industria (Logística, Fintech, Retail, Salud) mostrando retos, soluciones aplicadas y métricas de impacto."
        targetUse="Páginas de industrias y reuniones verticales de venta."
      >
        <IndustriesImpactSection />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 13 · ENGINEERING LEADERSHIP */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-leadership"
        number="13"
        name="EngineeringLeadership"
        filePath="src/components/sections/EngineeringLeadership.jsx"
        status="✦ ACTIVO EN HOME"
        statusColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        desc="Sección de credenciales técnicas, principios de ingeniería y perfil de los directores técnicos."
        targetUse="Home principal y sección 'Acerca de Nosotros'."
      >
        <EngineeringLeadership />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 14 · FAQ SECTION */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-faq"
        number="14"
        name="FAQSection"
        filePath="src/components/sections/FAQSection.jsx"
        status="✦ ACTIVO EN HOME"
        statusColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        desc="Preguntas frecuentes sobre modelos de contratación, seguridad de datos, propiedad intelectual y tiempos de entrega."
        targetUse="Home principal y landings de conversión previa a contacto."
      >
        <FAQSection />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 15 · LEAD MAGNET SECTION */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-leadmagnet"
        number="15"
        name="LeadMagnetSection"
        filePath="src/components/sections/LeadMagnetSection.jsx"
        status="✦ ACTIVO EN HOME"
        statusColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        desc="Tarjeta de descarga del reporte ejecutivo de adopción de IA y auditoría de fricción operativa."
        targetUse="Home principal y páginas de contenido o blog."
      >
        <LeadMagnetSection />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 16 · POST CONTACT SLA */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-sla"
        number="16"
        name="PostContactSLA"
        filePath="src/components/sections/PostContactSLA.jsx"
        status="✦ ACTIVO EN HOME"
        statusColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        desc="Garantía de respuesta técnica en menos de 2 horas y protocolo de asignación de Squad."
        targetUse="Inmediatamente arriba del formulario de contacto y en confirmaciones."
      >
        <PostContactSLA />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 17 · HOME DIRECTORY SECTION (RESERVA) */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-directory"
        number="17"
        name="HomeDirectorySection"
        filePath="src/components/sections/HomeDirectorySection.jsx"
        status="📦 EN RESERVA"
        statusColor="text-amber-400 bg-amber-500/10 border-amber-500/20"
        desc="Estructura técnica y comercial con 3 accesos rápidos hacia Pilares, Servicios y Modelos de Trabajo."
        targetUse="Disponible para páginas de mapa de sitio o portales de navegación interna."
      >
        <HomeDirectorySection />
      </ComponentWrapper>

      {/* ========================================================================= */}
      {/* 18 · FINAL CTA */}
      {/* ========================================================================= */}
      <ComponentWrapper
        id="sec-cta"
        number="18"
        name="FinalCTA"
        filePath="src/components/sections/FinalCTA.jsx"
        status="✦ ACTIVO EN HOME"
        statusColor="text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        desc="Llamado a la acción principal con selector de consulta hacia los 4 Pilares de Servicio."
        targetUse="Pie de página de conversión en todas las landings."
      >
        <FinalCTA onOpenContact={onOpenContact} />
      </ComponentWrapper>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ComponentShowcasePage;
