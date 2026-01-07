'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Heart, Target, Leaf, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Every project is a labor of love, crafted with dedication and meticulous attention to detail.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'We believe perfection is in the details, ensuring flawless execution in every piece.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to responsibly sourced materials and eco-friendly practices.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Your vision guides our craft. We work closely with you to bring dreams to life.',
  },
];

const team = [
  {
    name: 'Benny Phung',
    role: 'Master Craftsman & Founder',
    image: '/benny-profile.jpeg',
    bio: '33 years of experience in fine woodworking',
  },
  {
    name: 'Le Dang',
    role: 'Lead Designer',
    image: '/le-profile.jpeg',
    bio: '14 years of experience in designing better spaces',
  },
  {
    name: 'Ricky Dang',
    role: 'Project Manager',
    image: '/ricky-profile.jpg',
    bio: 'Expert in seamless project execution',
  },
];

export default function About() {
  const header = useScrollAnimation();
  const story = useScrollAnimation();
  const valuesSection = useScrollAnimation();
  const teamSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/juniper-tree-background.png)',
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
            Est. 2012
          </p>
          <h1 className={`font-serif text-5xl md:text-7xl text-cream mb-6 scroll-fade-up delay-100 ${header.isVisible ? 'visible' : ''}`}>
            Our Story
          </h1>
          <p className={`text-xl text-cream/80 font-light max-w-2xl mx-auto leading-relaxed scroll-fade-up delay-200 ${header.isVisible ? 'visible' : ''}`}>
            Where tradition meets innovation in every handcrafted piece
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10"></div>
      </section>

      <section className="py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div
              ref={story.ref}
              className={`scroll-slide-left ${story.isVisible ? 'visible' : ''}`}
            >
              <p className="text-brand-green text-sm tracking-[0.3em] uppercase mb-4">Who We Are</p>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-brown mb-8 leading-tight">
                Crafting Excellence
                <br />
                for Over a Decade
              </h2>
              <div className="space-y-6 text-brand-brown/70 font-light leading-relaxed">
                <p>
                  Juniper Cabinetry was born from a simple belief: that the spaces we inhabit should
                  be as unique as the lives we live. Founded in 2012 by master craftsman Benny Phung,
                  our workshop has grown from a small garage operation into a respected name in custom
                  cabinetry throughout the Greater Vancouver.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to the marriage of traditional
                  craftsmanship and contemporary design. Each piece that leaves our workshop is a
                  testament to time-honored woodworking techniques, executed with precision using
                  modern tools and sustainable practices.
                </p>
              </div>
            </div>
            <div className={`scroll-slide-right delay-200 ${story.isVisible ? 'visible' : ''}`}>
              <div className="relative">
                <div className="relative h-[600px] image-zoom rounded-sm overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/about-dad-01.png)' }}
                  ></div>
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-brand-green/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-cream-light relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div
            ref={valuesSection.ref}
          >
            <div className="text-center mb-20">
              <p className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${valuesSection.isVisible ? 'visible' : ''}`}>
                What Drives Us
              </p>
              <h2 className={`font-serif text-5xl md:text-6xl text-brand-brown scroll-fade-up delay-100 ${valuesSection.isVisible ? 'visible' : ''}`}>
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {values.map((value, index) => (
                <ValueCard key={index} value={value} index={index} isVisible={valuesSection.isVisible} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={teamSection.ref}
          >
            <div className="text-center mb-20">
              <p className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${teamSection.isVisible ? 'visible' : ''}`}>
                The People
              </p>
              <h2 className={`font-serif text-5xl md:text-6xl text-brand-brown scroll-fade-up delay-100 ${teamSection.isVisible ? 'visible' : ''}`}>
                Meet Our Team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <TeamMember key={index} member={member} index={index} isVisible={teamSection.isVisible} />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-32 bg-brand-brown-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-cream"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-cream"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-cream"></div>
        </div>

        <div
          ref={ctaSection.ref}
          className="max-w-4xl mx-auto px-6 text-center relative"
        >
          <p className={`text-cream text-sm tracking-[0.3em] uppercase mb-6 scroll-fade-up ${ctaSection.isVisible ? 'visible' : ''}`}>
            Join Our Story
          </p>
          <h2 className={`font-serif text-4xl md:text-6xl text-cream mb-8 scroll-fade-up delay-100 ${ctaSection.isVisible ? 'visible' : ''}`}>
            Let&apos;s Build Something
            <br />
            Beautiful Together
          </h2>
          <div className={`scroll-fade-up delay-300 ${ctaSection.isVisible ? 'visible' : ''}`}>
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-brand-green hover:bg-brand-green/90 text-cream px-10 py-7 text-sm tracking-wide transition-all duration-500 rounded-none"
              >
                Start a Conversation
                <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ value, index, isVisible }: { value: typeof values[0]; index: number; isVisible: boolean }) {
  const Icon = value.icon;

  return (
    <div
      className={`text-center group scroll-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-brand-brown/20 text-brand-green mb-8 group-hover:bg-brand-green group-hover:text-cream group-hover:border-brand-green transition-all duration-500">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-2xl text-brand-brown mb-4">{value.title}</h3>
      <p className="text-brand-brown/70 font-light leading-relaxed">{value.description}</p>
    </div>
  );
}

function TeamMember({ member, index, isVisible }: { member: typeof team[0]; index: number; isVisible: boolean }) {
  return (
    <div
      className={`group scroll-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
    >
      <div className="relative mb-8 image-zoom rounded-sm overflow-hidden">
        <div className="aspect-[4/5]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${member.image})` }}
          ></div>
          <div className="absolute inset-0 bg-brand-brown-dark/20 group-hover:bg-brand-brown-dark/40 transition-all duration-500"></div>
        </div>
      </div>
      <h3 className="font-serif text-2xl text-brand-brown mb-2">{member.name}</h3>
      <p className="text-brand-green text-sm tracking-wide mb-3">{member.role}</p>
      <p className="text-brand-brown/70 font-light">{member.bio}</p>
    </div>
  );
}
