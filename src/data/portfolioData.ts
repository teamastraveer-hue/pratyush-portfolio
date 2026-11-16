export type FilterCategory =
  | 'All'
  | 'Posters'
  | 'Product Designs'
  | 'Social Media'
  | 'Creative Work';

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  filterGroups: Exclude<FilterCategory, 'All'>[];
  imageUrl: string;
  description: string;
  tools: string;
}

export interface ExpertiseItem {
  id: string;
  name: string;
  monogram: string;
  role: string;
  description: string;
  accentBg: string;
  accentText: string;
}

export const BRAND_LOGO_URL =
  '/assets/aistudio/2f9f4a61-bcbb-402a-a124-c1758427bf84_a80e993e.png';

export const HERO_PORTRAIT_URL =
  '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.26.04_PM_3417419d.jpeg';

export const PORTRAIT_URL =
  '/assets/aistudio/WhatsApp_Image_2026-11-16_at_11.00.34_PM_bbda93e3.jpeg';

export const CONTACT_EMAIL = 'pratyushworks18@gmail.com';

export const FILTER_CATEGORIES: FilterCategory[] = [
  'All',
  'Posters',
  'Product Designs',
  'Social Media',
  'Creative Work',
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'audi-b8-plus',
    title: 'AUDI B8 PLUS',
    category: 'Automotive Design',
    filterGroups: ['Posters', 'Creative Work'],
    imageUrl: '/assets/aistudio/AUDI_B8_PLUS_e8620e2e.jpg',
    description:
      'Multi-panel diagonal automotive editorial layout highlighting performance, interior craftsmanship, and modern engineering.',
    tools: 'Adobe Photoshop · Adobe Illustrator',
  },
  {
    id: 'boat-headphones',
    title: 'boAt HEADPHONES',
    category: 'Product Advertisement',
    filterGroups: ['Product Designs'],
    imageUrl: '/assets/aistudio/BOAT_HEADSET_f6e880d6.jpg',
    description:
      'Studio-lit product showcase poster designed with dramatic overhead spotlighting, clean metallic shading, and crisp display typography.',
    tools: 'Adobe Photoshop',
  },
  {
    id: 'creativity',
    title: 'CREATIVITY',
    category: 'Creative Poster',
    filterGroups: ['Posters', 'Creative Work'],
    imageUrl: '/assets/aistudio/CREATIVITY_1b7d78e3.png',
    description:
      'High-contrast editorial poster blending monochrome portraiture, textured canvas grain, red geometric focal framing, and vertical outlined typography.',
    tools: 'Adobe Photoshop',
  },
  {
    id: 'instagram-follow',
    title: 'INSTAGRAM FOLLOW',
    category: 'Social Media Design',
    filterGroups: ['Social Media'],
    imageUrl: '/assets/aistudio/INSTAGRAM_FOLLOW_d8a43712.jpg',
    description:
      'Social growth banner featuring cut-out subject rim lighting, torn paper texture accents, brush-stroke typography, and clean callout geometry.',
    tools: 'Adobe Photoshop',
  },
  {
    id: 'one8',
    title: 'one8 SHOES',
    category: 'Product Advertisement',
    filterGroups: ['Product Designs'],
    imageUrl: '/assets/aistudio/one8_c2177c06.png',
    description:
      'Bold athletic footwear promotional visual combining oversized background display type, layered depth shadows, and energetic orange accents.',
    tools: 'Adobe Photoshop',
  },
  {
    id: 'the-legend-arrives',
    title: 'THE LEGEND ARRIVES',
    category: 'Automotive Advertising',
    filterGroups: ['Posters', 'Creative Work'],
    imageUrl: '/assets/aistudio/PHOTOSHOP_VK_6_ffeac99c.jpg',
    description:
      'High-impact motorcycle launch composition utilizing atmospheric smoke blending, motion speed lines, and bold crimson lighting.',
    tools: 'Adobe Photoshop',
  },
  {
    id: 'why-start-physics-early',
    title: 'WHY START PHYSICS EARLY?',
    category: 'Educational Advertising / Physics Education Campaign',
    filterGroups: ['Posters'],
    imageUrl: '/assets/aistudio/Physics_Poster_5303d90e.jpg',
    description:
      'Educational campaign poster for WaveMind Education featuring blue-highlighted PHYSICS typography, an illustrated student studying with physics formulas, three yellow benefit callouts, and the "Early Learning. Strong concept. Bright future." slogan.',
    tools: 'Adobe Photoshop · Adobe Illustrator',
  },
  {
    id: 'big-goals-need-early-start',
    title: 'BIG GOALS NEED EARLY START',
    category: 'Educational Design',
    filterGroups: ['Posters'],
    imageUrl: '/assets/aistudio/GOAL_5f9f15c3.jpg',
    description:
      'Motivational academic poster for WaveMind Education pairing NSEP and INPHO pathway highlights with institute icons (IIT, IISc) and an illustrative mountain-road climb toward bright future goals.',
    tools: 'Adobe Photoshop · Adobe Illustrator',
  },
  {
    id: 'pratyush-da-dhaba',
    title: 'PRATYUSH DA DHABA',
    category: 'Food Advertisement',
    filterGroups: ['Product Designs', 'Social Media'],
    imageUrl: '/assets/aistudio/Pratyush_Da_Dhaba__e92a1a6c.png',
    description:
      'Appetizing quick-service restaurant promotional creative designed with warm golden-amber contrast, custom emblem lockup, and clear offer hierarchy.',
    tools: 'Adobe Photoshop · Adobe Illustrator',
  },
];

export const SOFTWARE_EXPERTISE: ExpertiseItem[] = [
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    monogram: 'Ps',
    role: 'Photo Manipulation & Print',
    description:
      'Compositing, color grading, product retouching, lighting effects, and high-impact promotional posters.',
    accentBg: 'bg-[#001E36] dark:bg-[#001E36]',
    accentText: 'text-[#31A8FF]',
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    monogram: 'Ai',
    role: 'Vector & Brand Identity',
    description:
      'Clean vector logos, custom typography lockups, scalable emblems, and structured print layouts.',
    accentBg: 'bg-[#330000] dark:bg-[#330000]',
    accentText: 'text-[#FF9A00]',
  },
  {
    id: 'capcut',
    name: 'CapCut',
    monogram: 'CC',
    role: 'Motion & Social Reels',
    description:
      'Dynamic short-form edits, smooth keyframe transitions, beat-synced reels, and kinetic captions.',
    accentBg: 'bg-[#181826] dark:bg-[#1E1E2E]',
    accentText: 'text-white',
  },
  {
    id: 'premiere-pro',
    name: 'Adobe Premiere Pro',
    monogram: 'Pr',
    role: 'Video Editing & Motion',
    description:
      'Timeline editing, color grading, audio synchronization, transitions, and polished promotional video cuts.',
    accentBg: 'bg-[#00005B] dark:bg-[#00005B]',
    accentText: 'text-[#9999FF]',
  },
];
