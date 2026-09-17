import React, { useState, useEffect, Suspense, lazy, startTransition } from 'react';
import './App.css';
import { CLUSTERS_DATA } from './data/clustersData';

// Layout & Hero (Above the fold - direct eager imports)
import Navbar from './components/layout/Navbar';
import HeroWithPrompt from './components/hero/HeroWithPrompt';
import SocialProofSection from './components/sections/SocialProofSection';
import ClusterLandingPage from './components/clusters/ClusterLandingPage';

// Diagnostico Landing Page (Lazy loaded)
const DiagnosticoLandingPage = lazy(() => import('./components/landings/DiagnosticoLandingPage'));

// Below the fold sections - lazy loaded for optimal performance
const TrustBadgesSection = lazy(() => import('./components/sections/TrustBadgesSection'));
const WorkflowTeardown = lazy(() => import('./components/sections/WorkflowTeardown'));
const AgenticTechStack = lazy(() => import('./components/sections/AgenticTechStack'));
const ThreeClustersOverview = lazy(() => import('./components/sections/ThreeClustersOverview'));
const TechnicalSovereignty = lazy(() => import('./components/sections/TechnicalSovereignty'));
const ImpathFrictionSection = lazy(() => import('./components/sections/ImpathFrictionSection'));
const CaseStudiesSection = lazy(() => import('./components/sections/CaseStudiesSection'));
const FAQSection = lazy(() => import('./components/sections/FAQSection'));
const SixCapabilitiesGrid = lazy(() => import('./components/sections/SixCapabilitiesGrid'));
const ThreeWaysToWork = lazy(() => import('./components/sections/ThreeWaysToWork'));
const EngineeringLeadership = lazy(() => import('./components/sections/EngineeringLeadership'));
const PostContactSLA = lazy(() => import('./components/sections/PostContactSLA'));
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
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'apps' | 'automatizacion' | 'agentizacion' | 'diagnostico'
  const [selectedSubserviceId, setSelectedSubserviceId] = useState(null);

  // Sincronizar con hash si se usa #/apps, #/automatizacion, #/agentizacion
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['apps', 'automatizacion', 'agentizacion', 'diagnostico'].includes(hash)) {
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
            <TrustBadgesSection />
            <ThreeClustersOverview onNavigateCluster={navigateTo} onOpenContact={(pkg) => scrollToForm(pkg)} />
            <TechnicalSovereignty />
            <ImpathFrictionSection onOpenContact={() => scrollToForm('Diagnóstico FutureProof (IMPATH)')} />
            <CaseStudiesSection onOpenCase={(client) => scrollToForm(client)} />
            <FAQSection />
            <SixCapabilitiesGrid onNavigateCluster={navigateTo} onOpenContact={(pkg) => scrollToForm(pkg)} />
            <ThreeWaysToWork onSelectPackage={(pkg) => scrollToForm(pkg)} />
            <EngineeringLeadership />
            <PostContactSLA />
            <FinalCTA onOpenContact={() => scrollToForm()} />
            <Footer />
            
            <SolutionDrawer 
              solution={selectedSolution} 
              onClose={() => setSelectedSolution(null)} 
              onOpenContact={() => scrollToForm()} 
            />
          </Suspense>
        </>
      ) : currentView === 'diagnostico' ? (
        <Suspense fallback={<SectionLoader />}>
          <DiagnosticoLandingPage />
        </Suspense>
      ) : (
        <Suspense fallback={<SectionLoader />}>
          <ClusterLandingPage 
            cluster={CLUSTERS_DATA[currentView]} 
            initialSubserviceId={selectedSubserviceId}
            onNavigateCluster={navigateTo} 
            onSelectPackage={(pkg) => scrollToForm(pkg)}
          />
          <Footer />
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
