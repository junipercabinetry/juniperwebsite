export interface ServiceArea {
  slug: string;
  city: string;
  heroImage: string;
  intro: string;
  body: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'richmond',
    city: 'Richmond',
    heroImage: '/kitchen-hero-01.webp',
    intro:
      'Juniper Cabinetry is proudly based in Richmond, BC — our workshop and showroom at 12840 Bathgate Way is where every cabinet we build begins.',
    body: [
      'As a Richmond company, we know the homes here: from Steveston heritage houses to new builds in Terra Nova and family townhomes near Garden City. Our team designs, builds, and installs custom kitchens, bathroom vanities, closet systems, and built-ins for Richmond homeowners without the markups of a middleman — everything is made in our own local workshop.',
      'Because we manufacture minutes away, Richmond clients enjoy the fastest timelines we offer, easy showroom visits to review materials and finishes in person, and quick follow-up service after installation.',
    ],
  },
  {
    slug: 'vancouver',
    city: 'Vancouver',
    heroImage: '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-1.0.webp',
    intro:
      'From Kitsilano character homes to downtown condos, Juniper Cabinetry designs and installs custom cabinetry across Vancouver.',
    body: [
      'Vancouver homes demand smart use of space. We specialize in maximizing storage in compact condo kitchens, designing around heritage details in older homes, and delivering the clean, modern lines that define West Coast living. Our flat-panel and two-tone kitchens are among our most requested projects in Vancouver.',
      'Every project is measured on site, built in our Richmond workshop just over the bridge, and installed by our own team — typically within 3–5 days, with careful protection of your home throughout.',
    ],
  },
  {
    slug: 'burnaby',
    city: 'Burnaby',
    heroImage: '/custom-modern-kitchen-vancouver-flat-panel-two-tone-oak-white-minimal-luxury-1.0.webp',
    intro:
      'Juniper Cabinetry brings custom kitchens, vanities, and built-ins to homes throughout Burnaby — from Metrotown high-rises to family homes in Brentwood and Deer Lake.',
    body: [
      "Burnaby homeowners come to us for full kitchen transformations and whole-home millwork: entertainment walls, home offices, and closet systems that make growing households work better. We handle design, fabrication, and installation as one team, so there's a single point of accountability from first sketch to final walkthrough.",
      'Our workshop in neighbouring Richmond means short lead times, easy in-person material selections, and responsive service for every Burnaby project.',
    ],
  },
  {
    slug: 'surrey',
    city: 'Surrey',
    heroImage: '/transitional-custom-luxury-kitchen-white-shaker-doors-gold-accent-hardware-full-height-stonework-1.0.webp',
    intro:
      'From South Surrey estates to new builds in Clayton and Fleetwood, Juniper Cabinetry designs and installs custom cabinetry across Surrey.',
    body: [
      'Surrey projects often mean generous kitchens — large islands, full-height pantries, and shaker or transitional styles that suit family living. We build every cabinet to your exact space and finish selections in our own Richmond workshop, then install with our own crew.',
      'We provide detailed written quotes, realistic timelines, and a final walkthrough on every Surrey project, whether it is a single vanity or a complete kitchen.',
    ],
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
