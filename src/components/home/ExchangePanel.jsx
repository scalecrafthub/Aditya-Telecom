import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { BUSINESS, WHATSAPP_URL } from "@/lib/business";
import { MEDIA } from "@/lib/media";

const STEPS = [
  { title: "Bring your old phone", copy: "Any brand, any condition — carry it in with the charger if you have it." },
  { title: "Get a value on the spot", copy: "We check the device in front of you and quote a fair exchange price." },
  { title: "Pay only the difference", copy: "Pick your new 5G phone, or split it into monthly instalments." },
];

export default function ExchangePanel() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[260px]">
          <Image
            src={MEDIA.exchange}
            alt="Trading in an old phone for a new one"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171310]/50 to-transparent lg:bg-gradient-to-r" />
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground">
            Exchange accepted
          </span>
        </div>

        <div className="p-6 sm:p-9">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/75">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Exchange &amp; finance
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-foreground sm:text-4xl">
            Swap your old phone. Pay only the difference.
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Trade in what you already have and walk out with a 5G handset — or buy it on easy
            monthly instalments arranged at the counter.
          </p>

          <ol className="mt-6 space-y-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-3 rounded-xl border border-border bg-white p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary font-mono text-[11px] font-medium text-primary-foreground">
                  {index + 1}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">{step.title}</span>
                  <span className="mt-0.5 block text-[13px] leading-relaxed text-muted-foreground">{step.copy}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL("Hi Aditya Telecom, I want to know the exchange value of my old phone.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> Get an exchange quote
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary"
            >
              <Phone className="h-4 w-4" /> {BUSINESS.phone}
            </a>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              EMI options <ArrowRight className="h-3 w-3" /> ask in store
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}