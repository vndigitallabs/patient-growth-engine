import { MessageCircle, Phone } from "lucide-react";
import { PHONE, WHATSAPP_URL } from "./constants";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp floating (always) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-glow text-white animate-pulse-glow"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Mobile sticky CTA bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 glass-light border-t border-border/60 px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex gap-2">
          <a
            href={`tel:${PHONE}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground py-3 text-sm font-semibold shadow-card"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href="#lead"
            className="flex-[1.4] inline-flex items-center justify-center gap-2 rounded-xl bg-gold-gradient py-3 text-sm font-semibold text-[oklch(0.22_0.07_245)] shadow-glow"
          >
            Free Growth Audit
          </a>
        </div>
      </div>
    </>
  );
}