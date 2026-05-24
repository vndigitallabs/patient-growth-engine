import { useState } from "react";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  clinic: z.string().trim().min(2, "Enter your hospital / clinic name").max(120),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,15}$/, "Enter a valid phone number"),
  speciality: z.string().min(1, "Select a speciality"),
  target: z.string().min(1, "Select your monthly patient target"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const SPECIALITIES = [
  "Multi-speciality hospital",
  "Dental clinic",
  "Skin / Derma clinic",
  "Diagnostic centre",
  "Women's health / Fertility",
  "General clinic",
  "Other",
];

const TARGETS = ["50–100 / month", "100–250 / month", "250–500 / month", "500+ / month"];

export function LeadForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as keyof Errors] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  };

  return (
    <section id="lead" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(at 80% 20%, oklch(0.68 0.13 195 / 0.15), transparent 50%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 text-[oklch(0.45_0.13_195)] px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="h-3.5 w-3.5" /> Lead capture
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Get your <span className="text-gradient">free growth plan</span> in 24 hours
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Tell us about your clinic. We'll send a personalised patient acquisition plan tailored
            for your speciality and the Nalgonda market — no obligation.
          </p>
          <ul className="mt-6 space-y-3">
            {["No long contracts", "Tailored to your speciality", "Local Nalgonda strategy"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.16_155)]" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-primary-gradient opacity-20 blur-2xl" aria-hidden />
          <div className="relative rounded-3xl bg-card border border-border/60 shadow-elegant p-6 sm:p-8">
            {done ? (
              <div className="text-center py-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-[oklch(0.45_0.17_155)]">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-2xl font-bold">You're in.</h3>
                <p className="mt-2 text-muted-foreground">
                  We'll reach out within 24 hours with your free growth plan.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <Field label="Your name" name="name" placeholder="Dr. Anitha Reddy" error={errors.name} />
                <Field label="Hospital / Clinic name" name="clinic" placeholder="Sunrise Multi-speciality Hospital" error={errors.clinic} />
                <Field label="Phone number" name="phone" placeholder="+91 99999 00000" type="tel" error={errors.phone} />
                <Select label="Speciality" name="speciality" options={SPECIALITIES} error={errors.speciality} />
                <Select label="Monthly patient target" name="target" options={TARGETS} error={errors.target} />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground py-4 px-6 font-semibold shadow-elegant hover:opacity-95 transition disabled:opacity-70"
                >
                  {submitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Get My Free Growth Plan <ArrowRight className="h-5 w-5" /></>}
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={120}
        className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-base outline-none transition ${
          error ? "border-destructive ring-2 ring-destructive/20" : "border-input focus:border-teal focus:ring-2 focus:ring-teal/30"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function Select({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <select
        name={name}
        defaultValue=""
        className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-base outline-none transition ${
          error ? "border-destructive ring-2 ring-destructive/20" : "border-input focus:border-teal focus:ring-2 focus:ring-teal/30"
        }`}
      >
        <option value="" disabled>Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}