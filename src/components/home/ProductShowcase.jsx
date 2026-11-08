import { Phone, MessageCircle, Signal } from "lucide-react";
import { Image } from "@/components/ui/image";
import { CATALOG } from "@/data/catalog";
import { BUSINESS, WHATSAPP_URL } from "@/lib/business";

export default function ProductShowcase() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATALOG.map((item) => (
          <article
            key={item.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-[0_24px_60px_-40px_rgba(23,19,16,0.5)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              <Image
                src={item.image}
                alt={item.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                {item.fiveG && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-primary-foreground">
                    <Signal className="h-2.5 w-2.5" /> 5G
                  </span>
                )}
                {item.tag && (
                  <span className="rounded-full bg-secondary px-2 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-secondary-foreground">
                    {item.tag}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">{item.brand}</p>
              <h3 className="mt-1.5 text-base font-semibold text-foreground">{item.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.tagline}</p>

              <div className="mt-4 flex items-center justify-between gap-2 border-t border-border pt-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-primary">
                  Ask today&apos;s price
                </span>
                <div className="flex gap-2">
                  <a
                    href={BUSINESS.phoneHref}
                    aria-label={`Call about ${item.name}`}
                    className="grid h-8 w-8 place-items-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Phone className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={WHATSAPP_URL(`Hi Aditya Telecom, I'd like the price and stock for ${item.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`WhatsApp about ${item.name}`}
                    className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 rounded-2xl border border-dashed border-border bg-muted px-5 py-4 text-center text-sm text-muted-foreground">
        Also on the shelves: smart TVs, ACs, refrigerators, washing machines, water purifiers,
        covers, tempered glass, chargers and cables.
      </p>
    </>
  );
}