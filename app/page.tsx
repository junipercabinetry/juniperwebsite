'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Image from 'next/image';
import { Award, Hammer, Quote, Star, ChevronDown, MessageCircle, PenTool, Wrench, Home as HomeIcon, CheckCircle } from 'lucide-react';
import ButtonLink from '@/components/ButtonLink';
import CTASection from '@/components/CTASection';
import { useEffect, useState } from 'react';

const FOUNDING_YEAR = 2012;

const testimonials = [
  {
    name: 'Hana Hoang & TJ Le',
    location: 'Vancouver, BC',
    quote:
      'Juniper transformed our kitchen beyond anything we imagined. The attention to detail and craftsmanship is extraordinary.',
    image: '/tj-profile.webp',
    initials: 'HT',
  },
  {
    name: 'Lillian Chen',
    location: 'Richmond, BC',
    quote:
      'Working with Juniper Cabinetry was a seamless experience from design to installation. The team was professional, thoughtful, and genuinely cared about every detail.',
    image: '/lillian-profile.webp',
    initials: 'LC',
  },
  {
    name: 'Jenny & Raymond Lin',
    location: 'Burnaby, BC',
    quote:
      "Communication was clear from the start, timelines were realistic, and everything was delivered exactly as promised. The quality is excellent, and we'd absolutely hire Juniper again.",
    image: null,
    initials: 'JR',
  },
];

const features = [
  {
    title: 'Tailored Design',
    description:
      'Every piece is custom-made specifically for your space, ensuring perfect harmony with your home aesthetic.',
    image: '/portfolio-image-10.webp',
    alt: 'Custom-designed cabinetry tailored to a Vancouver home',
  },
  {
    title: 'Premium Materials',
    description:
      'We source the finest woods and cabinet-grade materials from responsibly selected suppliers worldwide.',
    image: '/premium-materials.webp',
    alt: 'Premium wood materials used in Juniper Cabinetry workshops',
  },
  {
    title: 'Master Craftsmen',
    description:
      'Our artisans bring decades of experience and passion to every joint, finish, and detail.',
    image: '/about-dad-01.webp',
    alt: 'Juniper Cabinetry master craftsman at work in the workshop',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'A clear conversation about your vision, space, and goals.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Thoughtful planning, detailed drawings, and curated materials.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Build',
    description: 'Premium craftsmanship backed by years of experience.',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'Install',
    description:
      'A precise, clean, and seamless installation—handled as if it were our own home.',
    icon: HomeIcon,
  },
  {
    number: '05',
    title: 'Walkthrough',
    description:
      "Go over the finished space with you and make sure you're 100% satisfied.",
    icon: CheckCircle,
  },
];

