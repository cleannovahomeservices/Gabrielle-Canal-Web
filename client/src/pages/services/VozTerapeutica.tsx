import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function VozTerapeutica() {
  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Hero */}
        <div className="h-[60vh] relative overflow-hidden">
          <img 
            src="/images/image4_1770888421025.jpg" 
            alt="Voz Terapéutica" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-wide text-center px-4">Voz Terapéutica</h1>
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
                Tu voz es tu huella sonora única en el mundo. En estos talleres exploramos la voz no desde la técnica del canto formal, sino como una herramienta de autoconocimiento, liberación emocional y presencia.
              </p>
              <p>
                Trabajamos el desbloqueo corporal, la resonancia y la improvisación vocal para recuperar la confianza en nuestra propia expresión y ocupar nuestro espacio vibratorio.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-muted">
              <AccordionItem value="enfoque">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">Enfoque de las sesiones</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Integramos ejercicios de respiración, movimiento consciente y vocalización intuitiva. Es un trabajo profundo pero lúdico, donde el error no existe, solo la exploración.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quien">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">¿Para quién es?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Para cualquier persona que sienta bloqueo al expresarse, tensión en la garganta, o simplemente el deseo de conectar más profundamente con su sonido. No se requiere saber cantar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="formato">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">Formato</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Ofrezco sesiones individuales y talleres grupales intensivos de fin de semana.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex justify-center pt-8">
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
