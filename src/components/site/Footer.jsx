import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { BUSINESS, WHATSAPP_URL } from "@/lib/business";
import Logo from "./Logo";

const EXPLORE = [
  { label: "What's in stock", href: "#stock" },
  { label: "Exchange your phone", href: "#exchange" },
  { label: "Repair support", href: "#repairs" },
  { label: "Wholesale enquiries", href: "#repairs" },
  { label: "Visit the store", href: "#visit" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Latest 5G phones, home electronics and accessories in Maharajganj — with exchange,
              easy finance, repairs and wholesale supply under one roof.
            </p>
            <p className="mt-5 inline-flex rounded-full bg-secondary/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/70">
              {BUSINESS.partner}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Visit</h4>
            <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
              {BUSINESS.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Get directions <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Talk to us</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li>
                <a href={BUSINESS.phoneHref} className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-3.5 w-3.5 text-primary" /> {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5 text-primary" /> WhatsApp
                </a>
              </li>
              {BUSINESS.email && (
                <li>
                  <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 break-all hover:text-primary">
                    <Mail className="h-3.5 w-3.5 text-primary" /> {BUSINESS.email}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-primary" /> 8 AM – 10 PM, all week
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aditya Telecom, Maharajganj. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em]">
            Stock &amp; prices change daily — call to confirm
          </p>
        </div>
      </div>
    </footer>
  );
}