export default function Home() {
  const featuresSection = useScrollAnimation();
  const stats = useScrollAnimation();
  const testimonialSection = useScrollAnimation();
  const showcase = useScrollAnimation();
  const processSection = useScrollAnimation();
  const ctaImage = useScrollAnimation();
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const yearsOfExcellence = new Date().getFullYear() - FOUNDING_YEAR;

  const statItems = [
    { icon: Award, number: `${yearsOfExcellence}+`, label: 'Years of Excellence' },
    { icon: Hammer, number: '1000+', label: 'Projects Completed' },
    { icon: Star, number: '5-Star', label: 'Client Reviews' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/juniper-hero-page-video.mp4"
            poster="/juniper-hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Video tour of a custom kitchen by Juniper Cabinetry"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-black/15 to-black/25 pointer-events-none"></div>

        <div className="absolute inset-0 z-0 grain"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p
            className={`text-cream text-sm tracking-[0.3em] uppercase mb-6 text-shadow-readable scroll-fade-up ${heroLoaded ? 'visible' : ''}`}
          >
            Handcrafted Excellence Since {FOUNDING_YEAR}
          </p>
          <h1
            className={`font-serif text-6xl md:text-8xl text-cream mb-8 tracking-tight leading-[0.9] text-shadow-readable scroll-fade-up delay-100 ${heroLoaded ? 'visible' : ''}`}
          >
            Designed for
            <br />
            <span className="italic font-normal">How You Live</span>
          </h1>
          <p
            className={`text-xl md:text-2xl text-cream/95 mb-12 font-light max-w-2xl mx-auto leading-relaxed text-shadow-readable scroll-fade-up delay-200 ${heroLoaded ? 'visible' : ''}`}
          >
            An elevated living experience for the heart of your home
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center scroll-fade-up delay-300 ${heroLoaded ? 'visible' : ''}`}
          >
            <ButtonLink href="/portfolio/" variant="cream" showArrow>
              Explore Our Work
            </ButtonLink>
            <ButtonLink href="/contact/" variant="outline-dark">
              Begin Your Project
            </ButtonLink>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 hidden md:flex" aria-hidden="true">
          <span className="text-cream/70 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="text-cream/70 animate-bounce" size={20} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10"></div>
      </section>

      <section className="py-24 md:py-32 bg-cream relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={stats.ref} className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {statItems.map((stat, index) => (
              <div
                key={stat.label}
                className={`group scroll-fade-up ${stats.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-brand-brown/20 text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-cream group-hover:border-brand-green transition-all duration-500">
                  <stat.icon size={32} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-5xl text-brand-brown mb-2">{stat.number}</h3>
                <p className="text-brand-brown/70 tracking-wide text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div ref={featuresSection.ref}>
            <div className="text-center mb-20">
              <p
                className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${featuresSection.isVisible ? 'visible' : ''}`}
              >
                Why Choose Us
              </p>
              <h2
                className={`font-serif text-5xl md:text-6xl text-brand-brown mb-6 scroll-fade-up delay-100 ${featuresSection.isVisible ? 'visible' : ''}`}
              >
                Uncompromising Quality
              </h2>
              <p
                className={`text-lg text-brand-brown/70 font-light max-w-2xl mx-auto scroll-fade-up delay-200 ${featuresSection.isVisible ? 'visible' : ''}`}
              >
                We blend time-honored craftsmanship with contemporary design to create pieces
                that stand the test of time
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group relative bg-cream hover-lift rounded-sm overflow-hidden scroll-fade-up ${featuresSection.isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="relative h-72 image-zoom">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/90 via-brand-brown-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl text-brand-brown mb-3">{feature.title}</h3>
                    <p className="text-brand-brown/70 font-light leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                Your Journey to Excellence
              </h2>
              <p
                className={`text-lg text-brand-brown/70 font-light max-w-2xl mx-auto scroll-fade-up delay-200 ${processSection.isVisible ? 'visible' : ''}`}
              >
                We are committed to bringing your dream space to life in 5 easy steps
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent transform -translate-y-1/2" aria-hidden="true"></div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
                {processSteps.map((step, index) => (
                  <ProcessStep
                    key={step.number}
                    step={step}
                    index={index}
                    isVisible={processSection.isVisible}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/portfolio-image-06.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div ref={showcase.ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p
            className={`text-cream text-sm tracking-[0.3em] uppercase mb-6 scroll-fade-up ${showcase.isVisible ? 'visible' : ''}`}
          >
            Our Philosophy
          </p>
          <h2
            className={`font-serif text-4xl md:text-6xl text-cream mb-8 leading-tight scroll-fade-up delay-100 ${showcase.isVisible ? 'visible' : ''}`}
          >
            &ldquo;The Heart of Your Home Requires a Human-Centric Approach.&rdquo;
          </h2>
          <p
            className={`text-cream/80 font-light text-lg max-w-2xl mx-auto leading-relaxed scroll-fade-up delay-200 ${showcase.isVisible ? 'visible' : ''}`}
          >
            We believe an exceptional design experience is essential to shaping spaces around
            your lifestyle. Our work enhances your daily routines, supports how your time is
            shared, and becomes an integral part of how your home is experienced.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={testimonialSection.ref}>
            <div className="text-center mb-20">
              <p
                className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${testimonialSection.isVisible ? 'visible' : ''}`}
              >
                Client Stories
              </p>
              <h2
                className={`font-serif text-5xl md:text-6xl text-brand-brown scroll-fade-up delay-100 ${testimonialSection.isVisible ? 'visible' : ''}`}
              >
                Words That Matter
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <figure
                  key={testimonial.name}
                  className={`group relative bg-cream p-8 hover-lift scroll-fade-up ${testimonialSection.isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <Quote className="text-brand-green/20 mb-6" size={40} aria-hidden="true" />
                  <blockquote className="text-brand-brown font-light leading-relaxed mb-8 text-lg italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-4">
                    {testimonial.image ? (
                      <span className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt=""
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </span>
                    ) : (
                      <span
                        className="w-14 h-14 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-serif text-lg flex-shrink-0"
                        aria-hidden="true"
                      >
                        {testimonial.initials}
                      </span>
                    )}
                    <span>
                      <span className="block font-medium text-brand-brown">{testimonial.name}</span>
                      <span className="block text-brand-brown/70 text-sm">{testimonial.location}</span>
                    </span>
                  </figcaption>
                  <div
                    className="flex gap-1 mt-4"
                    role="img"
                    aria-label="Rated 5 out of 5 stars"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-brand-green fill-brand-green" aria-hidden="true" />
                    ))}
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-brand-brown-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-px h-full bg-cream"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-cream"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-cream"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div ref={ctaImage.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p
                className={`text-cream text-sm tracking-[0.3em] uppercase mb-6 scroll-slide-left ${ctaImage.isVisible ? 'visible' : ''}`}
              >
                Start Today
              </p>
              <h2
                className={`font-serif text-5xl md:text-6xl text-cream mb-8 leading-tight scroll-slide-left delay-100 ${ctaImage.isVisible ? 'visible' : ''}`}
              >
                Ready to Transform
                <br />
                Your Space?
              </h2>
              <p
                className={`text-cream/80 font-light text-lg mb-10 leading-relaxed scroll-slide-left delay-200 ${ctaImage.isVisible ? 'visible' : ''}`}
              >
                From initial consultation to final installation, we guide you through every step
                of bringing your vision to life. Schedule a complimentary design consultation today.
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 scroll-slide-left delay-300 ${ctaImage.isVisible ? 'visible' : ''}`}
              >
                <ButtonLink href="/contact/" variant="green" showArrow>
                  Schedule Consultation
                </ButtonLink>
                <ButtonLink href="/portfolio/" variant="outline-dark">
                  View Portfolio
                </ButtonLink>
              </div>
            </div>
            <div
              className={`relative scroll-slide-right delay-200 ${ctaImage.isVisible ? 'visible' : ''}`}
            >
              <div className="relative h-[500px] image-zoom rounded-sm overflow-hidden">
                <Image
                  src="/transform-space-hero.webp"
                  alt="Bright custom kitchen with island by Juniper Cabinetry"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-brand-green/30" aria-hidden="true"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 border border-brand-green/30" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessStep({
  step,
  index,
  isVisible,
}: {
  step: (typeof processSteps)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = step.icon;
  const isOddRow = index % 2 === 0;

  return (
    <div
      className={`relative scroll-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index + 3) * 100}ms` }}
    >
      <div className={`relative group ${isOddRow ? 'lg:mt-0' : 'lg:mt-32'}`}>
        <div className="relative bg-cream-light border border-brand-brown/10 p-8 hover:shadow-2xl hover:border-brand-green/50 transition-all duration-500 hover:-translate-y-2">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-brand-green to-brand-green/90 rounded-full flex items-center justify-center text-cream font-serif text-lg shadow-lg group-hover:scale-110 transition-transform duration-500">
            {step.number}
          </div>

          <div className="mt-6 mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-brand-green/20 bg-cream flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-cream group-hover:border-brand-green transition-all duration-500">
              <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
            </div>
          </div>

          <h3 className="font-serif text-2xl text-brand-brown mb-3 text-center uppercase tracking-wide">
            {step.title}
          </h3>
          <p className="text-brand-brown/70 font-light text-sm leading-relaxed text-center">
            {step.description}
          </p>

          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-green to-brand-green/80 group-hover:w-full transition-all duration-700"></div>
        </div>
      </div>
    </div>
  );
}
