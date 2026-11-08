import { Wrench, Boxes, ArrowRight, Check } from "lucide-react";
import { Image } from "@/components/ui/image";
import { BUSINESS, WHATSAPP_URL } from "@/lib/business";
import { MEDIA } from "@/lib/media";

const PANELS = [
  {
    icon: Wrench,
    label: "For existing customers",
    title: "Repair & after-sales",
    copy: "Cracked screen, weak battery or software trouble — our technicians diagnose first and quote before opening the device.",
    points: ["Screen & battery replacement", "Charging port and speaker fixes", "Software reset and data transfer"],
    image: MEDIA.repair,
    cta: "Book a repair on WhatsApp",
    waMessage: "Hi Aditya Telecom, I'd like to book a phone repair.",
  },
  {
    icon: Boxes,
    label: "For retailers & resellers",
    title: "Wholesale supply",
    copy: "Bulk handsets and electronics at distributor rates, as an authorised JioMart Digital partner for shops across the district.",
    points: ["Sealed stock with brand warranty", "Bulk pricing for resellers", "Regular supply, district-wide"],
    image: MEDIA.wholesale,
    cta: "Send a wholesale enquiry",
    waMessage: "Hi Aditya Telecom, I'd like wholesale rates for handsets.",
  },
];

export default function ServicePanels() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {PANELS.map(({ icon: Icon, label, title, copy, points, image, cta, waMessage }) => (
        <div
          key={title}
          className="flex flex-col overflow-hidden rounded-3xl border border-border bg-white"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
            <Image src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute left-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-primary">
              <Icon className="h-4 w-4" />
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">{title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{copy}</p>

            <ul className="mt-4 space-y-1.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-[13px] text-foreground/75">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={3} />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4">
              <a
                href={WHATSAPP_URL(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                {cta} <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground"
              >
                or call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}