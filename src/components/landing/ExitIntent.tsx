import { useEffect, useState } from "react";
import { ArrowRight, Gift, MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(hover: none)").matches;
    let timer: number | undefined;

    const trigger = () => {
      if (shown) return;
      setShown(true);
      setOpen(true);
    };

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    if (isMobile) {
      // Mobile fallback: show after 25s of dwell
      timer = window.setTimeout(trigger, 25000);
    } else {
      document.addEventListener("mouseout", onLeave);
    }

    return () => {
      document.removeEventListener("mouseout", onLeave);
      if (timer) clearTimeout(timer);
    };
  }, [shown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-3 sm:p-6 bg-[oklch(0.12_0.04_245/0.7)] backdrop-blur-sm animate-reveal"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-card border border-border/60 shadow-elegant overflow-hidden"
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="relative p-6 sm:p-8 bg-primary text-primary-foreground overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(at 30% 0%, oklch(0.68 0.13 195 / 0.6), transparent 60%), radial-gradient(at 80% 100%, oklch(0.78 0.13 80 / 0.35), transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              <Gift className="h-3.5 w-3.5 text-gold" /> Wait — before you go
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight">
              Claim your <span className="text-gradient-gold">free patient lead audit</span>
            </h3>
            <p className="mt-3 text-white/75 text-sm sm:text-base">
              30-minute deep dive into your clinic's patient acquisition — worth ₹5,000, yours
              free. Limited to 5 audits this month.
            </p>
          </div>
        </div>
        <div className="p-6 sm:p-7 space-y-3">
          <a
            href="#lead"
            onClick={() => setOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground py-3.5 font-semibold shadow-elegant hover:opacity-95 transition"
          >
            Yes, send me my free audit <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-3.5 font-semibold text-foreground hover:bg-secondary/60 transition"
          >
            <MessageCircle className="h-5 w-5 text-[oklch(0.6_0.16_155)]" />
            Chat on WhatsApp instead
          </a>
          <button
            onClick={() => setOpen(false)}
            className="w-full text-xs text-muted-foreground hover:text-foreground py-2"
          >
            No thanks, I'll pass
          </button>
        </div>
      </div>
    </div>
  );
}