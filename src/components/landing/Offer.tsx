import { ArrowRight, CheckCircle2, Gift, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function Offer() {
  const items = [
    "Online visibility audit",
    "Patient lead analysis",
    "Competitor comparison (Nalgonda)",
    "Appointment funnel review",
    "Custom ad strategy roadmap",
  ];
  return (
    <section id="offer" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(at 30% 30%, oklch(0.78 0.15 190 / 0.18), transparent 50%), radial-gradient(at 70% 80%, oklch(0.78 0.13 80 / 0.18), transparent 50%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="relative rounded-3xl bg-card border border-border/60 shadow-elegant overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-x-0 -top-px h-px"
              style={{ background: "linear-gradient(90deg, transparent, oklch(0.68 0.13 195 / 0.7), transparent)" }}
            />
            <div className="grid lg:grid-cols-[1.2fr_1fr]">
              <div className="p-8 sm:p-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 text-[oklch(0.5_0.15_60)] px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                  <Gift className="h-3.5 w-3.5" /> Free for Nalgonda clinics
                </div>
                <h2 className="mt-5 text-3xl sm:text-4xl font-bold leading-tight">
                  FREE Hospital & Clinic <span className="text-gradient">Growth Audit</span>
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-bold text-gradient-gold">Worth ₹5,000</span>
                  <span className="text-sm text-muted-foreground line-through">₹5,000</span>
                  <span className="rounded-full bg-success/15 text-[oklch(0.45_0.17_155)] text-xs font-semibold px-2.5 py-1">100% Free</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  A 30-minute deep dive into your current patient acquisition setup — with a
                  custom action plan you can implement immediately.
                </p>
                <ul className="mt-6 space-y-3">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-teal/15 text-[oklch(0.45_0.13_195)]">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <span className="text-foreground/90 text-sm sm:text-base">{i}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#lead"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-4 font-semibold shadow-elegant hover:opacity-95 transition"
                >
                  Claim my free audit <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div className="relative bg-primary p-8 sm:p-12 text-primary-foreground overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-50"
                  style={{
                    background:
                      "radial-gradient(at 50% 0%, oklch(0.68 0.13 195 / 0.5), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <Sparkles className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 text-2xl font-bold leading-tight">
                    Built for hospitals, multi-speciality, dental, skin, diagnostic & fertility clinics.
                  </h3>
                  <p className="mt-3 text-white/75 text-sm">
                    Limited to <span className="font-semibold text-gold">5 audits</span> per month so we can give every clinic the attention it deserves.
                  </p>
                  <div className="mt-8 space-y-2">
                    {["Hospitals", "Multi-speciality", "Dental", "Skin", "Diagnostic", "Women's health / Fertility"].map((t) => (
                      <div key={t} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-teal-glow" /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}