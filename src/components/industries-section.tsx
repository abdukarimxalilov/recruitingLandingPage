import { industries } from "@/data/site";
import { SectionHeading } from "./ui/section-heading";

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="bg-[var(--color-brand-gray)] py-20 md:py-[var(--spacing-section)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Industries"
          title="Focused expertise across mission-critical functions"
          description="We track market intelligence and talent data in the verticals that drive growth. Tap into curated pipelines built for your world."
          alignment="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-2xl border border-[var(--color-border-muted)] bg-white px-6 py-5 text-center text-sm font-semibold text-[var(--color-brand-navy)] shadow-sm"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
