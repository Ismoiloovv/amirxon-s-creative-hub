import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Bosh sahifa" },
  { href: "#about", label: "Haqida" },
  { href: "#works", label: "Ijodiy ishlar" },
  { href: "#contact", label: "Bog'lanish" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="size-3 rounded-full bg-primary animate-pulse-glow" />
          <span className="font-mono text-sm font-bold tracking-widest uppercase text-foreground group-hover:text-primary transition-smooth">
            Ismoilov.A
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-smooth story-link"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 rounded-full border border-primary/40 hover:bg-primary hover:text-primary-foreground hover:border-primary text-xs font-bold uppercase tracking-widest transition-smooth glow-primary"
        >
          Hire Me
        </a>

        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`w-7 h-0.5 bg-primary transition-smooth ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-7 h-0.5 bg-primary transition-smooth ${open ? "opacity-0" : ""}`} />
          <span className={`w-7 h-0.5 bg-primary transition-smooth ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border animate-fade-in">
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
