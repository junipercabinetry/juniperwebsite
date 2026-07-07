'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Instagram,
  Facebook,
  Youtube,
  Music2,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const socialLinks = [
  { href: 'https://www.instagram.com/junipercabinetry/', label: 'Instagram', icon: Instagram },
  { href: 'https://www.facebook.com/junipercabinetry', label: 'Facebook', icon: Facebook },
  { href: 'https://www.youtube.com/@JuniperCabinetry', label: 'YouTube', icon: Youtube },
  { href: 'https://www.tiktok.com/@junipercabinetry', label: 'TikTok', icon: Music2 },
  { href: 'https://wa.me/16043630238', label: 'WhatsApp', icon: MessageCircle },
];

const navigateLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

const serviceAreaLinks = [
  { href: '/service-areas/richmond/', label: 'Richmond' },
  { href: '/service-areas/vancouver/', label: 'Vancouver' },
  { href: '/service-areas/burnaby/', label: 'Burnaby' },
  { href: '/service-areas/surrey/', label: 'Surrey' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown-dark text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-px h-full bg-cream"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-cream"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-cream"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6 relative h-16 w-64">
              <Image
                src="/white-logo-footer.png"
                alt="Juniper Cabinetry"
                fill
                sizes="256px"
                className="object-contain"
              />
            </Link>

            <p className="text-cream/70 font-light leading-relaxed mb-8 max-w-sm">
              Crafting custom cabinetry for modern homes with precision, artistry,
              and an unwavering commitment to excellence.
            </p>

            <div className="flex gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-cream/20 text-cream/70 hover:bg-brand-green hover:border-brand-green hover:text-cream transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-[0.15em] uppercase text-cream mb-6">
              Navigate
            </h4>
            <ul className="space-y-4">
              {navigateLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-cream/70 hover:text-cream text-sm transition-colors font-light"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-[0.15em] uppercase text-cream mb-6">
              Service Areas
            </h4>
            <ul className="space-y-4">
              {serviceAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-cream text-sm transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm tracking-[0.15em] uppercase text-cream mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-cream/70 text-sm font-light">
              <li>
                <a
                  href="tel:+16043630238"
                  className="hover:text-cream transition-colors"
                  onClick={() => trackEvent('phone_click', { location: 'footer' })}
                >
                  (604) 363-0238
                </a>
              </li>
              <li>
                <a
                  href="mailto:junipercabinetry@gmail.com"
                  className="hover:text-cream transition-colors"
                  onClick={() => trackEvent('email_click', { location: 'footer' })}
                >
                  junipercabinetry@gmail.com
                </a>
              </li>
              <li>
                12840 Bathgate Way
                <br />
                Richmond, BC V6V 1Z4
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/70 text-sm font-light">
            &copy; {currentYear} Juniper Cabinetry. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link
              href="/privacy/"
              className="text-cream/70 hover:text-cream transition-colors font-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms/"
              className="text-cream/70 hover:text-cream transition-colors font-light"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
