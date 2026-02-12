import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

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

          {/* Intro Block */}
          <motion.div variants={item} className="prose prose-lg md:prose-xl prose-stone mx-auto font-light leading-relaxed mb-24">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:float-left first-letter:mr-3">
              Sostengo espacios para que descubras, practiques y desarrolles tus propias capacidades a través de las herramientas que me han funcionado para conocerme mejor y cultivar mi salud.
            </p>
            <p>
              Son tecnologías ancestrales que he practicado y no sólo me han funcionado sino que veo una y otra vez cómo facilitan y nutren la salud de muchas personas que participan en mis clases y retiros.
            </p>
          </motion.div>

          {/* Quote Block */}
          <motion.blockquote 
            variants={item}
            className="border-l-2 border-primary pl-8 my-20 py-4 md:ml-[-2rem] italic text-2xl md:text-3xl font-serif text-primary/80 leading-normal"
          >
            "No hay recetas universales, sino procesos vivos, respetuosos y encarnados."
          </motion.blockquote>

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
          <motion.div variants={item} className="mt-32 space-y-12">
            {[
              { title: "Presencia", text: "Estar presente en el aquí y ahora, habitando el cuerpo." },
              { title: "Escucha", text: "Escuchar lo que el cuerpo y la voz tienen para decirnos." },
              { title: "Coherencia", text: "Alinear lo que sentimos, pensamos, decimos y hacemos." }
            ].map((feature, idx) => (
              <div key={idx} className="border-t border-muted py-8">
                <h3 className="text-2xl font-serif text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground font-light">{feature.text}</p>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </Layout>
  );
}
