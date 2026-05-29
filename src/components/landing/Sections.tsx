import {
  AlertTriangle,
  TrendingDown,
  CalendarX,
  DollarSign,
  PhoneOff,
  Users,
  Search,
  LayoutTemplate,
  MessageSquare,
  CalendarCheck,
  Sparkles,
  Stethoscope,
  ChartLine,
  Bell,
  Bot,
  MapPin,
  ShieldCheck,
  Target,
  Zap,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { TiltCard } from "./TiltCard";
import { Reveal } from "./Reveal";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
      <Reveal>
        <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${light ? "glass text-white/80" : "bg-teal/10 text-[oklch(0.45_0.13_195)]"}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-white" : "text-foreground"}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className={`mt-4 text-base sm:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ───────── Pain Points ───────── */
export function PainPoints() {
  const items = [
    { Icon: TrendingDown, t: "Low patient inquiries", d: "Calls and walk-ins have plateaued despite your reputation." },
    { Icon: Search, t: "Weak online presence", d: "Patients in Nalgonda can't find you when they search." },
    { Icon: CalendarX, t: "Poor appointment flow", d: "Leads come in, but bookings slip through the cracks." },
    { Icon: DollarSign, t: "Wasted ad spend", d: "Money goes into ads, but inquiries don't follow." },
    { Icon: PhoneOff, t: "No follow-up automation", d: "Manual WhatsApp and call-backs are slow or forgotten." },
    { Icon: Users, t: "Competitors winning visibility", d: "Other clinics show up first — and book your patients." },
  ];
  return (
    <section id="pain" className="relative py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="The problem"
          title={<>Why hospitals & clinics in Nalgonda <span className="text-gradient">lose patients</span></>}
          subtitle="If two or more of these sound familiar, you're leaving real revenue on the table every single week."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 60}>
              <TiltCard className="h-full">
                <div className="h-full rounded-2xl bg-card shadow-card border border-border/60 p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                      <Icon className="h-5 w-5" />
                    </div>
                    <AlertTriangle className="h-4 w-4 text-destructive/60 ml-auto" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Solution Flow ───────── */
export function Solution() {
  const steps = [
    { Icon: Search, t: "Google Ads", d: "Targeted, intent-driven ads in Nalgonda." },
    { Icon: LayoutTemplate, t: "Landing Page", d: "Built to convert visitors into leads." },
    { Icon: MessageSquare, t: "WhatsApp Automation", d: "Instant follow-up, no lead dropped." },
    { Icon: CalendarCheck, t: "Appointment Booking", d: "Frictionless booking that fills your calendar." },
    { Icon: Sparkles, t: "More Patients", d: "Predictable, measurable patient growth." },
  ];
  return (
    <section id="solution" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our system"
          title={<>The <span className="text-gradient">VN Growth Engine</span> for healthcare</>}
          subtitle="A connected, AI-assisted system that turns ad spend into booked appointments — not just clicks."
        />
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-[6%] right-[6%] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.68 0.13 195 / 0.4) 10%, oklch(0.68 0.13 195 / 0.4) 90%, transparent)",
            }}
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
            {steps.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 100}>
                <li className="relative flex flex-col items-center text-center">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-primary-gradient shadow-glow">
                    <Icon className="h-9 w-9 text-white" />
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold-gradient text-xs font-bold text-[oklch(0.22_0.07_245)] shadow-md">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-[200px]">{d}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="lg:hidden mt-4 h-5 w-5 text-teal rotate-90 sm:rotate-0" />
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────── Benefits ───────── */
export function Benefits() {
  const items = [
    { Icon: Stethoscope, t: "More patient inquiries", d: "Hyper-local ad targeting that reaches patients with real intent." },
    { Icon: CalendarCheck, t: "Appointment booking automation", d: "Auto-confirm, reschedule and remind — without manual work." },
    { Icon: MapPin, t: "Clinic visibility improvement", d: "Show up across Search, Maps and WhatsApp in your area." },
    { Icon: ChartLine, t: "Lead tracking system", d: "See every lead, source, status and revenue in one dashboard." },
    { Icon: Bell, t: "WhatsApp follow-up", d: "Instant replies plus AI nudges that convert cold leads." },
    { Icon: Bot, t: "AI-assisted growth strategy", d: "Continuous optimization based on what's actually booking." },
  ];
  return (
    <section id="benefits" className="relative py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Benefits"
          title={<>Everything you need to <span className="text-gradient">fill your appointment book</span></>}
          subtitle="A complete growth stack — not isolated tactics. Built specifically for hospitals and clinics."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 60}>
              <TiltCard className="h-full">
                <div className="h-full rounded-2xl bg-card shadow-card border border-border/60 p-6 sm:p-7 relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-50 blur-2xl"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary-gradient shadow-glow">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-semibold text-foreground">{t}</h3>
                  <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Trust ───────── */
export function Trust() {
  const items = [
    { Icon: Target, t: "Patient growth focused" },
    { Icon: MapPin, t: "Local Nalgonda expertise" },
    { Icon: Zap, t: "Conversion-first systems" },
    { Icon: Search, t: "Google Ads + LP specialists" },
    { Icon: Bot, t: "AI automation for clinics" },
    { Icon: ShieldCheck, t: "Transparent reporting" },
  ];
  return (
    <section className="relative py-16 sm:py-20 bg-primary text-primary-foreground overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(at 20% 0%, oklch(0.68 0.13 195 / 0.5), transparent 50%), radial-gradient(at 80% 100%, oklch(0.55 0.16 260 / 0.45), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
              <Award className="h-3.5 w-3.5" /> Why clinics trust us
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Built for hospitals & clinics — not generic businesses</h2>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {items.map(({ Icon, t }, i) => (
            <Reveal key={t} delay={i * 50}>
              <div className="glass rounded-2xl p-5 text-center h-full flex flex-col items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient text-[oklch(0.22_0.07_245)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold leading-tight">{t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Results / CountUp ───────── */
import { useEffect, useRef, useState } from "react";
function CountUp({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            setV(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export function Results() {
  const stats = [
    { n: 320, s: "%", l: "More patient inquiries" },
    { n: 5, s: " min", l: "Avg response time" },
    { n: 4, s: "×", l: "Higher lead quality" },
    { n: 78, s: "%", l: "Appointment show-up" },
    { n: 2, s: ".6×", l: "Higher conversion rate" },
  ];
  return (
    <section id="results" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Results that matter"
          title={<>Metrics our clinic clients <span className="text-gradient">actually care about</span></>}
          subtitle="Not vanity metrics. Real outcomes that translate into booked appointments and revenue."
        />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 70}>
              <TiltCard>
                <div className="rounded-2xl bg-card shadow-card border border-border/60 p-6 text-center">
                  <div className="text-4xl sm:text-5xl font-bold metric-gradient-text">
                    <CountUp to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Case Study ───────── */
export function CaseStudy() {
  const wins = [
    "Increased appointment requests",
    "Improved local Google visibility",
    "Reduced lead drop-off rate",
    "Better patient follow-up flow",
  ];
  return (
    <section className="relative py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Case study style"
          title={<>What changes when a clinic <span className="text-gradient">runs on our system</span></>}
        />
        <Reveal>
          <div className="relative grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-card shadow-elegant border border-border/60">
            <div className="p-8 sm:p-12 bg-primary text-primary-foreground relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
                  <Stethoscope className="h-3.5 w-3.5" /> Multi-speciality clinic · Nalgonda
                </div>
                <h3 className="mt-6 text-2xl sm:text-3xl font-bold leading-tight">
                  From quiet phones to a <span className="text-gradient-gold">consistently booked</span> calendar
                </h3>
                <p className="mt-4 text-white/75 text-sm sm:text-base leading-relaxed">
                  In 60 days, we rebuilt the patient acquisition funnel — from Google Ads to
                  WhatsApp follow-up — and turned wasted ad spend into a predictable inflow of
                  booked patient appointments.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[["+212%", "Inquiries"], ["3.4×", "Bookings"], ["−61%", "Drop-off"]].map(([n, l]) => (
                    <div key={l} className="glass rounded-xl p-3 text-center">
                      <div className="text-xl font-bold metric-gradient-text">{n}</div>
                      <div className="text-[11px] uppercase tracking-wider text-white/60 mt-1">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <h4 className="text-lg font-semibold text-foreground">What we delivered</h4>
              <ul className="mt-5 space-y-4">
                {wins.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-teal/15 text-[oklch(0.45_0.13_195)]">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-foreground/90">{w}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-border/60 bg-secondary/60 p-5">
                <p className="text-sm italic text-foreground/80">
                  "Within 6 weeks we stopped chasing patients. The system books them for us."
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  — Clinic Director, Nalgonda (sample outcome)
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}