/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface KurtiFeatureProps {
  onShopKurtis: () => void;
}

export default function KurtiFeature({ onShopKurtis }: KurtiFeatureProps) {
  return (
    <section className="relative w-full bg-[#FCF9F5] py-20 overflow-hidden border-t border-[#4B315C]/5">
      
      {/* Light traditional patterns in background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50 L400 50M0 150 L400 150M200 0 L200 400" stroke="#4B315C" strokeWidth="2" strokeDasharray="10 5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Side-by-Side Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT: Premium Editorial Kurti Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg aspect-[4/3] overflow-hidden rounded-2xl border border-[#4B315C]/10 shadow-xl bg-[#EBE7E2]">
              
              <img
                src="/images/kurtis/kurti-editorial.jpg"
                alt="Bengali woman wearing a stylish premium kurti in a modern Kolkata-inspired interior"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Natural solar/window lighting shadow scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Captions */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md text-[9px] tracking-widest text-[#4B315C] font-semibold uppercase">
                Dhaka Handlooms
              </div>
            </div>
          </div>

          {/* RIGHT: Text content and button */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center lg:pl-8">
            
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-[#C7A86B]">
              <span>DAILY COMFORT</span>
              <span aria-hidden="true" className="text-[#4B315C]/20">·</span>
              <span>ORGANIC TEXTILES</span>
            </div>

            <h2 className="font-serif text-3xl font-light tracking-wide text-[#4B315C] sm:text-4xl md:text-5xl leading-tight">
              EVERYDAY, <br />
              <span className="font-serif font-semibold italic text-[#C7A86B]">ELEVATED</span>.
            </h2>

            <p className="mt-6 text-sm sm:text-base text-[#4B315C]/80 font-sans leading-relaxed">
              Beautiful kurtis made for workdays, weekends and special moments. Crafted in premium handspun cambric cottons, pure mulmuls, and indigo tie-dyes, these tunics maintain a featherlight weight on warm days while keeping you effortlessly elegant.
            </p>

            {/* List of sub-specifications */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-l border-[#C7A86B]/40 pl-6">
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-[#4B315C] uppercase">Zero Heat Retained</h4>
                <p className="mt-1 text-[11px] text-[#4B315C]/70">Woven with micro-pores that release humidity instantly.</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-[#4B315C] uppercase">Sashiko Details</h4>
                <p className="mt-1 text-[11px] text-[#4B315C]/70">Fine, tiny running stitches outline pockets and neckline.</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-[#4B315C] uppercase">No Colors Bled</h4>
                <p className="mt-1 text-[11px] text-[#4B315C]/70">Natural dabu mud-resist dyes fixed with mineral salt.</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-[#4B315C] uppercase">Azo-Free Guarantee</h4>
                <p className="mt-1 text-[11px] text-[#4B315C]/70">Safe and environment friendly inks for daily wear.</p>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={onShopKurtis}
                className="group relative flex h-12 items-center justify-center border border-[#4B315C] bg-[#4B315C] px-8 text-xs font-semibold tracking-[0.2em] text-white hover:bg-[#C7A86B] hover:border-[#C7A86B] transition-all duration-300"
              >
                SHOP KURTIS
                <span className="ml-2 transform translate-x-0 group-hover:translate-x-1.5 transition-transform">→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
