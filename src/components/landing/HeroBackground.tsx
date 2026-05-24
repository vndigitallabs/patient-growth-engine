import { Activity, HeartPulse, Stethoscope, Pill, Plus, Cross, Syringe } from "lucide-react";

const ICONS = [HeartPulse, Stethoscope, Pill, Plus, Cross, Syringe, Activity];

const FLOATERS = Array.from({ length: 14 }).map((_, i) => {
  const Icon = ICONS[i % ICONS.length];
  return {
    Icon,
    top: `${(i * 53) % 95}%`,
    left: `${(i * 71) % 95}%`,
    size: 18 + ((i * 7) % 28),
    delay: (i % 7) * 0.6,
    duration: 7 + ((i * 3) % 6),
    opacity: 0.08 + ((i % 5) * 0.04),
  };
});

export function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-hero-gradient">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 40%, transparent 75%)",
        }}
      />

      {/* Orbs */}
      <div
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full blur-3xl animate-pulse-glow"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.13 195 / 0.5), transparent 60%)" }}
      />
      <div
        className="absolute -bottom-40 -right-20 w-[620px] h-[620px] rounded-full blur-3xl animate-pulse-glow"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.16 260 / 0.4), transparent 60%)", animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/3 left-1/2 w-[360px] h-[360px] rounded-full blur-3xl animate-pulse-glow"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.13 80 / 0.18), transparent 60%)", animationDelay: "3s" }}
      />

      {/* 3D layered rings */}
      <div className="absolute inset-0 flex items-center justify-center [perspective:1200px]">
        <div
          className="relative w-[680px] h-[680px] max-w-[90vw] max-h-[90vw] opacity-40"
          style={{ transform: "rotateX(62deg) rotateZ(0deg)" }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border animate-pulse-glow"
              style={{
                borderColor: "oklch(0.78 0.15 190 / 0.35)",
                transform: `scale(${0.4 + i * 0.2})`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating medical icons */}
      {FLOATERS.map((f, i) => (
        <f.Icon
          key={i}
          size={f.size}
          className="absolute text-white animate-float-slow"
          style={{
            top: f.top,
            left: f.left,
            opacity: f.opacity,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            filter: "drop-shadow(0 0 8px oklch(0.78 0.15 190 / 0.6))",
          }}
        />
      ))}

      {/* Particle dots */}
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-float-slower"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            background: "oklch(0.85 0.1 190 / 0.7)",
            boxShadow: "0 0 8px oklch(0.78 0.15 190 / 0.8)",
            animationDelay: `${(i % 6) * 0.5}s`,
            animationDuration: `${8 + (i % 5)}s`,
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, oklch(0.12 0.04 245) 100%)" }} />
    </div>
  );
}