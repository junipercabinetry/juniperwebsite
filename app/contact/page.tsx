'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export default function Contact() {
  const header = useScrollAnimation();
  const form = useScrollAnimation();
  const info = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as any).toString(),
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: '',
        });
      }, 4000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-brand-brown-dark/70"></div>
        </div>
        <div className="absolute inset-0 z-0 grain"></div>

        <div
          ref={header.ref}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <p className={`text-white text-sm tracking-[0.3em] uppercase mb-6 scroll-fade-up ${header.isVisible ? 'visible' : ''}`}>
            Let&apos;s Connect
          </p>
          <h1 className={`font-serif text-5xl md:text-7xl text-cream mb-6 scroll-fade-up delay-100 ${header.isVisible ? 'visible' : ''}`}>
            Get in Touch
          </h1>
          <p className={`text-xl text-cream/80 font-light max-w-2xl mx-auto leading-relaxed scroll-fade-up delay-200 ${header.isVisible ? 'visible' : ''}`}>
            Ready to transform your space? We&apos;d love to hear from you
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-light to-transparent z-10"></div>
      </section>

      <section className="py-24 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-16 mb-8">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl text-brand-brown mb-2">
                Start Your Project
              </h2>
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl text-brand-brown mb-2">
                Contact Information
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div
              ref={form.ref}
              className={`lg:col-span-3 scroll-slide-left ${form.isVisible ? 'visible' : ''}`}
            >
              <div className="bg-cream-dark p-10 lg:p-14 shadow-sm h-full flex flex-col">
                <p className="text-brand-brown/70 font-light mb-10">
                  Fill out the form below and we&apos;ll be in touch within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 text-brand-green mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="font-serif text-2xl text-brand-brown mb-4">Message Sent</h3>
                    <p className="text-brand-brown/70 font-light">
                      Thank you for reaching out. We&apos;ll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <input type="hidden" name="form-name" value="contact" />
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
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border-brand-brown/20 rounded-none py-6 focus:ring-brand-green focus:border-brand-green"
                          placeholder="(604) 363-0238"
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
                          className="w-full px-4 py-4 border border-brand-brown/20 bg-cream focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-colors"
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

                    <Button
                      type="submit"
                      className="group w-full bg-brand-brown hover:bg-brand-green text-cream py-7 text-sm tracking-wide transition-all duration-500 rounded-none"
                    >
                      Send Message
                      <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <div
              ref={info.ref}
              className={`lg:col-span-2 flex flex-col scroll-slide-right delay-200 ${info.isVisible ? 'visible' : ''}`}
            >
              <div className="space-y-8 mb-10">
                <ContactItem
                  icon={Phone}
                  title="Phone"
                  content="(604) 363-0238"
                />
                <ContactItem
                  icon={Mail}
                  title="Email"
                  content="junipercabinetry@gmail.com"
                />
                <ContactItem
                  icon={MapPin}
                  title="Location"
                  content={<>12840 Bathgate Way<br />Richmond, BC V6V 1Z4</>}
                />
                <ContactItem
                  icon={Clock}
                  title="Hours"
                  content={<>Mon - Fri: 8am - 6pm<br />Sat: 9am - 4pm<br />Sun: Closed</>}
                />
              </div>

              <div className="bg-brand-green p-10 text-cream mt-auto">
                <h3 className="font-serif text-2xl mb-4">
                  Visit Our Showroom
                </h3>
                <p className="text-cream/90 font-light leading-relaxed mb-6">
                  See our craftsmanship firsthand. Schedule a visit to explore our materials, finishes, and completed pieces.
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

function ContactItem({ icon: Icon, title, content }: { icon: typeof Phone; title: string; content: React.ReactNode }) {
  return (
    <div className="flex items-start group">
      <div className="w-14 h-14 rounded-full border border-brand-brown/20 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-cream group-hover:border-brand-green transition-all duration-300">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <div className="ml-5">
        <h3 className="text-sm tracking-wide text-brand-brown mb-1">{title}</h3>
        <p className="text-brand-brown/70 font-light">{content}</p>
      </div>
    </div>
  );
}
