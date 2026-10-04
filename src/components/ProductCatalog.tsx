/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, Eye, Plus, Check, X, ShieldAlert } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';
import ProductSVGArt from './ProductSVGArt';

interface ProductCatalogProps {
  onAddToCart: (product: Product, size: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  catalogRef: React.RefObject<HTMLDivElement | null>;
}

export default function ProductCatalog({
  onAddToCart,
  activeFilter,
  setActiveFilter,
  catalogRef
}: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-low-high' | 'price-high-low'>('default');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [addSuccess, setAddSuccess] = useState(false);

  // Filter Categories
  const filters = [
    { label: 'All Collection', value: 'all' },
    { label: 'Sleeveless Blouses', value: 'Sleeveless Blouses' },
    { label: 'Designer Blouses', value: 'Designer Blouses' },
    { label: 'Daily Kurtis', value: 'Daily Kurtis' },
    { label: 'Printed Kurtis', value: 'Printed Kurtis' },
    { label: 'Festive Collection', value: 'Festive Collection' },
    { label: 'New Arrivals', value: 'New Arrivals' }
  ];

  // Client side filtering & sorting logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.craft.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low-high') return a.price - b.price;
    if (sortBy === 'price-high-low') return b.price - a.price;
    return 0; // Default ordering
  });

  const handleOpenDetail = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0] || 'M');
    setAddSuccess(false);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handleAddToCartClick = (product: Product) => {
    if (!selectedSize) return;
    onAddToCart(product, selectedSize);
    setAddSuccess(true);
    setTimeout(() => {
      setAddSuccess(false);
      handleCloseDetail();
    }, 1200);
  };

  return (
    <section 
      ref={catalogRef}
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-[#4B315C]/10 bg-[#FCF9F5]" 
      id="all-products"
    >
      
      {/* Search and Filters Segmented Control */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-12">
        
        {/* Left Side: Category Title */}
        <div className="text-left">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C7A86B] uppercase">Sundaram Catalog</p>
          <h2 className="mt-1 font-serif text-2xl font-light tracking-tight text-[#4B315C] sm:text-3xl">
            {activeFilter === 'all' ? 'THE FULL EDIT' : activeFilter.toUpperCase()}
          </h2>
          {/* Metadata count */}
          <div className="flex items-center gap-2 text-xs text-[#4B315C]/50 mt-1 font-sans">
            <span>Showing {sortedProducts.length} unique pieces</span>
            <span aria-hidden="true">·</span>
            <span>Handloomed in Bengal</span>
          </div>
        </div>

        {/* Right Side Search & Sort and Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          {/* Search box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search fabrics, prints, crafts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full sm:w-64 rounded-lg border border-[#4B315C]/15 bg-white pl-10 pr-4 text-xs text-[#4B315C] placeholder-[#4B315C]/50 focus:border-[#C7A86B] focus:ring-1 focus:ring-[#C7A86B] focus:outline-none transition-all"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-[#4B315C]/50" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-[#4B315C]/40 hover:text-[#4B315C]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Sort selection */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="h-10 w-full sm:w-48 appearance-none rounded-lg border border-[#4B315C]/15 bg-white pl-4 pr-10 text-xs text-[#4B315C] focus:border-[#C7A86B] focus:ring-1 focus:ring-[#C7A86B] focus:outline-none transition-all"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
            <ArrowUpDown className="absolute right-3 top-3 h-4 w-4 pointer-events-none text-[#4B315C]/50" />
          </div>

        </div>

      </div>

      {/* Segmented Interactive Filter Controls (NO Badges, Clean Tabulated Buttons) */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#4B315C]/5 rounded-lg mb-10 overflow-x-auto">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => {
              setActiveFilter(filter.value);
              setSearchQuery('');
            }}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
              activeFilter === filter.value
                ? 'bg-white text-[#4B315C] shadow-sm font-semibold'
                : 'text-[#4B315C]/70 hover:bg-white/50 hover:text-[#4B315C]'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Product Grid - 3 Column Desktop, 2 Column Mobile/Tablet */}
      {sortedProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 border border-dashed border-[#4B315C]/20 rounded-2xl bg-white">
          <ShieldAlert className="h-10 w-10 text-[#C7A86B] stroke-[1.5] mb-4" />
          <h3 className="font-serif text-lg font-medium text-[#4B315C]">No Pieces Found</h3>
          <p className="text-xs text-[#4B315C]/70 font-sans mt-1 max-w-xs text-center">
            Try resetting your search query or selecting a different category from our Bengal collection.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
            className="mt-6 text-xs font-semibold tracking-wider text-[#C7A86B] underline hover:text-[#4B315C]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden border border-[#4B315C]/5 bg-white shadow-sm rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              
              {/* Product Image Layer - takes ~70% height with solid neutral backdrop */}
              <div 
                onClick={() => handleOpenDetail(product)}
                className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-[#FCF9F5] to-[#F1ECE4] cursor-pointer flex items-center justify-center"
              >
                {/* Real image tries to load, falls back to SVG artwork if missing */}
                <img
                  src={`/images/products/${product.id}.jpg`}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* SVG art render ensures zero broken images */}
                <ProductSVGArt artType={product.svgArt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Subtle scrim overlay on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Micro action hover controls */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDetail(product);
                    }}
                    className="flex-1 flex h-10 items-center justify-center gap-1.5 rounded-md bg-[#FCF9F5] text-[11px] font-semibold tracking-wider text-[#4B315C] hover:bg-[#4B315C] hover:text-white transition-all shadow-sm"
                  >
                    <Eye className="h-4 w-4 stroke-[1.5]" />
                    QUICK VIEW
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product, product.sizes[2] || 'M');
                      setAddSuccess(true);
                      setTimeout(() => setAddSuccess(false), 1200);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-md bg-[#C7A86B] text-white hover:bg-[#4B315C] transition-all shadow-sm"
                    title="Quick Add Size M to Bag"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>

                {/* 1 subtle text tag limit - strictly unboxed or single-line elegance */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[9px] tracking-widest font-semibold text-[#4B315C] uppercase">
                  {product.type === 'blouse' ? 'Sleeveless Blouse' : 'Kurti'}
                </div>
              </div>

              {/* Product Meta Info */}
              <div className="p-4 text-left flex flex-col flex-1 justify-between bg-white border-t border-[#4B315C]/5">
                
                <div>
                  <p className="text-[10px] font-medium tracking-widest text-[#C7A86B] uppercase font-sans">
                    {product.fabric}
                  </p>
                  <h3 
                    onClick={() => handleOpenDetail(product)}
                    className="mt-1 font-serif text-base font-semibold text-[#4B315C] group-hover:text-[#C7A86B] transition-colors cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#4B315C]/60 line-clamp-2">
                    {product.craft} · {product.description}
                  </p>
                </div>

                {/* Price and Action triggers */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#4B315C]/5">
                  <span className="font-mono text-sm font-semibold tracking-wide text-[#4B315C] tabular-nums">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  
                  {/* Subtle sizes indicator */}
                  <span className="text-[10px] text-[#4B315C]/50 uppercase font-sans">
                    Sizes: {product.sizes[0]} - {product.sizes[product.sizes.length-1]}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}

      {/* Product Quick View / PDP Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
          
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[#4B315C]/15 bg-[#FCF9F5] shadow-2xl animate-scale-in">
            
            {/* Close action */}
            <button
              onClick={handleCloseDetail}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#4B315C] hover:bg-[#4B315C] hover:text-white transition-all shadow-sm"
              aria-label="Close product view"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Left Column: Product Artwork Showcase */}
              <div className="relative md:col-span-5 bg-gradient-to-br from-[#4B315C] to-[#251231] aspect-square md:aspect-auto md:min-h-[480px] flex items-center justify-center overflow-hidden">
                <img
                  src={`/images/products/${selectedProduct.id}.jpg`}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <ProductSVGArt artType={selectedProduct.svgArt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B315C]/40 via-transparent to-transparent pointer-events-none z-20" />
              </div>

              {/* Right Column: Dynamic Stable Purchase Module */}
              <div className="p-6 md:p-8 md:col-span-7 text-left flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-none">
                
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C7A86B] uppercase font-sans">
                    <span>{selectedProduct.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProduct.fabric}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#4B315C] sm:text-3xl">
                    {selectedProduct.name}
                  </h3>

                  <p className="mt-1.5 font-mono text-xl font-bold text-[#4B315C] tabular-nums">
                    ₹{selectedProduct.price.toLocaleString('en-IN')}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-[#4B315C]/80 leading-relaxed font-sans">
                    {selectedProduct.description}
                  </p>

                  {/* Crafted Details Box */}
                  <div className="mt-6 space-y-2 border-t border-[#4B315C]/10 pt-4 text-xs text-[#4B315C]/90">
                    <p><strong className="uppercase font-sans tracking-wider text-[#C7A86B] text-[10px]">Fabrication:</strong> {selectedProduct.fabric}</p>
                    <p><strong className="uppercase font-sans tracking-wider text-[#C7A86B] text-[10px]">Craft & Print:</strong> {selectedProduct.craft}</p>
                    <p><strong className="uppercase font-sans tracking-wider text-[#C7A86B] text-[10px]">Neckline & Back:</strong> {selectedProduct.neckline}</p>
                    <p><strong className="uppercase font-sans tracking-wider text-[#C7A86B] text-[10px]">Embroidery lines:</strong> {selectedProduct.embroideryDetail}</p>
                  </div>

                  {/* Size Selector */}
                  <div className="mt-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C7A86B]">
                      SELECT SIZE ({selectedProduct.type === 'blouse' ? 'Chest size in inches' : 'Standard Fit'})
                    </span>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`flex h-10 min-w-10 items-center justify-center border text-xs font-semibold rounded-md transition-all ${
                            selectedSize === size
                              ? 'border-[#4B315C] bg-[#4B315C] text-white font-bold'
                              : 'border-[#4B315C]/15 bg-white text-[#4B315C] hover:border-[#4B315C]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Styling Tips */}
                  <p className="mt-4 italic text-xs text-[#4B315C]/60">
                    <strong>Stylist recommends:</strong> {selectedProduct.stylingTips}
                  </p>
                </div>

                {/* Primary Add Action */}
                <div className="mt-8 pt-4 border-t border-[#4B315C]/10 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleAddToCartClick(selectedProduct)}
                    disabled={addSuccess}
                    className={`flex-1 flex h-12 items-center justify-center gap-2 text-xs font-semibold tracking-widest text-white transition-all duration-300 ${
                      addSuccess 
                        ? 'bg-[#C7A86B]' 
                        : 'bg-[#4B315C] hover:bg-[#C7A86B]'
                    }`}
                  >
                    {addSuccess ? (
                      <>
                        <Check className="h-4 w-4" />
                        ADDED TO BAG SUCCESSFULLY
                      </>
                    ) : (
                      <>
                        ADD TO SHOPPING BAG (₹{selectedProduct.price.toLocaleString('en-IN')})
                      </>
                    )}
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}
