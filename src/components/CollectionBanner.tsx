/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface CollectionBannerProps {
  onExplore: () => void;
}

export default function CollectionBanner({ onExplore }: CollectionBannerProps) {
  return (
    <section className="relative w-full bg-[#FCF9F5] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Full-width premium wide banner block with text overlay card inside or adjacent */}
        <div className="relative overflow-hidden border border-[#4B315C]/10 bg-[#E8E4DF] shadow-xl rounded-2xl aspect-[16/9] lg:aspect-[21/9]">
          
          {/* Main Wide Campaign Photo */}
          <img
            src="/images/banners/collection-banner.jpg"
            alt="The New Bengali Edit featuring elegant sleeveless blouses, sarees and premium printed kurtis"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover object-center hover:scale-[1.01] transition-transform duration-700"
          />

          {/* Deep Plum Scrim to ensure text overlay readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:from-[#4B315C]/90 lg:via-[#4B315C]/45 lg:to-transparent" />

          {/* Banner Content Container overlayed on the left */}
          <div className="absolute inset-0 flex items-center px-6 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-md text-left text-white animate-fade-in">
              
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[#C7A86B]">
                <span>VOL. II</span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span>LIMITED PRODUCTION</span>
              </div>

              <h2 className="mt-4 font-serif text-3xl font-light tracking-wide text-white sm:text-4xl md:text-5xl leading-tight text-balance">
                THE NEW <br />
                <span className="font-serif font-semibold italic text-[#C7A86B]">BENGALI</span> EDIT
              </h2>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-[#FCF9F5]/90 font-sans leading-relaxed">
                Traditional inspiration. Modern expression. Bridging ancestral weaving skills with sleeveless silhouettes made for the contemporary woman.
              </p>

              <div className="mt-8">
                <button
                  onClick={onExplore}
                  className="group relative inline-flex h-11 items-center justify-center border-b-2 border-[#C7A86B] bg-transparent text-xs font-semibold tracking-[0.25em] text-[#C7A86B] hover:text-white hover:border-white transition-all duration-300"
                >
                  EXPLORE COLLECTION
                  <span className="ml-2 transform translate-x-0 group-hover:translate-x-1.5 transition-transform">→</span>
                </button>
              </div>

            </div>
          </div>

          {/* Tiny fine-print label in the corner to highlight editorial styling */}
          <div className="absolute bottom-4 right-6 hidden sm:block text-[9px] tracking-widest text-[#FCF9F5]/60 font-semibold uppercase font-sans">
            Model: Avantika & Meera / Autumn campaign
          </div>

        </div>

      </div>
    </section>
  );
}
