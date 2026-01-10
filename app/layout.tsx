import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import AppShell from './AppShell';

const siteUrl = 'https://junipercabinetry.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Juniper Cabinetry - Custom Handcrafted Cabinetry in Richmond, BC',
    template: '%s | Juniper Cabinetry',
  },
  description:
    'Premium custom cabinetry crafted in Richmond, BC. Specializing in kitchen cabinets, bathroom vanities, built-ins, and custom storage solutions. Expert craftsmanship meets contemporary design.',
  keywords: [
    'custom cabinetry',
    'kitchen cabinets Richmond BC',
    'bathroom vanities',
    'custom built-ins',
    'handcrafted cabinetry',
    'kitchen renovation',
    'custom storage solutions',
    'Richmond cabinetry',
    'Vancouver cabinetry',
    'luxury cabinetry',
    'closet systems',
    'home office cabinetry',
  ],
  authors: [{ name: 'Juniper Cabinetry' }],
  creator: 'Juniper Cabinetry',
  publisher: 'Juniper Cabinetry',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName: 'Juniper Cabinetry',
    title: 'Juniper Cabinetry - Custom Handcrafted Cabinetry in Richmond, BC',
    description:
      'Premium custom cabinetry crafted in Richmond, BC. Specializing in kitchen cabinets, bathroom vanities, built-ins, and custom storage solutions.',
    images: [
      {
        url: '/kitchen-hero-01.png',
        width: 1200,
        height: 630,
        alt: 'Juniper Cabinetry - Custom Kitchen Cabinetry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juniper Cabinetry - Custom Handcrafted Cabinetry',
    description:
      'Premium custom cabinetry crafted in Richmond, BC. Expert craftsmanship meets contemporary design.',
    images: ['/kitchen-hero-01.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Juniper Cabinetry',
  image: `${siteUrl}/kitchen-hero-01.png`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '(604) 363-0238',
  email: 'junipercabinetry@gmail.com',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12840 Bathgate Way',
    addressLocality: 'Richmond',
    addressRegion: 'BC',
    postalCode: 'V6V 1Z4',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.1666,
    longitude: -123.1336,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  sameAs: [],
  description:
    'Premium custom cabinetry crafted in Richmond, BC. Specializing in kitchen cabinets, bathroom vanities, built-ins, and custom storage solutions.',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 49.1666,
      longitude: -123.1336,
    },
    geoRadius: '50000',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
