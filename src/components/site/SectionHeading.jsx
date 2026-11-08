import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, description, align = "left", className, children }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/75">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-balance text-3xl font-semibold text-foreground sm:text-4xl md:text-[2.9rem]">
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-xl text-[15px] leading-relaxed text-muted-foreground", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}