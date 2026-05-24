import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { PHONE, PHONE_DISPLAY, WHATSAPP_URL } from "./constants";
import { Reveal } from "./Reveal";

export function FooterCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(at 50% 0%, oklch(0.68 0.13 195 / 0.45), transparent 60%), radial-gradient(at 80% 100%, oklch(0.78 0.13 80 / 0.25), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.2) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.2) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Final step
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Stop losing patients to <span className="text-gradient-gold">competitors.</span>
          </h2>
          <p className="mt-5 text-white/75 text-base sm:text-lg max-w-2xl mx-auto">
            Book your free growth consultation today. We'll show you exactly how to fill your
            appointment book with the right patients — in Nalgonda.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#lead"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-7 py-4 text-base font-semibold text-[oklch(0.22_0.07_245)] shadow-glow hover:-translate-y-0.5 transition-transform animate-pulse-glow"
            >
              Book Free Growth Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass px-7 py-4 text-base font-semibold text-white hover:bg-white/15 transition-colors"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="relative mt-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary-gradient">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-white/80 font-semibold">VN Digital Labs</span>
            <span className="hidden sm:inline">· AI Powered Business Growth Partners</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <span>© {new Date().getFullYear()} Nalgonda, Telangana</span>
          </div>
        </div>
      </footer>
    </section>
  );
}