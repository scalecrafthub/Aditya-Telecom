import { cn } from "@/lib/utils";

export default function Section({ children, className, id }) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto max-w-7xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20", className)}
    >
      {children}
    </section>
  );
}