'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Image from 'next/image';
import { Check, Home, Briefcase, Warehouse, Sparkles, MessageCircle, Pencil, Hammer, Package, Star, Bath, ChevronDown } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { faqs } from '@/lib/faqs';

const services = [
  {
    icon: Home,
    title: 'Kitchen Cabinetry',
    description:
      'Transform your kitchen with custom cabinetry designed to maximize functionality and beauty.',
    image: '/kitchen-hero-01.webp',
    alt: 'Custom white oak and stone kitchen cabinetry in a Vancouver home',
    features: [
      'Custom cabinet design and layout',
      'Premium wood selection',
      'Soft-close drawer systems',
      'Integrated appliance panels',
      'Custom storage solutions',
    ],
  },
  {
    icon: Bath,
    title: 'Bathroom Vanities',
    description:
      'Elevate your bathroom with custom vanities designed for everyday use, durability, and clean aesthetics.',
    image: '/portfolio-image-04.webp',
    alt: 'Floating double-sink bathroom vanity with custom storage',
    features: [
      'Custom vanity design and sizing',
      'Moisture-resistant materials',
      'Soft-close drawers and doors',
      'Integrated drawer and storage solutions',
      'Floating or floor-mounted options',
    ],
  },
  {
    icon: Briefcase,
    title: 'Home Living Solutions',
    description:
      'Create a productive workspace with built-in shelving, desks, and storage systems.',
    image: '/portfolio-image-06.webp',
    alt: 'Stone feature wall entertainment center with built-in wood cabinetry',
    features: [
      'Entertainment displays',
      'Built-in desk systems',
      'Standalone custom desks',
      'Grand floating shelves',
      'Custom bookshelves',
      'Hidden storage options',
    ],
  },
  {
    icon: Sparkles,
    title: 'Specialty Projects',
    description:
      'Unique spaces require unique solutions. Bar and beverage spaces, entertainment centers, and more.',
    image: '/portfolio-image-07.webp',
    alt: 'Integrated bar with illuminated open shelving',
    features: [
      'Built-in bar and beverage spaces',
      'Mudroom organization',
      'Custom furniture pieces',
    ],
  },
  {
    icon: Warehouse,
    title: 'Built-in Closet Systems',
    description:
      'Organize your wardrobe with custom closet solutions that maximize space and accessibility.',
    image: '/services-image-03.webp',
    alt: 'White built-in closet system with shelving and drawers',
    features: [
      'Custom shelving and hanging',
      'Drawer and accessory organizers',
      'Luxury goods displays',
      'LED lighting integration',
      'Adjustable configurations',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Discover',
    description: 'We begin with an in-depth discussion of your vision, needs, and space.',
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our designers create detailed 3D renderings and technical drawings.',
    icon: Pencil,
  },
  {
    step: '03',
    title: 'Build',
    description: 'Master craftsmen bring your design to life in our workshop.',
    icon: Hammer,
  },
  {
    step: '04',
    title: 'Install',
    description: 'Our team ensures perfect alignment, fit, and finish in your home.',
    icon: Package,
  },
  {
    step: '05',
    title: 'Walkthrough',
    description: "We review the finished space together to ensure you're happy with the result.",
    icon: Star,
  },
];

export default function Services() {
  const processSection = useScrollAnimation();
  const faqSection = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        lede="Comprehensive cabinetry solutions tailored to your lifestyle and space"
        image="/services-image-header-01.webp"
        imageAlt="Custom cabinetry workshop and finished kitchen by Juniper Cabinetry"
      />

      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <ServiceBlock key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div ref={processSection.ref}>
            <div className="text-center mb-20">
              <p
                className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${processSection.isVisible ? 'visible' : ''}`}
              >
                How We Work
              </p>
              <h2
                className={`font-serif text-5xl md:text-6xl text-brand-brown mb-6 scroll-fade-up delay-100 ${processSection.isVisible ? 'visible' : ''}`}
              >
                Our Process
              </h2>
              <p
                className={`text-lg text-brand-brown/70 font-light max-w-2xl mx-auto scroll-fade-up delay-200 ${processSection.isVisible ? 'visible' : ''}`}
              >
                A seamless journey from concept to completion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              {process.map((step, index) => (
                <ProcessStep
                  key={step.step}
                  step={step}
                  index={index}
                  isVisible={processSection.isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div ref={faqSection.ref}>
            <div className="text-center mb-16">
              <p
                className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${faqSection.isVisible ? 'visible' : ''}`}
              >
                Common Questions
              </p>
              <h2
                className={`font-serif text-5xl md:text-6xl text-brand-brown scroll-fade-up delay-100 ${faqSection.isVisible ? 'visible' : ''}`}
              >
                Frequently Asked
              </h2>
            </div>

            <div
              className={`divide-y divide-brand-brown/10 border-y border-brand-brown/10 scroll-fade-up delay-200 ${faqSection.isVisible ? 'visible' : ''}`}
            >
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex items-center justify-between gap-6 cursor-pointer list-none text-brand-brown font-medium text-lg [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className="flex-shrink-0 text-brand-green transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-4 text-brand-brown/70 font-light leading-relaxed pr-10">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to Begin?"
        title={
          <>
            Let&apos;s Create Something
            <br />
            Extraordinary
          </>
        }
        body="Every project starts with a conversation. Share your vision with us and discover what's possible."
      />
    </div>
  );
}

