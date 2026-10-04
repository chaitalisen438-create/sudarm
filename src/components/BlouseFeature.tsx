/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BlouseFeatureProps {
  onShopBlouses: () => void;
}

export default function BlouseFeature({ onShopBlouses }: BlouseFeatureProps) {
  // 4 Close-up design details
  const closeUps = [
    {
      title: "Sleek Neckline",
      desc: "Graceful high boat neck tracing the collarbone, leading into a deep back curve.",
      visualId: "neckline"
    },
    {
      title: "Fine Embroidery",
      desc: "Delicate gold-painted alpana trims and fine zardozi running stitch contours.",
      visualId: "embroidery"
    },
    {
      title: "Organic Fabric",
      desc: "Bespoke raw silk blended with soft hand-loomed cambric cotton linings.",
      visualId: "fabric"
    },
    {
      title: "Sleeveless Cut",
      desc: "Tailored comfortable armholes with subtle pipings that prevent shoulder strain.",
      visualId: "sleeve"
    }
  ];

  return (
    <section className="relative w-full bg-[#4B315C] py-20 text-white overflow-hidden">
      
      {/* Background fine motifs - subtle traditional layout */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="1" strokeDasharray="10 5" />
          <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1" />
          <circle cx="800" cy="400" r="200" stroke="white" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title area */}
        <div className="text-left mb-12">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#C7A86B] uppercase font-sans">Craftsmanship Spotlight</p>
          <h2 className="mt-2 font-serif text-3xl font-light tracking-wide text-[#FCF9F5] sm:text-4xl lg:text-5xl">
            THE PERFECT <span className="font-serif font-semibold italic text-[#C7A86B]">BLOUSE</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-[#FCF9F5]/85">
            Designed to make every saree look effortlessly special. Our blouses are engineered with modern side zipper systems, elasticated margin threads, and gorgeous back cutouts.
          </p>
        </div>

        {/* Core feature layout with image on right and close-ups on left */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT: 4 Close-up details cards with luxurious interactive touch */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {closeUps.map((item, index) => (
              <div
                key={index}
                className="group relative border border-[#FCF9F5]/10 bg-white/5 p-6 rounded-xl hover:border-[#C7A86B]/40 hover:bg-white/10 transition-all duration-300"
              >
                {/* Numeric index */}
                <div className="text-xs font-semibold font-mono tracking-wider text-[#C7A86B] mb-3">
                  {`0${index + 1}. DETAIL`}
                </div>
                
                <h3 className="font-serif text-lg font-medium text-[#FCF9F5] group-hover:text-[#C7A86B] transition-colors">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-xs text-[#FCF9F5]/80 font-sans leading-relaxed">
                  {item.desc}
                </p>

                {/* Subtle graphic representational motif inside card */}
                <div className="absolute bottom-3 right-4 h-5 w-5 opacity-10 group-hover:opacity-35 transition-all text-[#C7A86B]">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            ))}

            <div className="sm:col-span-2 mt-4 text-left">
              <button
                onClick={onShopBlouses}
                className="group relative inline-flex h-12 items-center justify-center border border-[#C7A86B] bg-transparent px-8 text-xs font-semibold tracking-[0.2em] text-[#C7A86B] hover:bg-[#C7A86B] hover:text-[#4B315C] transition-all duration-300"
              >
                SHOP BLOUSES
                <span className="ml-2 transform translate-x-0 group-hover:translate-x-1.5 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Major Blouse Editorial Image in Plum */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#3C214C]">
              
              <img
                src="/images/blouses/blouse-editorial.jpg"
                alt="Sophisticated sleeveless blouse with saree on an adult Bengali woman"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Atmospheric lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating brand capsule badge (No static capsule badging on metadata, but interactive or brand labels are perfect!) */}
              <div className="absolute bottom-4 right-4 bg-[#C7A86B] text-white px-3 py-1 text-[10px] tracking-widest font-semibold uppercase">
                THE PLUM EDIT
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
