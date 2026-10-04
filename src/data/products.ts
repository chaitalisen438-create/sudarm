/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'Sleeveless Blouses' | 'Designer Blouses' | 'Daily Kurtis' | 'Printed Kurtis' | 'Festive Collection' | 'New Arrivals';
  type: 'blouse' | 'kurti';
  price: number;
  description: string;
  fabric: string;
  craft: string;
  sizes: string[];
  neckline: string;
  embroideryDetail: string;
  stylingTips: string;
  bgGradient: string; // Dynamic visual container representation
  svgArt: 'midnight_alpana' | 'jamdani_breeze' | 'sonar_tori' | 'kalighat_bloom' | 'shuli_festive' | 'hooghly_wave' | 'terracotta_crimson' | 'chaiti_chiffon';
}

export const PRODUCTS: Product[] = [
  {
    id: 'b-01',
    name: 'The Alpona Midnight',
    category: 'Sleeveless Blouses',
    type: 'blouse',
    price: 2200,
    description: 'Sleek, deep plum raw silk with hand-painted gold alpana motifs tracing the back neckline and refined side zippers for a tailored fit.',
    fabric: 'Raw Silk & Fine Cotton Lining',
    craft: 'Hand-painted Gold Alpana & Piping',
    sizes: ['32', '34', '36', '38', '40', '42'],
    neckline: 'Slightly high boat neck with deep-U back',
    embroideryDetail: 'Premium gold dust painting mimicking classical alpana patterns of Bengal.',
    stylingTips: 'Pairs beautifully with a cream Jamdani saree or solid linen drape with gold borders.',
    bgGradient: 'from-[#4B315C] via-[#351E44] to-[#251231]',
    svgArt: 'midnight_alpana'
  },
  {
    id: 'k-01',
    name: 'The Jamdani Breeze',
    category: 'Daily Kurtis',
    type: 'kurti',
    price: 1850,
    description: 'A diaphanous, breathable ivory-white soft mulmul cotton kurti with delicate self-weaving, perfect for warm tropical afternoons.',
    fabric: '100% Mulmul Cotton',
    craft: 'Dhaka Jamdani Hand-weaving',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    neckline: 'V-neck with delicate potli-button closure',
    embroideryDetail: 'Geometric buti (flower) motifs hand-woven directly into the loom warp.',
    stylingTips: 'Wear with loose-fit linen pants and single silver jhumkas.',
    bgGradient: 'from-[#FCF9F5] via-[#F2EDE4] to-[#E7DEC1]',
    svgArt: 'jamdani_breeze'
  },
  {
    id: 'b-02',
    name: 'The Sonar Tori',
    category: 'Designer Blouses',
    type: 'blouse',
    price: 3400,
    description: 'Rich Tussar silk sleeveless blouse adorned with heavy hand-crafted zardozi embroidery and a signature geometric back cutout.',
    fabric: 'Tussar Silk',
    craft: 'Zardozi Embroidery (Metal wires & beads)',
    sizes: ['34', '36', '38', '40', '42'],
    neckline: 'Classic sweetheart front with pentagonal back cutout',
    embroideryDetail: 'Ornate gold zari work outlining mango kalka and foliage motifs.',
    stylingTips: 'Elevate an antique red or crimson Banarasi saree for bridal or high-festive evenings.',
    bgGradient: 'from-[#C7A86B] via-[#B89454] to-[#9A7432]',
    svgArt: 'sonar_tori'
  },
  {
    id: 'k-02',
    name: 'The Kalighat Bloom',
    category: 'Printed Kurtis',
    type: 'kurti',
    price: 1690,
    description: 'An elegant straight-cut kurti in rose pink and deep violet, carrying prints inspired by Kalighat folk art paintings.',
    fabric: 'Premium Cambric Cotton',
    craft: 'Hand-screen printing with azo-free dyes',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    neckline: 'Mandarin collar with modern split-opening',
    embroideryDetail: 'Rich folk painting outlines capturing modern botanical stories.',
    stylingTips: 'Looks stunning when accessorized with traditional terracotta beads and oxidized brass cuffs.',
    bgGradient: 'from-[#D9A6B8] via-[#C98B9F] to-[#B77187]',
    svgArt: 'kalighat_bloom'
  },
  {
    id: 'k-03',
    name: 'The Shuli Festive Set',
    category: 'Festive Collection',
    type: 'kurti',
    price: 4200,
    description: 'A luxurious festive tunic set in bright coral pink and antique gold, complete with hand-embroidered organza dupatta and cropped trousers.',
    fabric: 'Chanderi Silk-Cotton blend',
    craft: 'Gota-patti & Fine Aari Embroidery',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    neckline: 'Round neck with sophisticated keyhole front',
    embroideryDetail: 'Intricate floral creepers depicting the sweet Shuli (Nyctanthes) flower of autumn.',
    stylingTips: 'Perfect for Anjali morning on Durga Puja. Accessorize with golden bangles and white fresh jasmine.',
    bgGradient: 'from-[#E08A8C] via-[#CE6B6E] to-[#B84E51]',
    svgArt: 'shuli_festive'
  },
  {
    id: 'k-04',
    name: 'The Hooghly Wave',
    category: 'New Arrivals',
    type: 'kurti',
    price: 2100,
    description: 'Asymmetric sleeveless contemporary kurti with side waist tie-ups, dyed in deep organic indigo representing the calm Hooghly river waves.',
    fabric: 'Khadi Cotton-Linen',
    craft: 'Natural Indigo Ferment Dyeing',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    neckline: 'One-shoulder illusion with broad sleeveless strap',
    embroideryDetail: 'Minimalist wave stitching along the side seam using ivory sashiko thread.',
    stylingTips: 'Stylize with wide-legged denim or white culottes for a modern Indo-Western aesthetic.',
    bgGradient: 'from-[#2F4D6F] via-[#203650] to-[#142335]',
    svgArt: 'hooghly_wave'
  },
  {
    id: 'b-03',
    name: 'The Terracotta Crimson',
    category: 'Designer Blouses',
    type: 'blouse',
    price: 2800,
    description: 'Hand-block printed cotton-linen blouse in terracotta crimson, with pleated shoulders and handcrafted clay button accents.',
    fabric: 'Handloomed Cotton-Linen',
    craft: 'Dabu Mud-Resist Block Printing',
    sizes: ['32', '34', '36', '38', '40'],
    neckline: 'Modest high-round neck',
    embroideryDetail: 'Earthy block print motifs reminiscent of Bishnupur temple tiles.',
    stylingTips: 'Exquisite when matched with mustard tussar sarees or light beige cotton mulmuls.',
    bgGradient: 'from-[#9B3D30] via-[#852C20] to-[#6E1C12]',
    svgArt: 'terracotta_crimson'
  },
  {
    id: 'b-04',
    name: 'The Chaiti Chiffon',
    category: 'Sleeveless Blouses',
    type: 'blouse',
    price: 1950,
    description: 'Soft lavender breathable georgette-chiffon sleeveless blouse, featuring delicate kantha running stitches tracing its clean hems.',
    fabric: 'Vegan Georgette-Chiffon',
    craft: 'Kantha Run Stitch Work',
    sizes: ['32', '34', '36', '38', '40', '42'],
    neckline: 'Sleek sleeveless halter-style neck',
    embroideryDetail: 'White cotton thread hand-stitches outlining the back hook-eye seam.',
    stylingTips: 'Perfect for evening high teas. Wear with a lavender or silver chiffon saree.',
    bgGradient: 'from-[#B79ACF] via-[#A180BA] to-[#8C69A7]',
    svgArt: 'chaiti_chiffon'
  }
];

