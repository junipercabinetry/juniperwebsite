'use client';

import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { X, ArrowRight, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useModal } from '@/contexts/ModalContext';

const projects = [
  {
    title: 'Luxury Modern Kitchen',
    category: 'Kitchen',
    images: ['/kitchen-hero-01.png', '/modern-flat-panel-white-light-oak-premium-luxury-white-stone-grey-lines-kitchen-cabinetry-vancouver-1.1.jpg', '/modern-flat-panel-white-light-oak-premium-luxury-white-stone-grey-lines-kitchen-cabinetry-vancouver-1.2.png', '/modern-flat-panel-white-light-oak-premium-luxury-white-stone-grey-lines-kitchen-cabinetry-vancouver-1.3.png', '/modern-flat-panel-white-light-oak-premium-luxury-white-stone-grey-lines-kitchen-cabinetry-vancouver-1.4.jpg', '/modern-flat-panel-white-light-oak-premium-luxury-white-stone-grey-lines-kitchen-cabinetry-vancouver-1.5.png'],
    description: 'Sleek contemporary kitchen balancing white and warm wood textures defined by full-height stone surfaces.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Modern Kitchen',
    category: 'Kitchen',
    images: ['/custom-modern-kitchen-vancouver-flat-panel-two-tone-oak-white-minimal-luxury-1.0.jpg', '/custom-modern-kitchen-vancouver-flat-panel-two-tone-oak-white-minimal-luxury-1.1.jpg', '/custom-modern-kitchen-vancouver-flat-panel-two-tone-oak-white-minimal-luxury-1.2.jpg', '/custom-modern-kitchen-vancouver-flat-panel-two-tone-oak-white-minimal-luxury-1.3.png', '/custom-modern-kitchen-vancouver-flat-panel-two-tone-oak-white-minimal-luxury-1.4.jpg'],
    description: 'A luxury integrated kitchen featuring two-tone flat-panel cabinet doors, pairing white with warm oak tones.',
    featured: false,
    size: 'large',
  },
  {
    title: 'Modern Kitchen',
    category: 'Kitchen',
    images: ['/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-1.0.png', '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-2.png', '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-3.png', '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-4.png', '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-5.png', '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-6.png'],
    description: 'A grand, luxury, modern kitchen pairing white and dark gray doors to contrast the beautiful stonework and fully integrated features.',
    featured: false,
    size: 'large',
  },
  {
    title: 'Transitional Kitchen',
    category: 'Kitchen',
    images: ['/custom-modern-kitchen-vancouver-shaker-grey-white-premium-1.0.jpg', '/custom-modern-kitchen-vancouver-shaker-grey-white-premium-1.1.jpg'],
    description: 'A shaker-style kitchen featuring an island centerpiece, with contrasting white and dark gray doors to match the stonework.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Traditional Kitchen',
    category: 'Kitchen',
    images: ['/portfolio-image-10.jpg'],
    description: 'A bright kitchen with refined details and full-height cabinetry, a custom hood, and integrated appliances.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Transitional Kitchen',
    category: 'Kitchen',
    images: ['/portfolio-image-05.png'],
    description: 'A white painted shaker-style kitchen with glass displays, integrated appliances, and a massive island centerpiece.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Living Room Built-ins',
    category: 'Living Room',
    images: ['/portfolio-image-06.jpg'],
    description: 'A striking stone feature wall entertainment center framed by warm wood cabinetry for a balanced contrast.',
    featured: false,
    size: 'large',
  },
  {
    title: 'Bar & Open Shelf Display',
    category: 'Specialty',
    images: ['/portfolio-image-07.png'],
    description: 'A sleek, integrated bar paired with illuminated open shelving for a gallery-like presentation.',
    featured: false,
    size: 'large',
  },
  {
    title: 'Entertainment Display',
    category: 'Living Room',
    images: ['/portfolio-image-03.png'],
    description: 'A seamless media wall with open shelving wrapped in rich, dark wood for a bold yet restrained presence.',
    featured: false,
    size: 'large',
  },
  {
    title: 'Modern Kitchen',
    category: 'Kitchen',
    images: ['/portfolio-image-02.jpg', '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.1.jpg', '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.2.jpg', '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.3.jpg', '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.4.jpg', '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.5.jpg', '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.6.jpg'],
    description: 'A clean, functional kitchen featuring flat-panel cabinets, warm wood tones, and a bright, open layout.',
    featured: false,
    size: 'large',
  },
  {
    title: 'Modern Kitchen',
    category: 'Kitchen',
    images: ['/condo-kitchen-custom-modern-panel-grey-dark-oak-two-tone-full-height-backsplash-1.0.png', '/condo-kitchen-custom-modern-panel-grey-dark-oak-two-tone-full-height-backsplash-1.1.png'],
    description: 'Gray, white, and dark oak cabinetry finishes paired with a full-height stonework for a modern elegance feel.',
    featured: false,
    size: 'large',
  },
  {
    title: 'Transitional Kitchen',
    category: 'Kitchen',
    images: ['/transform-space-hero.png'],
    description: 'A bright and modern kitchen with clean shaker fronts, full-height quartz surfaces, and subtle gold accents.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Transitional Kitchen',
    category: 'Kitchen',
    images: ['/portfolio-background-02.png'],
    description: 'A bright and modern kitchen with clean shaker fronts, artisian lighting, and subtle dark accents.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Bathroom Vanity',
    category: 'Bathroom',
    images: ['/portfolio-image-04.jpg'],
    description: 'Floating vanity with double sinks, custom storage solutions, and soft-close drawers.',
    featured: false,
    size: 'large',
  },
  {
    title: 'Mudroom Organization',
    category: 'Entryway',
    images: ['/portfolio-image-08.jpg'],
    description: 'Functional entryway with cushioned bench seating and personalized cubbies',
    featured: false,
    size: 'large',
  },
  {
    title: 'Bathroom Vanity',
    category: 'Bathroom',
    images: ['/portfolio-image-11.png'],
    description: 'A crisp white cabinetry paired with a white marble countertop and walls for a premium look.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Modern Kitchen',
    category: 'Kitchen',
    images: ['/portfolio-image-15.jpg'],
    description: 'A modern kitchen where the focus is on the over-the-island range hood for great culinary execution.',
    featured: true,
    size: 'large',
  },
  {
    title: 'Closet Storage',
    category: 'Closet',
    images: ['/services-image-03.png'],
    description: 'A clean, white built-in closet designed for flexibility and everyday organization.',
    featured: true,
    size: 'large',
  },
];

