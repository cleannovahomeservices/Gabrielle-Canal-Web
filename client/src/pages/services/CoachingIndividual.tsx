import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function CoachingIndividual() {
  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Hero */}
        <div className="h-[60vh] relative overflow-hidden">
          <img
            src="/images/coaching_individual_mujeres.png"
            alt="Coaching individual para mujeres"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-wide text-center px-4">
              Coaching individual para mujeres
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-20 relative z-10 bg-background pt-16 md:pt-24 pb-12 shadow-sm border-t border-primary/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-light text-center">
              Acompañamiento 1:1 en tu momento vital
            </p>

            <div className="prose prose-lg prose-stone max-w-none font-light text-muted-foreground text-lg leading-relaxed">
              <p>
                Sesiones donde te acompaño en tu momento vital para mirar y caminar juntas lo que quieras transformar en tu vida.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-muted">
              <AccordionItem value="especialidad">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">
                  Especialidad
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Salud cíclica, reglas dolorosas, perimenopausia.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Link href="/testimonios">
                <Button
                  variant="outline"
                  className="h-14 px-10 border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-xs"
                >
                  Ver Testimonios
                </Button>
              </Link>
              <Link href="/contacto">
                <Button className="h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs">
                  Solicitar Información
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

