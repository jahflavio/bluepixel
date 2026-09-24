import React, { useState, useEffect, Suspense, lazy, startTransition } from 'react';
import './App.css';
import { CLUSTERS_DATA } from './data/clustersData';

// Layout & Hero (Above the fold - direct eager imports)
import Navbar from './components/layout/Navbar';
import HeroWithPrompt from './components/hero/HeroWithPrompt';
import SocialProofSection from './components/sections/SocialProofSection';
import ClusterLandingPage from './components/clusters/ClusterLandingPage';

// Landing Pages (Spokes y Hub - Lazy loaded)
const ConsultoriaLandingPage = lazy(() => import('./components/landings/ConsultoriaLandingPage'));
const AutomatizacionLandingPage = lazy(() => import('./components/landings/AutomatizacionLandingPage'));
const ProductoDigitalLandingPage = lazy(() => import('./components/landings/ProductoDigitalLandingPage'));
const EvolucionLandingPage = lazy(() => import('./components/landings/EvolucionLandingPage'));
const ComoTrabajamosLandingPage = lazy(() => import('./components/landings/ComoTrabajamosLandingPage'));
const FutureproofLandingPage = lazy(() => import('./components/landings/FutureproofLandingPage'));

// Directorios Centrales (Hubs)
const PilaresLandingPage = lazy(() => import('./components/landings/PilaresLandingPage'));
const ServiciosLandingPage = lazy(() => import('./components/landings/ServiciosLandingPage'));
const CasosEstudioLandingPage = lazy(() => import('./components/landings/CasosEstudioLandingPage'));
const ComponentShowcasePage = lazy(() => import('./components/landings/ComponentShowcasePage'));

// 6 Servicios Individuales (Capacidades)
const UxUiServicePage = lazy(() => import('./components/landings/services/UxUiServicePage'));
const AiEngineeringServicePage = lazy(() => import('./components/landings/services/AiEngineeringServicePage'));
const AiAgentsServicePage = lazy(() => import('./components/landings/services/AiAgentsServicePage'));
const DataAnalyticsServicePage = lazy(() => import('./components/landings/services/DataAnalyticsServicePage'));
const SecurityReliabilityServicePage = lazy(() => import('./components/landings/services/SecurityReliabilityServicePage'));
const BusinessAiConsultingPage = lazy(() => import('./components/landings/services/BusinessAiConsultingPage'));

// Below the fold sections - lazy loaded for optimal performance
const TrustBadgesSection = lazy(() => import('./components/sections/TrustBadgesSection'));
const IndustriesImpactSection = lazy(() => import('./components/sections/IndustriesImpactSection'));
const WorkflowTeardown = lazy(() => import('./components/sections/WorkflowTeardown'));
const AgenticTechStack = lazy(() => import('./components/sections/AgenticTechStack'));
const TechnicalSovereignty = lazy(() => import('./components/sections/TechnicalSovereignty'));
const ImpathFrictionSection = lazy(() => import('./components/sections/ImpathFrictionSection'));
const CaseStudiesSection = lazy(() => import('./components/sections/CaseStudiesSection'));
const FAQSection = lazy(() => import('./components/sections/FAQSection'));
const FourWaysToWork = lazy(() => import('./components/sections/FourWaysToWork'));
const SixCapabilitiesGrid = lazy(() => import('./components/sections/SixCapabilitiesGrid'));
const EngineeringLeadership = lazy(() => import('./components/sections/EngineeringLeadership'));
const PostContactSLA = lazy(() => import('./components/sections/PostContactSLA'));
const LeadMagnetSection = lazy(() => import('./components/sections/LeadMagnetSection'));
const FutureproofCTABanner = lazy(() => import('./components/widgets/FutureproofCTABanner'));
const FinalCTA = lazy(() => import('./components/sections/FinalCTA'));
const Footer = lazy(() => import('./components/layout/Footer'));

// Interactive Overlays & Modals
const SolutionDrawer = lazy(() => import('./components/layout/SolutionDrawer'));
const MultiStepContact = lazy(() => import('./components/forms/MultiStepContact'));

// Loading Fallback Component
const SectionLoader = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
  </div>
);

