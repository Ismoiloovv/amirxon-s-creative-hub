import { useState } from "react";
import { Send, Phone, Mail, Github, Instagram, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const TELEGRAM_USERNAME = "Mr_Amirxonn";
const PHONE = "+998 90 017 33 40";
const EMAIL = "mramirxonismoilov@gmail.com";
const GITHUB = "Ismoiloovv";
const INSTAGRAM = "ismoiloovv_wv";

const socials = [
  { icon: Send, label: "Telegram", value: `@${TELEGRAM_USERNAME}`, href: `https://t.me/${TELEGRAM_USERNAME}` },
  { icon: Github, label: "GitHub", value: `github.com/${GITHUB}`, href: `https://github.com/${GITHUB}` },
  { icon: Phone, label: "Telefon", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendToInstagram = () => {
    if (!message.trim()) {
      toast.error("Iltimos, xabar matnini yozing");
      return;
    }
    const text = encodeURIComponent(
      `Salom Amirxon!\n\n${name ? `Ismim: ${name}\n` : ""}${message}`
    );
    // Instagram DMni to'g'ridan-to'g'ri ochish (mobil)
    window.open(`https://ig.me/m/${INSTAGRAM}?text=${text}`, "_blank");
    toast.success("Instagram ochildi — xabarni yuboring!");
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-10">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">04 //</span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Bog'lanish</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95]">
            Keling, <span className="gradient-text">birga</span> <br />
            <span className="text-stroke">ishlaymiz</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-light">
            Yangi loyiha, hamkorlik yoki shunchaki salom aytish — har qanday
            xabarga ochiqman.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Socials grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl glass hover:border-primary transition-smooth hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="size-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <s.icon className="size-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">→</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  {s.label}
                </div>
                <div className="text-lg font-bold tracking-tight group-hover:text-primary transition-smooth break-all">
                  {s.value}
                </div>
              </a>
            ))}
          </div>

          {/* Instagram DM form */}
          <div className="lg:col-span-2 p-8 rounded-3xl glass border-primary/20 space-y-5">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Instagram className="size-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-lg">Instagram DM</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  @{INSTAGRAM}
                </div>
              </div>
            </div>

            <input
              type="text"
              placeholder="Ismingiz (ixtiyoriy)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm transition-smooth"
            />
            <textarea
              placeholder="Xabaringiz..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm transition-smooth resize-none"
            />
            <button
              onClick={sendToInstagram}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs glow-primary hover:scale-[1.02] transition-smooth"
            >
              <MessageCircle className="size-4" />
              Instagramga yuborish
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            © 2026 Ismoilov Amirxon — Made with <span className="text-primary">●</span> in Toshkent
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            v1.0.0 // Portfolio
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
