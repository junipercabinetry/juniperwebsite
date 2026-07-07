'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { projects, projectCategories, type Project } from '@/lib/projects';

export default function Portfolio() {
  const grid = useScrollAnimation();
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Our Work"
        title="Curated Projects"
        lede="A selection of our finest custom cabinetry work, each piece a testament to our commitment to excellence"
        image="/kitchen-hero-01.webp"
        imageAlt="White oak and stone custom kitchen by Juniper Cabinetry"
        fadeTo="cream-light"
      />

      <section className="py-20 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={grid.ref}
            className={`transition-all duration-1000 ${grid.isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className="flex flex-wrap justify-center gap-4 mb-16"
              role="group"
              aria-label="Filter projects by category"
            >
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                  className={`px-8 py-3 text-[13px] tracking-[0.1em] uppercase transition-all duration-500 ${
                    filter === category
                      ? 'bg-brand-brown text-cream'
                      : 'bg-cream text-brand-brown/70 hover:text-brand-brown'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Start Your Project"
        title="Inspired by What You See?"
        body="Every project begins with a conversation. Let's discuss how we can create something beautiful for your home."
      />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const card = useScrollAnimation<HTMLAnchorElement>(0.1);

  return (
    <Link
      href={`/portfolio/${project.slug}/`}
      ref={card.ref}
      className={`group relative block overflow-hidden bg-white hover-lift scroll-fade-up ${
        card.isVisible ? 'visible' : ''
      }`}
      style={{ transitionDelay: `${Math.min(index, 6) * 50}ms` }}
    >
      <div className="relative h-80 image-zoom">
        <Image
          src={project.images[0]}
          alt={`${project.title} — ${project.description}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={index < 3 ? 'eager' : 'lazy'}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500" aria-hidden="true">
          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <ArrowRight className="text-white" size={24} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span className="inline-block px-3 py-1 text-xs tracking-[0.15em] uppercase mb-2 bg-brand-brown text-cream">
          {project.category}
        </span>
        <h3 className="font-serif text-2xl mb-2 transition-transform duration-500 group-hover:-translate-y-1">
          {project.title}
        </h3>
        <p className="text-white/80 font-light text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          {project.images.length} {project.images.length === 1 ? 'photo' : 'photos'} · View project
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-700 bg-brand-green"></div>
    </Link>
  );
}
