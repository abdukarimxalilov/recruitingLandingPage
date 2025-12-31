"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/site";
import { Button } from "./ui/button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border-muted)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-horizontal.svg"
            alt="Tim Miller Recruiting logo"
            width={200}
            height={75}
            priority
          />
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm font-semibold text-[var(--color-brand-navy)] md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-[var(--color-brand-sky)]"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="#contact" size="md">
            Connect With Us
          </Button>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-muted)] text-[var(--color-brand-navy)] transition-colors hover:bg-[var(--color-brand-gray)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-transform ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-transform ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="space-y-4 border-t border-[var(--color-border-muted)] bg-white px-6 py-6 text-sm font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-[var(--color-brand-navy)]"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href="#contact"
                size="md"
                className="w-full"
                onClick={closeMenu}
              >
                Connect With Us
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
