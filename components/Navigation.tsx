'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useModal } from '@/contexts/ModalContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isModalOpen } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-cream/98 backdrop-blur-xl shadow-[0_1px_0_rgba(47,37,27,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-24' : 'h-32'}`}>
            <Link href="/" className="group relative h-20 w-44 flex items-center">
              <div className="relative w-full h-full">
                <Image
                  src="/white-logo-header-01.png"
                  alt="Juniper Cabinetry"
                  fill
                  className={`object-contain transition-opacity duration-700 ${
                    isModalOpen || isScrolled ? 'opacity-0' : 'opacity-100'
                  }`}
                  priority
                />
                <Image
                  src="/green-logo-scroll.png"
                  alt="Juniper Cabinetry"
                  fill
                  className={`object-contain transition-opacity duration-700 ${
                    !isModalOpen && isScrolled ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority
                />
                <Image
                  src="/white-logo-footer.png"
                  alt="Juniper Cabinetry"
                  fill
                  className={`object-contain transition-opacity duration-700 ${
                    isModalOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative"
                >
                  <span className={`text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 ${
                    pathname === link.href
                      ? isScrolled ? 'text-brand-green' : 'text-cream'
                      : isScrolled ? 'text-brand-brown/60 group-hover:text-brand-brown' : 'text-cream/80 group-hover:text-cream'
                  }`}>
                    {link.label}
                  </span>
                  <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  } ${isScrolled ? 'bg-brand-green' : 'bg-cream'}`}></span>
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                href="/contact"
                className={`group inline-flex items-center gap-2 px-6 py-3 text-[13px] tracking-[0.1em] uppercase transition-all duration-500 ${
                  isScrolled
                    ? 'bg-brand-brown text-cream hover:bg-brand-green'
                    : 'bg-cream/10 text-cream border border-cream/30 hover:bg-cream hover:text-brand-brown'
                }`}
              >
                Contact
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <button
              className={`md:hidden relative w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? 'text-brand-brown' : 'text-cream'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-4">
                <span className={`absolute left-0 w-full h-px bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-1/2 rotate-45' : 'top-0'
                }`}></span>
                <span className={`absolute top-1/2 left-0 w-full h-px bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute left-0 w-full h-px bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-brand-brown-dark/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)}></div>

        <div className={`absolute inset-x-0 top-32 p-8 transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <div className="space-y-6">
            {[...navLinks, { href: '/contact', label: 'Contact' }].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block transition-all duration-500`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={`font-serif text-4xl transition-colors duration-300 ${
                  pathname === link.href ? 'text-cream' : 'text-cream/80 hover:text-cream'
                }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-cream/10">
            <p className="text-cream/50 text-sm tracking-wide mb-4">Get in Touch</p>
            <p className="text-cream/80 text-lg">junipercabinetry@gmail.com</p>
            <p className="text-cream/80 text-lg">(604) 363-0238</p>
          </div>
        </div>
      </div>
    </>
  );
}
