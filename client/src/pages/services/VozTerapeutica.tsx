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
            src="/images/page_3_img_1.png"
            alt="Voz Terapéutica"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-wide text-center px-4">
              Voz Terapéutica
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
              Talleres de exploración vocal y sanación
            </p>

            <div className="prose prose-lg prose-stone max-w-none font-light text-muted-foreground text-lg leading-relaxed">
              <p>
                Tu voz es tu huella sonora única en el mundo. En estos talleres exploramos la voz no desde la técnica del canto formal, sino como una herramienta de autoconocimiento, liberación emocional y presencia. La vibración de la voz es tanto la llave de acceso a nuestras múltiples dimensiones como el puente por donde fluye nuestra intención y se manifiesta en el mundo físico.
              </p>
              <p>
                La propuesta es desbloquear el cuerpo, que explores las posibilidades de tu voz como instrumento de sanación y dar y recibir sonido.
              </p>
              <p>
                Experimenta tu voz resonando y recupera la confianza en tu propia expresión, para ocupar tu espacio vibratorio.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-muted">
              <AccordionItem value="enfoque">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">
                  Enfoque de las sesiones
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Durante 20 años de formación y práctica he ido tomando lo que mejor me funciona de distintas maestras y maestros.<br /><br />
                  Desde la exploración de los armónicos en la propia voz (proveniente del canto de armónicos de Tíbet) al toning; la práctica de sonidos curativos para los órganos o la conexión con nuestro nombre u otros mantras de poder, así como el llamado a l@s ancestr@s para reconectar con nuestro linaje y los dones.<br /><br />
                  Integramos ejercicios de respiración, movimiento consciente y vocalización intuitiva. Es un trabajo profundo y lúdico, donde el error no existe, sólo la exploración, descubrir y recordar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quien">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">
                  ¿Para quién es?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Para cualquier persona que sienta bloqueo al expresarse, tensión en la garganta, o simplemente el deseo de conectar más profundamente con su sonido y la capacidad inherente que tiene de sanar. No se requiere saber cantar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="formato">
                <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-6">
                  Formato
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                  Ofrezco packs de sesiones individuales, así como talleres y experiencias grupales temáticas de entre 3 y 4 horas, e intensivos de fin de semana.
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
