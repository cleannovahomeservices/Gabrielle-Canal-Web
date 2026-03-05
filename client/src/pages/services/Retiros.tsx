import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Instagram, Youtube, Mail } from "lucide-react";

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
            <p className="text-xs uppercase tracking-widest text-primary font-light text-center">
              Inmersiones profundas en la naturaleza
            </p>

            <div className="prose prose-lg prose-stone max-w-none font-light text-muted-foreground text-lg leading-relaxed">
              <p>
                Los retiros son paréntesis sagrados para desconectar del ruido y reconectar con los ritmos naturales. Son inmersiones profundas donde convivimos, practicamos y descansamos en entornos naturales cuidados.
              </p>
              <p>
                Los retiros siempre son distintos, pero en general combinamos varias prácticas: círculos de voz, terapia sistémica o yoga, alimentación consciente y tiempo libre para integrar. Es una invitación a volver a lo esencial.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-muted">
              <AccordionItem value="proximos">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">
                  Próximas Fechas
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  <p className="mb-4">
                    <strong>Verano 2026:</strong> Ya está aquí la tercera edición de <em>VOZ Sistémica</em>, un retiro muy potente para transformar aspectos profundos tuyos, incluyendo y en relación a tu sistema familiar.
                  </p>
                  <p className="mb-6">
                    Suscríbete a la newsletter para recibir más información y las fechas exactas en cuanto se confirmen.
                  </p>
                  <a
                    href="#newsletter"
                    className="inline-block border border-primary text-primary px-6 py-2 text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded"
                  >
                    Newsletter
                  </a>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="alimentacion">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">
                  Alimentación
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  <p>
                    La alimentación es vegetariana, ecológica y de proximidad, preparada con amor para nutrirnos a todos los niveles.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="alojamiento">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">
                  Alojamiento
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Nos alojamos en casas rurales seleccionadas por su belleza y tranquilidad, y usualmente en habitaciones compartidas que fomentan la comunidad.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Link href="/testimonios">
                <Button variant="outline" className="h-14 px-10 border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-xs">
                  Ver Testimonios
                </Button>
              </Link>
              <Link href="/contacto">
                <Button className="h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs">
                  Me Interesa
                </Button>
              </Link>
            </div>

            {/* Retiro de Voz y Constelaciones */}
            <div className="border-t border-primary/10 pt-14 space-y-3 text-center">
              <h2 className="text-3xl font-serif text-primary">Retiro de Voz y Constelaciones Familiares</h2>
              <p className="text-muted-foreground font-light text-lg italic">Libera tu poder creativo</p>
            </div>

            {/* Contact links */}
            <div className="border-t border-primary/10 pt-10 flex flex-col items-center gap-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Contáctame</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <a href="mailto:happyperiodprogram@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  happyperiodprogram@gmail.com
                </a>
                <a href="https://www.instagram.com/gabriela.canal.1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                  @gabriela.canal.1
                </a>
                <a href="https://www.youtube.com/watch?app=desktop&v=snjbxYJC7Qg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
