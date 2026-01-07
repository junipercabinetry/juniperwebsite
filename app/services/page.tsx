'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Link from 'next/link';
import { ArrowRight, Check, Home, Briefcase, Warehouse, Sparkles, MessageCircle, Pencil, Hammer, Package, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const services = [
  {
    icon: Home,
    title: 'Kitchen Cabinetry',
    description: 'Transform your kitchen with custom cabinetry designed to maximize functionality and beauty.',
    image: '/kitchen-hero-01.png',
    features: [
      'Custom cabinet design and layout',
      'Premium wood selection',
      'Soft-close drawer systems',
      'Integrated appliance panels',
      'Custom storage solutions',
    ],
  },
  {
    icon: Briefcase,
    title: 'Bathroom Vanities',
    description: 'Elevate your bathroom with custom vanities designed for everyday use, durability, and clean aesthetics.',
    image: '/portfolio-image-04.jpg',
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
    description: 'Create a productive workspace with built-in shelving, desks, and storage systems.',
    image: '/portfolio-image-06.jpg',
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
    description: 'Unique spaces require unique solutions. Bar and beverage spaces, entertainment centers, and more.',
    image: '/portfolio-image-07.png',
    features: [
      'Built-in bar and beverage spaces',
      'Mudroom organization',
      'Custom furniture pieces',
    ],
  },
  {
    icon: Warehouse,
    title: 'Built-in Closet Systems',
    description: 'Organize your wardrobe with custom closet solutions that maximize space and accessibility.',
    image: '/services-image-03.png',
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
    description: 'We review the finished space together to ensure you\'re happy with the result.',
    icon: Star,
  },
];

export default function Services() {
  const header = useScrollAnimation();
  const processSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/services-image-header-01.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-brand-brown-dark/70"></div>
        </div>
        <div className="absolute inset-0 z-0 grain"></div>

        <div
          ref={header.ref}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <p className={`text-white text-sm tracking-[0.3em] uppercase mb-6 scroll-fade-up ${header.isVisible ? 'visible' : ''}`}>
            What We Offer
          </p>
          <h1 className={`font-serif text-5xl md:text-7xl text-cream mb-6 scroll-fade-up delay-100 ${header.isVisible ? 'visible' : ''}`}>
            Our Services
          </h1>
          <p className={`text-xl text-cream/80 font-light max-w-2xl mx-auto leading-relaxed scroll-fade-up delay-200 ${header.isVisible ? 'visible' : ''}`}>
            Comprehensive cabinetry solutions tailored to your lifestyle and space
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10"></div>
      </section>

      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <ServiceBlock key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-cream-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div
            ref={processSection.ref}
          >
            <div className="text-center mb-20">
              <p className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${processSection.isVisible ? 'visible' : ''}`}>
                How We Work
              </p>
              <h2 className={`font-serif text-5xl md:text-6xl text-brand-brown mb-6 scroll-fade-up delay-100 ${processSection.isVisible ? 'visible' : ''}`}>
                Our Process
              </h2>
              <p className={`text-lg text-brand-brown/70 font-light max-w-2xl mx-auto scroll-fade-up delay-200 ${processSection.isVisible ? 'visible' : ''}`}>
                A seamless journey from concept to completion
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 2">
                  <path
                    d="M 0 1 Q 250 1 250 1 T 500 1 T 750 1 T 1000 1"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    className={`transition-all duration-[2000ms] ease-out ${processSection.isVisible ? 'stroke-dashoffset-0' : 'stroke-dashoffset-1000'}`}
                    style={{
                      strokeDasharray: '1000',
                      strokeDashoffset: processSection.isVisible ? '0' : '1000',
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4A7C59" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#4A7C59" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#4A7C59" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                {process.map((step, index) => (
                  <ProcessStep key={index} step={step} index={index} isVisible={processSection.isVisible} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-brown-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-cream"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-cream"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-cream"></div>
        </div>

        <div
          ref={ctaSection.ref}
          className="max-w-4xl mx-auto px-6 text-center relative"
        >
          <p className={`text-cream text-sm tracking-[0.3em] uppercase mb-6 scroll-fade-up ${ctaSection.isVisible ? 'visible' : ''}`}>
            Ready to Begin?
          </p>
          <h2 className={`font-serif text-4xl md:text-6xl text-cream mb-8 scroll-fade-up delay-100 ${ctaSection.isVisible ? 'visible' : ''}`}>
            Let&apos;s Create Something
            <br />
            Extraordinary
          </h2>
          <p className={`text-cream/70 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed scroll-fade-up delay-200 ${ctaSection.isVisible ? 'visible' : ''}`}>
            Every project starts with a conversation. Share your vision with us and discover what&apos;s possible.
          </p>
          <div className={`scroll-fade-up delay-300 ${ctaSection.isVisible ? 'visible' : ''}`}>
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-cream text-brand-brown hover:bg-brand-green hover:text-cream px-10 py-7 text-sm tracking-wide transition-all duration-500 rounded-none"
              >
                Schedule a Consultation
                <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceBlock({ service, index }: { service: typeof services[0]; index: number }) {
  const block = useScrollAnimation(0.2);
  const isEven = index % 2 === 0;
  const Icon = service.icon;

  return (
    <div
      ref={block.ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
    >
      <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} ${isEven ? 'scroll-slide-left' : 'scroll-slide-right'} ${block.isVisible ? 'visible' : ''}`}>
        <div className="w-16 h-16 rounded-full border border-brand-green/20 text-brand-green flex items-center justify-center mb-8">
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-4xl text-brand-brown mb-4">{service.title}</h3>
        <p className="text-brand-brown/70 font-light text-lg leading-relaxed mb-8">{service.description}</p>
        <ul className="space-y-4">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mr-4 flex-shrink-0">
                <Check size={14} />
              </div>
              <span className="text-brand-brown font-light">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} ${isEven ? 'scroll-slide-right' : 'scroll-slide-left'} delay-200 ${block.isVisible ? 'visible' : ''}`}>
        <div className="relative h-[500px] image-zoom rounded-sm overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({ step, index, isVisible }: { step: typeof process[0]; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = step.icon;

  return (
    <div
      className={`relative text-center scroll-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index + 3) * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-8 inline-block">
        <div
          className={`absolute inset-0 rounded-full bg-brand-green/20 blur-xl transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-100'
          }`}
        ></div>

        <div
          className={`relative inline-flex items-center justify-center w-32 h-32 rounded-full border-2 transition-all duration-500 ${
            isHovered
              ? 'border-brand-green bg-brand-green shadow-lg shadow-brand-green/30'
              : 'border-brand-brown/20 bg-cream'
          }`}
        >
          <div className="absolute inset-2 rounded-full border border-dashed border-brand-brown/10"></div>

          <div
            className={`absolute inset-0 rounded-full transition-transform duration-700 ${
              isHovered ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-brand-green/40 -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-brand-green/40 -translate-x-1/2"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <Icon
              size={32}
              className={`transition-all duration-500 ${
                isHovered ? 'text-cream scale-110' : 'text-brand-green'
              }`}
            />
            <span
              className={`font-serif text-sm mt-2 transition-colors duration-500 ${
                isHovered ? 'text-cream' : 'text-brand-brown/60'
              }`}
            >
              {step.step}
            </span>
          </div>
        </div>

        <div
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        ></div>
      </div>

      <h3
        className={`font-serif text-2xl text-brand-brown mb-3 transition-all duration-500 ${
          isHovered ? 'text-brand-green scale-105' : ''
        }`}
      >
        {step.title}
      </h3>
      <p
        className={`text-brand-brown/70 font-light text-sm leading-relaxed px-4 transition-all duration-500 ${
          isHovered ? 'text-brand-brown' : ''
        }`}
      >
        {step.description}
      </p>

      <div
        className={`mt-6 w-12 h-0.5 bg-gradient-to-r from-brand-green/0 via-brand-green to-brand-green/0 mx-auto transition-all duration-700 ${
          isHovered ? 'opacity-100 w-20' : 'opacity-0 w-12'
        }`}
      ></div>
    </div>
  );
}
