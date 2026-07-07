import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Juniper Cabinetry collects, uses, and protects your personal information.',
  alternates: {
    canonical: '/privacy/',
  },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-6 pt-44 pb-24">
        <p className="text-brand-green text-sm tracking-[0.3em] uppercase mb-4">Legal</p>
        <h1 className="font-serif text-4xl md:text-5xl text-brand-brown mb-4">Privacy Policy</h1>
        <p className="text-brand-brown/60 text-sm mb-12">Last updated: July 2026</p>

        <div className="space-y-10 text-brand-brown/80 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-brand-brown mb-3">Who We Are</h2>
            <p>
              Juniper Cabinetry (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a custom cabinetry
              studio located at 12840 Bathgate Way, Richmond, BC V6V 1Z4, Canada. This policy
              explains how we handle personal information collected through
              junipercabinetry.ca in accordance with the Personal Information Protection and
              Electronic Documents Act (PIPEDA) and BC&apos;s Personal Information Protection
              Act (PIPA).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-brown mb-3">Information We Collect</h2>
            <p>
              When you submit our contact form, we collect the information you provide: your
              name, email address, phone number (optional), project type, and project details.
              Form submissions are processed and stored by Netlify, our website hosting
              provider. If analytics is enabled on this site, we also collect anonymized usage
              data (pages visited, approximate location, device type) to understand how
              visitors use the site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-brown mb-3">How We Use It</h2>
            <p>
              We use your contact information solely to respond to your inquiry, schedule
              consultations, and manage your project with us. We do not sell, rent, or share
              your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-brown mb-3">Retention & Security</h2>
            <p>
              We keep inquiry information only as long as needed to serve you and meet legal
              or accounting requirements. Our website is served over HTTPS, and access to
              submitted information is limited to Juniper Cabinetry staff.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-brown mb-3">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal
              information at any time by emailing{' '}
              <a
                href="mailto:junipercabinetry@gmail.com"
                className="text-brand-green underline underline-offset-4"
              >
                junipercabinetry@gmail.com
              </a>{' '}
              or calling{' '}
              <a href="tel:+16043630238" className="text-brand-green underline underline-offset-4">
                (604) 363-0238
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-brown mb-3">Questions</h2>
            <p>
              If you have questions about this policy or how your information is handled,
              please <Link href="/contact/" className="text-brand-green underline underline-offset-4">contact us</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
