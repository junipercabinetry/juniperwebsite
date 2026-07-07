import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const variants = {
  cream: 'bg-cream text-brand-brown hover:bg-brand-green hover:text-cream',
  green: 'bg-brand-green text-cream hover:bg-brand-green/90',
  brown: 'bg-brand-brown text-cream hover:bg-brand-green',
  'outline-dark':
    'border border-cream/40 text-cream bg-transparent hover:bg-cream/10 hover:border-cream',
} as const;

interface ButtonLinkProps {
  href: string;
  variant?: keyof typeof variants;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * CTA link styled as a button. Renders a single anchor element (valid HTML,
 * accessible) instead of the previous Link-wrapping-Button pattern.
 */
export default function ButtonLink({
  href,
  variant = 'green',
  showArrow = false,
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center justify-center gap-3 px-10 py-5 text-sm tracking-wide uppercase transition-all duration-500',
        variants[variant],
        className,
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
