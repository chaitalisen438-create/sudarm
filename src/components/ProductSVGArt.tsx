/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ArtProps {
  artType: 'midnight_alpana' | 'jamdani_breeze' | 'sonar_tori' | 'kalighat_bloom' | 'shuli_festive' | 'hooghly_wave' | 'terracotta_crimson' | 'chaiti_chiffon';
  className?: string;
}

export default function ProductSVGArt({ artType, className = "w-full h-full" }: ArtProps) {
  switch (artType) {
    case 'midnight_alpana':
      return (
        <svg viewBox="0 0 400 400" className={`${className} bg-gradient-to-br from-[#4B315C] to-[#2A1637]`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle grid pattern background */}
          <path d="M0 40H400M0 80H400M0 120H400M0 160H400M0 200H400M0 240H400M0 280H400M0 320H400M0 360H400" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
          <path d="M40 0V400M80 0V400M120 0V400M160 0V400M200 0V400M240 0V400M280 0V400M320 0V400M360 0V400" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
          
          {/* Traditional Alpana Circle (Back neck ornament) */}
          <circle cx="200" cy="180" r="110" stroke="#C7A86B" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.6" />
          <circle cx="200" cy="180" r="90" stroke="#C7A86B" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="200" cy="180" r="130" stroke="#C7A86B" strokeWidth="1" strokeOpacity="0.3" />
          
          {/* Alpana Petals */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 200 + Math.cos(angle) * 90;
            const y1 = 180 + Math.sin(angle) * 90;
            const x2 = 200 + Math.cos(angle) * 110;
            const y2 = 180 + Math.sin(angle) * 110;
            const cx1 = 200 + Math.cos(angle + 0.1) * 105;
            const cy1 = 180 + Math.sin(angle + 0.1) * 105;
            return (
              <g key={i}>
                <path d={`M ${x1} ${y1} Q ${cx1} ${cy1} ${x2} ${y2}`} stroke="#C7A86B" strokeWidth="2" strokeLinecap="round" />
                <circle cx={x2} cy={y2} r="3" fill="#D9A6B8" />
              </g>
            );
          })}
          
          {/* Central Lotus Motif */}
          <path d="M 200 145 C 185 170, 175 190, 200 215 C 225 190, 215 170, 200 145 Z" fill="#D9A6B8" fillOpacity="0.4" stroke="#C7A86B" strokeWidth="1.5" />
          <path d="M 200 160 C 190 180, 185 195, 200 215 C 215 195, 210 180, 200 160 Z" fill="#C7A86B" fillOpacity="0.3" />
          <path d="M 175 180 C 165 195, 175 210, 200 215 C 175 210, 165 195, 175 180 Z" fill="#B79ACF" fillOpacity="0.4" stroke="#C7A86B" strokeWidth="1" />
          <path d="M 225 180 C 235 195, 225 210, 200 215 C 225 210, 235 195, 225 180 Z" fill="#B79ACF" fillOpacity="0.4" stroke="#C7A86B" strokeWidth="1" />
          
          {/* Sleeveless Blouse Silhouette Outline */}
          <path d="M 130 80 Q 150 90 170 85 L 180 120 Q 200 125 220 120 L 230 85 Q 250 90 270 80 L 290 170 Q 250 200 200 200 Q 150 200 110 170 L 130 80 Z" stroke="#C7A86B" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
          
          <text x="200" y="340" fill="#FCF9F5" fillOpacity="0.6" fontSize="11" fontFamily="font-sans" letterSpacing="3" textAnchor="middle">FINE RAW SILK</text>
          <text x="200" y="360" fill="#C7A86B" fontSize="12" fontFamily="font-serif" letterSpacing="1" textAnchor="middle">Midnight Alpāna Series</text>
        </svg>
      );
      
    case 'jamdani_breeze':
      return (
        <svg viewBox="0 0 400 400" className={`${className} bg-gradient-to-br from-[#FCF9F5] to-[#F1ECE4]`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Soft loom texture */}
          <path d="M0 20H400M0 40H400M0 60H400M0 80H400M0 100H400M0 120H400M0 140H400M0 160H400M0 180H400M0 200H400M0 220H400M0 240H400M0 260H400M0 280H400M0 300H400M0 320H400M0 340H400M0 360H400M0 380H400" stroke="#4B315C" strokeOpacity="0.04" strokeWidth="0.5" />
          <path d="M20 0V400M40 0V400M60 0V400M80 0V400M100 0V400M120 0V400M140 0V400M160 0V400M180 0V400M200 0V400M220 0V400M240 0V400M260 0V400M280 0V400M300 0V400M320 0V400M340 0V400M360 0V400M380 0V400" stroke="#4B315C" strokeOpacity="0.04" strokeWidth="0.5" />
          
          {/* Classical Jamdani Butis in diagonal layout */}
          { [
            { x: 100, y: 100 }, { x: 300, y: 100 },
            { x: 200, y: 200 },
            { x: 100, y: 300 }, { x: 300, y: 300 }
          ].map((pt, index) => (
            <g key={index} transform={`translate(${pt.x}, ${pt.y})`}>
              {/* Central Diamond seed */}
              <rect x="-8" y="-8" width="16" height="16" transform="rotate(45)" fill="#4B315C" fillOpacity="0.25" stroke="#C7A86B" strokeWidth="1" />
              {/* Petals */}
              <circle cx="0" cy="-14" r="2.5" fill="#4B315C" />
              <circle cx="0" cy="14" r="2.5" fill="#4B315C" />
              <circle cx="-14" cy="0" r="2.5" fill="#4B315C" />
              <circle cx="14" cy="0" r="2.5" fill="#4B315C" />
              {/* Small diagonal sparkles */}
              <circle cx="-9" cy="-9" r="1.5" fill="#C7A86B" />
              <circle cx="9" cy="-9" r="1.5" fill="#C7A86B" />
              <circle cx="-9" cy="9" r="1.5" fill="#C7A86B" />
              <circle cx="9" cy="9" r="1.5" fill="#C7A86B" />
            </g>
          ))}
          
          {/* Elegant gold weaving border lines */}
          <rect x="20" y="20" width="360" height="360" stroke="#C7A86B" strokeWidth="1" strokeOpacity="0.3" />
          <rect x="25" y="25" width="350" height="350" stroke="#C7A86B" strokeWidth="0.5" strokeOpacity="0.2" />
          
          <text x="200" y="345" fill="#4B315C" fillOpacity="0.7" fontSize="10" fontFamily="font-sans" letterSpacing="4" textAnchor="middle">HANDWOVEN JAMDANI</text>
          <text x="200" y="365" fill="#C7A86B" fontSize="13" fontFamily="font-serif" letterSpacing="1" textAnchor="middle">Mulmul White Weave</text>
        </svg>
      );
      
    case 'sonar_tori':
      return (
        <svg viewBox="0 0 400 400" className={`${className} bg-gradient-to-br from-[#D9A6B8] via-[#BF8B9D] to-[#996577]`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tussar silk grains */}
          <path d="M0 0 L400 400M0 50 L350 400M50 0 L400 350M0 100 L300 400M100 0 L400 300" stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
          
          {/* Classic Bengali Kalka (Paisley) outline in gold */}
          <g transform="translate(200, 170) scale(1.1)">
            {/* Main body of Kalka */}
            <path d="M 0 70 C -45 60, -65 20, -55 -20 C -45 -60, -10 -90, 0 -110 C 10 -90, 45 -60, 55 -20 C 65 20, 45 60, 0 70 Z" fill="#FCF9F5" fillOpacity="0.1" stroke="#C7A86B" strokeWidth="2" strokeLinejoin="round" />
            {/* The elegant swirly crown of Kalka */}
            <path d="M 0 -110 C -5 -125, -20 -135, -35 -125 C -45 -115, -35 -95, -15 -95 C 0 -95, 10 -110, 0 -110 Z" fill="#C7A86B" fillOpacity="0.2" stroke="#C7A86B" strokeWidth="1.5" />
            
            {/* Internal zardozi stitch stars */}
            <circle cx="0" cy="-60" r="3" fill="#FCF9F5" />
            <circle cx="-15" cy="-30" r="2.5" fill="#FCF9F5" />
            <circle cx="15" cy="-30" r="2.5" fill="#FCF9F5" />
            <circle cx="-25" cy="0" r="2.5" fill="#C7A86B" />
            <circle cx="25" cy="0" r="2.5" fill="#C7A86B" />
            <circle cx="0" cy="20" r="4" fill="#FCF9F5" />
            <circle cx="0" cy="45" r="3.5" fill="#C7A86B" />
            
            {/* Internal floral flourishes */}
            <path d="M -20 -10 Q 0 -25 20 -10" stroke="#C7A86B" strokeWidth="1" strokeLinecap="round" />
            <path d="M -15 15 Q 0 5 15 15" stroke="#C7A86B" strokeWidth="1" strokeLinecap="round" />
          </g>
          
          {/* Gold border embroidery layout */}
          <path d="M 40 320 H 360" stroke="#C7A86B" strokeWidth="2" />
          <path d="M 40 325 H 360" stroke="#C7A86B" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 40 315 H 360" stroke="#C7A86B" strokeWidth="0.75" />
          
          <text x="200" y="350" fill="#FCF9F5" fillOpacity="0.8" fontSize="10" fontFamily="font-sans" letterSpacing="4" textAnchor="middle">GOLD ZARDOZI ON TUSSAR</text>
          <text x="200" y="370" fill="#C7A86B" fontSize="13" fontFamily="font-serif" letterSpacing="1" textAnchor="middle">Sonar Tori Designer</text>
        </svg>
      );
      
    case 'kalighat_bloom':
      return (
        <svg viewBox="0 0 400 400" className={`${className} bg-gradient-to-br from-[#4B315C] via-[#3C214C] to-[#1C0D26]`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Folk painting lines */}
          <g transform="translate(200, 180)">
            {/* Outer ornamental foliage ring */}
            <circle cx="0" cy="0" r="100" stroke="#D9A6B8" strokeWidth="1" strokeOpacity="0.2" />
            
            {/* Kalighat Stylized Flower */}
            <path d="M 0 -80 C -25 -80, -35 -40, 0 -20 C 35 -40, 25 -80, 0 -80 Z" fill="#D9A6B8" fillOpacity="0.6" stroke="#FCF9F5" strokeWidth="1.5" />
            <path d="M 0 80 C -25 80, -35 40, 0 20 C 35 40, 25 80, 0 80 Z" fill="#D9A6B8" fillOpacity="0.6" stroke="#FCF9F5" strokeWidth="1.5" />
            <path d="M -80 0 C -80 -25, -40 -35, -20 0 C -40 35, -80 25, -80 0 Z" fill="#B79ACF" fillOpacity="0.6" stroke="#FCF9F5" strokeWidth="1.5" />
            <path d="M 80 0 C 80 -25, 40 -35, 20 0 C 40 35, 80 25, 80 0 Z" fill="#B79ACF" fillOpacity="0.6" stroke="#FCF9F5" strokeWidth="1.5" />
            
            {/* Diagonal Petals */}
            <path d="M -55 -55 C -40 -70, -20 -40, -15 -15 C -40 -20, -70 -40, -55 -55 Z" fill="#C7A86B" fillOpacity="0.5" stroke="#FCF9F5" strokeWidth="1" />
            <path d="M 55 -55 C 40 -70, 20 -40, 15 -15 C 40 -20, 70 -40, 55 -55 Z" fill="#C7A86B" fillOpacity="0.5" stroke="#FCF9F5" strokeWidth="1" />
            <path d="M -55 55 C -40 70, -20 40, -15 15 C -40 20, -70 40, -55 55 Z" fill="#C7A86B" fillOpacity="0.5" stroke="#FCF9F5" strokeWidth="1" />
            <path d="M 55 55 C 40 70, 20 40, 15 15 C 40 20, 70 40, 55 55 Z" fill="#C7A86B" fillOpacity="0.5" stroke="#FCF9F5" strokeWidth="1" />
            
            {/* Center pistil */}
            <circle cx="0" cy="0" r="22" fill="#FCF9F5" stroke="#4B315C" strokeWidth="2" />
            <circle cx="0" cy="0" r="14" fill="#C7A86B" />
            <circle cx="0" cy="0" r="6" fill="#4B315C" />
          </g>
          
          <text x="200" y="345" fill="#FCF9F5" fillOpacity="0.6" fontSize="10" fontFamily="font-sans" letterSpacing="4" textAnchor="middle">KALIGHAT PATACHITRA SILHOUETTE</text>
          <text x="200" y="365" fill="#D9A6B8" fontSize="13" fontFamily="font-serif" letterSpacing="1" textAnchor="middle">Kalighat Bloom Tunic</text>
        </svg>
      );
      
    case 'shuli_festive':
      return (
        <svg viewBox="0 0 400 400" className={`${className} bg-gradient-to-br from-[#E08A8C] to-[#AA4D50]`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle gold rays */}
          <path d="M200 180 L200 40M200 180 L200 320M200 180 L60 180M200 180 L340 180M200 180 L100 80M200 180 L300 280M200 180 L300 80M200 180 L100 280" stroke="#C7A86B" strokeOpacity="0.15" strokeWidth="1" />
          
          {/* Beautiful Shuli Blossom (Orange center, white pinwheel petals) in circular cluster */}
          <g transform="translate(200, 180)">
            {/* Central Blossom */}
            <g transform="scale(1.4)">
              {/* Petals */}
              {Array.from({ length: 5 }).map((_, i) => {
                const angle = (i * 72 * Math.PI) / 180;
                const petalX = Math.cos(angle) * 18;
                const petalY = Math.sin(angle) * 18;
                const pathData = `M 0 0 C ${Math.cos(angle-0.4)*15} ${Math.sin(angle-0.4)*15}, ${Math.cos(angle-0.2)*28} ${Math.sin(angle-0.2)*28}, ${petalX} ${petalY} Q ${Math.cos(angle+0.2)*10} ${Math.sin(angle+0.2)*10} 0 0`;
                return (
                  <path key={i} d={pathData} fill="#FCF9F5" stroke="#FCF9F5" strokeWidth="0.5" />
                );
              })}
              {/* Distinctive Orange Stem/Center */}
              <circle cx="0" cy="0" r="5" fill="#E86230" />
              <circle cx="0" cy="0" r="2" fill="#FCF9F5" />
            </g>
            
            {/* Surrounding floating shuli blossoms */}
            {[
              { x: -60, y: -50, s: 0.7, r: 25 },
              { x: 70, y: -40, s: 0.8, r: 85 },
              { x: -50, y: 70, s: 0.75, r: 145 },
              { x: 65, y: 60, s: 0.85, r: 205 }
            ].map((blossom, index) => (
              <g key={index} transform={`translate(${blossom.x}, ${blossom.y}) scale(${blossom.s}) rotate(${blossom.r})`}>
                {Array.from({ length: 5 }).map((_, i) => {
                  const angle = (i * 72 * Math.PI) / 180;
                  const petalX = Math.cos(angle) * 18;
                  const petalY = Math.sin(angle) * 18;
                  const pathData = `M 0 0 C ${Math.cos(angle-0.4)*15} ${Math.sin(angle-0.4)*15}, ${Math.cos(angle-0.2)*28} ${Math.sin(angle-0.2)*28}, ${petalX} ${petalY} Q ${Math.cos(angle+0.2)*10} ${Math.sin(angle+0.2)*10} 0 0`;
                  return (
                    <path key={i} d={pathData} fill="#FCF9F5" stroke="#FCF9F5" strokeWidth="0.5" />
                  );
                })}
                <circle cx="0" cy="0" r="5" fill="#E86230" />
              </g>
            ))}
          </g>
          
          <rect x="30" y="30" width="340" height="340" stroke="#C7A86B" strokeWidth="1" strokeOpacity="0.25" />
          
          <text x="200" y="345" fill="#FCF9F5" fillOpacity="0.75" fontSize="10" fontFamily="font-sans" letterSpacing="4" textAnchor="middle">AUTUMN SHULI FESTIVE</text>
          <text x="200" y="365" fill="#C7A86B" fontSize="13" fontFamily="font-serif" letterSpacing="1" textAnchor="middle">Durga Puja Anjali Edition</text>
        </svg>
      );
      
    case 'hooghly_wave':
      return (
        <svg viewBox="0 0 400 400" className={`${className} bg-gradient-to-br from-[#2F4D6F] to-[#122338]`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Running waves representing Hooghly River */}
          <g stroke="#FCF9F5" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round">
            <path d="M -50 100 Q 50 70 150 100 T 350 100 T 550 100" />
            <path d="M -100 160 Q 0 130 100 160 T 300 160 T 500 160" strokeWidth="2.5" strokeOpacity="0.3" />
            <path d="M -50 220 Q 50 190 150 220 T 350 220 T 550 220" strokeWidth="1" strokeOpacity="0.15" />
            <path d="M -150 280 Q -50 250 50 280 T 250 280 T 450 280" strokeWidth="2" strokeOpacity="0.25" />
          </g>
          
          {/* Sashiko hand running stitches (vertical alignment) */}
          <g stroke="#C7A86B" strokeWidth="1.5" strokeDasharray="5 7" strokeOpacity="0.4">
            <line x1="60" y1="20" x2="60" y2="320" />
            <line x1="130" y1="20" x2="130" y2="320" />
            <line x1="200" y1="20" x2="200" y2="320" />
            <line x1="270" y1="20" x2="270" y2="320" />
            <line x1="340" y1="20" x2="340" y2="320" />
          </g>
          
          {/* Handloomed cotton spool motif in top corner */}
          <circle cx="340" cy="60" r="25" stroke="#C7A86B" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M 320 60 H 360" stroke="#C7A86B" strokeWidth="1.5" strokeOpacity="0.5" />
          <path d="M 340 40 V 80" stroke="#C7A86B" strokeWidth="1.5" strokeOpacity="0.5" />
          
          <text x="200" y="345" fill="#FCF9F5" fillOpacity="0.7" fontSize="10" fontFamily="font-sans" letterSpacing="4" textAnchor="middle">ORGANIC INDIGO KHADI</text>
          <text x="200" y="365" fill="#C7A86B" fontSize="13" fontFamily="font-serif" letterSpacing="1" textAnchor="middle">Hooghly Wave Asymmetric Tunic</text>
        </svg>
      );
      
    case 'terracotta_crimson':
      return (
        <svg viewBox="0 0 400 400" className={`${className} bg-gradient-to-br from-[#9B3D30] to-[#5C1E14]`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Terracotta tile relief grid */}
          <rect x="40" y="40" width="140" height="140" stroke="#FCF9F5" strokeOpacity="0.1" strokeWidth="1.5" />
          <rect x="220" y="40" width="140" height="140" stroke="#FCF9F5" strokeOpacity="0.1" strokeWidth="1.5" />
          <rect x="40" y="220" width="140" height="140" stroke="#FCF9F5" strokeOpacity="0.1" strokeWidth="1.5" />
          <rect x="220" y="220" width="140" height="140" stroke="#FCF9F5" strokeOpacity="0.1" strokeWidth="1.5" />
          
          {/* Bishnupur Temple motif carvings inside top-left tile */}
          <g transform="translate(110, 110) scale(0.6)">
            <circle cx="0" cy="0" r="40" stroke="#C7A86B" strokeWidth="2" strokeDasharray="4 2" />
            <path d="M -20 -15 L 0 -35 L 20 -15 C 20 15, -20 15, -20 -15 Z" fill="#C7A86B" fillOpacity="0.3" stroke="#C7A86B" strokeWidth="1.5" />
          </g>
          
          {/* Terracotta clay bird inside bottom-right tile */}
          <g transform="translate(290, 290) scale(0.65)">
            <path d="M -30 10 Q -10 -20 20 -20 C 35 -20, 40 -10, 45 5 L 15 20 Q -10 25, -30 10 Z" fill="#FCF9F5" fillOpacity="0.15" stroke="#C7A86B" strokeWidth="1.5" />
            <path d="M 20 -20 Q 30 -40, 25 -45 Q 15 -40, 20 -20" stroke="#C7A86B" strokeWidth="1.5" /> {/* bird beak */}
            <path d="M -30 10 C -45 15, -45 -10, -35 -15" stroke="#C7A86B" strokeWidth="1.5" strokeLinecap="round" /> {/* tail */}
          </g>
          
          {/* Folk art blockprint floral scrolls on remaining tiles */}
          <path d="M 60 270 Q 110 240, 160 270" stroke="#C7A86B" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
          <path d="M 240 90 Q 290 120, 340 90" stroke="#C7A86B" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
          
          <text x="200" y="345" fill="#FCF9F5" fillOpacity="0.65" fontSize="10" fontFamily="font-sans" letterSpacing="4" textAnchor="middle">TERRACOTTA BLOCKPRINT COTTON</text>
          <text x="200" y="365" fill="#C7A86B" fontSize="13" fontFamily="font-serif" letterSpacing="1" textAnchor="middle">Bishnupur Clay Tiles Series</text>
        </svg>
      );
      
    case 'chaiti_chiffon':
      return (
        <svg viewBox="0 0 400 400" className={`${className} bg-gradient-to-br from-[#B79ACF] to-[#76568F]`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Elegant floral outline in soft lavender shades */}
          <path d="M0 0 H400V400H0V0Z" fill="white" fillOpacity="0.02" />
          
          <g transform="translate(200, 175) scale(0.9)">
            {/* Halter neck curves */}
            <path d="M -100 -120 Q -40 -60 0 -50 Q 40 -60, 100 -120" stroke="#FCF9F5" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.4" />
            {/* Kantha stitch dashes following halter neck */}
            <path d="M -105 -110 Q -42 -52 0 -42 Q 42 -52, 105 -110" stroke="#C7A86B" strokeWidth="2" strokeDasharray="4 5" />
            
            {/* Elegant fine jasmine branch */}
            <path d="M -120 40 Q -60 60, 0 10 Q 60 -40, 120 -20" stroke="#C7A86B" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
            
            {/* Delicate leaves and jasmine petals */}
            <path d="M -30 25 C -40 10, -50 15, -30 25 Z" fill="#FCF9F5" fillOpacity="0.8" />
            <path d="M 30 -15 C 40 -30, 50 -25, 30 -15 Z" fill="#FCF9F5" fillOpacity="0.8" />
            <path d="M 70 -25 C 80 -40, 90 -35, 70 -25 Z" fill="#FCF9F5" fillOpacity="0.8" />
            
            {/* Jasmine flower star cluster */}
            {[
              { x: -55, y: 15, s: 0.6 },
              { x: 10, y: -5, s: 0.8 },
              { x: 95, y: -30, s: 0.7 }
            ].map((star, idx) => (
              <g key={idx} transform={`translate(${star.x}, ${star.y}) scale(${star.s})`}>
                <line x1="-12" y1="0" x2="12" y2="0" stroke="#FCF9F5" strokeWidth="2" />
                <line x1="0" y1="-12" x2="0" y2="12" stroke="#FCF9F5" strokeWidth="2" />
                <line x1="-8" y1="-8" x2="8" y2="8" stroke="#C7A86B" strokeWidth="1.5" />
                <line x1="-8" y1="8" x2="8" y2="-8" stroke="#C7A86B" strokeWidth="1.5" />
              </g>
            ))}
          </g>
          
          {/* Bottom border representing delicate cotton hem */}
          <line x1="50" y1="310" x2="350" y2="310" stroke="#C7A86B" strokeWidth="1" />
          <line x1="50" y1="314" x2="350" y2="314" stroke="#FCF9F5" strokeWidth="1.5" strokeDasharray="3 3" />
          
          <text x="200" y="345" fill="#FCF9F5" fillOpacity="0.7" fontSize="10" fontFamily="font-sans" letterSpacing="4" textAnchor="middle">KANTHA STITCH EMBROIDERY</text>
          <text x="200" y="365" fill="#C7A86B" fontSize="13" fontFamily="font-serif" letterSpacing="1" textAnchor="middle">Chaiti Halter Sleeveless</text>
        </svg>
      );
      
    default:
      return (
        <div className="w-full h-full bg-[#4B315C] flex items-center justify-center text-white">
          <span className="font-serif tracking-widest text-lg text-[#C7A86B]">SUNDARAM FASHION</span>
        </div>
      );
  }
}
