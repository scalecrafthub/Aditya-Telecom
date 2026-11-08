import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const REASONS = [
  "Latest 5G variants kept on the shelf",
  "Genuine, sealed stock with full warranty",
  "Exchange value quoted before you commit",
  "Setup, data transfer and screen guard included",
];

export default function RatingBlock() {
  return (
    <div className="grid gap-8 rounded-3xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div>
        <div className="flex items-end gap-3">
          <span className="font-heading text-6xl font-semibold leading-none text-primary">
            {BUSINESS.rating}
          </span>
          <div className="pb-1">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              {BUSINESS.reviews} Google reviews
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
          Rated by neighbours across Maharajganj — for straight answers on price, honest exchange
          value and phones that actually last.
        </p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
          Cell phone store · Padri, Maharajganj
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {REASONS.map((reason, i) => (
          <li key={reason} className="rounded-xl border border-border bg-white p-4 text-sm leading-snug text-foreground/80">
            <span className="mb-1.5 block font-mono text-[10px] tracking-[0.16em] text-primary">
              0{i + 1}
            </span>
            {reason}
          </li>
        ))}
      </ul>
    </div>
  );
}