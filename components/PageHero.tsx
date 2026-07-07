'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  imageAlt: string;
  /** Tailwind class for the fade-to gradient at the bottom edge. */
  fadeTo?: 'cream' | 'cream-light';
}

/**
 * Shared full-width page header: dark scrim over a real project photo,
 * eyebrow + serif headline + lede. Image is the LCP element, so it loads
 * with priority.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  fadeTo = 'cream',
}: PageHeroProps) {
  const header = useScrollAnimation();

  return (
    <section className="relative h-[70vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-brown-dark/70 pointer-events-none"></div>
      </div>
      <div className="absolute inset-0 z-0 grain"></div>

      <div
        ref={header.ref}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <p
          className={`text-cream text-sm tracking-[0.3em] uppercase mb-6 scroll-fade-up ${header.isVisible ? 'visible' : ''}`}
        >
          {eyebrow}
        </p>
        <h1
          className={`font-serif text-5xl md:text-7xl text-cream mb-6 scroll-fade-up delay-100 ${header.isVisible ? 'visible' : ''}`}
        >
          {title}
        </h1>
        {lede && (
          <p
            className={`text-xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed scroll-fade-up delay-200 ${header.isVisible ? 'visible' : ''}`}
          >
            {lede}
          </p>
        )}
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${
          fadeTo === 'cream' ? 'from-cream' : 'from-cream-light'
        } to-transparent z-10 pointer-events-none`}
      ></div>
    </section>
  );
}
