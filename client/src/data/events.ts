export interface EventItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  tagline: string;
  keywords: string[];
  coverSrc: string;
  link: string;
}

export const events: EventItem[] = [
  {
    id: "talleres-de-voz",
    slug: "talleres-de-voz",
    title: "Talleres de Voz",
    date: "Sábados 6 y 27 de junio",
    tagline: "Encuentra tu voz, descubre tu potencial",
    keywords: ["Vibra", "Suena", "Conecta"],
    coverSrc: "/videos/taller-voz-poster.jpg",
    link: "/eventos/talleres-de-voz",
  },
];
