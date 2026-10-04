/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Heart, Shield, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#FCF9F5] min-h-screen py-16 animate-fade-in text-left">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#C7A86B] uppercase font-sans">THE SOUL OF SUNDARAM</p>
          <h1 className="mt-2 font-serif text-4xl font-light tracking-tight text-[#4B315C] sm:text-5xl">
            OUR SLOW <span className="font-serif font-semibold italic text-[#C7A86B]">FASHION</span> JOURNEY
          </h1>
          <div className="mx-auto mt-4 h-[1px] w-12 bg-[#C7A86B]/40" />
        </div>

        {/* Editorial Brand Image */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-[#4B315C]/15 shadow-md bg-slate-100 aspect-[3/2]">
          <img
            src="/images/lifestyle/about-handloom-craft.jpg"
            alt="Traditional wooden handlooms in a sunlit Bengal artisan weaving cooperative, showcasing our handloom slow-fashion heritage"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover hover:scale-[1.01] transition-transform duration-700"
          />
        </div>

        {/* Brand Mission & Story */}
        <div className="space-y-12">
          
          {/* Main Story Hero Block */}
          <div className="border border-[#4B315C]/10 bg-white rounded-2xl p-8 md:p-12 shadow-md">
            <h2 className="font-serif text-2xl font-bold text-[#4B315C] mb-6">
              Traditional Loom Weaving. Modern Expression.
            </h2>
            <p className="text-sm sm:text-base text-[#4B315C]/85 leading-relaxed font-sans space-y-4">
              Sundaram was born out of a deep adoration for the ancestral weavers of Bengal and a desire to merge this heritage with modern, graceful silhouettes. In an era dominated by fast-fashion synthetics, we chose a different path: **the slow, quiet rhythm of handloomed cotton and fine raw silks.**
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#4B315C]/85 leading-relaxed font-sans">
              Our designs cater to the modern woman who values confidence, breathable comfort, and intricate craftsmanship. Every halter neck seam, sleeveless piping, and hand-embroidered back cutout on our blouses and kurtis is crafted with painstaking attention to detail, making every drape feel uniquely yours.
            </p>
          </div>

          {/* Bengal Weaving Clusters Map Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#4B315C]/10 bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B79ACF]/15 text-[#C7A86B] mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#4B315C] mb-2">
                Shantipur & Fulia Weavers
              </h3>
              <p className="text-xs sm:text-sm text-[#4B315C]/75 font-sans leading-relaxed">
                Known globally for fine mulmul drapes and soft cambric textures. Our weavers weave lightweight cotton fabrics directly on traditional wooden handlooms, ensuring soft textures that breathe beautifully under tropical heat.
              </p>
            </div>

            <div className="border border-[#4B315C]/10 bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B79ACF]/15 text-[#C7A86B] mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#4B315C] mb-2">
                Hooghly & Dhaniakhali Artisans
              </h3>
              <p className="text-xs sm:text-sm text-[#4B315C]/75 font-sans leading-relaxed">
                The home of authentic natural indigo fermentation dyes and geometric Jamdani weave patterns. Here, artisans use dabu mud-resist block prints and organic vegetable fixes to guarantee long-lasting colors.
              </p>
            </div>
          </div>

          {/* Three Pillars of Sundaram */}
          <div className="border border-[#C7A86B]/20 bg-[#C7A86B]/5 rounded-2xl p-8 md:p-12">
            <h3 className="font-serif text-xl font-bold text-[#4B315C] text-center mb-8 uppercase tracking-wider">
              Our Creative Pillars
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
              <div className="space-y-3">
                <div className="mx-auto sm:mx-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#C7A86B] shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4B315C]">Artisan First</h4>
                <p className="text-xs text-[#4B315C]/70">We guarantee fair-trade wages and direct co-op support for handloom weaving families in Bengal.</p>
              </div>

              <div className="space-y-3">
                <div className="mx-auto sm:mx-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#C7A86B] shadow-sm">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4B315C]">Organic Fibers</h4>
                <p className="text-xs text-[#4B315C]/70">No polyester, no synthetic nylon. Strictly organic cambric cottons, pure mulmul, and vegan silks.</p>
              </div>

              <div className="space-y-3">
                <div className="mx-auto sm:mx-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#C7A86B] shadow-sm">
                  <Heart className="h-5 w-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#4B315C]">Hand-Stitched</h4>
                <p className="text-xs text-[#4B315C]/70">Every neckline and border is customized with classic Kantha running stitches by skilled tailors.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
