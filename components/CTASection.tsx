'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import ButtonLink from '@/components/ButtonLink';

interface CTASectionProps {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

/**
 * Shared dark call-to-action band with the brand's vertical hairline motif.
 */
export default function CTASection({
  eyebrow,
  title,
  body,
  primaryHref = '/contact/',
  primaryLabel = 'Schedule a Consultation',
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  const cta = useScrollAnimation();

  return (
    <section className="py-32 bg-brand-brown-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-px h-full bg-cream"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-cream"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-cream"></div>
      </div>

      <div ref={cta.ref} className="max-w-4xl mx-auto px-6 text-center relative">
        <p
          className={`text-cream text-sm tracking-[0.3em] uppercase mb-6 scroll-fade-up ${cta.isVisible ? 'visible' : ''}`}
        >
          {eyebrow}
        </p>
        <h2
          className={`font-serif text-4xl md:text-6xl text-cream mb-8 leading-tight scroll-fade-up delay-100 ${cta.isVisible ? 'visible' : ''}`}
        >
          {title}
        </h2>
        {body && (
          <p
            className={`text-cream/80 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed scroll-fade-up delay-200 ${cta.isVisible ? 'visible' : ''}`}
          >
            {body}
          </p>
        )}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center scroll-fade-up delay-300 ${cta.isVisible ? 'visible' : ''}`}
        >
          <ButtonLink href={primaryHref} variant="green" showArrow>
            {primaryLabel}
          </ButtonLink>
          {secondaryHref && secondaryLabel && (
            <ButtonLink href={secondaryHref} variant="outline-dark">
              {secondaryLabel}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
