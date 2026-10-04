/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';

export default function MouseEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    interface Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      alpha: number;
      decay: number;
      isSparkle: boolean;
    }

    let particles: Particle[] = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    const addParticles = (x: number, y: number, count = 1, isClick = false) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = isClick ? Math.random() * 3 + 1 : Math.random() * 0.5 + 0.2;
        
        particles.push({
          x,
          y,
          size: isClick ? Math.random() * 4 + 1.5 : Math.random() * 2 + 1,
          color: i % 3 === 0 ? '#C7A86B' : i % 3 === 1 ? '#F5E6CC' : '#FCF9F5', // Traditional gold, light champagne, and pristine white
          speedX: isClick ? Math.cos(angle) * velocity : (Math.random() - 0.5) * 1.0,
          speedY: isClick ? Math.sin(angle) * velocity : (Math.random() - 0.5) * 1.0 - 0.3, // Gentle floating upward velocity
          alpha: 1.0,
          decay: isClick ? Math.random() * 0.015 + 0.015 : Math.random() * 0.02 + 0.025, // Fades out beautifully
          isSparkle: Math.random() > 0.4
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mousemove particle generation slightly to be extremely performant
      if (Math.random() > 0.45) {
        addParticles(e.clientX, e.clientY, 1, false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Explode beautiful sparkling golden ring on clicks!
      addParticles(e.clientX, e.clientY, 16, true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        
        // Render sparkles as delicate diamonds/stars, and standard trails as soft glowing circles
        if (p.isSparkle) {
          ctx.translate(p.x, p.y);
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.5);
          ctx.lineTo(p.size, 0);
          ctx.lineTo(0, p.size * 1.5);
          ctx.lineTo(-p.size, 0);
          ctx.closePath();
        } else {
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        }

        ctx.fillStyle = p.color;
        
        // Fine golden aura shadow
        ctx.shadowColor = '#C7A86B';
        ctx.shadowBlur = p.isSparkle ? 6 : 3;
        
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
