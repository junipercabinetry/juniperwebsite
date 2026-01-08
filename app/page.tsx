'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Link from 'next/link';
import { ArrowRight, Award, Users, Hammer, Quote, Star, ChevronDown, MessageCircle, PenTool, Wrench, Home as HomeIcon, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Hana Hoang & TJ Le',
    location: 'Vancouver, BC',
    quote: 'Juniper transformed our kitchen beyond anything we imagined. The attention to detail and craftsmanship is extraordinary.',
    image: '/tj-profile.jpg',
  },
  {
    name: 'Lillian Chen',
    location: 'Richmond, BC',
    quote: 'Working with Juniper Cabinetry was a seamless experience from design to installation. The team was professional, thoughtful, and genuinely cared about every detail.',
    image: '/lillian-profile.png',
  },
  {
    name: 'Jenny & Raymond Lin',
    location: 'Burnaby, BC',
    quote: 'Communication was clear from the start, timelines were realistic, and everything was delivered exactly as promised. The quality is excellent, and we\'d absolutely hire Juniper again.',
    image: '/snow-mountain-profile.jpg',
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
    description: 'A precise, clean, and seamless installation—handled as if it were our own home.',
    icon: HomeIcon,
  },
  {
    number: '05',
    title: 'Walkthrough',
    description: 'Go over the finished space with you and make sure you\'re 100% satisfied.',
    icon: CheckCircle,
  },
];

