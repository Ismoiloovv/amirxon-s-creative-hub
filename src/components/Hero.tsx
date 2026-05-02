import avatar from "@/assets/avatar.jpg";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* Glow blobs */}
      <div className="absolute top-20 -right-40 size-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 size-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left content */}
        <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <Sparkles className="size-3.5 text-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Available for projects // 2026
            </span>
          </div>

          <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.9] tracking-tighter">
            <span className="block text-foreground">Ismoilov</span>
            <span className="block gradient-text">Amirxon</span>
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
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs glow-primary hover:scale-105 transition-smooth"
            >
              Loyihalarni ko'rish
              <ArrowDown className="size-4 group-hover:translate-y-1 transition-smooth" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-border hover:border-accent hover:text-accent font-bold uppercase tracking-widest text-xs transition-smooth"
            >
              Bog'lanish
            </a>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border max-w-lg">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">40+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Loyihalar</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">3+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Yil tajriba</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">∞</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Ehtiros</div>
            </div>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-scale-in">
          <div className="relative size-72 md:size-96 lg:size-[440px]">
            {/* Rotating dashed ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow scale-110" />
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full border border-accent/20 scale-125" />
            {/* Avatar */}
            <div className="absolute inset-0 rounded-full overflow-hidden ring-2 ring-primary/40 animate-pulse-glow bg-card">
              <img
                src={avatar}
                alt="Ismoilov Amirxon portrait"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-2 -left-4 bg-accent text-accent-foreground px-5 py-3 rounded-2xl shadow-2xl animate-float">
              <div className="text-[9px] font-mono uppercase tracking-widest opacity-70 leading-none">
                Location
              </div>
              <div className="text-sm font-bold uppercase mt-1">Toshkent · UZ</div>
            </div>

            {/* Floating tag */}
            <div className="absolute -top-2 -right-2 glass px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest text-primary animate-float" style={{ animationDelay: "1s" }}>
              ● Online
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