function ServiceBlock({ service, index }: { service: (typeof services)[0]; index: number }) {
  const block = useScrollAnimation(0.2);
  const isEven = index % 2 === 0;
  const Icon = service.icon;

  return (
    <div ref={block.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div
        className={`${isEven ? 'lg:order-1 scroll-slide-left' : 'lg:order-2 scroll-slide-right'} ${block.isVisible ? 'visible' : ''}`}
      >
        <div className="w-16 h-16 rounded-full border border-brand-green/20 text-brand-green flex items-center justify-center mb-8">
          <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <h2 className="font-serif text-4xl text-brand-brown mb-4">{service.title}</h2>
        <p className="text-brand-brown/70 font-light text-lg leading-relaxed mb-8">
          {service.description}
        </p>
        <ul className="space-y-4">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center">
              <span className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mr-4 flex-shrink-0">
                <Check size={14} aria-hidden="true" />
              </span>
              <span className="text-brand-brown font-light">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${isEven ? 'lg:order-2 scroll-slide-right' : 'lg:order-1 scroll-slide-left'} delay-200 ${block.isVisible ? 'visible' : ''}`}
      >
        <div className="relative h-[400px] md:h-[500px] image-zoom rounded-sm overflow-hidden">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading={index === 0 ? 'eager' : 'lazy'}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function ProcessStep({
  step,
  index,
  isVisible,
}: {
  step: (typeof process)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = step.icon;

  return (
    <div
      className={`group relative text-center scroll-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index + 3) * 100}ms` }}
    >
      <div className="relative mb-8 inline-block">
        <div className="absolute inset-0 rounded-full bg-brand-green/20 blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-125" aria-hidden="true"></div>

        <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full border-2 border-brand-brown/20 bg-cream transition-all duration-500 group-hover:border-brand-green group-hover:bg-brand-green group-hover:shadow-lg group-hover:shadow-brand-green/30">
          <div className="absolute inset-2 rounded-full border border-dashed border-brand-brown/10" aria-hidden="true"></div>

          <div className="relative z-10 flex flex-col items-center">
            <Icon
              size={32}
              aria-hidden="true"
              className="text-brand-green transition-all duration-500 group-hover:text-cream group-hover:scale-110"
            />
            <span className="font-serif text-sm mt-2 text-brand-brown/70 transition-colors duration-500 group-hover:text-cream">
              {step.step}
            </span>
          </div>
        </div>
      </div>

      <h3 className="font-serif text-2xl text-brand-brown mb-3 transition-colors duration-500 group-hover:text-brand-green">
        {step.title}
      </h3>
      <p className="text-brand-brown/70 font-light text-sm leading-relaxed px-4">
        {step.description}
      </p>
    </div>
  );
}
