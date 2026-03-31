import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { useLocation } from "wouter";

import Home from "@/pages/Home";
import ComoTeAcompano from "@/pages/ComoTeAcompano";
import Servicios from "@/pages/Servicios";
import MiMusica from "@/pages/MiMusica";
import MiRecorrido from "@/pages/MiRecorrido";
import Contacto from "@/pages/Contacto";
import KundaliniYoga from "@/pages/services/KundaliniYoga";
import Retiros from "@/pages/services/Retiros";
import VozTerapeutica from "@/pages/services/VozTerapeutica";
import CoachingIndividual from "@/pages/services/CoachingIndividual";
import Testimonios from "@/pages/Testimonios";
import NotFound from "@/pages/not-found";

// Component to handle scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/como-te-acompano" component={ComoTeAcompano} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/servicios/kundalini-yoga" component={KundaliniYoga} />
        <Route path="/servicios/retiros" component={Retiros} />
        <Route path="/servicios/voz-terapeutica" component={VozTerapeutica} />
        <Route path="/servicios/coaching-individual" component={CoachingIndividual} />
        <Route path="/mi-musica" component={MiMusica} />
        <Route path="/mi-recorrido" component={MiRecorrido} />
        <Route path="/testimonios" component={Testimonios} />
        <Route path="/contacto" component={Contacto} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
