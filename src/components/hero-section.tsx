"use client";

import { animate, motion, Variants, useInView, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { company, heroContent, stats } from "@/data/site";
import { Button } from "./ui/button";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

const orbitBadges = [
  { label: "Source top talent", className: "top-10 left-4 md:-left-6" },
  { label: "Screen in 48 hrs", className: "bottom-16 right-4 md:-right-6" },
  { label: "Deploy quickly", className: "hidden md:flex top-1/2 right-[-68px] -translate-y-1/2" },
];

export function HeroSection() {
  const statsRef = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#f9fbff] via-[#eef2fb] to-[#dde6f8] pb-[var(--spacing-section)] pt-[3.5rem] text-[var(--color-brand-navy)]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#d6b46222] blur-3xl" />
        <div className="absolute bottom-10 right-16 h-64 w-64 rounded-full bg-[#1b4d8a26] blur-3xl" />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(27,77,138,0.12),transparent_55%)]" />
        </motion.div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:items-center">
        <div className="max-w-xl">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-[#1b4d8a33] bg-white px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-brand-sky)] shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Talent Matchmakers
          </motion.span>
          <motion.h1
            className="mt-6 text-4xl font-bold text-[var(--color-brand-navy)] md:text-5xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            {heroContent.headline}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg font-semibold leading-relaxed text-[var(--color-brand-charcoal)] md:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            {heroContent.subheadline}
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Button href={heroContent.primaryCta.href}>
                {heroContent.primaryCta.label}
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Button
                href={heroContent.secondaryCta.href}
                variant="outline"
                size="lg"
              >
                {heroContent.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
          <motion.ul
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-7"
            initial="hidden"
            animate="visible"
            ref={statsRef}
          >
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} isInView={isInView} />
            ))}
          </motion.ul>
        </div>
        <motion.div
          className="relative h-[320px] sm:h-[420px] md:h-[520px] w-full max-w-xl overflow-hidden rounded-[24px] md:rounded-[32px] border border-[#e1e8f8] bg-white shadow-[var(--shadow-elevated)]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.65 }}
        >
          <motion.div
            className="absolute -inset-12 rounded-[48px] border border-[#d6b46233]"
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Recruiting team discussing hiring strategy."
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white" />
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-[18%] rounded-full border border-[#f3e7c544]" />
          </motion.div>
          {orbitBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              className={`absolute flex w-max items-center gap-2 rounded-full border border-[#d6b46255] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-brand-charcoal)] shadow-[0_14px_30px_-16px_rgba(4,12,29,0.4)] ${badge.className}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ delay: index * 0.4, duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-brand-gold)]" />
              {badge.label}
            </motion.div>
          ))}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 rounded-xl md:rounded-2xl border border-[#d7dff2] bg-white/95 p-3 md:p-5 text-[var(--color-brand-charcoal)] shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-brand-sky)]">
              Trusted by
            </p>
            <p className="mt-1 md:mt-2 text-xs md:text-sm font-semibold text-[var(--color-brand-charcoal)]">
              {company.name} partners with transportation companies, 3PLs, and private fleets to deliver vetted, reliable drivers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type Stat = (typeof stats)[number];

type StatCardProps = {
  stat: Stat;
  index: number;
  isInView: boolean;
};

function parseTarget(stat: Stat) {
  if (stat.type === "count") {
    const numeric = parseInt(stat.value.replace(/\D/g, ""), 10);
    return { end: numeric, suffix: "+" };
  }
  if (stat.type === "percentage") {
    const numeric = parseInt(stat.value.replace(/\D/g, ""), 10);
    return { end: numeric, suffix: "%" };
  }
  return { end: stat.value, suffix: "" };
}

function StatCard({ stat, index, isInView }: StatCardProps) {
  const { end, suffix } = parseTarget(stat);
  const [displayValue, setDisplayValue] = useState<typeof end>(
    typeof end === "number" ? 0 : end,
  );
  const motionValue = useMotionValue(typeof end === "number" ? 0 : 0);
  const [isVisible, setIsVisible] = useState(index === 0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (typeof end !== "number") return;
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest) as typeof end);
    });
    return () => unsubscribe();
  }, [motionValue, end]);

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return;

    const startDelay = index === 0 ? 0.4 : index * 2.6;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typeof end === "number") {
      timeoutId = setTimeout(() => setIsVisible(true), startDelay * 1000);
      animate(motionValue, end, {
        duration: 2.2,
        delay: startDelay,
        ease: [0.16, 1, 0.3, 1],
      });
    } else {
      const reveal = () => {
        setDisplayValue(end);
        setIsVisible(true);
      };
      timeoutId = setTimeout(reveal, startDelay * 1000);
    }

    hasAnimatedRef.current = true;

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [end, index, isInView, motionValue]);

  return (
    <motion.li
      variants={containerVariants as Variants}
      custom={index + 1}
      className="group relative flex h-44 min-w-[160px] flex-col justify-center rounded-3xl border border-[#cad3ee] bg-white px-6 py-6 shadow-[0_28px_50px_-24px_rgba(21,34,56,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_36px_60px_-24px_rgba(21,34,56,0.35)] sm:h-40 sm:px-5"
    >
      <div className="absolute inset-x-6 top-5 h-1 rounded-full bg-gradient-to-r from-[#f4e6bb] via-[#d6b462] to-[#1b4d8a] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <p className="text-[28px] font-semibold text-[var(--color-brand-navy)] tracking-tight">
          {typeof end === "number" ? `${displayValue}${suffix}` : end}
        </p>
        <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.18em] text-[var(--color-brand-sky)] leading-[1.6]">
          {stat.label}
        </p>
      </div>
    </motion.li>
  );
}
