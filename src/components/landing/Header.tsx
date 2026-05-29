import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "./constants";
import { cn } from "@/lib/utils";
import vnLogo from "@/assets/vn-logo.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all",
            scrolled
              ? "glass-light shadow-card"
              : "bg-white/0 border border-white/10",
          )}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10 overflow-hidden shadow-glow">
              <img src={vnLogo} alt="VN Digital Labs logo" className="h-full w-full object-contain" />
            </span>
            <span className={cn("font-display font-semibold text-lg leading-none", scrolled ? "text-foreground" : "text-white")}>
              VN Digital Labs
              <span className={cn("block text-[10px] font-normal tracking-widest uppercase mt-0.5", scrolled ? "text-muted-foreground" : "text-white/60")}>
                AI Growth Partners
              </span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {[
              ["Pain Points", "#pain"],
              ["System", "#solution"],
              ["Results", "#results"],
              ["Offer", "#offer"],
              ["FAQ", "#faq"],
            ].map(([l, h]) => (
              <a
                key={h}
                href={h}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white",
                )}
              >
                {l}
              </a>
            ))}
          </div>
          <a
            href={`tel:${PHONE}`}
            className={cn(
              "hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all",
              scrolled
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "glass text-white hover:bg-white/15",
            )}
          >
            <Phone className="h-4 w-4" />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  );
}