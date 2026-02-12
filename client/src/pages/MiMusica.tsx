import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Music as MusicIcon, ExternalLink } from "lucide-react";

export default function MiMusica() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-6 md:px-12 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <div className="relative order-2 md:order-1">
             <div className="aspect-square overflow-hidden rounded-sm relative">
                <img 
                  src="/images/image4_1770888421025.jpg" 
                  alt="Gabrielle cantando" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
             {/* Decorative vinyl record effect */}
             <div className="absolute -z-10 top-4 -right-12 w-full h-full rounded-full border border-muted/30 hidden md:block animate-[spin_10s_linear_infinite]" />
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2 space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif text-primary">Mi Música</h1>
            
            <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
              <p>
                La música es parte esencial de mi camino.
              </p>
              <p>
                Como cantautora, utilizo la voz y la palabra para alumbrar, acompañar, acoger e inspirar.
              </p>
              <p className="italic text-foreground/80">
                No es un servicio terapéutico, sino otro lenguaje desde el que comparto visión y sensibilidad.
              </p>
            </div>

            <div className="pt-8">
              <a href="https://linktr.ee/gabriellecanalmusic" target="_blank" rel="noreferrer">
                <Button className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest text-xs flex items-center gap-3">
                  <MusicIcon className="w-4 h-4" />
                  Ir a conocer mi música
                  <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                </Button>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </Layout>
  );
}
