import { createFileRoute } from "@tanstack/react-router";
import { CursorGlow } from "@/components/landing/CursorGlow";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Benefits, CaseStudy, PainPoints, Results, Solution, Trust } from "@/components/landing/Sections";
import { Offer } from "@/components/landing/Offer";
import { LeadForm } from "@/components/landing/LeadForm";
import { FAQ } from "@/components/landing/FAQ";
import { FooterCTA } from "@/components/landing/FooterCTA";
import { FloatingActions } from "@/components/landing/FloatingActions";
import { ExitIntent } from "@/components/landing/ExitIntent";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <CursorGlow />
      <Header />
      <Hero />
      <PainPoints />
      <Solution />
      <Benefits />
      <Trust />
      <Results />
      <CaseStudy />
      <Offer />
      <LeadForm />
      <FAQ />
      <FooterCTA />
      <FloatingActions />
      <ExitIntent />
      {/* spacer for mobile sticky CTA */}
      <div className="md:hidden h-20" aria-hidden />
    </main>
  );
}
