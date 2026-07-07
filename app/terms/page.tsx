import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing the use of the Juniper Cabinetry website.',
  alternates: {
    canonical: '/terms/',
  },
  robots: { index: false, follow: true },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-6 pt-44 pb-24">
        <p className="text-brand-green text-sm tracking-[0.3em] uppercase mb-4">Legal</p>
        <h1 className="font-serif text-4xl md:text-5xl text-brand-brown mb-4">
          Terms of Service
        </h1>
        <p className="text-brand-brown/60 text-sm mb-12">Last updated: July 2026</p>

        <div className="space-y-10 text-brand-brown/80 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-brand-brown mb-3">Use of This Website</h2>
            <p>
              This website is operated by Juniper Cabinetry of Richmond, BC. By using it, you
              agree to these terms. The site&apos;s content — including photography of our
              projects, text, and branding — is the property of Juniper Cabinetry and may not
              be reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-brown mb-3">
              Information, Not an Offer
            </h2>
            <p>
              Content on this site is provided for general information. Project photos
              represent past work; results, materials, and pricing for your project will be
              confirmed in a written quote. Nothing on this site constitutes a binding offer,
              and website content does not form part of any contract unless expressly included
              in a signed agreement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-brown mb-3">Quotes & Consultations</h2>
            <p>
              Design consultations requested through this website are complimentary and carry
              no obligation. All project engagements are governed by the written agreement and
              quote provided for that project.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-brown mb-3">
              Limitation of Liability
            </h2>
            <p>
              While we work to keep this website accurate and available, it is provided
              &ldquo;as is&rdquo; without warranties of any kind. Juniper Cabinetry is not
              liable for damages arising from use of the website itself. These terms are
              governed by the laws of British Columbia, Canada.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-brown mb-3">Contact</h2>
            <p>
              Questions about these terms? Please{' '}
              <Link href="/contact/" className="text-brand-green underline underline-offset-4">
                contact us
              </Link>{' '}
              or email{' '}
              <a
                href="mailto:junipercabinetry@gmail.com"
                className="text-brand-green underline underline-offset-4"
              >
                junipercabinetry@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