export default function Home() {
  const hero = useScrollAnimation();
  const features = useScrollAnimation();
  const cta = useScrollAnimation();
  const stats = useScrollAnimation();
  const testimonialSection = useScrollAnimation();
  const showcase = useScrollAnimation();
  const processSection = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setHeroLoaded(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/kitchen-hero-01.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        <div className="absolute inset-0 z-0 grain"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className={`text-cream text-sm tracking-[0.3em] uppercase mb-6 scroll-fade-up ${heroLoaded ? 'visible' : ''}`}>
            Handcrafted Excellence Since 2012
          </p>
          <h1 className={`font-serif text-6xl md:text-8xl text-cream mb-8 tracking-tight leading-[0.9] scroll-fade-up delay-100 ${heroLoaded ? 'visible' : ''}`}>
            Designed for
            <br />
            <span className="italic font-normal">How You Live</span>
          </h1>
          <p className={`text-xl md:text-2xl text-cream/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed scroll-fade-up delay-200 ${heroLoaded ? 'visible' : ''}`}>
            An elevated living experience for the heart of your home
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center scroll-fade-up delay-300 ${heroLoaded ? 'visible' : ''}`}>
            <Link href="/portfolio">
              <Button
                size="lg"
                className="group bg-cream text-brand-brown hover:bg-brand-green hover:text-cream px-10 py-7 text-sm tracking-wide transition-all duration-500 rounded-none"
              >
                Explore Our Work
                <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Button>
            </Link>
            <Link href="/contact">
              <button className="px-10 py-4 border border-cream/40 text-cream bg-transparent hover:bg-cream/10 hover:border-cream text-sm tracking-wide transition-all duration-500">
                Begin Your Project
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-cream/50 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="text-cream/50 animate-bounce" size={20} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10"></div>
      </section>

      <section className="py-32 bg-cream relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={stats.ref} className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { icon: Award, number: '10+', label: 'Years of Excellence' },
              { icon: Users, number: '4000+', label: 'Satisfied Clients' },
              { icon: Hammer, number: '1000+', label: 'Projects Completed' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`group scroll-fade-up ${stats.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-brand-brown/20 text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-cream group-hover:border-brand-green transition-all duration-500">
                  <stat.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-5xl text-brand-brown mb-2">{stat.number}</h3>
                <p className="text-brand-brown/60 tracking-wide text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-cream-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div ref={features.ref}>
            <div className="text-center mb-20">
              <p className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${features.isVisible ? 'visible' : ''}`}>
                Why Choose Us
              </p>
              <h2 className={`font-serif text-5xl md:text-6xl text-brand-brown mb-6 scroll-fade-up delay-100 ${features.isVisible ? 'visible' : ''}`}>
                Uncompromising Quality
              </h2>
              <p className={`text-lg text-brand-brown/70 font-light max-w-2xl mx-auto scroll-fade-up delay-200 ${features.isVisible ? 'visible' : ''}`}>
                We blend time-honored craftsmanship with contemporary design to create pieces that stand the test of time
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Tailored Design',
                  description: 'Every piece is custom-made specifically for your space, ensuring perfect harmony with your home aesthetic.',
                  image: '/portfolio-image-10.jpg',
                },
                {
                  title: 'Premium Materials',
                  description: 'We source the finest woods and cabinet-grade materials from responsibly selected suppliers worldwide.',
                  image: '/premium-materials.jpg',
                },
                {
                  title: 'Master Craftsmen',
                  description: 'Our artisans bring decades of experience and passion to every joint, finish, and detail.',
                  image: 'https://images.pexels.com/photos/5974396/pexels-photo-5974396.jpeg?auto=compress&cs=tinysrgb&w=800',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`group relative bg-cream hover-lift rounded-sm overflow-hidden scroll-fade-up ${features.isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="relative h-72 image-zoom">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/90 via-brand-brown-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl text-brand-brown mb-3">{feature.title}</h3>
                    <p className="text-brand-brown/70 font-light leading-relaxed text-sm">{feature.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={processSection.ref}>
            <div className="text-center mb-20">
              <p className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${processSection.isVisible ? 'visible' : ''}`}>
                How We Work
              </p>
              <h2 className={`font-serif text-5xl md:text-6xl text-brand-brown mb-6 scroll-fade-up delay-100 ${processSection.isVisible ? 'visible' : ''}`}>
                Your Journey to Excellence
              </h2>
              <p className={`text-lg text-brand-brown/70 font-light max-w-2xl mx-auto scroll-fade-up delay-200 ${processSection.isVisible ? 'visible' : ''}`}>
                We are committed to bringing your dream space to life in 5 easy steps
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent transform -translate-y-1/2"></div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
                {processSteps.map((step, index) => (
                  <ProcessStep
                    key={index}
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

      <section className="relative py-40 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div ref={showcase.ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className={`text-cream text-sm tracking-[0.3em] uppercase mb-6 scroll-fade-up ${showcase.isVisible ? 'visible' : ''}`}>
            Our Philosophy
          </p>
          <h2 className={`font-serif text-4xl md:text-6xl text-cream mb-8 leading-tight scroll-fade-up delay-100 ${showcase.isVisible ? 'visible' : ''}`}>
            &ldquo;The Heart of Your Home Requires a Human-Centric Approach.&rdquo;
            <br />
    
          </h2>
          <p className={`text-cream/80 font-light text-lg max-w-2xl mx-auto leading-relaxed scroll-fade-up delay-200 ${showcase.isVisible ? 'visible' : ''}`}>
            We believe an exceptional design experience is essential to shaping spaces around your lifestyle. Our work enhances your daily routines, supports how your time is shared, and becomes an integral part of how your home is experienced.
          </p>
        </div>
      </section>

      <section className="py-32 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={testimonialSection.ref}>
            <div className="text-center mb-20">
              <p className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${testimonialSection.isVisible ? 'visible' : ''}`}>
                Client Stories
              </p>
              <h2 className={`font-serif text-5xl md:text-6xl text-brand-brown scroll-fade-up delay-100 ${testimonialSection.isVisible ? 'visible' : ''}`}>
                Words That Matter
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`group relative bg-cream p-8 hover-lift scroll-fade-up ${testimonialSection.isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <Quote className="text-brand-green/20 mb-6" size={40} />
                  <p className="text-brand-brown font-light leading-relaxed mb-8 text-lg italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    ></div>
                    <div>
                      <p className="font-medium text-brand-brown">{testimonial.name}</p>
                      <p className="text-brand-brown/60 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-brand-green fill-brand-green" />
                    ))}
                  </div>
                </div>
              ))}
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div ref={cta.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className={`text-cream text-sm tracking-[0.3em] uppercase mb-6 scroll-slide-left ${cta.isVisible ? 'visible' : ''}`}>
                Start Today
              </p>
              <h2 className={`font-serif text-5xl md:text-6xl text-cream mb-8 leading-tight scroll-slide-left delay-100 ${cta.isVisible ? 'visible' : ''}`}>
                Ready to Transform
                <br />
                Your Space?
              </h2>
              <p className={`text-cream/80 font-light text-lg mb-10 leading-relaxed scroll-slide-left delay-200 ${cta.isVisible ? 'visible' : ''}`}>
                From initial consultation to final installation, we guide you through every step
                of bringing your vision to life. Schedule a complimentary design consultation today.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 scroll-slide-left delay-300 ${cta.isVisible ? 'visible' : ''}`}>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group bg-brand-green hover:bg-brand-green/90 text-cream px-10 py-7 text-sm tracking-wide transition-all duration-500 rounded-none"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <button className="px-10 py-4 border border-cream/40 text-cream bg-transparent hover:bg-cream/10 hover:border-cream text-sm tracking-wide transition-all duration-500">
                    View Portfolio
                  </button>
                </Link>
              </div>
            </div>
            <div className={`relative scroll-slide-right delay-200 ${cta.isVisible ? 'visible' : ''}`}>
              <div className="relative h-[500px] image-zoom rounded-sm overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/transform-space-hero.png)',
                  }}
                ></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-brand-green/30"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 border border-brand-green/30"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessStep({ step, index, isVisible }: { step: typeof processSteps[0]; index: number; isVisible: boolean }) {
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
              <Icon size={28} strokeWidth={1.5} />
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

        {index < processSteps.length - 1 && (
          <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-brand-green rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="w-4 h-4 border-2 border-brand-green/50 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
          </div>
        )}
      </div>
    </div>
  );
}
