import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Music as MusicIcon } from "lucide-react";

export default function Retiros() {
  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Hero */}
        <div className="h-[60vh] relative overflow-hidden">
          <img 
            src="/images/image1_1770888421021.jpg" 
            alt="Retiros" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-wide">Retiros</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-20 relative z-10 bg-background pt-16 md:pt-24 pb-12 shadow-sm border-t border-primary/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="prose prose-lg prose-stone max-w-none font-light text-muted-foreground text-lg leading-relaxed">
              <p>
                Los retiros son paréntesis sagrados para desconectar del ruido cotidiano y reconectar con los ritmos naturales. Son inmersiones profundas donde convivimos, practicamos y descansamos en entornos naturales cuidados.
              </p>
              <p>
                Combinamos práctica de yoga, círculos de voz, alimentación consciente y tiempo libre para integrar. Es una invitación a volver a lo esencial.
              </p>
            </div>

            <div className="flex justify-center py-6">
                <Link href="/mi-musica">
                  <Button variant="outline" className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-xs flex items-center gap-2">
                    <MusicIcon className="w-4 h-4" />
                    Mi Música
                  </Button>
                </Link>
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-muted">
              <AccordionItem value="proximos">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">Próximas Fechas</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Primavera 2026: Retiro de Silencio y Voz (Pirineos).<br/>
                  Verano 2026: Kundalini y Naturaleza (Costa Brava).<br/>
                  Suscríbete a la newsletter o escríbeme para recibir las fechas exactas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="alimentacion">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">Alimentación</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Toda la alimentación es vegetariana, ecológica y de proximidad, preparada con amor para nutrirnos a todos los niveles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="alojamiento">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">Alojamiento</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Nos alojamos en casas rurales seleccionadas por su belleza y tranquilidad, en habitaciones compartidas que fomentan la comunidad.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex justify-center pt-8">
              <Link href="/contacto">
                <Button className="h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs">
                  Me interesa
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
