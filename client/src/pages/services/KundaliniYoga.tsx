import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function KundaliniYoga() {
  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Hero */}
        <div className="h-[60vh] relative overflow-hidden">
          <img 
            src="/images/image3_1770888421025.png" 
            alt="Kundalini Yoga" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-wide">Kundalini Yoga</h1>
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
                El Kundalini Yoga es una tecnología de la consciencia. A través de series de movimientos (kriyas), respiración (pranayama) y sonido (mantra), trabajamos para fortalecer el sistema nervioso y equilibrar el sistema glandular.
              </p>
              <p>
                Mis clases no buscan la perfección estética de la postura, sino la experiencia interna. Es un espacio para desafiar tus límites mentales y expandir tu capacidad de sostener la energía vital.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-muted">
              <AccordionItem value="horarios">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">Horarios y Modalidad</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Clases semanales presenciales y online vía Zoom.<br/>
                  Martes y Jueves: 19:00 - 20:30<br/>
                  Miércoles: 09:30 - 11:00
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="nivel">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">¿Necesito experiencia previa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  No es necesaria experiencia previa. Las clases son aptas para todos los cuerpos y edades. Se ofrecen adaptaciones para cada ejercicio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="traer">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">Qué necesito traer</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Ropa cómoda (preferiblemente de fibras naturales y colores claros), una botella de agua y tu esterilla de yoga si la tienes (aunque disponemos de material en la sala).
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex justify-center pt-8">
              <Link href="/contacto">
                <Button className="h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs">
                  Reservar Plaza
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
