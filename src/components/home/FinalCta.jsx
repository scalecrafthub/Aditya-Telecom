import { Phone, Navigation } from "lucide-react";
import { BUSINESS, WHATSAPP_URL } from "@/lib/business";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] grid-lines" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
            Open 7 days · 8 AM – 10 PM
          </p>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold sm:text-5xl">
            Come in, hold the phone, then decide.
          </h2>
          <p className="mt-4 max-w-lg text-sm font-medium text-white/80">
            Walk in for a demo, an exchange quote or a repair check. No pressure, no jargon — just
            the right phone at the right price.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> {BUSINESS.phone}
          </a>
          <a
            href={WHATSAPP_URL()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            WhatsApp us
          </a>
          <a
            href={BUSINESS.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Navigation className="h-4 w-4" /> Directions
          </a>
        </div>
      </div>
    </section>
  );
}