import { faqs } from "@/data/site";
import { SectionHeading } from "./ui/section-heading";

export function FAQSection() {
  return (
    <section
      id="faq"
      className="bg-[var(--color-brand-gray)] py-20 md:py-[var(--spacing-section)]"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to common questions"
          description="Need more detail? Reach out via the contact form and we’ll tailor a solution to your hiring challenges."
          alignment="center"
        />
        <div className="mt-12 space-y-6">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-[var(--color-border-muted)] bg-white px-6 py-4 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--color-brand-navy)]">
                {item.question}
                <span className="text-[var(--color-brand-sky)] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-brand-charcoal)] opacity-80">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