export default function Portfolio() {
  const header = useScrollAnimation();
  const featured = useScrollAnimation();
  const grid = useScrollAnimation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [filter, setFilter] = useState('All');
  const { setIsModalOpen } = useModal();
  const selectedProject = selectedIndex === null ? null : projects[selectedIndex];
  const selectedImage = selectedProject ? selectedProject.images[selectedImageIndex] : null;

  useEffect(() => {
    if (selectedIndex !== null) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex, setIsModalOpen]);

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const featuredProject = projects.find(p => p.featured);
  const wrappedIndex = (index: number) => (index + projects.length) % projects.length;
  const wrappedImageIndex = (projectIndex: number, imageIndex: number) => {
    const images = projects[wrappedIndex(projectIndex)].images;
    const count = images.length || 1;
    return (imageIndex + count) % count;
  };
  const openProjectAt = (index: number, imageIndex = 0) => {
    const nextIndex = wrappedIndex(index);
    setSelectedIndex(nextIndex);
    setSelectedImageIndex(wrappedImageIndex(nextIndex, imageIndex));
  };

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
              {filteredProjects.map((project, index) => {
                const projectIndex = projects.indexOf(project);
                return (
                  <ProjectCard
                    key={`${project.title}-${filter}`}
                    project={project}
                    index={index}
                    onClick={(imageIndex) => openProjectAt(projectIndex, imageIndex)}
                  />
                );
              })}
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
          onClick={() => setSelectedIndex(null)}
        >
          <div className="absolute inset-0 bg-brand-brown-dark/95 backdrop-blur-sm"></div>

          <button
            className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center text-cream/70 hover:text-cream transition-colors"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={28} />
          </button>

          <div
            className="relative z-10 max-w-5xl w-full bg-cream overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject && selectedProject.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-cream/80 hover:text-cream transition-colors bg-brand-brown-dark/40 hover:bg-brand-brown-dark/60"
                  onClick={() =>
                    setSelectedImageIndex((current) =>
                      wrappedImageIndex(selectedIndex ?? 0, current - 1),
                    )
                  }
                >
                  <ChevronLeft size={26} />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-cream/80 hover:text-cream transition-colors bg-brand-brown-dark/40 hover:bg-brand-brown-dark/60"
                  onClick={() =>
                    setSelectedImageIndex((current) =>
                      wrappedImageIndex(selectedIndex ?? 0, current + 1),
                    )
                  }
                >
                  <ChevronRight size={26} />
                </button>
              </>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className="h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedImage})` }}
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
  onClick: (imageIndex: number) => void;
}) {
  const card = useScrollAnimation(0.1);
  const [previewIndex, setPreviewIndex] = useState(0);
  const imageCount = project.images.length || 1;
  const wrappedPreviewIndex = (value: number) => (value + imageCount) % imageCount;
  const previewImage =
    project.images[wrappedPreviewIndex(previewIndex)] ?? project.images[0];
  const hasMultipleImages = project.images.length > 1;

  return (
    <div
      ref={card.ref}
      className={`group relative overflow-hidden cursor-pointer bg-white hover-lift scroll-fade-up ${
        card.isVisible ? 'visible' : ''
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={() => onClick(wrappedPreviewIndex(previewIndex))}
    >
      <div className="relative h-80 image-zoom">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${previewImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          {hasMultipleImages && (
            <button
              className="absolute left-1/4 w-9 h-9 flex items-center justify-center rounded-full border border-white/70 bg-black/30 text-white hover:bg-black/50 transition-colors"
              onClick={(event) => {
                event.stopPropagation();
                setPreviewIndex((current) => wrappedPreviewIndex(current - 1));
              }}
              aria-label="Preview previous image"
            >
              <ChevronLeft size={16} />
            </button>
          )}
          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <Plus className="text-white" size={24} />
          </div>
          {hasMultipleImages && (
            <button
              className="absolute right-1/4 w-9 h-9 flex items-center justify-center rounded-full border border-white/70 bg-black/30 text-white hover:bg-black/50 transition-colors"
              onClick={(event) => {
                event.stopPropagation();
                setPreviewIndex((current) => wrappedPreviewIndex(current + 1));
              }}
              aria-label="Preview next image"
            >
              <ChevronRight size={16} />
            </button>
          )}
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
