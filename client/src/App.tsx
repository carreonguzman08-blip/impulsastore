import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { Suspense, lazy } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import IntroAnimation from "@/components/intro-animation";
import PageViewTracker from "@/components/page-view-tracker";
import { optimizeCriticalPath } from "@/lib/cache-optimizer";
import { checkWebPSupport } from "@/lib/image-optimizer";
import Home from "@/pages/home";
// Lazy load non-critical pages
const ContactPage = lazy(() => import("@/pages/contact"));
const SitiosWebPage = lazy(() => import("@/pages/sitios-web"));
const MarketingPage = lazy(() => import("@/pages/marketing"));
const SoftwarePage = lazy(() => import("@/pages/software"));
const AutomatizacionPage = lazy(() => import("@/pages/automatizacion"));
const AdminPage = lazy(() => import("@/pages/admin"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  const [location] = useLocation();
  
  return (
    <>
      {/* Track page views for all pages except admin */}
      {!location.includes('/admin') && <PageViewTracker page={location} />}
      
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sitios-web">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>}>
            <SitiosWebPage />
          </Suspense>
        </Route>
        <Route path="/marketing">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          </div>}>
            <MarketingPage />
          </Suspense>
        </Route>
        <Route path="/software">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>}>
            <SoftwarePage />
          </Suspense>
        </Route>
        <Route path="/automatizacion">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>}>
            <AutomatizacionPage />
          </Suspense>
        </Route>
        <Route path="/contacto">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          </div>}>
            <ContactPage />
          </Suspense>
        </Route>
        <Route path="/admin">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-500"></div>
          </div>}>
            <AdminPage />
          </Suspense>
        </Route>
        <Route>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          </div>}>
            <NotFound />
          </Suspense>
        </Route>
      </Switch>
    </>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Temporalmente desactivar intro para evitar problemas de renderizado
    // TODO: Reactivar después de verificar que el sitio principal funciona
    return false;
    // const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    // const currentPath = window.location.pathname;
    // return !hasSeenIntro && currentPath === '/';
  });
  
  // Initialize safe performance optimizations
  useEffect(() => {
    // Only run safe optimizations that don't break rendering
    const runSafeOptimizations = () => {
      checkWebPSupport();
      // Removed optimizeCriticalPath as it was causing rendering issues
    };
    
    if (document.readyState === 'complete') {
      runSafeOptimizations();
    } else {
      window.addEventListener('load', runSafeOptimizations);
      return () => window.removeEventListener('load', runSafeOptimizations);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {showIntro ? (
          <IntroAnimation onComplete={handleIntroComplete} />
        ) : (
          <Router />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
