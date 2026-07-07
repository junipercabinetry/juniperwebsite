import Link from 'next/link';
import ButtonLink from '@/components/ButtonLink';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-xl pt-32 pb-20">
        <p className="text-brand-green text-sm tracking-[0.3em] uppercase mb-6">
          Page Not Found
        </p>
        <h1 className="font-serif text-6xl md:text-8xl text-brand-brown mb-8">404</h1>
        <p className="text-brand-brown/70 font-light text-lg leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Perhaps our
          portfolio can inspire your next project instead.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink href="/portfolio/" variant="brown" showArrow>
            View Our Work
          </ButtonLink>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-10 py-5 border border-brand-brown/30 text-brand-brown text-sm tracking-wide uppercase hover:border-brand-brown transition-all duration-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
