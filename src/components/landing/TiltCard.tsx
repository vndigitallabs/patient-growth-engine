import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className, intensity = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * intensity).toFixed(2)}deg) rotateY(${(x * intensity).toFixed(2)}deg) translateY(-4px)`;
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)" }}
      className={cn(
        "relative will-change-transform group",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "radial-gradient(400px circle at var(--gx,50%) var(--gy,50%), oklch(0.78 0.15 190 / 0.12), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}