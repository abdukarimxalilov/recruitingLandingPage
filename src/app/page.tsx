import { BackToTop } from "@/components/back-to-top";
import { ContactForm } from "@/components/contact-form";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { IndustriesSection } from "@/components/industries-section";
import { LogoStrip } from "@/components/logo-strip";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <>
      <Header />
      <BackToTop />
      <main>
        <HeroSection />
        <LogoStrip />
        <ServicesSection />
        <ProcessSection />
        <IndustriesSection />
        <TestimonialsSection />
        <FAQSection />
        <section id="contact" className="bg-white py-20">
          <div className="mx-auto max-w-2xl px-6">
            <div className="text-center mb-12">
              <span className="inline-block rounded-full border border-[#1b4d8a33] bg-[#f1f3fb] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1b4d8a]">
                Get in Touch
              </span>
              <h2 className="mt-4 text-3xl font-bold text-[#040c1d] md:text-4xl">
                Ready to find your next hire?
              </h2>
              <p className="mt-4 text-lg text-[#152238]/80">
                Fill out the form below and we&apos;ll get back to you within one business day.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
