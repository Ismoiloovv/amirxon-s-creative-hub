import { ArrowUpRight, ExternalLink } from "lucide-react";
import p1 from "@/assets/project-1.jpg";

const project = {
  title: "RankUp English Pal",
  category: "EdTech · Language Learning",
  desc: "Ingliz tilini o'rganish uchun interaktiv platforma — darslar, mashqlar va progress kuzatuvi bilan zamonaviy web ilova.",
  img: p1,
  tags: ["React", "TypeScript", "Tailwind", "Lovable Cloud"],
  link: "https://rankup-english-pal.lovable.app",
};

const Works = () => {
  return (
    <section id="works" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 size-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 size-[500px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">03 //</span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Tanlangan loyiha</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] max-w-3xl">
            Mening <br />
            <span className="gradient-text">loyiham</span>
          </h2>
          <p className="text-muted-foreground max-w-sm font-light">
            Hozircha faol namoyish etilayotgan loyihani ko'rib chiqing.
          </p>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden glass hover:border-primary transition-smooth hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_hsl(var(--primary)/0.5)]"
        >
          <div className="lg:col-span-3 aspect-[16/10] lg:aspect-auto overflow-hidden bg-emerald-deep relative">
            <img
              src={project.img}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/30 to-transparent opacity-60 group-hover:opacity-30 transition-smooth" />
            <div className="absolute inset-0 grid-bg opacity-0 group-hover:opacity-30 transition-smooth pointer-events-none" />
            <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-background/70 backdrop-blur-md border border-primary/30 text-primary">
              01 / Featured
            </div>
            <div className="absolute top-6 right-6 size-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-smooth">
              <ArrowUpRight className="size-6" />
            </div>
          </div>

          <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center gap-5 bg-gradient-to-br from-card/60 to-background/40">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              {project.category}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-primary transition-smooth">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border border-border text-[10px] font-mono uppercase tracking-widest">
                  {t}
                </span>
              ))}
            </div>
            <div className="pt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
              Saytga o'tish <ExternalLink className="size-4" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Works;
