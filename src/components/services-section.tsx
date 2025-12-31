"use client";

import { motion, Variants } from "framer-motion";
import { differentiators, services } from "@/data/site";
import { SectionHeading } from "./ui/section-heading";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.4, ease: "easeOut" },
  }),
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#f9fbff] via-[#eef2fb] to-[#dde6f8] py-20 md:py-[var(--spacing-section)]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#d6b46222] blur-3xl" />
        <div className="absolute bottom-0 right-16 h-72 w-72 rounded-full bg-[#1b4d8a26] blur-3xl" />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(27,77,138,0.12),transparent_55%)]" />
        </motion.div>
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="Recruitment solutions tailored to your growth trajectory"
          description="From executive search to interim expertise, we plug curated talent directly into your roadmap with white-glove support at every step."
        />

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={cardVariants as Variants}
              custom={index + 1}
              className="flex flex-col justify-between rounded-2xl border border-[var(--color-border-muted)] bg-white p-8 shadow-sm"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-brand-navy)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-brand-charcoal)] opacity-80">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 h-1 w-16 rounded-full bg-[var(--color-brand-sky)]" />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {differentiators.map((item, index) => (
            <motion.article
              key={item.title}
              variants={cardVariants as Variants}
              custom={index + 1}
              className="rounded-2xl bg-[var(--color-brand-gray)]/70 p-6"
            >
              <h4 className="text-lg font-semibold text-[var(--color-brand-navy)]">
                {item.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-brand-charcoal)] opacity-80">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
