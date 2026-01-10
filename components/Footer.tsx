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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown-dark text-cream relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-cream"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-cream"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-cream"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Brand + Description */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6 relative h-16 w-64">
              <Image
                src="/white-logo-footer.png"
                alt="Juniper Cabinetry"
                fill
                className="object-contain"
              />
            </Link>

            <p className="text-cream/60 font-light leading-relaxed mb-8 max-w-sm">
              Crafting custom cabinetry for modern homes with precision, artistry,
              and an unwavering commitment to excellence.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/junipercabinetry/"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-brand-brown text-cream/60 hover:bg-brand-green hover:border-brand-green hover:text-cream transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/junipercabinetry"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-brand-brown text-cream/60 hover:bg-brand-green hover:border-brand-green hover:text-cream transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.youtube.com/@JuniperCabinetry"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-brand-brown text-cream/60 hover:bg-brand-green hover:border-brand-green hover:text-cream transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>

              <a
                href="https://www.tiktok.com/@junipercabinetry"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-brand-brown text-cream/60 hover:bg-brand-green hover:border-brand-green hover:text-cream transition-all duration-300"
                aria-label="TikTok"
              >
                <Music2 size={20} />
              </a>

              <a
                href="https://wa.me/16043630238"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-brand-brown text-cream/60 hover:bg-brand-green hover:border-brand-green hover:text-cream transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-[0.15em] uppercase text-cream mb-6">
              Navigate
            </h4>
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-cream/60 hover:text-cream text-sm transition-colors font-light"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm tracking-[0.15em] uppercase text-cream mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                'Kitchen Cabinetry',
                'Bathroom Vanities',
                'Closet Systems',
                'Home Office Solutions',
                'Specialty Projects',
              ].map((service) => (
                <li key={service}>
                  <span className="text-cream/60 text-sm font-light">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm tracking-[0.15em] uppercase text-cream mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-cream/60 text-sm font-light">
              <li>(604) 363-0238</li>
              <li>junipercabinetry@gmail.com</li>
              <li>
                12840 Bathgate Way
                <br />
                Richmond, BC V6V 1Z4
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-brown mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm font-light">
            &copy; {currentYear} Juniper Cabinetry. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a
              href="#"
              className="text-cream/50 hover:text-cream transition-colors font-light"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-cream/50 hover:text-cream transition-colors font-light"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
