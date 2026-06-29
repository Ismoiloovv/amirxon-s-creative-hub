import { ArrowDown, Sparkles } from "lucide-react";
import avatar from "@/assets/amirxon.jpg.asset.json";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* Aurora blobs */}
      <div className="absolute top-20 -right-40 size-[560px] bg-primary/25 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 -left-40 size-[460px] bg-accent/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 size-[300px] bg-mint/10 rounded-full blur-[120px] pointer-events-none animate-float" />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
      }} />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left content */}
        <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full size-2 bg-accent" />
            </span>
            <Sparkles className="size-3.5 text-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Available for projects // 2026
            </span>
          </div>

          <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.9] tracking-tighter">
            <span className="block text-foreground">Ismoilov</span>
            <span className="block gradient-text drop-shadow-[0_0_40px_hsl(var(--primary)/0.4)]">Amirxon</span>
            <span className="block text-stroke text-[clamp(2rem,5vw,4rem)] mt-2">
              .Portfolio
            </span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Kreativ web dasturchi va dizayner. Men zamonaviy, tezkor va
            estetik veb-mahsulotlar yarataman — har bir piksel ehtirom
            bilan joylashtirilgan.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#works"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs glow-primary hover:scale-105 transition-smooth overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Loyihalarni ko'rish</span>
              <ArrowDown className="relative size-4 group-hover:translate-y-1 transition-smooth" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-border hover:border-accent hover:text-accent font-bold uppercase tracking-widest text-xs transition-smooth backdrop-blur-sm"
            >
              Bog'lanish
            </a>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border max-w-lg">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">20+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Loyihalar</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">2+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Yil tajriba</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">∞</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Ehtiros</div>
            </div>
          </div>
        </div>

        {/* Right: Real portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-scale-in">
          <div className="relative size-72 md:size-96 lg:size-[460px] group">
            {/* Orbiting dot */}
            <div className="absolute inset-0 animate-spin-slow scale-[1.18]">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 size-3 rounded-full bg-accent glow-mint" />
            </div>
            {/* Rotating dashed ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-spin-slow scale-110" />
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full border border-accent/30 scale-125" />
            {/* Conic gradient halo */}
            <div className="absolute -inset-2 rounded-full opacity-50 blur-2xl group-hover:opacity-80 transition-smooth" style={{
              background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))"
            }} />

            {/* Portrait */}
            <div className="absolute inset-0 rounded-full overflow-hidden ring-2 ring-primary/50 animate-pulse-glow">
              <img
                src={avatar.url}
                alt="Ismoilov Amirxon — portrait"
                className="size-full object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 mix-blend-overlay pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-2 -left-4 bg-accent text-accent-foreground px-5 py-3 rounded-2xl shadow-2xl animate-float">
              <div className="text-[9px] font-mono uppercase tracking-widest opacity-70 leading-none">
                Location
              </div>
              <div className="text-sm font-bold uppercase mt-1">Xorazm · UZ</div>
            </div>

            {/* Floating tag */}
            <div className="absolute -top-2 -right-2 glass px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest text-primary animate-float" style={{ animationDelay: "1s" }}>
              ● Online
            </div>

            {/* Floating mini-card */}
            <div className="absolute top-1/2 -right-8 glass px-3 py-2 rounded-xl font-mono text-[9px] uppercase tracking-widest text-accent animate-float hidden md:block" style={{ animationDelay: "2s" }}>
              {"</> dev"}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-border bg-card/30 backdrop-blur-sm py-4">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              <span>● React</span><span>● TypeScript</span><span>● Next.js</span>
              <span>● TailwindCSS</span><span>● Node.js</span><span>● UI/UX Design</span>
              <span>● Framer Motion</span><span>● Figma</span><span>● Web Animation</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
