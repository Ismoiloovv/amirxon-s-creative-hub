import { Code2, Palette, Rocket, Heart } from "lucide-react";

const skills = [
  { icon: Code2, title: "Frontend", desc: "React, TypeScript, Next.js bilan zamonaviy interfeyslar quraman." },
  { icon: Palette, title: "UI/UX Design", desc: "Foydalanuvchi tajribasi va vizual estetika ustida ishlash." },
  { icon: Rocket, title: "Performance", desc: "Tez yuklanadigan, optimallashtirilgan saytlar yarataman." },
  { icon: Heart, title: "Detallar", desc: "Har bir animatsiya, har bir piksel — ehtirom bilan." },
];

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 md:px-10">
      <div className="absolute top-1/2 right-0 size-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">02 //</span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Haqida</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
              Men <span className="gradient-text">kreativ</span> raqamli mahsulotlar
              yaratuvchi <span className="text-stroke">dasturchiman</span>.
            </h2>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
              <p>
                Salom! Men <span className="text-foreground font-medium">Ismoilov Amirxon</span> —
                Toshkentdan zamonaviy veb-saytlar va raqamli mahsulotlar
                yaratuvchi mustaqil dasturchi va dizaynerman.
              </p>
              <p>
                3 yildan ortiq tajriba davomida o'nlab brendlar va shaxsiy
                mijozlar uchun ulardagi g'oyalarni hayotga tatbiq etganman.
                Texnologiya va dizayn chegarasida yashayman.
              </p>
              <p>
                Mening yondashuvim — sifat, tezlik va estetika o'zaro
                bog'liq bo'lishi kerak degan ishonchga asoslangan.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Figma", "Framer Motion"].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border border-border bg-card/50 text-xs font-mono uppercase tracking-widest hover:border-primary hover:text-primary transition-smooth"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((s, i) => (
              <div
                key={s.title}
                className="group relative p-6 rounded-2xl glass hover:border-primary transition-smooth hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <s.icon className="size-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
