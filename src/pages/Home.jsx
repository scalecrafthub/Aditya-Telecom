import { Phone, ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import BrandMarquee from "@/components/home/BrandMarquee";
import StoreGallery from "@/components/home/StoreGallery";
import ProductShowcase from "@/components/home/ProductShowcase";
import ExchangePanel from "@/components/home/ExchangePanel";
import ServicePanels from "@/components/home/ServicePanels";
import RatingBlock from "@/components/home/RatingBlock";
import StoreVisit from "@/components/home/StoreVisit";
import FinalCta from "@/components/home/FinalCta";
import Section from "@/components/site/Section";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { BUSINESS } from "@/lib/business";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />

      <Section id="inside">
        <Reveal>
          <SectionHeading
            eyebrow="Inside the shop"
            title="A counter you can walk into."
            description="Real shelves, real stock — walk in, hold the phone, and ask anything before you buy."
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <StoreGallery />
        </Reveal>
      </Section>

      <Section id="stock" className="border-t border-border bg-muted/60">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="What's in stock"
              title="A 5G counter, laptops and every screen for the home."
              description="The latest Realme 5G range, laptops for students and offices, plus the TVs, ACs and fridges Maharajganj keeps asking for."
            />
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white px-4 py-2.5 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" /> Check availability
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <ProductShowcase />
        </Reveal>
      </Section>

      <Section id="exchange">
        <Reveal>
          <ExchangePanel />
        </Reveal>
      </Section>

      <Section id="repairs" className="border-t border-border bg-muted/60">
        <Reveal>
          <SectionHeading
            eyebrow="Service & supply"
            title="We supply the shops, and service the phones."
            description="Aditya Telecom works with retailers and resellers across the district — and looks after every handset sold."
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <ServicePanels />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <RatingBlock />
        </Reveal>
      </Section>

      <Section id="visit" className="border-t border-border bg-muted/60">
        <Reveal>
          <SectionHeading
            eyebrow="Find us"
            title="One counter, on Gorakhpur Road."
            description="Walk in any day of the week. Demos, exchange quotes and repairs are all handled at the same counter."
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <StoreVisit />
        </Reveal>
        <Reveal delay={0.05} className="mt-8 text-center">
          <a
            href="#stock"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary hover:underline"
          >
            Back to what&apos;s in stock <ArrowRight className="h-3 w-3" />
          </a>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}