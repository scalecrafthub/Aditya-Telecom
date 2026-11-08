import { Phone, Star, MapPin, ArrowRight, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { BUSINESS } from "@/lib/business";
import { MEDIA } from "@/lib/media";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-muted via-background to-background">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full sun-glow" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <motion.div {...fade(0)} className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              <BadgeCheck className="h-3 w-3" /> {BUSINESS.partner}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/70">
              <Star className="h-3 w-3 fill-secondary text-secondary" />
              {BUSINESS.rating} · {BUSINESS.reviews} reviews
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-balance text-[clamp(2.5rem,5.6vw,4.2rem)] font-semibold leading-[1.02] text-foreground"
          >
            Maharajganj&apos;s <span className="text-primary">5G phone</span> &amp; electronics counter.
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Realme 5G phones, laptops, smart TVs, ACs and accessories. Honest exchange value,
            easy finance and in-store repairs, seven days a week.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground orange-glow transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
            </a>
            <a
              href="#stock"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              See what&apos;s in stock <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            {...fade(0.32)}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Hanuman Gadhi, Padri
            </span>
            <span>Mon–Sun · 8 AM – 10 PM</span>
            <span>Exchange &amp; finance available</span>
          </motion.div>
        </div>

        <motion.div {...fade(0.18)} className="relative">
          <div className="absolute -bottom-4 -right-4 hidden h-32 w-32 rounded-3xl bg-secondary sm:block" />
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_30px_80px_-50px_rgba(23,19,16,0.55)]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={MEDIA.storeFront}
                alt="Aditya Telecom storefront in Maharajganj"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-border bg-white px-5 py-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">Our shop</p>
                <p className="mt-1 text-sm font-semibold text-foreground">Hanuman Gadhi, Gorakhpur Road</p>
              </div>
              <a
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                aria-label="Get directions"
              >
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="absolute -left-3 top-5 hidden items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 shadow-sm sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-foreground/70">
              Open till 10 PM
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}