import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import CTASection from '@/components/CTASection';
import ButtonLink from '@/components/ButtonLink';
import { serviceAreas, getServiceArea } from '@/lib/service-areas';
import { projects } from '@/lib/projects';

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ city: area.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const area = getServiceArea(params.city);
  if (!area) return {};

  return {
    title: `Custom Cabinetry in ${area.city}, BC — Kitchens, Vanities & Built-Ins`,
    description: `${area.intro} Complimentary design consultations for ${area.city} homeowners.`,
    alternates: {
      canonical: `/service-areas/${area.slug}/`,
    },
  };
}

const services = [
  'Custom kitchen cabinetry',
  'Bathroom vanities',
  'Built-in closet systems',
  'Entertainment centers & media walls',
  'Home office built-ins',
  'Mudrooms, bars & specialty millwork',
];

export default function ServiceAreaPage({ params }: { params: { city: string } }) {
  const area = getServiceArea(params.city);
  if (!area) notFound();

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={area.heroImage}
            alt={`Custom kitchen cabinetry by Juniper Cabinetry, serving ${area.city}, BC`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-brown-dark/70"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-cream text-sm tracking-[0.3em] uppercase mb-6">Service Area</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-6">
            Custom Cabinetry in {area.city}
          </h1>
          <p className="text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">
            {area.intro}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none"></div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6 text-brand-brown/80 font-light text-lg leading-relaxed">
            {area.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <div className="pt-4">
              <ButtonLink href="/contact/" variant="brown" showArrow>
                Book a Free Consultation
              </ButtonLink>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-brand-brown mb-6">
              What We Build in {area.city}
            </h2>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mr-4 flex-shrink-0">
                    <Check size={14} aria-hidden="true" />
                  </span>
                  <span className="text-brand-brown font-light">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-brown mb-12">
            Recent Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}/`}
                className="group relative block overflow-hidden hover-lift"
              >
                <div className="relative h-64 image-zoom">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-xl text-white">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow={`${area.city} Homeowners`}
        title={
          <>
            Ready to Start
            <br />
            Your Project?
          </>
        }
        body="Schedule a complimentary design consultation. We'll visit your home, discuss your vision, and provide a detailed written quote."
      />
    </div>
  );
}
