import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Analytics Dashboard",
    category: "Web App · Dashboard",
    desc: "Real-time ma'lumotlarni vizualizatsiya qiluvchi zamonaviy boshqaruv paneli.",
    img: p1,
    tags: ["React", "TypeScript", "D3.js"],
    link: "#",
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
  return (
    <section id="works" className="relative py-32 px-6 md:px-10">
      <div className="absolute top-0 left-0 size-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
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
          <p className="text-muted-foreground max-w-sm font-light">
            Mijozlar va shaxsiy tashabbuslar uchun yaratgan eng so'nggi
            ishlarimning kichik to'plami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              className={`group relative rounded-3xl overflow-hidden glass hover:border-primary transition-smooth ${
                i % 2 === 1 ? "md:translate-y-12" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-emerald-deep relative">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-30 transition-smooth" />
                <div className="absolute top-5 right-5 size-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-smooth">
                  <ArrowUpRight className="size-5" />
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
        </div>
      </div>
    </section>
  );
};

export default Works;
