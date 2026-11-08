import { Image } from "@/components/ui/image";
import { MEDIA } from "@/lib/media";

const SHOTS = [
  {
    src: MEDIA.storeShelf,
    label: "The 5G wall",
    note: "Realme, Poco and Tecno stock — sealed boxes, all variants.",
  },
  {
    src: MEDIA.storeAccessories,
    label: "Accessories counter",
    note: "Chargers, cables, earphones and adapters, fitted on the spot.",
  },
  {
    src: MEDIA.storeHome,
    label: "Home electronics",
    note: "Smart TVs, refrigerators, washing machines and water purifiers.",
  },
];

export default function StoreGallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SHOTS.map((shot) => (
        <figure key={shot.label} className="group relative overflow-hidden rounded-2xl border border-border bg-card">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={shot.src}
              alt={shot.label}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171310]/85 via-[#171310]/10 to-transparent" />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-secondary">{shot.label}</p>
            <p className="mt-1.5 text-sm leading-snug text-white/85">{shot.note}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}