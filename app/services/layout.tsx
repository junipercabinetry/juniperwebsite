import type { Metadata } from 'next';
import { faqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Services — Kitchens, Vanities, Closets & Built-Ins',
  description:
    'Custom kitchen cabinetry, bathroom vanities, built-in closet systems, and specialty millwork. Designed, built, and installed by Juniper Cabinetry in Metro Vancouver.',
  alternates: {
    canonical: '/services/',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
