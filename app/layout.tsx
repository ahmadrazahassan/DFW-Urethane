import type { Metadata } from "next";
import { Inter_Tight, Manrope } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/content";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Manrope is used only for the "DFW Urethane" wordmark.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title:
    "DFW Urethane | Commercial Roof Restoration, Coatings & Spray Foam — Arlington, TX",
  description:
    "Commercial roof restoration with no costly tear-off. Silicone coatings & spray foam backed by warranties up to 20 years — serving Texas & Oklahoma since 1986.",
  keywords: [
    "commercial roof restoration",
    "silicone roof coating",
    "spray foam roofing",
    "Arlington TX roofing",
    "no tear-off roof restoration",
  ],
  openGraph: {
    type: "website",
    url: business.url,
    title: "DFW Urethane | Commercial Roof Restoration & Spray Foam",
    description:
      "No-tear-off commercial roof restoration backed by warranties up to 20 years. Serving TX & OK since 1986.",
    siteName: "DFW Urethane",
  },
  twitter: {
    card: "summary_large_image",
    title: "DFW Urethane | Commercial Roof Restoration & Spray Foam",
    description:
      "No-tear-off commercial roof restoration backed by warranties up to 20 years. Serving TX & OK since 1986.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: business.name,
  url: business.url,
  telephone: business.phone,
  foundingDate: String(business.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "US",
  },
  areaServed: business.areaServed.map((s) => ({
    "@type": "State",
    name: s,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${manrope.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