const App = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [preselectedPkg, setPreselectedPkg] = useState(null);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'apps' | 'automatizacion' | 'agentizacion' | 'consultoria' | 'como-trabajamos' | 'automatizacion-agentica' | 'producto-digital'
  const [selectedSubserviceId, setSelectedSubserviceId] = useState(null);

  // Sincronizar con hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validViews = [
        'apps', 'automatizacion', 'agentizacion', 
        'consultoria-tecnologica', 'consultoria-digital', 'pilar/consultoria-digital',
        'automatizacion-agentica', 'agentes-automatizacion', 'pilar/agentes-automatizacion',
        'producto-digital', 'plataformas-digitales', 'pilar/plataformas-digitales',
        'evolucion-digital', 'pilar/evolucion-digital',
        'servicio/ux-ui', 'servicio/ai-engineering', 'servicio/ai-agents', 
        'servicio/data-analytics', 'servicio/security', 'servicio/business-ai',
        'servicios', 'casos-de-exito', 'componentes', 'filosofia-futureproof'
      ];
      
      if (
        hash === 'como-trabajamos' || 
        hash === 'formas-de-trabajo' || 
        hash === 'four-ways-to-work' || 
        hash === 'four-ways' || 
        hash === 'how-we-work' || 
        hash === 'pilares'
      ) {
        setCurrentView('home');
        const scrollToTarget = () => {
          const el = document.getElementById('como-trabajamos') || 
                     document.getElementById('four-ways-to-work') || 
                     document.getElementById('how-we-work') || 
                     document.getElementById('pilares');
          if (el) {
            const navHeight = 80;
            const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        };
        setTimeout(scrollToTarget, 100);
        setTimeout(scrollToTarget, 300);
        setTimeout(scrollToTarget, 600);
      } else if (validViews.includes(hash)) {
        setCurrentView(hash);
      } else if (hash === 'home' || hash === '') {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (view, subserviceId = null) => {
    if (
      view === 'como-trabajamos' || 
      view === 'formas-de-trabajo' || 
      view === 'four-ways-to-work' || 
      view === 'four-ways' || 
      view === 'how-we-work' || 
      view === 'pilares'
    ) {
      setCurrentView('home');
      window.location.hash = '';
      const scrollToTarget = () => {
        const el = document.getElementById('como-trabajamos') || 
                   document.getElementById('four-ways-to-work') || 
                   document.getElementById('how-we-work') || 
                   document.getElementById('pilares');
        if (el) {
          const navHeight = 80;
          const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      };
      setTimeout(scrollToTarget, 100);
      setTimeout(scrollToTarget, 300);
      return;
    }

    setCurrentView(view);
    setSelectedSubserviceId(subserviceId); // Always update (clears on cluster switch without subservice)
    window.location.hash = view === 'home' ? '' : `/${view}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = (pkgName) => {
    if (pkgName && typeof pkgName === 'string') setPreselectedPkg(pkgName);
    startTransition(() => {
      setIsContactOpen(true);
    });
  };

  useEffect(() => {
    window.__openContactModal = (pkg) => scrollToForm(pkg);
    return () => {
      delete window.__openContactModal;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#02040A] text-white">
      <Navbar 
        onOpenContact={() => scrollToForm()} 
        onNavigateCluster={navigateTo} 
        currentView={currentView}
      />

      {currentView === 'home' ? (
        <>
          <HeroWithPrompt 
            onSelectSolution={(sol) => setSelectedSolution(sol)} 
            onOpenContact={() => scrollToForm()}
          />
          <SocialProofSection />
          
          <Suspense fallback={<SectionLoader />}>
            <FourWaysToWork />
            {/* Las 6 capacidades van justo despues de las 4 formas de trabajar:
                juntas son los dos ejes del negocio, como en AGENTS.md. Sin esta
                seccion, desde el cuerpo del home no habia ni un enlace a las
                capabilities: solo se llegaba por el navbar o el footer. */}
            <SixCapabilitiesGrid
              onNavigateCluster={(route) => navigateTo(route)}
              onOpenContact={() => scrollToForm('Diagnóstico Técnico')}
            />
            <TrustBadgesSection />
            <IndustriesImpactSection onSelectIndustryCase={(client) => scrollToForm(client)} />
            {/* SECCIONES EN RESERVA (Disponibles en el Showroom #/componentes):
                - <TechnicalSovereignty /> ("Tu infraestructura. Tus datos. Tu código fuente.")
                Catalogadas en AGENTS.md y 02_Estrategia_B2B/INVENTARIO_COMPONENTES_Y_SECCIONES_RESERVA.md */}
            <ImpathFrictionSection onOpenContact={() => scrollToForm('Diagnóstico de Fricción')} />
            <CaseStudiesSection onOpenCase={(client) => scrollToForm(client)} />
            <FAQSection />
            <EngineeringLeadership />
            <PostContactSLA />
            <LeadMagnetSection />
            <FutureproofCTABanner />
            <FinalCTA onOpenContact={() => scrollToForm()} />
            <Footer onOpenContact={() => scrollToForm()} onNavigateCluster={navigateTo} />
            
            <SolutionDrawer 
              solution={selectedSolution} 
              onClose={() => setSelectedSolution(null)} 
              onOpenContact={() => scrollToForm()} 
            />
          </Suspense>
        </>
      ) : currentView === 'filosofia-futureproof' ? (
        <Suspense fallback={<SectionLoader />}>
          <FutureproofLandingPage onNavigateCluster={navigateTo} />
        </Suspense>
      ) : (currentView === 'consultoria-tecnologica' || currentView === 'consultoria-digital' || currentView === 'pilar/consultoria-digital' || currentView === 'diagnostico') ? (
        <Suspense fallback={<SectionLoader />}>
          <ConsultoriaLandingPage onNavigateCluster={navigateTo} />
        </Suspense>
      ) : (currentView === 'automatizacion-agentica' || currentView === 'agentes-automatizacion' || currentView === 'pilar/agentes-automatizacion') ? (
        <Suspense fallback={<SectionLoader />}>
          <AutomatizacionLandingPage onNavigateCluster={navigateTo} />
        </Suspense>
      ) : (currentView === 'producto-digital' || currentView === 'plataformas-digitales' || currentView === 'pilar/plataformas-digitales') ? (
        <Suspense fallback={<SectionLoader />}>
          <ProductoDigitalLandingPage onNavigateCluster={navigateTo} />
        </Suspense>
      ) : (currentView === 'evolucion-digital' || currentView === 'pilar/evolucion-digital') ? (
        <Suspense fallback={<SectionLoader />}>
          <EvolucionLandingPage onNavigateCluster={navigateTo} />
        </Suspense>
      ) : currentView === 'pilares' ? (
        <Suspense fallback={<SectionLoader />}>
          <PilaresLandingPage onNavigateCluster={navigateTo} />
        </Suspense>
      ) : currentView === 'servicios' ? (
        <Suspense fallback={<SectionLoader />}>
          <ServiciosLandingPage />
        </Suspense>
      ) : currentView === 'casos-de-exito' ? (
        <Suspense fallback={<SectionLoader />}>
          <CasosEstudioLandingPage />
        </Suspense>
      ) : currentView === 'servicio/ux-ui' ? (
        <Suspense fallback={<SectionLoader />}>
          <UxUiServicePage />
        </Suspense>
      ) : currentView === 'servicio/ai-engineering' ? (
        <Suspense fallback={<SectionLoader />}>
          <AiEngineeringServicePage />
        </Suspense>
      ) : currentView === 'servicio/ai-agents' ? (
        <Suspense fallback={<SectionLoader />}>
          <AiAgentsServicePage />
        </Suspense>
      ) : currentView === 'servicio/data-analytics' ? (
        <Suspense fallback={<SectionLoader />}>
          <DataAnalyticsServicePage />
        </Suspense>
      ) : currentView === 'servicio/security' ? (
        <Suspense fallback={<SectionLoader />}>
          <SecurityReliabilityServicePage />
        </Suspense>
      ) : currentView === 'servicio/business-ai' ? (
        <Suspense fallback={<SectionLoader />}>
          <BusinessAiConsultingPage />
        </Suspense>
      ) : currentView === 'componentes' ? (
        <Suspense fallback={<SectionLoader />}>
          <ComponentShowcasePage 
            onNavigateCluster={navigateTo} 
            onOpenContact={(pkg) => scrollToForm(pkg)} 
          />
        </Suspense>
      ) : CLUSTERS_DATA[currentView] ? (
        <Suspense fallback={<SectionLoader />}>
          <ClusterLandingPage
            cluster={CLUSTERS_DATA[currentView]}
            initialSubserviceId={selectedSubserviceId}
            onNavigateCluster={navigateTo}
            onSelectPackage={(pkg) => scrollToForm(pkg)}
          />
          <Footer onOpenContact={() => scrollToForm()} onNavigateCluster={navigateTo} />
        </Suspense>
      ) : (
        // Antes, una ruta desconocida caia aqui con cluster undefined y
        // ClusterLandingPage reventaba en cluster.subservices, dejando la
        // pagina en blanco. Ahora cualquier URL invalida muestra una salida.
        <Suspense fallback={<SectionLoader />}>
          <section className="min-h-[70vh] flex items-center justify-center px-6 bg-[#02040A]">
            <div className="max-w-lg text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block mb-4">
                Error 404
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
                Esta página no existe<span className="text-blue-500">.</span>
              </h1>
              <p className="text-slate-400 mb-8">
                El enlace que seguiste no corresponde a ninguna sección del sitio.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="#/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-colors">
                  Ir al inicio
                </a>
                <a href="#/servicios" className="border border-white/10 hover:bg-white/5 text-slate-300 font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors">
                  Ver servicios
                </a>
              </div>
            </div>
          </section>
          <Footer onOpenContact={() => scrollToForm()} onNavigateCluster={navigateTo} />
        </Suspense>
      )}

      {/* Global Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="bg-navy-900 border border-white/[0.08] rounded-2xl w-full max-w-4xl relative overflow-hidden my-auto shadow-2xl">
            <button 
              onClick={() => setIsContactOpen(false)} 
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-navy-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 z-50 text-sm transition-colors"
              aria-label="Cerrar modal"
            >
              ✕
            </button>
            <div className="max-h-[85vh] overflow-y-auto custom-scrollbar p-6">
              <Suspense fallback={
                <div className="py-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
                </div>
              }>
                <MultiStepContact preselectedPackage={preselectedPkg} />
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
