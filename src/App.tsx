/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ShopByCategory from './components/ShopByCategory';
import CollectionBanner from './components/CollectionBanner';
import EditorialFashion from './components/EditorialFashion';
import BlouseFeature from './components/BlouseFeature';
import KurtiFeature from './components/KurtiFeature';
import ProductCatalog from './components/ProductCatalog';
import CartDrawer, { CartItem } from './components/CartDrawer';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import AmbientAudioSystem from './components/AmbientAudioSystem';
import WhatsAppButton from './components/WhatsAppButton';
import MouseEffect from './components/MouseEffect';
import { Product } from './data/products';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'blouses' | 'kurti' | 'service'>('home');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  
  // Ref for scrolling to the product listing section
  const catalogRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToProducts = () => {
    if (currentPage !== 'home' && currentPage !== 'blouses' && currentPage !== 'kurti') {
      setCurrentPage('home');
    }
    setTimeout(() => {
      if (catalogRef.current) {
        catalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (category: string) => {
    // Map category clicks to their corresponding page views or filters
    if (category === 'Sleeveless Blouses' || category === 'Designer Blouses') {
      setCurrentPage('blouses');
      setActiveFilter(category);
    } else if (category === 'Daily Kurtis' || category === 'Printed Kurtis' || category === 'Festive Collection' || category === 'New Arrivals') {
      setCurrentPage('kurti');
      setActiveFilter(category);
    } else {
      setCurrentPage('home');
      setActiveFilter(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart operations
  const handleAddToCart = (product: Product, size: string) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        // Increment quantity
        const newItems = [...prevItems];
        newItems[existingIndex].quantity += 1;
        return newItems;
      } else {
        // Add new item
        return [...prevItems, { product, size, quantity: 1 }];
      }
    });
    
    // Smoothly open the cart drawer to give immediate feedback
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === productId && item.size === size
      );

      if (existingIndex === -1) return prevItems;

      const newItems = [...prevItems];
      const newQty = newItems[existingIndex].quantity + delta;

      if (newQty <= 0) {
        // Remove item if quantity falls to zero
        newItems.splice(existingIndex, 1);
      } else {
        newItems[existingIndex].quantity = newQty;
      }
      return newItems;
    });
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FCF9F5] flex flex-col font-sans text-[#4B315C] selection:bg-[#B79ACF]/30 selection:text-[#4B315C]">
      {/* Interactive golden dust mouse trail overlay */}
      <MouseEffect />

      {/* 3-Zone Premium Header supporting Page Routing */}
      <Header
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        onScrollToProducts={handleScrollToProducts}
      />

      <main className="flex-grow">
        
        {/* Conditional Rendering of Distinct Page Views */}
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <Hero
              onShopKurtis={() => handleCategorySelect('Daily Kurtis')}
              onShopBlouses={() => handleCategorySelect('Sleeveless Blouses')}
            />

            {/* Shop By Category Section: 6 Premium Visual Grid Cards */}
            <ShopByCategory onCategorySelect={handleCategorySelect} />

            {/* Second Hero / Collection Banner */}
            <CollectionBanner onExplore={() => handleCategorySelect('all')} />

            {/* Split Editorial Fashion Section */}
            <EditorialFashion onDiscover={() => handleCategorySelect('all')} />

            {/* Blouse Feature Section */}
            <BlouseFeature onShopBlouses={() => handleCategorySelect('Sleeveless Blouses')} />

            {/* Kurti Feature Section */}
            <KurtiFeature onShopKurtis={() => handleCategorySelect('Daily Kurtis')} />

            {/* Interactive Filterable E-Commerce Catalog Grid */}
            <ProductCatalog
              onAddToCart={handleAddToCart}
              activeFilter="all"
              setActiveFilter={setActiveFilter}
              catalogRef={catalogRef}
            />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutPage />
        )}

        {currentPage === 'service' && (
          <ServicePage />
        )}

        {currentPage === 'blouses' && (
          <div className="animate-fade-in">
            {/* Blouse Feature Spotlight in Dark Plum */}
            <BlouseFeature onShopBlouses={() => {}} />

            {/* Exclusive Blouses Catalogue Grid */}
            <ProductCatalog
              onAddToCart={handleAddToCart}
              activeFilter={activeFilter === 'Designer Blouses' ? 'Designer Blouses' : 'Sleeveless Blouses'}
              setActiveFilter={setActiveFilter}
              catalogRef={catalogRef}
            />
          </div>
        )}

        {currentPage === 'kurti' && (
          <div className="animate-fade-in">
            {/* High-fidelity Sleeveless Kurtis Campaign Header */}
            <div className="relative overflow-hidden w-full h-[240px] sm:h-[320px] bg-[#EBE7E2] border-b border-[#4B315C]/10">
              <img
                src="/images/banners/sleeveless-kurtis-banner.jpg"
                alt="Sleeveless Kurtis Campaign Banner"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4B315C]/80 via-[#4B315C]/30 to-transparent" />
              <div className="absolute inset-0 flex items-center px-6 sm:px-12 md:px-16 lg:px-24">
                <div className="max-w-md text-left text-white">
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-[#C7A86B] uppercase font-sans">Premium Collection</span>
                  <h1 className="mt-2 font-serif text-3xl font-light tracking-wide text-white sm:text-4xl lg:text-5xl">
                    SLEEVELESS <br />
                    <span className="font-serif font-semibold italic text-[#C7A86B]">KURTIS</span>
                  </h1>
                  <p className="mt-3 text-xs sm:text-sm text-[#FCF9F5]/90 leading-relaxed font-sans max-w-sm">
                    Breezy silhouettes made for warm days, featuring delicate neckline details, handprinted motifs, and beautiful breathable comfort.
                  </p>
                </div>
              </div>
            </div>

            {/* Kurti Feature Spotlight in Warm Ivory */}
            <KurtiFeature onShopKurtis={() => {}} />

            {/* Exclusive Kurtis Catalogue Grid */}
            <ProductCatalog
              onAddToCart={handleAddToCart}
              activeFilter={
                activeFilter === 'Printed Kurtis' || 
                activeFilter === 'Festive Collection' || 
                activeFilter === 'New Arrivals' 
                  ? activeFilter 
                  : 'Daily Kurtis'
              }
              setActiveFilter={setActiveFilter}
              catalogRef={catalogRef}
            />
          </div>
        )}

      </main>

      {/* Shopping Bag slide-over drawer with integrated Cash on Delivery checkout form */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Elegant Cultural Footer */}
      <Footer
        onScrollToTop={handleScrollToTop}
        onFilterSelect={handleCategorySelect}
      />

      {/* Floating Ambient Indian Classical Soundscape System */}
      <AmbientAudioSystem />

      {/* Floating WhatsApp support concierge stylist */}
      <WhatsAppButton />

    </div>
  );
}
