const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh blobs */}
      <div className="absolute -top-[15%] -left-[10%] w-[55%] h-[55%] rounded-full bg-primary/15 blur-[140px] animate-blob-drift" />
      <div
        className="absolute top-[30%] -right-[10%] w-[45%] h-[60%] rounded-full bg-accent/10 blur-[160px] animate-blob-drift"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-emerald-deep blur-[140px] animate-blob-drift"
        style={{ animationDelay: "8s" }}
      />

      {/* Subtle conic accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] opacity-[0.04]"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, hsl(var(--primary)), transparent 25%, hsl(var(--accent)) 50%, transparent 75%, hsl(var(--primary)))",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--emerald-wire) / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--emerald-wire) / 0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
    </div>
  );
};

export default AmbientBackground;
