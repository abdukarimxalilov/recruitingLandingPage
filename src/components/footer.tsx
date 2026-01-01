import Link from "next/link";
import { company } from "@/data/site";

const footerTagline =
  "Connecting logistics leaders with reliable transportation talent — fast, personal, and precise.";

const footerContact = {
  phoneLabel: "+1 (331) 314-7667",
  phoneHref: "+13313147667",
  email: "kiyomovcs@gmail.com",
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const socialIconMap: Record<string, string> = {
  LinkedIn: "🔗",
  Instagram: "📸",
  Facebook: "👍",
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1120] to-[#0e172a] text-[#f4f6ff]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Logo & Tagline */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-[#e6b85c]">TruckingJob</span>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-white/80">
              {footerTagline}
            </p>
          </div>

          {/* Right: Navigation Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e6b85c]">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href={`tel:${footerContact.phoneHref}`}
                    className="text-white/80 transition hover:text-[#e6b85c]"
                  >
                    {footerContact.phoneLabel}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${footerContact.email}`}
                    className="text-white/80 transition hover:text-[#e6b85c]"
                  >
                    {footerContact.email}
                  </Link>
                </li>
                <li className="text-white/60">{company.address}</li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e6b85c]">
                Explore
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/80 transition hover:text-[#e6b85c]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e6b85c]">
                Connect
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {company.socials.map((social) => (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      className="flex items-center gap-2 text-white/80 transition hover:text-[#e6b85c]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span aria-hidden="true" className="text-base">
                        {socialIconMap[social.label] ?? "🔗"}
                      </span>
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e6b85c] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0b1120] transition hover:bg-[#d4a84d] hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Tim Miller Recruiting. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-white/80 transition hover:text-[#e6b85c] hover:underline"
              >
                Privacy Policy
              </Link>
              <p className="text-sm text-white/60">
                Built for freight leaders who value clarity, speed, and trusted talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
