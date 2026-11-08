import { MapPin, Clock, Phone, Mail, Navigation, MessageCircle } from "lucide-react";
import { BUSINESS, WHATSAPP_URL } from "@/lib/business";

const HOURS = [
  ["Monday", "8:00 AM – 10:00 PM"],
  ["Tuesday", "8:00 AM – 10:00 PM"],
  ["Wednesday", "8:00 AM – 10:00 PM"],
  ["Thursday", "8:00 AM – 10:00 PM"],
  ["Friday", "8:00 AM – 10:00 PM"],
  ["Saturday", "8:00 AM – 10:00 PM"],
  ["Sunday", "8:00 AM – 10:00 PM"],
];

export default function StoreVisit() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
      <div className="space-y-4">
        <div className="rounded-2xl border border-border bg-white p-5">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Aditya Telecom</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {BUSINESS.addressLines[0]}
                <br />
                {BUSINESS.addressLines[1]}
              </p>
              <a
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em] text-primary hover:underline"
              >
                <Navigation className="h-3 w-3" /> Get directions
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5">
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-primary" />
            <p className="text-sm font-semibold text-foreground">Open all seven days</p>
          </div>
          <dl className="mt-3 divide-y divide-border">
            {HOURS.map(([day, time]) => (
              <div key={day} className="flex items-center justify-between py-1.5 text-[13px]">
                <dt className="text-muted-foreground">{day}</dt>
                <dd className="font-mono text-[11px] tracking-tight text-foreground/80">{time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={BUSINESS.phoneHref}
            className="rounded-2xl border border-primary/25 bg-primary/8 p-4 transition-colors hover:bg-primary/12"
          >
            <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-primary">
              <Phone className="h-3 w-3" /> Call the store
            </span>
            <span className="mt-1.5 block text-sm font-semibold text-foreground">{BUSINESS.phone}</span>
          </a>
          <a
            href={WHATSAPP_URL()}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-border bg-white p-4 transition-colors hover:border-primary/40"
          >
            <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
              <MessageCircle className="h-3 w-3 text-primary" /> WhatsApp
            </span>
            <span className="mt-1.5 block text-sm font-semibold text-foreground">Message us</span>
          </a>
          {BUSINESS.email && (
            <a
              href={`mailto:${BUSINESS.email}`}
              className="rounded-2xl border border-border bg-white p-4 transition-colors hover:border-primary/40 sm:col-span-2"
            >
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                <Mail className="h-3 w-3 text-primary" /> Email
              </span>
              <span className="mt-1.5 block break-all text-sm font-semibold text-foreground">{BUSINESS.email}</span>
            </a>
          )}
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <iframe
          title="Aditya Telecom location map"
          src={BUSINESS.mapEmbed}
          className="h-[340px] w-full border-0 sm:h-[500px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-white px-5 py-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            Hanuman Gadhi · Padri · 273303
          </p>
          <a
            href={BUSINESS.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-primary hover:underline"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}