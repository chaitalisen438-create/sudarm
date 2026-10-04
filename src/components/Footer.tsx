/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onFilterSelect: (category: string) => void;
}

export default function Footer({ onScrollToTop, onFilterSelect }: FooterProps) {
  return (
    <footer className="bg-[#4B315C] text-white border-t border-[#C7A86B]/20 py-16 relative overflow-hidden">
      
      {/* Delicate gold geometric layout overlay in background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90%" cy="80%" r="200" stroke="#C7A86B" strokeWidth="1" />
          <line x1="0" y1="100" x2="1000" y2="100" stroke="#C7A86B" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start border-b border-white/10 pb-12">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 text-left">
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onScrollToTop();
              }}
              className="inline-block bg-white p-3 rounded-xl shadow-md border border-[#C7A86B]/20 hover:scale-105 transition-transform duration-300 max-w-[180px]"
            >
              <img
                src="/images/logo/sundaram-logo.jpg"
                alt="Sundaram Blouse & Kurti Luxury Brand Logo"
                className="w-full h-auto object-contain"
              />
            </a>
            
            <p className="mt-4 text-xs sm:text-sm text-[#FCF9F5]/80 font-sans leading-relaxed max-w-sm">
              We weave stories of traditional Bengali aesthetics with modern sleeveless silhouettes. From Shantipur looms to modern luxury wardrobes, Sundaram represents the sophisticated, independent Bengali spirit.
            </p>

            {/* Cultural origin marker */}
            <div className="mt-6 flex items-center gap-2 text-xs text-[#C7A86B] font-semibold">
              <MapPin className="h-4 w-4 stroke-[1.5]" />
              <span>Sourced & Tailored in Bengal, India</span>
            </div>
          </div>

          {/* Quick Collection links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7A86B] mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#FCF9F5]/75">
              <li>
                <button 
                  onClick={() => onFilterSelect('Sleeveless Blouses')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Sleeveless Blouses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onFilterSelect('Designer Blouses')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Designer Blouses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onFilterSelect('Daily Kurtis')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Daily Kurtis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onFilterSelect('Printed Kurtis')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Printed Kurtis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onFilterSelect('Festive Collection')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Festive Puja Edit
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Promise and Contact */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7A86B]">
              THE SUNDARAM PROMISE
            </h4>
            <p className="text-xs text-[#FCF9F5]/75 leading-relaxed font-sans">
              All materials are 100% natural and source-certified. We support local hand-weaver cooperatives in West Bengal. Easy exchanges within 7 days.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#FCF9F5]/80">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#C7A86B] stroke-[1.5]" />
                <span>care@sundaramfashion.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#C7A86B] stroke-[1.5]" />
                <span>+91 98300 98300 (Mon-Sat, 10 AM - 6 PM)</span>
              </p>
            </div>
          </div>

        </div>

        {/* Quiet copyright sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FCF9F5]/60">
          <p>© 2026 Sundaram Blouses & Kurtis. All rights reserved.</p>
          
          <p className="flex items-center gap-1.5 mt-4 sm:mt-0">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 text-[#D9A6B8] fill-[#D9A6B8]" />
            <span>in West Bengal</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
