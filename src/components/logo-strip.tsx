import { clientLogos } from "@/data/site";

// Continuously scrolling marquee for client names (logos later)
// Direction: left -> right (as requested)
export function LogoStrip() {
  // Build the single-line marquee contents (label + company names), duplicated for seamless loop
  const label = "Trusted by growth-focused teams";
  const baseItems = [label, ...clientLogos];
  const items = [...baseItems, ...baseItems];

  return (
    <section
      aria-label="Trusted by growth-focused teams"
      className="border-y border-[var(--color-border-muted)] bg-gradient-to-b from-[#f5f8ff] via-[#eef2fb] to-[#dbe6fb]"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-10 sm:py-12 md:py-16">
        <div
          className="relative flex-1 overflow-hidden"
          // soft fade on edges
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="logo-marquee hover:[animation-play-state:paused]"
            style={{
              // tune speed here (seconds)
              // slower = larger number, faster = smaller number
              // @ts-expect-error CSS var is fine here
              ["--logo-marquee-duration"]: "36s",
            }}
          >
            {items.map((item, idx) => {
              const isLabel = item === label;
              return (
                <span
                  key={`${item}-${idx}`}
                  aria-hidden={idx >= baseItems.length}
                  className={
                    isLabel
                      ? "whitespace-nowrap text-[11px] sm:text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-brand-sky)]"
                      : "whitespace-nowrap text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[var(--color-brand-sky)] to-[var(--color-brand-navy)] bg-clip-text text-transparent"
                  }
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
