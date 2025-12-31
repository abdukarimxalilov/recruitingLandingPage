import { AnalyticsScripts } from "@/components/analytics-scripts";
import { company } from "@/data/site";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-accent",
});

const siteUrl = "https://www.timmillerrecruiting.com";
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  logo: `${siteUrl}/logo-mark.svg`,
  sameAs: company.socials.map((link) => link.href),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Business Blvd",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60601",
    addressCountry: "US",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Tim Miller Recruiting",
  description:
    "Logistics and trucking recruiting agency specializing in CDL drivers, dispatch leaders, and transportation executives.",
  url: siteUrl,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Business Blvd",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60601",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "41.8781",
    longitude: "-87.6298",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Trucking Recruitment",
    "Logistics Staffing",
    "Executive Search",
    "CDL Driver Placement",
    "Dispatch Services",
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Executive Search & Talent Solutions`,
    template: `%s • ${company.name}`,
  },
  description:
    "Tim Miller Recruiting keeps freight moving by connecting trucking and logistics companies with vetted drivers, dispatch leaders, and operations executives in under a week.",
  keywords: [
    "logistics recruiting company Chicago",
    "trucking talent acquisition",
    "fleet operations recruiters",
    "dispatch recruiting agency",
    "hire CDL drivers fast",
    "trucking recruiters near me",
    "logistics staffing agency",
    "freight industry jobs",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${company.name} | Executive Search & Talent Solutions`,
    description:
      "Fast, reliable recruiting for carriers, 3PLs, and distribution networks that need transportation talent on demand.",
    url: siteUrl,
    siteName: company.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Tim Miller Recruiting brand hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Executive Search & Talent Solutions`,
    description:
      "Logistics-first recruiting that connects fleets with proven drivers, dispatchers, and operations leaders.",
    creator: "@tmrecruiting",
    site: "@tmrecruiting",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-mark.svg",
    shortcut: "/logo-mark.svg",
    apple: "/logo-mark.svg",
  },
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
