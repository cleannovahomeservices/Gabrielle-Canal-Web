import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/servicios", label: "Servicios" },
    { href: "/mi-recorrido", label: "Bio" },
    { href: "/mi-musica", label: "Mi Música" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6",
        scrolled ? "bg-background/90 backdrop-blur-sm shadow-sm py-4" : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex flex-col group cursor-pointer z-50 relative">
          <span className="font-serif text-2xl tracking-wide text-primary font-medium group-hover:opacity-80 transition-opacity">
            Gabrielle Canal
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mt-1">
            Yoga · Voz · Respiración
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm tracking-widest uppercase hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                location === link.href ? "text-primary after:w-full" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "font-serif text-3xl md:text-4xl hover:text-primary transition-colors duration-300",
                location === link.href ? "text-primary italic" : "text-foreground"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
