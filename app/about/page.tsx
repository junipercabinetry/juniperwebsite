'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Image from 'next/image';
import { Heart, Target, Leaf, Users } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description:
      'Every project is a labor of love, crafted with dedication and meticulous attention to detail.',
  },
  {
    icon: Target,
    title: 'Precision',
    description:
      'We believe perfection is in the details, ensuring flawless execution in every piece.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to responsibly sourced materials and eco-friendly practices.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Your vision guides our craft. We work closely with you to bring dreams to life.',
  },
];

const team = [
  {
    name: 'Benny Phung',
    role: 'Master Craftsman & Founder',
    image: '/benny-profile.webp',
    bio: '33 years of experience in fine woodworking',
  },
  {
    name: 'Le Dang',
    role: 'Lead Designer',
    image: '/le-profile.webp',
    bio: '14 years of experience in designing better spaces',
  },
  {
    name: 'Ricky Dang',
    role: 'Project Manager',
    image: '/ricky-profile.webp',
    bio: 'Expert in seamless project execution',
  },
];

export default function About() {
  const story = useScrollAnimation();
  const valuesSection = useScrollAnimation();
  const teamSection = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Est. 2012"
        title="Our Story"
        lede="Where tradition meets innovation in every handcrafted piece"
        image="/juniper-tree-background.webp"
        imageAlt="Juniper tree — the namesake of Juniper Cabinetry"
      />

      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div
              ref={story.ref}
              className={`scroll-slide-left ${story.isVisible ? 'visible' : ''}`}
            >
              <p className="text-brand-green text-sm tracking-[0.3em] uppercase mb-4">
                Who We Are
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-brown mb-8 leading-tight">
                Crafting Excellence
                <br />
                for Over a Decade
              </h2>
              <div className="space-y-6 text-brand-brown/70 font-light leading-relaxed">
                <p>
                  Juniper Cabinetry was born from a simple belief: the kitchen is the heart of
                  your home—where cherished memories and heartfelt conversations come together.
                  Founded in 2012 by master craftsman Benny Phung, the workshop grew from a
                  small garage operation into a trusted name in custom cabinetry throughout
                  Greater Vancouver. Today, the company is led by Ricky Dang.
                </p>
                <p>
                  From the beginning, Juniper Cabinetry has been a family effort. Ricky grew up
                  in the workshop alongside his father, learning the care, discipline, and
                  patience required to build cabinetry that lasts. That early involvement
                  naturally evolved into a deeper role as the business grew.
                </p>
                <p>
                  Now guiding its next chapter, Ricky continues the legacy by thoughtfully
                  modernizing the business while staying true to the craftsmanship and values
                  that define Juniper Cabinetry.
                </p>
                <p>
                  What truly sets Juniper Cabinetry apart is a commitment to the full cabinetry
                  experience. From the first conversation to final installation, every detail is
                  approached with care and respect for how clients live in their space. The
                  result is not just well-crafted cabinetry, but a seamless process that
                  supports everyday living and elevates the home as a whole.
                </p>
              </div>
            </div>
            <div className={`scroll-slide-right delay-200 ${story.isVisible ? 'visible' : ''}`}>
              <div className="relative">
                <div className="relative h-[500px] md:h-[600px] image-zoom rounded-sm overflow-hidden">
                  <Image
                    src="/about-dad-01.webp"
                    alt="Founder Benny Phung working in the Juniper Cabinetry workshop"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-brand-green/30" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream-light relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div ref={valuesSection.ref}>
            <div className="text-center mb-20">
              <p
                className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${valuesSection.isVisible ? 'visible' : ''}`}
              >
                What Drives Us
              </p>
              <h2
                className={`font-serif text-5xl md:text-6xl text-brand-brown scroll-fade-up delay-100 ${valuesSection.isVisible ? 'visible' : ''}`}
              >
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {values.map((value, index) => (
                <ValueCard
                  key={value.title}
                  value={value}
                  index={index}
                  isVisible={valuesSection.isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={teamSection.ref}>
            <div className="text-center mb-20">
              <p
                className={`text-brand-green text-sm tracking-[0.3em] uppercase mb-4 scroll-fade-up ${teamSection.isVisible ? 'visible' : ''}`}
              >
                The People
              </p>
              <h2
                className={`font-serif text-5xl md:text-6xl text-brand-brown scroll-fade-up delay-100 ${teamSection.isVisible ? 'visible' : ''}`}
              >
                Meet Our Team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <TeamMember
                  key={member.name}
                  member={member}
                  index={index}
                  isVisible={teamSection.isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Join Our Story"
        title={
          <>
            Let&apos;s Build Something
            <br />
            Beautiful Together
          </>
        }
        primaryLabel="Start a Conversation"
      />
    </div>
  );
}

function ValueCard({
  value,
  index,
  isVisible,
}: {
  value: (typeof values)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = value.icon;

  return (
    <div
      className={`text-center group scroll-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-brand-brown/20 text-brand-green mb-8 group-hover:bg-brand-green group-hover:text-cream group-hover:border-brand-green transition-all duration-500">
        <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className="font-serif text-2xl text-brand-brown mb-4">{value.title}</h3>
      <p className="text-brand-brown/70 font-light leading-relaxed">{value.description}</p>
    </div>
  );
}

function TeamMember({
  member,
  index,
  isVisible,
}: {
  member: (typeof team)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group scroll-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
    >
      <div className="relative mb-8 image-zoom rounded-sm overflow-hidden">
        <div className="relative aspect-[4/5]">
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role} at Juniper Cabinetry`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-brown-dark/10 group-hover:bg-brand-brown-dark/30 transition-all duration-500"></div>
        </div>
      </div>
      <h3 className="font-serif text-2xl text-brand-brown mb-2">{member.name}</h3>
      <p className="text-brand-green text-sm tracking-wide mb-3">{member.role}</p>
      <p className="text-brand-brown/70 font-light">{member.bio}</p>
    </div>
  );
}
