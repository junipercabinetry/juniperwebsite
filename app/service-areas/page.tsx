import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { serviceAreas } from '@/lib/service-areas';

export const metadata: Metadata = {
  title: 'Service Areas — Custom Cabinetry Across Metro Vancouver',
  description:
    'Juniper Cabinetry designs, builds, and installs custom kitchens, vanities, and built-ins across Metro Vancouver: Richmond, Vancouver, Burnaby, Surrey, and beyond.',
  alternates: {
    canonical: '/service-areas/',
  },
};

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="pt-44 pb-16 bg-brand-brown-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-px h-full bg-cream"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-cream"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-cream"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-cream text-sm tracking-[0.3em] uppercase mb-6">Where We Work</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-6">Service Areas</h1>
          <p className="text-xl text-cream/80 font-light max-w-2xl mx-auto leading-relaxed">
            Designed and built in our Richmond workshop. Installed across Metro Vancouver.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}/`}
                className="group relative block overflow-hidden hover-lift"
              >
                <div className="relative h-72 image-zoom">
                  <Image
                    src={area.heroImage}
                    alt={`Custom cabinetry in ${area.city}, BC`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                  <div>
                    <h2 className="font-serif text-3xl text-white mb-2">{area.city}</h2>
                    <p className="text-white/80 font-light text-sm max-w-md">{area.intro}</p>
                  </div>
                  <ArrowRight
                    className="text-white flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    size={24}
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
          <p className="text-brand-brown/70 font-light text-center mt-12 max-w-2xl mx-auto">
            Also serving Coquitlam, New Westminster, Delta, Langley, and the North Shore.
            Outside these areas?{' '}
            <Link href="/contact/" className="text-brand-green underline underline-offset-4">
              Get in touch
            </Link>{' '}
            — we&apos;d still love to hear about your project.
          </p>
        </div>
      </section>

      <CTASection
        eyebrow="Start Today"
        title="Bring Us Your Vision"
        body="Every project begins with a complimentary consultation — at your home or in our Richmond showroom."
      />
    </div>
  );
}
