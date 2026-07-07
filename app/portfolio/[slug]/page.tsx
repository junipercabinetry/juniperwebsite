import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import CTASection from '@/components/CTASection';
import ButtonLink from '@/components/ButtonLink';
import { projects, getProject } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: {
      absolute: `${project.title} — ${project.category} Project | Juniper Cabinetry`,
    },
    description: project.description,
    alternates: {
      canonical: `/portfolio/${project.slug}/`,
    },
    openGraph: {
      title: `${project.title} | Juniper Cabinetry`,
      description: project.description,
      images: [{ url: project.images[0] }],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <Image
          src={project.images[0]}
          alt={`${project.title} — ${project.description}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/90 via-brand-brown-dark/30 to-brand-brown-dark/40"></div>

        <div className="absolute inset-x-0 bottom-0 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link
              href="/portfolio/"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-cream text-sm tracking-[0.1em] uppercase mb-6 transition-colors"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              All Projects
            </Link>
            <span className="block">
              <span className="inline-block px-4 py-2 text-xs tracking-[0.15em] uppercase mb-4 bg-brand-green text-cream">
                {project.category}
              </span>
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream max-w-3xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            <div className="lg:col-span-2">
              <p className="text-brand-brown/80 font-light text-xl leading-relaxed">
                {project.description}
              </p>
            </div>
            <div>
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between gap-8 border-b border-brand-brown/10 pb-4">
                  <dt className="text-brand-brown/60">Project Type</dt>
                  <dd className="text-brand-brown text-right">{project.category}</dd>
                </div>
                <div className="flex justify-between gap-8 border-b border-brand-brown/10 pb-4">
                  <dt className="text-brand-brown/60">Door Style</dt>
                  <dd className="text-brand-brown text-right">{project.doorStyle}</dd>
                </div>
                <div className="flex justify-between gap-8 pb-4">
                  <dt className="text-brand-brown/60">Finish</dt>
                  <dd className="text-brand-brown text-right">{project.finish}</dd>
                </div>
              </dl>
              <ButtonLink href="/contact/" variant="brown" showArrow className="w-full mt-4">
                Start a Project Like This
              </ButtonLink>
            </div>
          </div>

          {project.images.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={image}
                  className={`relative overflow-hidden rounded-sm ${
                    index % 3 === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} — detail view ${index + 2}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-cream-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-brown mb-12">
              More {project.category} Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/portfolio/${relatedProject.slug}/`}
                  className="group relative block overflow-hidden hover-lift"
                >
                  <div className="relative h-64 image-zoom">
                    <Image
                      src={relatedProject.images[0]}
                      alt={relatedProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-xl text-white">{relatedProject.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="Your Turn"
        title={
          <>
            Let&apos;s Design Your
            <br />
            Dream Space
          </>
        }
        body="Every project begins with a complimentary consultation. Tell us about your vision and we'll bring it to life."
      />
    </div>
  );
}
