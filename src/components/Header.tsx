/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  currentPage: 'home' | 'about' | 'blouses' | 'kurti' | 'service';
  setCurrentPage: (page: 'home' | 'about' | 'blouses' | 'kurti' | 'service') => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  onScrollToProducts: () => void;
}

export default function Header({
  cartCount,
  onCartClick,
  currentPage,
  setCurrentPage,
  activeFilter,
  setActiveFilter,
  onScrollToProducts
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const customNavs: { label: string; action: 'home' | 'about' | 'blouses' | 'kurti' | 'service' | 'phone' }[] = [
    { label: 'Home', action: 'home' },
    { label: 'About', action: 'about' },
    { label: 'Blouses', action: 'blouses' },
    { label: 'Kurti', action: 'kurti' },
    { label: 'Service', action: 'service' },
    { label: 'Phone', action: 'phone' }
  ];

  const handleNavClick = (action: 'home' | 'about' | 'blouses' | 'kurti' | 'service' | 'phone') => {
    setMobileMenuOpen(false);
    if (action === 'phone') {
      window.location.href = 'tel:+919830098300';
    } else {
      setCurrentPage(action);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Auto-set matching catalogue filters for the collection pages
      if (action === 'blouses') {
        setActiveFilter('Sleeveless Blouses');
      } else if (action === 'kurti') {
        setActiveFilter('Daily Kurtis');
      } else if (action === 'home') {
        setActiveFilter('all');
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#4B315C]/10 bg-[#FCF9F5]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Brand Logo Image */}
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center shrink-0"
        >
          <img
            src="/images/logo/sundaram-logo.jpg"
            alt="Sundaram Blouse & Kurti Luxury Brand Logo"
            className="h-14 sm:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Zone 2: Nav Links - Custom Home, About, Blouses, Kurti, Service, Phone links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#4B315C]/80">
          {customNavs.map((link) => {
            // Determine active layout states
            const isActive = currentPage === link.action;

            return (
              <a
                key={link.label}
                href={`#${link.action}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.action);
                }}
                className={`transition-all hover:text-[#4B315C] relative py-1 flex items-center gap-1 ${
                  isActive ? 'text-[#4B315C] font-semibold' : 'text-[#4B315C]/70'
                }`}
              >
                {link.action === 'phone' && <Phone className="h-3.5 w-3.5 text-[#C7A86B]" />}
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C7A86B]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions - Shopping bag & interactive toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onCartClick}
            aria-label="Open Shopping Bag"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-[#4B315C]/10 text-[#4B315C] hover:border-[#C7A86B] hover:bg-[#FCF9F5] hover:text-[#C7A86B] transition-all"
          >
            <ShoppingBag className="h-5 w-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C7A86B] text-[10px] font-bold text-white tabular-nums animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu action */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4B315C]/10 text-[#4B315C] hover:border-[#C7A86B] lg:hidden transition-all"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 stroke-[1.5]" />
            ) : (
              <Menu className="h-5 w-5 stroke-[1.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#4B315C]/10 bg-[#FCF9F5] px-4 py-6 shadow-inner animate-fade-in">
          <div className="flex flex-col gap-3">
            {customNavs.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.action)}
                className={`text-left text-base font-medium py-2.5 border-b border-[#4B315C]/5 flex items-center gap-2 ${
                  currentPage === link.action ? 'text-[#C7A86B] font-semibold' : 'text-[#4B315C]/85'
                }`}
              >
                {link.action === 'phone' && <Phone className="h-4 w-4 text-[#C7A86B]" />}
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
