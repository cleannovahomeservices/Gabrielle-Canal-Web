import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { events } from "@/data/events";

export default function Eventos() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-primary mb-4 text-center"
          >
            Eventos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-20"
          >
            Encuentros y talleres para vivir en comunidad
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-32 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col gap-6"
              >
                <Link href={event.link} className="block relative overflow-hidden aspect-[4/5] cursor-pointer rounded-xl">
                  <img
                    src={event.coverSrc}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                </Link>

                <div className="flex flex-col items-start gap-3">
                  <div className="flex items-center gap-2 text-primary">
                    <CalendarDays className="w-4 h-4" strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-widest font-light">{event.date}</span>
                  </div>
                  <h2 className="text-3xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h2>
                  <p className="text-muted-foreground font-light text-sm tracking-wide italic">
                    {event.tagline}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-2">
                    <Link href={event.link}>
                      <Button className="h-10 px-6 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs flex items-center gap-2">
                        Ver Evento <ArrowUpRight className="w-3 h-3" />
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
