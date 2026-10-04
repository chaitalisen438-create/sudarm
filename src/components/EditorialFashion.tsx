/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Heart, CheckCircle } from 'lucide-react';

interface EditorialFashionProps {
  onDiscover: () => void;
}

export default function EditorialFashion({ onDiscover }: EditorialFashionProps) {
  return (
    <section className="relative w-full bg-[#FCF9F5] py-16 lg:py-24 border-t border-[#4B315C]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Large Split Section Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT: Large Portrait Fashion Photography of an adult Bengali woman */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-2xl border border-[#4B315C]/10 shadow-xl bg-[#EFECE7]">
              
              <img
                src="/images/lifestyle/editorial-split-kurti.jpg"
                alt="Beautiful adult Bengali woman in a premium designer printed kurti"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center hover:scale-[1.03] transition-transform duration-700"
              />

              {/* Delicate lighting flare overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B315C]/30 via-transparent to-transparent pointer-events-none" />

              {/* Symmetrical golden border inside */}
              <div className="absolute inset-4 border border-[#C7A86B]/30 rounded-lg pointer-events-none" />
              
              {/* Overlay brand watermark tag */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-[9px] tracking-[0.2em] font-semibold text-[#4B315C] uppercase">
                Sundaram Handcrafted
              </div>
            </div>
          </div>

          {/* RIGHT: Large Editorial Typography & Highlights */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-left flex flex-col justify-center lg:pl-8">
            
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-[#C7A86B]">
              <span>OUR MANIFESTO</span>
              <span aria-hidden="true" className="text-[#4B315C]/20">·</span>
              <span>SLOW FASHION</span>
            </div>

            <h2 className="font-serif text-3xl font-light tracking-wide text-[#4B315C] sm:text-4xl md:text-5xl leading-tight text-balance">
              EFFORTLESS <br />
              <span className="font-serif font-semibold italic text-[#C7A86B]">BENGALI</span> ELEGANCE
            </h2>

            <p className="mt-6 text-base text-[#4B315C]/80 font-sans leading-relaxed">
              Designed for women who love timeless Indian fashion with a modern touch. We preserve old-world textile craftsmanship from the heart of Bengal, ensuring that every sleeve seam and embroidery detail is a quiet tribute to slow luxury.
            </p>

            {/* Three feature points */}
            <div className="mt-8 space-y-5">
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B79ACF]/10 text-[#C7A86B]">
                  <Sparkles className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-[#4B315C] uppercase">
                    PREMIUM FABRICS
                  </h3>
                  <p className="mt-1 text-xs text-[#4B315C]/70">
                    Hand-loomed cotton-linen, authentic mulmul drapes, and organic tussar silk with exquisite skin comfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B79ACF]/10 text-[#C7A86B]">
                  <Heart className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-[#4B315C] uppercase">
                    ELEGANT DESIGNS
                  </h3>
                  <p className="mt-1 text-xs text-[#4B315C]/70">
                    Refined necklines, sophisticated sleeveless silhouettes, and bespoke embroidery lines for all occasions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B79ACF]/10 text-[#C7A86B]">
                  <CheckCircle className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-[#4B315C] uppercase">
                    COMFORTABLE FIT
                  </h3>
                  <p className="mt-1 text-xs text-[#4B315C]/70">
                    Tailored side zippers, elastic gussets, and soft cambric lining ensuring a snug but moving posture.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10">
              <button
                onClick={onDiscover}
                className="group relative flex h-12 items-center justify-center border border-[#4B315C] bg-[#4B315C] px-8 text-xs font-semibold tracking-[0.2em] text-white hover:bg-[#C7A86B] hover:border-[#C7A86B] transition-all duration-300"
              >
                DISCOVER OUR COLLECTION
                <span className="ml-2 transform translate-x-0 group-hover:translate-x-1.5 transition-transform">→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
