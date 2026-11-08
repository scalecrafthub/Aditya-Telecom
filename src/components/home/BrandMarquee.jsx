const BRANDS = [
  "Realme",
  "Vivo",
  "Tecno",
  "Samsung",
  "OPPO",
  "Jio",
  "OnePlus",
  "Redmi",
  "Motorola",
  "LG",
  "boAt",
  "Haier",
];

function Row({ ariaHidden }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {BRANDS.map((brand) => (
        <span key={brand} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-heading text-lg font-semibold uppercase tracking-[0.02em] text-foreground/35 sm:text-xl">
            {brand}
          </span>
          <span className="h-1 w-1 rounded-full bg-primary/40" />
        </span>
      ))}
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section aria-label="Brands we stock" className="border-y border-border bg-muted">
      <div className="flex items-center gap-4 py-5">
        <span className="hidden shrink-0 pl-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:block">
          On the shelf
        </span>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex animate-marquee">
            <Row />
            <Row ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}