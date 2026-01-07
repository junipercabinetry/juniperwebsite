'use client';

import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { X, ArrowRight, Plus } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useModal } from '@/contexts/ModalContext';

const projects = [
  {
    title: 'Luxury Kitchen Renovation',
    category: 'Kitchen',
    image: '/kitchen-hero-01.png',
    description: 'Sleek contemporary kitchen balancing white and warm wood textures defined by full-height stone surfaces.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Minimalist Kitchen',
    category: 'Kitchen',
    image: '/portfolio-image-02.jpg',
    description: 'A clean, functional kitchen featuring flat-panel cabinets, warm wood tones, and a bright, open layout.',
    featured: false,
    size: 'medium',
  },
  {
    title: 'Contemporary Bathroom Vanity',
    category: 'Bathroom',
    image: '/portfolio-image-04.jpg',
    description: 'Floating vanity with double sinks, custom storage solutions, and soft-close drawers.',
    featured: false,
    size: 'small',
  },
  {
    title: 'Living Room Built-ins',
    category: 'Living Room',
    image: '/portfolio-image-06.jpg',
    description: 'A striking stone feature wall entertainment center framed by warm wood cabinetry for a balanced contrast.',
    featured: false,
    size: 'medium',
  },
  {
    title: 'Transitional Gourmet Kitchen',
    category: 'Kitchen',
    image: '/portfolio-image-05.png',
    description: 'Full kitchen remodel with custom cabinetry and professional-grade appliance features.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Bar & Open Shelf Display',
    category: 'Specialty',
    image: '/portfolio-image-07.png',
    description: 'A sleek, integrated bar paired with illuminated open shelving for a gallery-like presentation.',
    featured: false,
    size: 'small',
  },
  {
    title: 'Luxury Entertainment Display',
    category: 'Living Room',
    image: '/portfolio-image-03.png',
    description: 'A seamless media wall with open shelving wrapped in rich, dark wood for a bold yet restrained presence.',
    featured: false,
    size: 'medium',
  },
  {
    title: 'Transitional Elegance Kitchen',
    category: 'Kitchen',
    image: '/portfolio-background-02.png',
    description: 'A bright and modern kitchen with clean shaker fronts, artisian lighting, and subtle dark accents.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Modern Kitchen',
    category: 'Kitchen',
    image: '/portfolio-image-09.png',
    description: 'Soft, neutral cabinetry paired with a full-height stone backsplash for a clean, timeless look.',
    featured: false,
    size: 'medium',
  },
  {
    title: 'Detailed Traditional Kitchen',
    category: 'Kitchen',
    image: '/portfolio-image-10.jpg',
    description: 'A bright kitchen with refined details and full-height cabinetry, a custom hood, and integrated appliances.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Bright Transitional Kitchen',
    category: 'Kitchen',
    image: '/transform-space-hero.png',
    description: 'A bright and modern kitchen with clean shaker fronts, full-height quartz surfaces, and subtle gold accents.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Simple Closet Storage',
    category: 'Closet',
    image: '/services-image-03.png',
    description: 'A clean, white built-in closet designed for flexibility and everyday organization.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Mudroom Organization',
    category: 'Entryway',
    image: '/portfolio-image-08.jpg',
    description: 'Functional entryway with cushioned bench seating and personalized cubbies',
    featured: false,
    size: 'small',
  },
  {
    title: 'White Marble Vanity',
    category: 'Bathroom',
    image: '/portfolio-image-11.png',
    description: 'A crisp white cabinetry paired with a white marble countertop and walls for a premium look.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Two-tone Contemporary Kitchen',
    category: 'Kitchen',
    image: '/portfolio-image-12.jpg',
    description: 'A minialist modern kitchen with white and warm wood tone doors, open shelves, and a handle-less finish.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Integrated Transitional Kitchen',
    category: 'Kitchen',
    image: '/portfolio-image-13.jpg',
    description: 'A white shaker-style kitchen featuring an island centerpiece, with contrasting dark and light quartz countertops.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Contemporary Kitchen',
    category: 'Kitchen',
    image: '/portfolio-image-14.jpg',
    description: 'A modern, grey, high-gloss kitchen featuring the floor-to-ceiling integrated pantry and glass displays for finer things.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Modern Gourmet Kitchen',
    category: 'Kitchen',
    image: '/portfolio-image-15.jpg',
    description: 'A modern kitchen where the focus is on the over-the-island range hood for great culinary execution.',
    featured: true,
    size: 'large',
  },
];