export const CATEGORIES = [
  {
    id: 'cat-1',
    name: 'Sleeveless Blouses',
    subTitle: 'Modern minimal silhouettes',
    desc: 'Sophisticated back cuts and sleeveless comfort designed for flowing sarees.',
    photoLabel: 'Sleeveless Raw Silk & Chiffon Blouses'
  },
  {
    id: 'cat-2',
    name: 'Designer Blouses',
    subTitle: 'Embroidered works of art',
    desc: 'Intricate zardozi, hand-painted alpana, and heavy embellishments for statements.',
    photoLabel: 'Heavy Handcrafted Zardozi Blouses'
  },
  {
    id: 'cat-3',
    name: 'Daily Kurtis',
    subTitle: 'Comfortable everyday luxury',
    desc: 'Soft mulmul cottons and hand-loomed khadi designed for the modern workday.',
    photoLabel: 'DHAKA JAMDANI & MULMUL COTTONS'
  },
  {
    id: 'cat-4',
    name: 'Printed Kurtis',
    subTitle: 'Crafted patterns & blockprints',
    desc: 'Bold blockprints and folk Kalighat floral motifs printed on premium cambrics.',
    photoLabel: 'DABU RESIST & HANDBLOCK PRINTS'
  },
  {
    id: 'cat-5',
    name: 'Festive Collection',
    subTitle: 'Grand autumn celebrations',
    desc: 'Chanderi silk sets and ornate embellishments built for spectacular festive mornings.',
    photoLabel: 'CHANDERI SILK & GOTA PATTI FESTIVE'
  },
  {
    id: 'cat-6',
    name: 'New Arrivals',
    subTitle: 'Indo-Western styling',
    desc: 'Asymmetrical cuts, organic natural indigo dyes, and modern drapery systems.',
    photoLabel: 'CONTEMPORARY INDIGO KHADI WAVE'
  }
];
