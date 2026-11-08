import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Logo({ className, compact = false }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
        <Zap className="h-4 w-4" strokeWidth={2.6} />
      </span>
      <span className="leading-none">
        <span className="block font-heading text-[15px] font-semibold tracking-tight text-foreground">
          Aditya Telecom
        </span>
        {!compact && (
          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            Maharajganj · 5G
          </span>
        )}
      </span>
    </span>
  );
}