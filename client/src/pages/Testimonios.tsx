import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "todos" | "voz" | "retiros";

interface Testimonial {
  text: string;
  author: string;
  category: "voz" | "retiros";
}

const testimonials: Testimonial[] = [
  {
    category: "voz",
    author: "Gemma",
    text: "He podido experimentar con la propia voz un movimiento totalmente interno, que te aporta foco, paz y sobre todo calma interior. Cuando nada para afuera, la voz te arraiga internamente. Lo recomiendo a todo el mundo que quiera reencontrarse con su ser interno. Gracias Gabri 💓",
  },
  {
    category: "voz",
    author: "Alicia Port",
    text: "Al terminar la sesión con Gabriela sentía paz, mi cuerpo más presente y estaba consciente del volumen de mi cuerpo. Me sorprendió y maravilló el poder de la voz y el efecto sanador que causó en mí al utilizar una herramienta siempre accesible como es la vibración de las cuerdas vocales y cómo es un recurso que podemos utilizar a diario. Se nota la experiencia y vocación de Gabriela, con todas las herramientas que usa y la pasión con la que lo vive y lo enseña. Todo un don y una suerte para quien lo comparte. Gracias, Gabriela, con ganas de seguir compartiendo camino.",
  },
  {
    category: "retiros",
    author: "P.C.H., Vilanova",
    text: "Lo más significativo ha sido la profundidad de las propuestas. La alegría, sabiduría, respeto y amor con el que han sido ofrecidas.",
  },
  {
    category: "retiros",
    author: "Nines, Sant Andreu de la Barca",
    text: "Las constelaciones con Marc han sido un recorrido muy cuidado y con Gabi ha sido muy bonito, hemos trabajado aspectos inconscientes con el sonido, hemos despertado los sentidos.",
  },
  {
    category: "retiros",
    author: "Merce J. — 50 años, Sant Boi de Llobregat",
    text: "Las actividades y dinámicas son excepcionales si deseas realmente algo que te mueva.",
  },
  {
    category: "retiros",
    author: "Anna R. — 60 años, El Prat de Llobregat",
    text: "La calidad humana, el rigor profesional y la inmensa humildad de los dos facilitadores les convierte en unos compañeros de viaje excepcionales para un retiro tan intenso y transformador como este.",
  },
  {
    category: "retiros",
    author: "Jordi A. M.",
    text: "Una experiencia muy relevante y potente, que permite trabajar con eficacia aspectos de la vida o emociones encerradas. No cambiaría nada. Salgo lleno de amor hacia mí y los demás.",
  },
];

const PREVIEW_LENGTH = 120;

function TestimonialCard({ t }: { t: Testimonial }) {
  const [open, setOpen] = useState(false);
  const isLong = t.text.length > PREVIEW_LENGTH;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background border border-primary/10 rounded-2xl p-8 shadow-sm"
    >
      <span className="text-4xl font-serif text-primary/20 leading-none select-none block mb-3">&ldquo;</span>
      <p className={cn("text-muted-foreground font-light text-lg leading-relaxed italic", !open && isLong ? "line-clamp-3" : "")}>
        {t.text}
      </p>
      {isLong && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-3 flex items-center gap-1 text-xs uppercase tracking-widest text-primary hover:opacity-70 transition-opacity"
        >
          {open ? "Leer menos" : "Leer más"}
          <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", open ? "rotate-180" : "")} />
        </button>
      )}
      <footer className="mt-5 text-sm uppercase tracking-widest text-primary font-light">
        &mdash; {t.author}
      </footer>
    </motion.div>
  );
}

export default function Testimonios() {
  const [active, setActive] = useState<Category>("todos");

  const filtered = active === "todos" ? testimonials : testimonials.filter((t) => t.category === active);

  const tabs: { key: Category; label: string }[] = [
    { key: "todos", label: "Todos" },
    { key: "voz", label: "Voz Terapéutica" },
    { key: "retiros", label: "Retiros" },
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-secondary/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-serif uppercase tracking-widest text-primary mb-4 block">Voces</span>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Testimonios</h1>
            <p className="text-muted-foreground font-light text-lg">
              Palabras de quienes han compartido este camino
            </p>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={cn(
                  "px-5 py-2 text-xs uppercase tracking-widest rounded-full border transition-all duration-200",
                  active === tab.key
                    ? "bg-primary text-white border-primary"
                    : "border-primary/30 text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filtered.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
