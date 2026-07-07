'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { trackEvent } from '@/lib/analytics';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href.replace(/\/$/, ''));
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the menu on Escape and lock body scroll while it is open.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close the menu when the route changes.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const solid = isScrolled || isMobileMenuOpen;

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled && !isMobileMenuOpen
            ? 'bg-cream/95 backdrop-blur-xl shadow-[0_1px_0_rgba(47,37,27,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-20 md:h-24' : 'h-24 md:h-32'}`}
          >
            <Link href="/" className="relative h-20 w-44 flex items-center">
              <span className="relative w-full h-full block">
                <Image
                  src="/white-logo-header-01.png"
                  alt="Juniper Cabinetry — home"
                  fill
                  sizes="176px"
                  className={`object-contain transition-opacity duration-700 ${
                    isScrolled && !isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                  priority
                />
                <Image
                  src="/green-logo-scroll.png"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="176px"
                  className={`object-contain transition-opacity duration-700 ${
                    isScrolled && !isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority
                />
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="group relative">
                  <span
                    className={`text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 ${
                      isActive(pathname, link.href)
                        ? isScrolled
                          ? 'text-brand-green'
                          : 'text-cream'
                        : isScrolled
                          ? 'text-brand-brown/70 group-hover:text-brand-brown'
                          : 'text-cream/90 group-hover:text-cream'
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      isActive(pathname, link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    } ${isScrolled ? 'bg-brand-green' : 'bg-cream'}`}
                  ></span>
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                href="/contact/"
                className={`group inline-flex items-center gap-2 px-6 py-3 text-[13px] tracking-[0.1em] uppercase transition-all duration-500 ${
                  isScrolled
                    ? 'bg-brand-brown text-cream hover:bg-brand-green'
                    : 'bg-cream/10 text-cream border border-cream/30 hover:bg-cream hover:text-brand-brown'
                }`}
              >
                Contact
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <button
              type="button"
              className={`md:hidden relative w-11 h-11 flex items-center justify-center transition-colors duration-300 ${
                solid && !isMobileMenuOpen ? 'text-brand-brown' : 'text-cream'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="relative w-6 h-4 block" aria-hidden="true">
                <span
                  className={`absolute left-0 w-full h-px bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-1/2 rotate-45' : 'top-0'
                  }`}
                ></span>
                <span
                  className={`absolute top-1/2 left-0 w-full h-px bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 w-full h-px bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
                  }`}
                ></span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-brand-brown-dark/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute inset-x-0 top-28 bottom-0 overflow-y-auto p-8 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <div className="space-y-6">
            {[...navLinks, { href: '/contact/', label: 'Contact' }].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block transition-all duration-500"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                <span
                  className={`font-serif text-4xl transition-colors duration-300 ${
                    isActive(pathname, link.href) ? 'text-cream' : 'text-cream/80 hover:text-cream'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-cream/10">
            <p className="text-cream/70 text-sm tracking-wide mb-4">Get in Touch</p>
            <a
              href="mailto:junipercabinetry@gmail.com"
              className="block text-cream/90 text-lg hover:text-cream transition-colors"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={() => trackEvent('email_click', { location: 'mobile_menu' })}
            >
              junipercabinetry@gmail.com
            </a>
            <a
              href="tel:+16043630238"
              className="block text-cream/90 text-lg hover:text-cream transition-colors"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={() => trackEvent('phone_click', { location: 'mobile_menu' })}
            >
              (604) 363-0238
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
