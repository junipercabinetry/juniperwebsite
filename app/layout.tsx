import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Instrument_Serif } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const siteUrl = 'https://junipercabinetry.ca';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Juniper Cabinetry | Custom Kitchen Cabinets in Richmond & Metro Vancouver',
    template: '%s | Juniper Cabinetry',
  },
  description:
    'Juniper Cabinetry is a custom cabinetry studio serving the Metro Vancouver area. Specializing in designing, manufacturing, and installing kitchen cabinets, bathroom vanities, built-ins, and custom storage solutions.',
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
  alternates: {
    canonical: '/',
  },
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
    title: 'Juniper Cabinetry | Custom Kitchen Cabinets in Richmond & Metro Vancouver',
    description:
      'Juniper Cabinetry is a custom cabinetry studio serving the Metro Vancouver area. Specializing in designing, manufacturing, and installing kitchen cabinets, bathroom vanities, built-ins, and custom storage solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom kitchen cabinetry by Juniper Cabinetry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juniper Cabinetry | Custom Kitchen Cabinets in Richmond & Metro Vancouver',
    description:
      'Custom cabinetry studio serving Metro Vancouver. Kitchen cabinets, bathroom vanities, built-ins, and custom storage solutions.',
    images: ['/og-image.jpg'],
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Juniper Cabinetry',
  image: `${siteUrl}/og-image.jpg`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '+1-604-363-0238',
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
  sameAs: [
    'https://www.instagram.com/junipercabinetry/',
    'https://www.facebook.com/junipercabinetry',
    'https://www.youtube.com/@JuniperCabinetry',
    'https://www.tiktok.com/@junipercabinetry',
  ],
  description:
    'Juniper Cabinetry is a custom cabinetry studio serving the Metro Vancouver area. Specializing in designing, manufacturing, and installing kitchen cabinets, bathroom vanities, built-ins, and custom storage solutions.',
  areaServed: [
    { '@type': 'City', name: 'Richmond' },
    { '@type': 'City', name: 'Vancouver' },
    { '@type': 'City', name: 'Burnaby' },
    { '@type': 'City', name: 'Surrey' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${instrumentSerif.variable}`}>
      <head>
        {/* Marks JS availability so scroll-reveal styles only hide content when they can also reveal it */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <meta name="theme-color" content="#fbf7ee" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
