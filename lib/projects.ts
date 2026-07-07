export interface Project {
  slug: string;
  title: string;
  category: 'Kitchen' | 'Bathroom' | 'Living Room' | 'Closet' | 'Entryway' | 'Specialty';
  description: string;
  images: string[];
  doorStyle: string;
  finish: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'white-oak-stone-kitchen',
    title: 'White Oak & Stone Kitchen',
    category: 'Kitchen',
    description:
      'Sleek contemporary kitchen balancing white and warm wood textures defined by full-height stone surfaces.',
    images: [
      '/kitchen-hero-01.webp',
      '/modern-flat-panel-white-light-oak-premium-luxury-white-stone-grey-lines-kitchen-cabinetry-vancouver-1.1.webp',
      '/modern-flat-panel-white-light-oak-premium-luxury-white-stone-grey-lines-kitchen-cabinetry-vancouver-1.2.webp',
      '/modern-flat-panel-white-light-oak-premium-luxury-white-stone-grey-lines-kitchen-cabinetry-vancouver-1.3.webp',
      '/modern-flat-panel-white-light-oak-premium-luxury-white-stone-grey-lines-kitchen-cabinetry-vancouver-1.5.webp',
    ],
    doorStyle: 'Flat-panel, two-tone white and light oak',
    finish: 'Matte white with natural oak grain',
    featured: true,
  },
  {
    slug: 'two-tone-oak-kitchen',
    title: 'Two-Tone Oak Minimalist Kitchen',
    category: 'Kitchen',
    description:
      'A luxury integrated kitchen featuring two-tone flat-panel cabinet doors, pairing white with warm oak tones.',
    images: [
      '/custom-modern-kitchen-vancouver-flat-panel-two-tone-oak-white-minimal-luxury-1.0.webp',
      '/custom-modern-kitchen-vancouver-flat-panel-two-tone-oak-white-minimal-luxury-1.1.webp',
      '/custom-modern-kitchen-vancouver-flat-panel-two-tone-oak-white-minimal-luxury-1.2.webp',
      '/custom-modern-kitchen-vancouver-flat-panel-two-tone-oak-white-minimal-luxury-1.3.webp',
      '/custom-modern-kitchen-vancouver-flat-panel-two-tone-oak-white-minimal-luxury-1.4.webp',
    ],
    doorStyle: 'Flat-panel, two-tone oak and white',
    finish: 'Warm oak with integrated appliance panels',
    featured: false,
  },
  {
    slug: 'grand-white-grey-kitchen',
    title: 'Grand White & Grey Kitchen',
    category: 'Kitchen',
    description:
      'A grand, luxury, modern kitchen pairing white and dark gray doors to contrast the beautiful stonework and fully integrated features.',
    images: [
      '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-1.0.webp',
      '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-2.webp',
      '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-3.webp',
      '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-4.webp',
      '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-5.webp',
      '/modern-flat-panel-white-grey-premium-luxury-white-stone-kitchen-cabinetry-vancouver-6.webp',
    ],
    doorStyle: 'Flat-panel, white and dark grey',
    finish: 'Matte with full-height stone surround',
    featured: false,
  },
  {
    slug: 'grey-white-shaker-kitchen',
    title: 'Grey & White Shaker Kitchen',
    category: 'Kitchen',
    description:
      'A shaker-style kitchen featuring an island centerpiece, with contrasting white and dark gray doors to match the stonework.',
    images: [
      '/custom-modern-kitchen-vancouver-shaker-grey-white-premium-1.0.webp',
      '/custom-modern-kitchen-vancouver-shaker-grey-white-premium-1.1.webp',
    ],
    doorStyle: 'Shaker, contrasting grey and white',
    finish: 'Painted, soft-sheen',
    featured: true,
  },
  {
    slug: 'traditional-glass-display-kitchen',
    title: 'Traditional Glass-Display Kitchen',
    category: 'Kitchen',
    description:
      'A bright kitchen with refined details and full-height cabinetry, a custom hood, and integrated appliances.',
    images: [
      '/traditional-luxury-premium-white-raised-panel-shaker-custom-kitchen-glass-display-1.0.webp',
      '/traditional-luxury-premium-white-raised-panel-shaker-custom-kitchen-glass-display-1.1.webp',
      '/traditional-luxury-premium-white-raised-panel-shaker-custom-kitchen-glass-display-1.2.webp',
    ],
    doorStyle: 'Raised-panel shaker with glass displays',
    finish: 'Painted white, custom hood',
    featured: true,
  },
  {
    slug: 'painted-shaker-island-kitchen',
    title: 'Painted Shaker Island Kitchen',
    category: 'Kitchen',
    description:
      'A white painted shaker-style kitchen with glass displays, integrated appliances, and a massive island centerpiece.',
    images: [
      '/luxury-white-painted-shaker-door-glass-display-integrated-appliance-kitchen-1.0.webp',
      '/luxury-white-painted-shaker-door-glass-display-integrated-appliance-kitchen-1.1.webp',
    ],
    doorStyle: 'Painted shaker with glass displays',
    finish: 'Hand-painted white',
    featured: true,
  },
  {
    slug: 'stone-feature-wall-built-ins',
    title: 'Stone Feature Wall Built-Ins',
    category: 'Living Room',
    description:
      'A striking stone feature wall entertainment center framed by warm wood cabinetry for a balanced contrast.',
    images: ['/portfolio-image-06.webp'],
    doorStyle: 'Flat-panel, warm wood grain',
    finish: 'Textured woodgrain with stone surround',
    featured: false,
  },
  {
    slug: 'illuminated-bar-display',
    title: 'Illuminated Bar & Display',
    category: 'Specialty',
    description:
      'A sleek, integrated bar paired with illuminated open shelving for a gallery-like presentation.',
    images: ['/portfolio-image-07.webp'],
    doorStyle: 'Flat-panel with open shelving',
    finish: 'Integrated LED lighting',
    featured: false,
  },
  {
    slug: 'dark-wood-media-wall',
    title: 'Dark Wood Media Wall',
    category: 'Living Room',
    description:
      'A seamless media wall with open shelving wrapped in rich, dark wood for a bold yet restrained presence.',
    images: ['/portfolio-image-03.webp'],
    doorStyle: 'Flat-panel, dark woodgrain',
    finish: 'Rich dark wood veneer',
    featured: false,
  },
  {
    slug: 'high-gloss-black-white-kitchen',
    title: 'High-Gloss Black & White Kitchen',
    category: 'Kitchen',
    description:
      'A modern kitchen featuring white and black premium high-gloss panels with subtle white details to match the deep dark stonework.',
    images: [
      '/premium-kitchen-white-black-stone-high-gloss-finish-doors-black-stonework-integrated-appliance-1.0.webp',
      '/premium-kitchen-white-black-stone-high-gloss-finish-doors-black-stonework-integrated-appliance-1.1.webp',
      '/premium-kitchen-white-black-stone-high-gloss-finish-doors-black-stonework-integrated-appliance-1.2.webp',
      '/premium-kitchen-white-black-stone-high-gloss-finish-doors-black-stonework-integrated-appliance-1.3.webp',
    ],
    doorStyle: 'Flat-panel, black and white',
    finish: 'High-gloss with integrated appliances',
    featured: true,
  },
  {
    slug: 'warm-grey-flat-panel-kitchen',
    title: 'Warm Grey Flat-Panel Kitchen',
    category: 'Kitchen',
    description:
      'A clean, functional kitchen featuring flat-panel cabinets, warm wood tones, and a bright, open layout.',
    images: [
      '/portfolio-image-02.webp',
      '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.1.webp',
      '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.2.webp',
      '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.3.webp',
      '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.4.webp',
      '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.5.webp',
      '/custom-modern-kitchen-vancouver-flat-panel-grey-tan-cabinetry-two-tone-2.6.webp',
    ],
    doorStyle: 'Flat-panel, grey and tan two-tone',
    finish: 'Matte, warm wood tones',
    featured: false,
  },
  {
    slug: 'condo-two-tone-oak-kitchen',
    title: 'Condo Two-Tone Oak Kitchen',
    category: 'Kitchen',
    description:
      'Gray, white, and dark oak cabinetry finishes paired with a full-height stonework for a modern elegance feel.',
    images: [
      '/condo-kitchen-custom-modern-panel-grey-dark-oak-two-tone-full-height-backsplash-1.0.webp',
      '/condo-kitchen-custom-modern-panel-grey-dark-oak-two-tone-full-height-backsplash-1.1.webp',
    ],
    doorStyle: 'Flat-panel, grey and dark oak',
    finish: 'Full-height stone backsplash',
    featured: false,
  },
  {
    slug: 'gold-accent-shaker-kitchen',
    title: 'Gold-Accent Shaker Kitchen',
    category: 'Kitchen',
    description:
      'A bright and modern kitchen with clean shaker fronts, full-height quartz surfaces, and subtle gold accents.',
    images: [
      '/transitional-custom-luxury-kitchen-white-shaker-doors-gold-accent-hardware-full-height-stonework-1.0.webp',
      '/transitional-custom-luxury-kitchen-white-shaker-doors-gold-accent-hardware-full-height-stonework-1.1.webp',
    ],
    doorStyle: 'White shaker with gold hardware',
    finish: 'Painted white, full-height quartz',
    featured: true,
  },
  {
    slug: 'artisan-lit-shaker-kitchen',
    title: 'Artisan-Lit Shaker Kitchen',
    category: 'Kitchen',
    description:
      'A bright and modern kitchen with clean shaker fronts, artisan lighting, and subtle dark accents.',
    images: ['/portfolio-background-02.webp'],
    doorStyle: 'Shaker with dark accents',
    finish: 'Painted, soft-sheen',
    featured: true,
  },
  {
    slug: 'chefs-island-kitchen',
    title: "Chef's Island Kitchen",
    category: 'Kitchen',
    description:
      'A modern kitchen where the focus is on the over-the-island range hood for great culinary execution.',
    images: ['/portfolio-image-15.webp'],
    doorStyle: 'Flat-panel',
    finish: 'Matte with custom island hood',
    featured: true,
  },
  {
    slug: 'floating-double-vanity',
    title: 'Floating Double Vanity',
    category: 'Bathroom',
    description:
      'Floating vanity with double sinks, custom storage solutions, and soft-close drawers.',
    images: ['/portfolio-image-04.webp'],
    doorStyle: 'Flat-panel, wall-mounted',
    finish: 'Moisture-resistant matte',
    featured: false,
  },
  {
    slug: 'mudroom-bench-cubbies',
    title: 'Mudroom Bench & Cubbies',
    category: 'Entryway',
    description:
      'Functional entryway with cushioned bench seating and personalized cubbies.',
    images: ['/portfolio-image-08.webp'],
    doorStyle: 'Open cubbies with bench seating',
    finish: 'Durable painted finish',
    featured: false,
  },
  {
    slug: 'marble-white-vanity',
    title: 'Marble & White Vanity',
    category: 'Bathroom',
    description:
      'A crisp white cabinetry paired with a white marble countertop and walls for a premium look.',
    images: ['/portfolio-image-11.webp'],
    doorStyle: 'Flat-panel white',
    finish: 'Marble countertop pairing',
    featured: true,
  },
  {
    slug: 'built-in-closet-system',
    title: 'Built-In Closet System',
    category: 'Closet',
    description:
      'A clean, white built-in closet designed for flexibility and everyday organization.',
    images: ['/services-image-03.webp'],
    doorStyle: 'Open shelving with drawers',
    finish: 'White melamine, adjustable',
    featured: true,
  },
];

export const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
