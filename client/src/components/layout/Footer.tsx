import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-secondary/20 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <span className="font-serif text-xl text-primary">Gabrielle Canal</span>
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Acompañando procesos de vida
          </p>
        </div>
        
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="https://www.instagram.com/gabriela.canal.1" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Instagram</a>
          <a href="mailto:happyperiodprogram@gmail.com" className="hover:text-primary transition-colors">Email</a>
          <a href="https://www.youtube.com/watch?app=desktop&v=snjbxYJC7Qg" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">YouTube</a>
        </div>
        
        <div className="text-[10px] text-muted-foreground/60">
          © {new Date().getFullYear()} Gabrielle Canal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
