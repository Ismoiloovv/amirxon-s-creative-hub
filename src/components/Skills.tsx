import { useEffect, useRef, useState } from "react";
import {
  Code2, FileCode, Database, Server, Boxes, Brain, Plug, Coffee, Cpu,
} from "lucide-react";

const skills = [
  { name: "HTML",       level: 95, icon: FileCode, color: "from-emerald-400 to-emerald-600", category: "Frontend" },
  { name: "CSS",        level: 92, icon: Code2,    color: "from-emerald-400 to-mint",        category: "Frontend" },
  { name: "Django",     level: 80, icon: Server,   color: "from-emerald-500 to-primary",     category: "Backend" },
  { name: "PostgreSQL", level: 78, icon: Database, color: "from-primary to-emerald-600",     category: "Database" },
  { name: "MongoDB",    level: 72, icon: Database, color: "from-emerald-400 to-emerald-700", category: "Database" },
  { name: "SQLite",     level: 75, icon: Database, color: "from-mint to-primary",            category: "Database" },
  { name: "AI / ML",    level: 70, icon: Brain,    color: "from-mint to-emerald-500",        category: "Tools" },
  { name: "REST API",   level: 82, icon: Plug,     color: "from-emerald-500 to-mint",        category: "Backend" },
  { name: "Java",       level: 65, icon: Coffee,   color: "from-emerald-600 to-primary",     category: "Lang" },
  { name: "C++",        level: 60, icon: Cpu,      color: "from-primary to-mint",            category: "Lang" },
];

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="absolute top-1/3 left-0 size-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 size-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">04 //</span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Bilimlarim</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] max-w-3xl">
            Texnologiyalar <br />
            <span className="gradient-text">diagrammasi</span>
          </h2>
          <p className="text-muted-foreground max-w-sm font-light">
            Men kunlik ishimda foydalanadigan tillar, ramkalar va asboblar — har biri uchun mahorat darajasi.
          </p>
        </div>

        {/* Bar diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-smooth">
                    <s.icon className="size-4 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-base">{s.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.category}
                    </div>
                  </div>
                </div>
                <span className="font-mono text-sm text-primary font-bold tabular-nums">
                  {s.level}%
                </span>
              </div>
              <div className="relative h-2.5 bg-card rounded-full overflow-hidden border border-border">
                <div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${s.color} rounded-full transition-all duration-[1400ms] ease-out`}
                  style={{
                    width: visible ? `${s.level}%` : "0%",
                    transitionDelay: `${i * 80}ms`,
                    boxShadow: "0 0 20px hsl(var(--emerald-glow) / 0.5)",
                  }}
                />
                <div
                  className="absolute top-0 bottom-0 w-px bg-accent shadow-[0_0_10px_hsl(var(--accent))] transition-all duration-[1400ms] ease-out"
                  style={{
                    left: visible ? `${s.level}%` : "0%",
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech orbit chips */}
        <div className="mt-20 flex flex-wrap gap-3 justify-center">
          {skills.map((s) => (
            <div
              key={`chip-${s.name}`}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/50 hover:border-primary hover:bg-primary/10 hover:-translate-y-1 transition-smooth cursor-default"
            >
              <s.icon className="size-3.5 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
