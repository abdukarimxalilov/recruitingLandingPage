"use client";

import { motion } from "framer-motion";
 import { process } from "@/data/site";
 import { SectionHeading } from "./ui/section-heading";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-white py-20 md:py-[var(--spacing-section)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Process"
          title="A recruiting playbook engineered for momentum"
          description="Every engagement follows a structured, high-touch workflow designed to surface the right talent quickly—without sacrificing fit."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {process.map((phase) => (
            <motion.article
              key={phase.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-border-muted)] bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-brand-sky)]">
                {phase.step}
              </span>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--color-brand-navy)]">
                {phase.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-brand-charcoal)] opacity-80">
                {phase.description}
              </p>
              <div className="absolute inset-0 -z-10 translate-y-16 bg-gradient-to-br from-[var(--color-brand-gray)] to-transparent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
