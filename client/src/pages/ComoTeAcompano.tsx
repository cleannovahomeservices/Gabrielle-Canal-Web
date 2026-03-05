import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ComoTeAcompano() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground py-20 md:py-32">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto px-6 md:px-12"
        >
          {/* Header */}
          <motion.div variants={item} className="mb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-4 tracking-tight">
              Cómo te acompaño
            </h1>
            <p className="text-xl md:text-2xl font-light italic text-muted-foreground/80">
              Mis espacios son lugares de co-creación
            </p>
          </motion.div>

          {/* Image Break */}
          <motion.div variants={item} className="my-24 aspect-[16/9] overflow-hidden rounded-sm relative group">
             <img 
               src="/images/image5_1770888421025.jpg" 
               alt="Círculo de mujeres" 
               className="w-full h-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-105" 
             />
             <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
          </motion.div>

          {/* Detailed Content */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 font-light text-muted-foreground text-lg">
              <p>
                Acompaño desde la presencia y la escucha, respetando los ritmos de cada persona. No busco arreglarte, porque no estás roto/a. Busco que recuerdes tu propia sabiduría corporal.
              </p>
              <p>
                Trabajamos con el cuerpo no como una máquina, sino como un territorio sagrado donde residen nuestras memorias, emociones y potencias.
              </p>
            </div>
            
            <div className="space-y-8 font-light text-muted-foreground text-lg">
               <p>
                La voz es el puente entre lo invisible y lo visible. Al liberar la voz, liberamos nuestra capacidad de ocupar nuestro lugar en el mundo.
               </p>
               <p>
                La respiración es el hilo que nos une a la vida. Recuperar una respiración completa y consciente es recuperar nuestra vitalidad esencial.
               </p>
            </div>
          </motion.div>

          {/* Accordions / Features */}
          <motion.div variants={item} className="mt-32">
            <Accordion type="single" collapsible className="w-full border-t border-muted">
              {[
                { title: "Presencia", text: "Estar presente en el aquí y ahora, habitando el cuerpo." },
                { title: "Escucha", text: "Escuchar lo que el cuerpo y la voz tienen para decirnos." },
                { title: "Coherencia", text: "Alinear lo que sentimos, pensamos, decimos y hacemos." }
              ].map((feature, idx) => (
                <AccordionItem key={idx} value={feature.title.toLowerCase()}>
                  <AccordionTrigger className="font-serif text-2xl text-primary hover:no-underline py-6">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light text-base pb-6">
                    {feature.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </motion.div>
      </div>
    </Layout>
  );
}
