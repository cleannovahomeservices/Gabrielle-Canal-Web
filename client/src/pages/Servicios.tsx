import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FilmstripCarousel } from "@/components/ui/FilmstripCarousel";

const servicesGalleryPhotos = [
  { src: "/images/kundalini_yoga_clase.png" },
  { src: "/images/yoga_sala_tropical.png" },
  { src: "/images/page_2_img_1.png" },
  { src: "/images/voz_ejercicio.png" },
  { src: "/images/voz_relajacion.png" },
  { src: "/images/voz_noche.png" },
  { src: "/images/page_6_img_1.png" },
  { src: "/images/page_7_img_1.png" },
  { src: "/images/image1_1770888421021.jpg" },
  { src: "/images/retiro_bosque.png" },
  { src: "/images/retiro_circulo.png" },
  { src: "/images/retiro_grupo_tropical.png" },
  { src: "/images/retiro_meditacion_cesped.png" },
  { src: "/images/retiro_relajacion_bosque.png" },
  { src: "/images/retiro_camino.png" },
  { src: "/images/page_10_img_1.png" },
  { src: "/images/page_11_img_1.png" },
];

const services = [
  {
    id: "happy-period",
    title: "Happy Period",
    subtitle: "Programa trimestral para dejar de sufrir con los ciclos menstruales",
    coverSrc: "/images/page_1_img_1.png",
    coverPosition: "center top",
    carouselPhotos: null,
    link: "http://happyperiod.gabriellecanal.com/",
    external: true,
  },
  {
    id: "kundalini-yoga",
    title: "Kundalini Yoga",
    subtitle: "Clases semanales para vivir en equilibrio: en tu centro y energética/o",
    coverSrc: "/images/page_2_img_1.png",
    coverPosition: "center",
    carouselPhotos: null,
    link: "/servicios/kundalini-yoga",
    external: false,
  },
  {
    id: "voz-terapeutica",
    title: "Voz Terapéutica",
    subtitle: "Talleres de exploración vocal y sanación",
    coverSrc: "/images/page_3_img_1.png",
    coverPosition: "center",
    carouselPhotos: null,
    link: "/servicios/voz-terapeutica",
    external: false,
  },
  {
    id: "retiros",
    title: "Retiros",
    subtitle: "Inmersiones profundas en la naturaleza",
    coverSrc: "/images/image1_1770888421021.jpg",
    coverPosition: "center",
    carouselPhotos: null,
    link: "/servicios/retiros",
    external: false,
  },
];

export default function Servicios() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-primary mb-8 text-center"
          >
            Servicios
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-6">
              Escenas de los espacios
            </p>
            <FilmstripCarousel photos={servicesGalleryPhotos} />
          </motion.div>

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
                {/* Cover image */}
                {service.link && service.external ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden aspect-[4/5] cursor-pointer rounded-xl"
                  >
                    <img
                      src={service.coverSrc}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      style={{ objectPosition: service.coverPosition ?? "center" }}
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  </a>
                ) : service.link ? (
                  <Link href={service.link} className="block relative overflow-hidden aspect-[4/5] cursor-pointer rounded-xl">
                    <img
                      src={service.coverSrc}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      style={{ objectPosition: service.coverPosition ?? "center" }}
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  </Link>
                ) : (
                  <div className="block relative overflow-hidden aspect-[4/5] rounded-xl">
                    <img
                      src={service.coverSrc}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: service.coverPosition ?? "center" }}
                    />
                  </div>
                )}

                <div className="flex flex-col items-start gap-3">
                  <h2 className="text-3xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground font-light text-sm tracking-wide uppercase">
                    {service.subtitle}
                  </p>

                  {/* Carousel below title, only for services that have carousel photos */}
                  {service.carouselPhotos && (
                    <div className="w-full mt-2">
                      <FilmstripCarousel photos={service.carouselPhotos} />
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 mt-2">
                    {service.link && (
                      service.external ? (
                        <a href={service.link} target="_blank" rel="noopener noreferrer">
                          <Button className="h-10 px-6 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs flex items-center gap-2">
                            Conocer Más <ArrowUpRight className="w-3 h-3" />
                          </Button>
                        </a>
                      ) : (
                        <Link href={service.link}>
                          <Button className="h-10 px-6 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs flex items-center gap-2">
                            Conocer Más <ArrowUpRight className="w-3 h-3" />
                          </Button>
                        </Link>
                      )
                    )}
                    <Link href="/testimonios">
                      <Button variant="outline" className="h-10 px-6 border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-xs">
                        Ver Testimonios
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}