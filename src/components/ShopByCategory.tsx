/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CATEGORIES } from '../data/products';
import ProductSVGArt from './ProductSVGArt';

interface ShopByCategoryProps {
  onCategorySelect: (category: string) => void;
}

export default function ShopByCategory({ onCategorySelect }: ShopByCategoryProps) {
  // Map categories to high-end custom SVGs or graphics for authentic representation
  const artMap: Record<string, 'midnight_alpana' | 'jamdani_breeze' | 'sonar_tori' | 'kalighat_bloom' | 'shuli_festive' | 'hooghly_wave'> = {
    'Sleeveless Blouses': 'midnight_alpana',
    'Designer Blouses': 'sonar_tori',
    'Daily Kurtis': 'jamdani_breeze',
    'Printed Kurtis': 'kalighat_bloom',
    'Festive Collection': 'shuli_festive',
    'New Arrivals': 'hooghly_wave'
  };

  // High-fidelity generated photography mappings matching the user-provided grid images
  const imageMap: Record<string, string> = {
    'cat-1': '/images/categories/sleeveless-blouses.jpg',
    'cat-2': '/images/categories/designer-blouses.jpg',
    'cat-3': '/images/categories/daily-kurtis.jpg',
    'cat-4': '/images/categories/printed-kurtis.jpg',
    'cat-5': '/images/categories/festive-collection.jpg',
    'cat-6': '/images/categories/new-arrivals.jpg'
  };

  return (
    <section className="relative w-full bg-[#FCF9F5] py-16 lg:py-24 border-t border-[#4B315C]/5" id="shop-categories">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with high-end editorial styling */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#C7A86B] uppercase font-sans">Curated Niches</p>
          <h2 className="mt-2 font-serif text-3xl font-light tracking-tight text-[#4B315C] sm:text-4xl text-balance">
            SHOP BY <span className="font-serif font-semibold italic text-[#C7A86B]">CATEGORY</span>
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-12 bg-[#C7A86B]/40" />
        </div>

        {/* 6 Category Grid with consistent photography & layout qualities */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => {
            const svgArtName = artMap[category.name] || 'midnight_alpana';
            
            return (
              <div
                key={category.id}
                onClick={() => onCategorySelect(category.name)}
                className="group relative cursor-pointer overflow-hidden border border-[#4B315C]/10 bg-white shadow-md rounded-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* 65% height focused layout */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F1ECE4] flex items-center justify-center">
                  
                  {/* High-fidelity model photo matching user uploads */}
                  <img
                    src={imageMap[category.id] || `/images/products/${category.id}.jpg`}
                    alt={category.name}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 z-10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Fallback SVG art render ensures zero broken images */}
                  <ProductSVGArt artType={svgArtName} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Subtle elegant gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B315C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
                  
                  {/* Antique Gold Overlay Border inside on hover */}
                  <div className="absolute inset-4 border border-[#C7A86B] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none z-30" />
                </div>

                {/* Info Area */}
                <div className="p-5 text-left bg-[#FCF9F5]">
                  <p className="text-[10px] font-semibold tracking-widest text-[#C7A86B] uppercase">
                    {category.subTitle}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-[#4B315C] group-hover:text-[#C7A86B] transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#4B315C]/75 font-sans line-clamp-2">
                    {category.desc}
                  </p>
                  
                  {/* Navigation trigger button inside category card */}
                  <div className="mt-4 flex items-center text-xs font-semibold tracking-wider text-[#4B315C] group-hover:text-[#C7A86B] transition-all">
                    <span className="uppercase">Browse Category</span>
                    <span className="ml-2 transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
