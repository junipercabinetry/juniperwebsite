import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { serviceAreas } from '@/lib/service-areas';

const baseUrl = 'https://junipercabinetry.ca';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/portfolio/`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/service-areas/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const areaPages: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${baseUrl}/service-areas/${area.slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...areaPages];
}
