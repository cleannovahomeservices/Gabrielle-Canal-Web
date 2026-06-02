import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, MapPin, Ticket } from "lucide-react";
import { events } from "@/data/events";

const event = events.find((e) => e.slug === "talleres-de-voz")!;

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido." }),
  email: z.string().email({ message: "Email inválido." }),
  phone: z.string().min(6, { message: "Teléfono inválido." }),
  fecha: z.string().min(1, { message: "Elige una fecha." }),
  message: z.string().optional(),
});

export default function TallerDeVoz() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      fecha: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mykvrbng", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...values,
          _subject: `Inscripción Taller de Voz — ${values.name}`,
          evento: event.title,
        }),
      });

      if (response.ok) {
        toast({
          title: "Inscripción enviada",
          description: "Gracias por inscribirte. Te confirmaré tu plaza muy pronto.",
        });
        form.reset();
      } else {
        throw new Error("Error al enviar");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu inscripción. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Hero */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 pt-8 md:pt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-2 text-primary">
              <CalendarDays className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-widest font-light">{event.date}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-wide">
              {event.title}
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-muted-foreground">
              {event.tagline}
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/70 pt-2">
              {event.keywords.join("  ·  ")}
            </p>
          </motion.div>
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-md mx-auto px-6 md:px-0 mt-12"
        >
          <video
            src="/videos/taller-voz.mp4"
            poster="/videos/taller-voz-poster.jpg"
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-xl shadow-lg bg-black aspect-[4/5] object-cover"
          />
        </motion.div>

        {/* Description */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-serif text-primary text-center">Sobre el evento</h2>
            <div className="prose prose-lg prose-stone max-w-none font-light text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>
                Un espacio para reencontrarte con tu voz: no desde la técnica del canto formal,
                sino como herramienta de autoconocimiento, liberación emocional y presencia.
                Exploraremos la vibración como llave de acceso a nuestras múltiples dimensiones
                y como puente por donde fluye nuestra intención.
              </p>
              <p>
                A través de ejercicios de respiración, movimiento consciente, armónicos y
                vocalización intuitiva, desbloquearemos el cuerpo para que tu voz resuene libre.
                Un trabajo profundo y a la vez lúdico, donde el error no existe: sólo explorar,
                descubrir y recordar. No hace falta saber cantar.
              </p>
            </div>

            {/* Details */}
            <div className="grid sm:grid-cols-2 gap-6 border-t border-muted pt-8">
              <div className="flex items-start gap-3">
                <CalendarDays className="w-5 h-5 text-primary mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary mb-1">Fechas</p>
                  <p className="text-muted-foreground font-light">{event.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary mb-1">Plazas</p>
                  <p className="text-muted-foreground font-light">Grupo reducido · reserva con antelación</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Ticket className="w-5 h-5 text-primary mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary mb-1">Inversión</p>
                  <p className="text-muted-foreground font-light">Un taller 55€ · Los dos talleres 100€</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Inscription form */}
        <div className="max-w-lg mx-auto px-6 md:px-12 mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif text-primary mb-3">Inscripción</h2>
              <p className="text-muted-foreground font-light text-sm">
                Reserva tu plaza en los Talleres de Voz. Te confirmaré por email o teléfono.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-lg font-light" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@email.com" {...field} className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-lg font-light" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu teléfono" {...field} className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-lg font-light" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fecha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">¿A qué fecha quieres asistir?</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-0 border-b border-input rounded-none px-0 focus:ring-0 focus:border-primary bg-transparent text-lg font-light">
                            <SelectValue placeholder="Elige una opción" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Sábado 6 de junio">Sábado 6 de junio</SelectItem>
                          <SelectItem value="Sábado 27 de junio">Sábado 27 de junio</SelectItem>
                          <SelectItem value="Ambas fechas">Ambas fechas</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Mensaje (opcional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿Algo que quieras contarme?" {...field} className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-lg font-light resize-none min-h-[80px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs"
                >
                  {isSubmitting ? "Enviando..." : "Reservar mi plaza"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
