import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "UZ Market Shop",
    category: "E-commerce · Online Do'kon",
    desc: "O'zbekiston bozori uchun zamonaviy online do'kon platformasi — katalog, savatcha va buyurtma tizimi bilan.",
    img: p1,
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/Ismoiloovv/uz-market-shop",
  },
  {
    title: "E-commerce Platform",
    category: "Online Store",
    desc: "To'liq funksional online do'kon: katalog, savatcha, to'lov tizimi.",
    img: p2,
    tags: ["Next.js", "Stripe", "Tailwind"],
    link: "#",
  },
  {
    title: "Mobile Fitness App",
    category: "Mobile · UI/UX",
    desc: "Sportchilar uchun mashq rejasi va progress kuzatuv ilovasi dizayni.",
    img: p3,
    tags: ["Figma", "React Native"],
    link: "#",
  },
  {
    title: "Creative Agency Site",
    category: "Landing Page",
    desc: "Ijodiy agentlik uchun bold tipografika va animatsiyalar bilan sayt.",
    img: p4,
    tags: ["Framer Motion", "Three.js"],
    link: "#",
  },
];

const Works = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector<HTMLElement>("[data-card]");
      const w = card ? card.offsetWidth + 24 : 1;
      setActive(Math.round(el.scrollLeft / w));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="works" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 size-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 size-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">03 //</span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Ijodiy ishlar</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] max-w-3xl">
            Tanlangan <br />
            <span className="gradient-text">loyihalarim</span>
          </h2>
          <div className="flex items-end justify-between md:justify-end gap-6">
            <p className="text-muted-foreground max-w-sm font-light">
              Surib ko'ring yoki tugmalar yordamida loyihalar orasida harakatlaning.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Oldingi"
                className="size-12 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Keyingi"
                className="size-12 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal carousel */}
      <div
        ref={trackRef}
        className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none px-6 md:px-10 pb-8"
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`#works ::-webkit-scrollbar{display:none}`}</style>
        {projects.map((p, i) => (
          <a
            key={p.title}
            data-card
            href={p.link}
            className="group relative shrink-0 w-[85%] sm:w-[60%] md:w-[48%] lg:w-[38%] snap-start rounded-3xl overflow-hidden glass hover:border-primary transition-smooth hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_hsl(var(--emerald-glow)/0.5)]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-emerald-deep relative">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={900}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-30 transition-smooth" />
              <div className="absolute inset-0 grid-bg opacity-0 group-hover:opacity-30 transition-smooth pointer-events-none" />
              <div className="absolute top-5 right-5 size-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-smooth">
                <ArrowUpRight className="size-5" />
              </div>
              <div className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-background/70 backdrop-blur-md border border-primary/30 text-primary">
                0{i + 1}
              </div>
            </div>

            <div className="p-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                {p.category}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-smooth">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border border-border text-[10px] font-mono uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
        <div className="shrink-0 w-6 md:w-10" />
      </div>

      {/* Pagination dots */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 mt-6 flex items-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = trackRef.current;
              if (!el) return;
              const card = el.querySelector<HTMLElement>("[data-card]");
              const w = card ? card.offsetWidth + 24 : 1;
              el.scrollTo({ left: i * w, behavior: "smooth" });
            }}
            aria-label={`Loyiha ${i + 1}`}
            className={`h-1.5 rounded-full transition-smooth ${
              active === i ? "w-10 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
