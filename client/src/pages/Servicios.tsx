import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "happy-period",
    title: "Happy Period",
    description: "Programa trimestral para la salud menstrual",
    image: "/images/image2_1770888421025.png",
    link: "http://happyperiod.gabriellecanal.com/",
    external: true
  },
  {
    id: "kundalini-yoga",
    title: "Kundalini Yoga",
    description: "Clases semanales para el despertar de la energía",
    image: "/images/image3_1770888421025.png",
    link: "/servicios/kundalini-yoga",
    external: false
  },
  {
    id: "voz-terapeutica",
    title: "Voz Terapéutica",
    description: "Talleres de exploración vocal y sanación",
    image: "/images/image4_1770888421025.jpg",
    link: "/servicios/voz-terapeutica",
    external: false
  },
  {
    id: "retiros",
    title: "Retiros",
    description: "Inmersiones profundas en la naturaleza",
    image: "/images/image1_1770888421021.jpg",
    link: "/servicios/retiros",
    external: false
  }
];

export default function Servicios() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-primary mb-20 text-center"
          >
            Servicios
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col gap-6"
              >
                {/* Image Link Wrapper */}
                {service.external ? (
                  <a 
                    href={service.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden aspect-[4/5] cursor-pointer"
                  >
                    <div className="w-full h-full relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                    </div>
                  </a>
                ) : (
                  <Link href={service.link} className="block relative overflow-hidden aspect-[4/5] cursor-pointer">
                    <div className="w-full h-full relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                    </div>
                  </Link>
                )}

                <div className="flex flex-col items-start gap-3">
                  <h2 className="text-3xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground font-light text-sm tracking-wide uppercase">
                    {service.description}
                  </p>
                  
                  {service.external ? (
                     <a href={service.link} target="_blank" rel="noopener noreferrer">
                       <Button variant="link" className="p-0 text-primary uppercase tracking-widest text-xs mt-2 group/btn">
                          Descubrir <ArrowUpRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                       </Button>
                     </a>
                  ) : (
                    <Link href={service.link}>
                       <Button variant="link" className="p-0 text-primary uppercase tracking-widest text-xs mt-2 group/btn">
                          Abrir <ArrowUpRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                       </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
