import { testimonials } from "@/data/site";
import { SectionHeading } from "./ui/section-heading";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 md:py-[var(--spacing-section)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by fleet-first partners"
          description="Carriers and 3PLs return to Tim Miller Recruiting for route-aware shortlists, transparent communication, and consistently strong results."
          alignment="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="flex flex-col rounded-2xl border border-[var(--color-border-muted)] bg-[var(--color-brand-gray)]/60 p-8 text-sm leading-relaxed text-[var(--color-brand-charcoal)] shadow-sm"
            >
              <span className="text-4xl text-[var(--color-brand-sky)]">“</span>
              <p className="mt-3 flex-1">{testimonial.quote}</p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-[var(--color-brand-navy)]">
                  {testimonial.author}
                </p>
                <p className="text-xs text-[var(--color-brand-charcoal)] opacity-70">
                  {testimonial.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
