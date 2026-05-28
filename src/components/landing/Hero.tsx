import { ArrowRight, MessageCircle, ShieldCheck, Star, TrendingUp } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { WHATSAPP_URL } from "./constants";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden text-white">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs sm:text-sm font-medium animate-reveal">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <span className="text-white/90">Now accepting hospitals & clinics in Nalgonda</span>
          </div>

          <h1
            className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] sm:leading-[1.05] tracking-tight animate-reveal"
            style={{ animationDelay: "120ms" }}
          >
            Grow your hospital or clinic with{" "}
            <span className="relative inline-block pb-2">
              <span className="bg-gold-gradient bg-clip-text text-transparent">
                AI-powered
              </span>
              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 50 2, 100 6 T 198 5"
                  fill="none"
                  stroke="url(#g1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="oklch(0.82 0.14 85)" />
                    <stop offset="100%" stopColor="oklch(0.72 0.16 60)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            patient acquisition
          </h1>

          <p
            className="mt-6 text-base sm:text-lg lg:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed animate-reveal"
            style={{ animationDelay: "240ms" }}
          >
            VN Digital Labs helps hospitals and clinics in Nalgonda generate more patient
            inquiries, appointment bookings, and local visibility — through Google Ads,
            high-converting landing pages, WhatsApp automation and AI growth systems.
          </p>

          <div
            className="mt-8 flex flex-col items-center sm:flex-row sm:justify-center gap-3 sm:gap-4 animate-reveal"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#lead"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient px-6 py-4 text-base font-semibold text-[oklch(0.22_0.07_245)] shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Get Free Growth Audit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass px-6 py-4 text-base font-semibold text-white hover:bg-white/15 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70 animate-reveal"
            style={{ animationDelay: "480ms" }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-teal-glow" />
              No long contracts
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-teal-glow" />
              Conversion-first systems
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gold" fill="currentColor" />
              Trusted by Nalgonda clinics
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl animate-reveal"
          style={{ animationDelay: "600ms" }}
        >
          {[
            ["3.2×", "More patient inquiries"],
            ["48 hrs", "Avg launch time"],
            ["<5 min", "Lead response time"],
            ["100%", "Local Nalgonda focus"],
          ].map(([n, l]) => (
            <div key={l} className="glass rounded-2xl p-4 sm:p-5">
              <div className="text-2xl sm:text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                {n}
              </div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}