export default function Portfolio() {
  const header = useScrollAnimation();
  const featured = useScrollAnimation();
  const grid = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState('All');
  const { setIsModalOpen } = useModal();

  useEffect(() => {
    if (selectedProject) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject, setIsModalOpen]);

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const featuredProject = projects.find(p => p.featured);

  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/portfolio-image-05.png)',
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
            Our Work
          </p>
          <h1 className={`font-serif text-5xl md:text-7xl text-cream mb-6 scroll-fade-up delay-100 ${header.isVisible ? 'visible' : ''}`}>
            Curated Projects
          </h1>
          <p className={`text-xl text-cream/80 font-light max-w-2xl mx-auto leading-relaxed scroll-fade-up delay-200 ${header.isVisible ? 'visible' : ''}`}>
            A selection of our finest custom cabinetry work, each piece a testament to our commitment to excellence
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-light to-transparent z-10"></div>
      </section>

      <section className="py-20 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={grid.ref}
            className={`transition-all duration-1000 ${grid.isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-8 py-3 text-[13px] tracking-[0.1em] uppercase transition-all duration-500 scroll-fade-up ${
                    filter === category
                      ? 'bg-brand-brown text-cream'
                      : 'bg-cream text-brand-brown/60 hover:bg-cream hover:text-brand-brown'
                  } ${grid.isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.title}-${filter}`}
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-brown-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-cream"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-cream"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-cream"></div>
        </div>

        <div
          ref={featured.ref}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <p className={`text-cream text-sm tracking-[0.3em] uppercase mb-6 scroll-fade-up ${featured.isVisible ? 'visible' : ''}`}>
            Start Your Project
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-cream mb-8 scroll-fade-up delay-100 ${featured.isVisible ? 'visible' : ''}`}>
            Inspired by What You See?
          </h2>
          <p className={`text-cream/70 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed scroll-fade-up delay-200 ${featured.isVisible ? 'visible' : ''}`}>
            Every project begins with a conversation. Let&apos;s discuss how we can create something beautiful for your home.
          </p>
          <div className={`scroll-fade-up delay-300 ${featured.isVisible ? 'visible' : ''}`}>
            <Link href="/contact">
              <Button
                size="lg"
                className="group bg-brand-green hover:bg-brand-green/90 text-cream px-10 py-7 text-sm tracking-wide transition-all duration-500 rounded-none"
              >
                Schedule a Consultation
                <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-brand-brown-dark/95 backdrop-blur-sm"></div>

          <button
            className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center text-cream/70 hover:text-cream transition-colors"
            onClick={() => setSelectedProject(null)}
          >
            <X size={28} />
          </button>

          <div
            className="relative z-10 max-w-5xl w-full bg-cream overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className="h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              ></div>
              <div className="p-10 lg:p-16">
                <span className="inline-block px-4 py-2 text-xs tracking-[0.1em] uppercase mb-6" style={{ backgroundColor: '#2f251b', color: 'white' }}>
                  {selectedProject.category}
                </span>
                <h3 className="font-serif text-3xl text-brand-brown mb-4">{selectedProject.title}</h3>
                <p className="text-brand-brown/70 font-light leading-relaxed mb-8">{selectedProject.description}</p>
                <div className="space-y-4 text-sm text-brand-brown/60">
                  <div className="flex justify-between border-b border-brand-brown/10 pb-4">
                    <span>Project Type</span>
                    <span className="text-brand-brown">{selectedProject.category}</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-brown/10 pb-4">
                    <span>Materials</span>
                    <span className="text-brand-brown">Custom Hardwood</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Finish</span>
                    <span className="text-brand-brown">Hand-applied</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: typeof projects[0];
  index: number;
  onClick: () => void;
}) {
  const card = useScrollAnimation(0.1);

  return (
    <div
      ref={card.ref}
      className={`group relative overflow-hidden cursor-pointer bg-white hover-lift scroll-fade-up ${
        card.isVisible ? 'visible' : ''
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={onClick}
    >
      <div className="relative h-80 image-zoom">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <Plus className="text-white" size={24} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span className="inline-block px-3 py-1 text-xs tracking-[0.15em] uppercase mb-2" style={{ backgroundColor: '#2f251b', color: 'white' }}>
          {project.category}
        </span>
        <h3 className="font-serif text-2xl mb-2 transition-transform duration-500 group-hover:-translate-y-1">
          {project.title}
        </h3>
        <p className="text-white/70 font-light text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          {project.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-700" style={{ backgroundColor: '#2f251b' }}></div>
    </div>
  );
}
