import DeviceFrame from "./DeviceFrame";

type Item = { src: string; label: string; caption: string };

// Tailwind cannot see a class name built at runtime, so both layouts are
// written out in full and picked between.
const COLUMNS: Record<number, string> = {
  2: "mx-auto max-w-2xl grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
};

export default function ScreenTriptych({
  items,
  subject,
}: {
  items: Item[];
  subject: string;
}) {
  const columns = COLUMNS[items.length] ?? COLUMNS[3];

  return (
    <div className={`mt-14 grid gap-10 sm:gap-8 ${columns}`}>
      {items.map((item) => (
        <figure key={item.label} className="flex flex-col items-center">
          <DeviceFrame
            src={item.src}
            alt={`${item.label} screen of the ${subject}`}
            device="phone"
          />
          <figcaption className="mt-6 text-center">
            <span className="block text-base font-semibold text-brand">
              {item.label}
            </span>
            <span className="mt-1.5 block text-sm leading-relaxed text-ink-muted">
              {item.caption}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
