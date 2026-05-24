import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "How fast can I start getting patient inquiries?",
    a: "Most clinics start receiving qualified inquiries within 7–14 days of launch — once Google Ads, the landing page and WhatsApp automation are live.",
  },
  {
    q: "Do you run Google Ads specifically for clinics?",
    a: "Yes. Google Ads for healthcare is our core specialty — targeted by speciality, location, and patient intent for Nalgonda and surrounding areas.",
  },
  {
    q: "Can this actually drive appointments, not just leads?",
    a: "Yes. We connect ads to a conversion-optimized landing page and WhatsApp automation, so leads turn into booked appointments — not just form fills.",
  },
  {
    q: "Do you provide WhatsApp automation?",
    a: "Absolutely. Instant replies, appointment reminders, follow-ups and AI nudges — built into your patient acquisition funnel.",
  },
  {
    q: "Is this suitable for small clinics and multi-speciality hospitals?",
    a: "Yes. We work with single-doctor clinics, multi-speciality hospitals, dental, skin, diagnostic and fertility clinics. The system scales to your size.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 text-[oklch(0.45_0.13_195)] px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              FAQ
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Questions, answered</h2>
          </div>
        </Reveal>
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div className="rounded-2xl border border-border/60 bg-card shadow-card overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-foreground">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}