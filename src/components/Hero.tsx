/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HeroProps {
  onShopKurtis: () => void;
  onShopBlouses: () => void;
}

export default function Hero({ onShopKurtis, onShopBlouses }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#FCF9F5]">
      {/* Editorial Content Layout - Combines atmospheric backdrop with perfect responsive grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Negative Space & Large Editorial Typography */}
          <div className="z-10 flex flex-col justify-center lg:col-span-5 text-left animate-fade-in pr-0 lg:pr-4">
            
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#C7A86B]">
              <span>PREMIUM CAMPAIGN</span>
              <span aria-hidden="true" className="text-[#4B315C]/30">·</span>
              <span>KOLKATA EDIT</span>
            </div>

            <h1 className="font-serif text-4xl font-light tracking-tight text-[#4B315C] sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-balance">
              STYLE THAT <br />
              <span className="font-serif font-semibold italic text-[#C7A86B]">FEELS LIKE</span> <br />
              YOU
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-[#4B315C]/80 font-sans">
              Discover elegant sleeveless blouses and beautiful kurtis inspired by modern Bengali fashion. Crafted to embody traditional grace and contemporary confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onShopKurtis}
                className="group relative flex h-12 items-center justify-center border border-[#4B315C] bg-[#4B315C] px-8 text-xs font-semibold tracking-[0.2em] text-white hover:bg-[#C7A86B] hover:border-[#C7A86B] transition-all duration-300"
              >
                SHOP KURTIS
                <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={onShopBlouses}
                className="group relative flex h-12 items-center justify-center border border-[#4B315C] bg-transparent px-8 text-xs font-semibold tracking-[0.2em] text-[#4B315C] hover:bg-[#4B315C] hover:text-white transition-all duration-300"
              >
                SHOP BLOUSES
              </button>
            </div>

            {/* Subtle authentic cultural trust markers near text */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#4B315C]/10 pt-8 text-left">
              <div>
                <p className="font-serif text-lg font-semibold text-[#4B315C] tabular-nums">100%</p>
                <p className="text-[11px] tracking-wider text-[#4B315C]/60 uppercase font-sans mt-0.5">Handloomed</p>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-[#4B315C] tabular-nums">Dabu</p>
                <p className="text-[11px] tracking-wider text-[#4B315C]/60 uppercase font-sans mt-0.5">Indigo Print</p>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-[#4B315C] tabular-nums">Zardozi</p>
                <p className="text-[11px] tracking-wider text-[#4B315C]/60 uppercase font-sans mt-0.5">Fine Stitch</p>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Bengali Fashion Editorial Image */}
          <div className="relative lg:col-span-7 flex justify-end animate-scale-in">
            {/* Elegant Background Frame mimicking modern Kolkata interior arch */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#FCF9F5] via-[#B79ACF]/10 to-[#FCF9F5] opacity-50 blur-lg" />
            
            <div className="relative overflow-hidden border border-[#4B315C]/10 shadow-2xl rounded-2xl w-full max-w-[720px] aspect-[16/9] bg-[#EBE7E2]">
              <img
                src="/images/hero/bengali-fashion-hero.jpg"
                alt="Elegant adult Bengali woman wearing a beautiful pastel lavender sleeveless kurti with delicate silver embroidery in a sunlit veranda"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center hover:scale-[1.02] transition-transform duration-700"
              />
              {/* Overlay shadow scrim on bottom right to ensure subtle elegance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              
              {/* Discrete floating caption indicating location/photographer mood */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] tracking-widest text-[#4B315C] font-semibold uppercase">
                Campaign No. 04 / South Kolkata Edit
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
