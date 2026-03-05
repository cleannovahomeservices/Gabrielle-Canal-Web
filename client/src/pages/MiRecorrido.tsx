import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MiRecorrido() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Layout>
      {/* Hero — face visible on desktop */}
      <div className="w-full overflow-hidden">
        <img
          src="/images/page_15_img_1.png"
          alt="Gabrielle Canal"
          className="w-full h-auto max-h-[520px] object-contain"
        />
      </div>

      <div className="min-h-screen py-20 px-6 md:px-12 bg-secondary/10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-20">
            <span className="text-xs font-serif uppercase tracking-widest text-primary mb-4 block">Bio</span>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground">Mi Recorrido</h1>
          </div>

          <div className="space-y-8 font-light text-lg leading-loose text-muted-foreground text-justify">
            <p className="first-letter:text-4xl first-letter:font-serif first-letter:text-primary first-letter:float-left first-letter:mr-2">
              Vengo de una experiencia muy concreta y corporal. Mi camino no empezó en la teoría, sino en la necesidad de encontrar un lugar seguro dentro de mi propia piel. A través de los años, he explorado diversas disciplinas que ponen al cuerpo en el centro de la experiencia humana.
            </p>
            <p>
              Desde el yoga hasta la expresión vocal, pasando por la meditación y el movimiento consciente, he ido tejiendo un tapiz de herramientas que ahora pongo al servicio de los demás. No desde la posición de quien tiene todas las respuestas, sino de quien sigue caminando y preguntándose.
            </p>
          </div>

          {/* Expandable section */}
          <div className="mt-6">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:opacity-70 transition-opacity"
            >
              {expanded ? "Leer menos" : "Leer más"}
              <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", expanded ? "rotate-180" : "")} />
            </button>

            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 space-y-8 font-light text-lg leading-loose text-muted-foreground text-justify"
              >
                <p>
                  Mamá whomeschooler durante 12 años, Profesora de Yoga y Voz, cantautora y amante de la Naturaleza.
                </p>
                <p>
                  Empiezo a practicar Hatha Yoga a los 12 añitos: llevando la atención hacia dentro y aprendiendo a respirar profundamente descubro una ventana al Cielo.
                </p>
                <p>
                  Al formarme a los 22 para impartir clases de KUNDALINI Yoga, descubro el poder transformador de esta práctica milenaria.
                </p>
                <p>
                  Ahora son la pasión por cantar y comunicar y la necesidad de seguir despertando a nuestra autenticidad y sanar que me llevan a compartir el arte, la inspiración y las herramientas que tengo, para recordar nuestra Alegría de vivir y Salud Profundas.
                </p>
                <p className="font-serif italic text-primary text-xl">
                  Llegó el tiempo en que florece la Voluntad.
                </p>
              </motion.div>
            )}
          </div>

          {/* Ver Testimonios button */}
          <div className="flex justify-center mt-12">
            <Link href="/testimonios">
              <Button variant="outline" className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-xs">
                Ver Testimonios
              </Button>
            </Link>
          </div>

          {/* Mi Propósito */}
          <div className="my-24 bg-background p-12 md:p-16 border border-primary/10 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-serif text-primary mb-8 text-center">Mi Propósito</h2>

              <div className="mb-10 overflow-hidden rounded-xl">
                <img
                  src="/images/page_16_img_1.png"
                  alt="Mi Propósito"
                  className="w-full object-contain max-h-[380px]"
                />
              </div>

              <p className="text-xl text-center font-light mb-12 text-muted-foreground">
                Contribuir a la creación del nuevo paradigma donde las personas recuerdan su capacidad innata de generar y cuidar salud integral —mental, emocional y física—, caminando hacia la soberanía personal y colectiva.
              </p>

              <ul className="space-y-4 max-w-lg mx-auto">
                {[
                  "Se liberen de condicionamientos",
                  "Confíen en sí mismas y en sus dones",
                  "Recuerden para qué han venido",
                  "Habiten cuerpos y mentes más sanas y vivas",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-foreground/80">
                    <span className="h-px w-8 bg-primary/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl font-serif text-primary italic">
              "Acompaño para que recordar nuestro poder, nuestra capacidad propia."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
