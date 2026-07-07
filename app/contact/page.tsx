'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { trackEvent } from '@/lib/analytics';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
};

export default function Contact() {
  const form = useScrollAnimation();
  const info = useScrollAnimation();
  const [formData, setFormData] = useState(emptyForm);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('submitting');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(
          new FormData(e.currentTarget) as unknown as Record<string, string>,
        ).toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      trackEvent('generate_lead', { project_type: formData.projectType });
      setSubmitState('success');
      setFormData(emptyForm);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitState('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Let's Connect"
        title="Get in Touch"
        lede="Ready to transform your space? We'd love to hear from you"
        image="/transform-space-hero.webp"
        imageAlt="Bright custom kitchen by Juniper Cabinetry"
        fadeTo="cream-light"
      />

      <section className="py-24 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div
              ref={form.ref}
              className={`lg:col-span-3 scroll-slide-left ${form.isVisible ? 'visible' : ''}`}
            >
              <h2 className="font-serif text-3xl text-brand-brown mb-8">Start Your Project</h2>
              <div className="bg-cream-dark p-10 lg:p-14 shadow-sm h-full flex flex-col">
                {submitState === 'success' ? (
                  <div className="text-center py-16" role="status">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 text-brand-green mb-6">
                      <CheckCircle size={40} aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-2xl text-brand-brown mb-4">Message Sent</h3>
                    <p className="text-brand-brown/70 font-light max-w-md mx-auto">
                      Thank you for reaching out. Here&apos;s what happens next:
                    </p>
                    <ol className="text-brand-brown/70 font-light text-left max-w-md mx-auto mt-6 space-y-3 list-decimal list-inside">
                      <li>We&apos;ll review your project details.</li>
                      <li>We&apos;ll reply within 24 hours (Mon–Sat) to learn more.</li>
                      <li>We&apos;ll schedule your complimentary design consultation.</li>
                    </ol>
                    <p className="text-brand-brown/70 font-light mt-8">
                      Need to reach us sooner? Call{' '}
                      <a href="tel:+16043630238" className="text-brand-green underline underline-offset-4">
                        (604) 363-0238
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-brand-brown/70 font-light mb-10">
                      Fill out the form below and we&apos;ll be in touch within 24 hours.
                    </p>

                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="space-y-8"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <p className="hidden" aria-hidden="true">
                        <label>
                          Don&apos;t fill this out if you&apos;re human:{' '}
                          <input name="bot-field" tabIndex={-1} autoComplete="off" />
                        </label>
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="name" className="block text-sm tracking-wide text-brand-brown mb-3">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-brand-brown/20 rounded-none py-6 focus:ring-brand-green focus:border-brand-green"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm tracking-wide text-brand-brown mb-3">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-brand-brown/20 rounded-none py-6 focus:ring-brand-green focus:border-brand-green"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="phone" className="block text-sm tracking-wide text-brand-brown mb-3">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border-brand-brown/20 rounded-none py-6 focus:ring-brand-green focus:border-brand-green"
                            placeholder="(604) 555-0123"
                          />
                        </div>
                        <div>
                          <label htmlFor="projectType" className="block text-sm tracking-wide text-brand-brown mb-3">
                            Project Type *
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            required
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full h-12 px-3 border border-brand-brown/20 bg-cream text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-colors"
                          >
                            <option value="">Select a project type</option>
                            <option value="kitchen">Kitchen Cabinetry</option>
                            <option value="bathroom">Bathroom Vanity</option>
                            <option value="office">Home Office</option>
                            <option value="closet">Closet System</option>
                            <option value="living">Living Room Built-ins</option>
                            <option value="other">Other Custom Project</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm tracking-wide text-brand-brown mb-3">
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full border-brand-brown/20 rounded-none min-h-[180px] focus:ring-brand-green focus:border-brand-green"
                          placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                        />
                      </div>

                      {submitState === 'error' && (
                        <div
                          className="flex items-start gap-3 border border-red-800/30 bg-red-800/5 p-4 text-sm text-brand-brown"
                          role="alert"
                        >
                          <AlertCircle size={20} className="flex-shrink-0 text-red-800" aria-hidden="true" />
                          <p>
                            Something went wrong and your message was not sent. Please try
                            again, or reach us directly at{' '}
                            <a href="tel:+16043630238" className="underline underline-offset-2">
                              (604) 363-0238
                            </a>{' '}
                            or{' '}
                            <a
                              href="mailto:junipercabinetry@gmail.com"
                              className="underline underline-offset-2"
                            >
                              junipercabinetry@gmail.com
                            </a>
                            .
                          </p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={submitState === 'submitting'}
                        className="group w-full bg-brand-brown hover:bg-brand-green text-cream py-7 text-sm tracking-wide transition-all duration-500 rounded-none disabled:opacity-70"
                      >
                        {submitState === 'submitting' ? 'Sending…' : 'Send Message'}
                        <ArrowRight
                          className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                          size={18}
                          aria-hidden="true"
                        />
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>

            <div
              ref={info.ref}
              className={`lg:col-span-2 flex flex-col scroll-slide-right delay-200 ${info.isVisible ? 'visible' : ''}`}
            >
              <h2 className="font-serif text-3xl text-brand-brown mb-8">Contact Information</h2>
              <div className="space-y-8 mb-10">
                <ContactItem
                  icon={Phone}
                  title="Phone"
                  content={
                    <a
                      href="tel:+16043630238"
                      className="hover:text-brand-green transition-colors"
                      onClick={() => trackEvent('phone_click', { location: 'contact_page' })}
                    >
                      (604) 363-0238
                    </a>
                  }
                />
                <ContactItem
                  icon={Mail}
                  title="Email"
                  content={
                    <a
                      href="mailto:junipercabinetry@gmail.com"
                      className="hover:text-brand-green transition-colors"
                      onClick={() => trackEvent('email_click', { location: 'contact_page' })}
                    >
                      junipercabinetry@gmail.com
                    </a>
                  }
                />
                <ContactItem
                  icon={MapPin}
                  title="Location"
                  content={
                    <a
                      href="https://maps.google.com/?q=12840+Bathgate+Way,+Richmond,+BC+V6V+1Z4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-green transition-colors"
                    >
                      12840 Bathgate Way
                      <br />
                      Richmond, BC V6V 1Z4
                    </a>
                  }
                />
                <ContactItem
                  icon={Clock}
                  title="Hours"
                  content={
                    <>
                      Mon - Fri: 8am - 6pm
                      <br />
                      Sat: 9am - 4pm
                      <br />
                      Sun: Closed
                    </>
                  }
                />
              </div>

              <div className="bg-brand-green p-10 text-cream mt-auto">
                <h3 className="font-serif text-2xl mb-4">Visit Our Showroom</h3>
                <p className="text-cream/90 font-light leading-relaxed mb-6">
                  See our craftsmanship firsthand. Schedule a visit to explore our materials,
                  finishes, and completed pieces.
                </p>
                <p className="text-cream/90 font-light leading-relaxed">
                  Complimentary design consultations available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  title,
  content,
}: {
  icon: typeof Phone;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex items-start group">
      <div className="w-14 h-14 rounded-full border border-brand-brown/20 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-cream group-hover:border-brand-green transition-all duration-300">
        <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="ml-5">
        <h3 className="text-sm tracking-wide text-brand-brown mb-1">{title}</h3>
        <p className="text-brand-brown/70 font-light">{content}</p>
      </div>
    </div>
  );
}
