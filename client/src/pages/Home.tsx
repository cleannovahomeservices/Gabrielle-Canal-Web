import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        
        {/* Abstract Background Element - "Breathable" */}
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/20 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
          
          {/* Text Content */}
          <div className="md:col-span-5 order-2 md:order-1 flex flex-col gap-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] text-primary mb-6">
                Artista & <br/>
                <span className="italic text-foreground/80 font-light">Facilitadora</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light"
            >
              <p>
                La respiración, la voz y el cuerpo son para mí lenguajes de sanación, expresión y memoria.
              </p>
              <p>
                Sostengo espacios para que descubras, practiques y desarrolles tus propias capacidades a través de las herramientas que me han funcionado para conocerme mejor y cultivar mi salud.
              </p>
              <p className="hidden md:block">
                Son tecnologías ancestrales que he practicado y no sólo me han funcionado sino que veo una y otra vez cómo facilitan y nutren la salud de muchas personas que participan en mis clases y retiros.
              </p>
              <p className="text-primary italic font-serif text-xl pt-2">
                "No hay recetas universales, sino procesos vivos, respetuosos y encarnados."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-8 justify-center md:justify-start"
            >
              <Link href="/como-te-acompano">
                <Button variant="outline" className="h-12 px-8 rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-xs">
                  Cómo te acompaño
                </Button>
              </Link>
              <Link href="/servicios">
                <Button className="h-12 px-8 rounded-none bg-primary text-white hover:bg-primary/90 transition-all uppercase tracking-widest text-xs">
                  Servicios
                </Button>
              </Link>
              <Link href="/mi-musica">
                <Button variant="ghost" className="h-12 px-6 rounded-none hover:bg-transparent hover:text-primary transition-all text-muted-foreground group">
                  Mi Música <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <div className="md:col-span-7 order-1 md:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img 
                src="/images/image6_1770888421026.jpg" 
                alt="Gabrielle Canal" 
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-in-out scale-105 hover:scale-100"
              />
              <div className="absolute inset-0 border-[1px] border-white/20 m-4 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
