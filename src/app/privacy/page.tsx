import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { company } from "@/data/site";

export const metadata = {
  title: "Privacy Policy - Tim Miller Recruiting",
  description: "Privacy policy for Tim Miller Recruiting services",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1b4d8a] transition hover:text-[#e6b85c]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-[#040c1d] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-[#152238]/70">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-lg mt-12 max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#040c1d] mb-4">
                Introduction
              </h2>
              <p className="text-[#152238]/80 leading-relaxed">
                Tim Miller Recruiting ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our recruiting services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#040c1d] mb-4">
                Information We Collect
              </h2>
              <p className="text-[#152238]/80 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#152238]/80">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and professional details</li>
                <li>Resume and employment history (for job seekers)</li>
                <li>Job requirements and hiring needs (for employers)</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#040c1d] mb-4">
                How We Use Your Information
              </h2>
              <p className="text-[#152238]/80 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#152238]/80">
                <li>Provide recruitment and staffing services</li>
                <li>Match candidates with appropriate job opportunities</li>
                <li>Connect employers with qualified talent</li>
                <li>Communicate with you about our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Improve our services and website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#040c1d] mb-4">
                Information Sharing
              </h2>
              <p className="text-[#152238]/80 leading-relaxed">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#152238]/80 mt-4">
                <li>
                  <strong>Potential employers</strong> (if you are a job seeker who has consented to being represented)
                </li>
                <li>
                  <strong>Qualified candidates</strong> (if you are an employer seeking talent)
                </li>
                <li>
                  <strong>Service providers</strong> who assist us in operating our business
                </li>
                <li>
                  <strong>Legal authorities</strong> when required by law or to protect our rights
                </li>
              </ul>
              <p className="text-[#152238]/80 leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#040c1d] mb-4">
                Data Security
              </h2>
              <p className="text-[#152238]/80 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#040c1d] mb-4">
                Your Rights
              </h2>
              <p className="text-[#152238]/80 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#152238]/80">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent for processing your information</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#040c1d] mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-[#152238]/80 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your
                experience. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#040c1d] mb-4">
                Data Retention
              </h2>
              <p className="text-[#152238]/80 leading-relaxed">
                We retain your information for as long as necessary to fulfill the purposes outlined
                in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#040c1d] mb-4">
                Changes to This Policy
              </h2>
              <p className="text-[#152238]/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#040c1d] mb-4">
                Contact Us
              </h2>
              <p className="text-[#152238]/80 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-[#f1f3fb] rounded-xl p-6 border border-[#1b4d8a33]">
                <p className="text-[#152238] font-semibold mb-2">Tim Miller Recruiting</p>
                <p className="text-[#152238]/80">
                  Email:{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[#1b4d8a] hover:text-[#e6b85c] transition"
                  >
                    {company.email}
                  </a>
                </p>
                <p className="text-[#152238]/80">
                  Phone:{" "}
                  <a
                    href="tel:+13313147667"
                    className="text-[#1b4d8a] hover:text-[#e6b85c] transition"
                  >
                    +1 (331) 314-7667
                  </a>
                </p>
                <p className="text-[#152238]/80 mt-2">{company.address}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
