import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS, isStoreOpen } from "@/lib/business";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const NAV = [
  { label: "Stock", href: "#stock" },
  { label: "Exchange", href: "#exchange" },
  { label: "Repairs", href: "#repairs" },
  { label: "Visit us", href: "#visit" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const storeOpen = isStoreOpen();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-foreground text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] sm:px-8">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-secondary" /> Hanuman Gadhi, Gorakhpur Road, Maharajganj
          </span>
          <span className={cn("flex items-center gap-1.5", storeOpen ? "text-secondary" : "text-white/60")}>
            <span className={cn("h-1.5 w-1.5 rounded-full", storeOpen ? "bg-secondary" : "bg-white/40")} />
            {storeOpen ? "Open now · till 10 PM" : "Opens 8 AM"} · All 7 days
          </span>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled ? "glass border-border shadow-[0_10px_30px_-24px_rgba(0,0,0,0.4)]" : "border-transparent bg-background"
        )}
      >
        <div className="mx-auto flex h-[70px] max-w-7xl items-center gap-4 px-5 sm:px-8">
          <a href="#top" aria-label="Aditya Telecom home">
            <Logo />
          </a>

          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={BUSINESS.phoneHref}
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-[13px] font-semibold text-primary-foreground transition-transform hover:scale-[1.03] md:ml-2"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
            <span className="hidden sm:inline">{BUSINESS.phone}</span>
            <span className="sm:hidden">Call now</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {item.label}
                  <span className="font-mono text-[10px] text-muted-foreground">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}